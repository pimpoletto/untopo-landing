const SUPABASE_AUTH_COOKIE_RE = /(?:^|;\s*)sb-[^=]+-auth-token(?:\.\d+)?=/;

function hasReadableSupabaseAuthCookie(): boolean {
  if (typeof document === "undefined") return false;
  return SUPABASE_AUTH_COOKIE_RE.test(document.cookie);
}

/** Best-effort check: shared Supabase cookies or same-site fetch to the app root. */
export async function detectAppSession(appUrl: string): Promise<boolean> {
  if (typeof window === "undefined") return false;

  if (hasReadableSupabaseAuthCookie()) return true;

  const origin = appUrl.replace(/\/$/, "");

  try {
    const res = await fetch(`${origin}/`, {
      method: "GET",
      credentials: "include",
      redirect: "manual",
    });

    if (res.type === "opaqueredirect") return false;
    if (res.status >= 300 && res.status < 400) return false;
    if (res.status === 200) return true;

    return false;
  } catch {
    return false;
  }
}
