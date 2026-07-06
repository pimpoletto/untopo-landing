import { launchBannerText } from "@/lib/launch";

export function LaunchBanner() {
  return (
    <div className="launch-banner" role="status" aria-label={launchBannerText}>
      <div className="launch-banner__track" aria-hidden>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="launch-banner__item">
            <span className="launch-banner__dot" />
            {launchBannerText}
          </span>
        ))}
      </div>
      <span className="sr-only">{launchBannerText}</span>
    </div>
  );
}

