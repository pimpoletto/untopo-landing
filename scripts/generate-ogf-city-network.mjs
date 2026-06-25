/**
 * Génère le réseau routier SVG depuis les données OpenGeofiction (Gobras City).
 * Source : https://opengeofiction.net — ville fictive collaborative.
 * Usage : node scripts/generate-ogf-city-network.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const INPUT = path.join(ROOT, "agent-tools/ogf-roads.json");
const OUTPUT = path.join(ROOT, "src/components/v2/hero-leak-animation/archived/city-constellation/ogf-city-network.ts");

const VIEW_W = 1000;
const VIEW_H = 400;
const PAD = 36;

const HIGHWAY_WEIGHT = {
  primary: 4,
  secondary: 3,
  tertiary: 2,
  residential: 1,
  unclassified: 1,
  living_street: 1,
};

function project(lat, lon, bbox) {
  const { minLat, maxLat, minLon, maxLon } = bbox;
  const x = PAD + ((lon - minLon) / (maxLon - minLon)) * (VIEW_W - PAD * 2);
  const y = PAD + ((maxLat - lat) / (maxLat - minLat)) * (VIEW_H - PAD * 2);
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

function nodeKey(lat, lon) {
  return `${lat.toFixed(5)},${lon.toFixed(5)}`;
}

function dist(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

function pathToD(points) {
  return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
}

const raw = JSON.parse(fs.readFileSync(INPUT, "utf8"));
const ways = raw.elements.filter((e) => e.type === "way" && e.geometry?.length >= 2);

const bbox = { minLat: Infinity, maxLat: -Infinity, minLon: Infinity, maxLon: -Infinity };
for (const way of ways) {
  for (const p of way.geometry) {
    bbox.minLat = Math.min(bbox.minLat, p.lat);
    bbox.maxLat = Math.max(bbox.maxLat, p.lat);
    bbox.minLon = Math.min(bbox.minLon, p.lon);
    bbox.maxLon = Math.max(bbox.maxLon, p.lon);
  }
}

// Réseau affiché : exclure les ruelles de service (trop denses)
const networkWays = ways.filter((w) => w.tags?.highway !== "service");

const streets = networkWays.map((way) => {
  const pts = way.geometry.map((p) => project(p.lat, p.lon, bbox));
  return {
    highway: way.tags.highway,
    weight: HIGHWAY_WEIGHT[way.tags.highway] ?? 1,
    d: pathToD(pts),
    pts,
  };
});

// Graphe pour l'itinéraire (routes principales + secondaires + tertières)
const routeWays = networkWays.filter((w) =>
  ["primary", "secondary", "tertiary", "residential", "unclassified", "living_street"].includes(
    w.tags?.highway,
  ),
);

const nodes = new Map();
const adj = new Map();

function getNode(lat, lon) {
  const key = nodeKey(lat, lon);
  if (!nodes.has(key)) {
    const xy = project(lat, lon, bbox);
    nodes.set(key, { key, lat, lon, xy });
    adj.set(key, []);
  }
  return nodes.get(key);
}

for (const way of routeWays) {
  for (let i = 0; i < way.geometry.length - 1; i++) {
    const a = getNode(way.geometry[i].lat, way.geometry[i].lon);
    const b = getNode(way.geometry[i + 1].lat, way.geometry[i + 1].lon);
    const weight = dist(a.xy, b.xy);
    adj.get(a.key).push({ to: b.key, weight });
    adj.get(b.key).push({ to: a.key, weight });
  }
}

function nearestNode(target) {
  let best = null;
  let bestD = Infinity;
  for (const n of nodes.values()) {
    const d = dist(n.xy, target);
    if (d < bestD) {
      bestD = d;
      best = n;
    }
  }
  return best;
}

const start = nearestNode([PAD + 40, VIEW_H - PAD - 20]);
const end = nearestNode([VIEW_W - PAD - 40, PAD + 30]);

function dijkstra(fromKey, toKey) {
  const distMap = new Map([[fromKey, 0]]);
  const prev = new Map();
  const visited = new Set();
  const queue = [fromKey];

  while (queue.length) {
    queue.sort((a, b) => (distMap.get(a) ?? Infinity) - (distMap.get(b) ?? Infinity));
    const u = queue.shift();
    if (!u || visited.has(u)) continue;
    if (u === toKey) break;
    visited.add(u);

    for (const { to, weight } of adj.get(u) ?? []) {
      const alt = (distMap.get(u) ?? Infinity) + weight;
      if (alt < (distMap.get(to) ?? Infinity)) {
        distMap.set(to, alt);
        prev.set(to, u);
        if (!queue.includes(to)) queue.push(to);
      }
    }
  }

  const path = [];
  let cur = toKey;
  while (cur) {
    path.unshift(nodes.get(cur).xy);
    cur = prev.get(cur);
  }
  return path[0]?.[0] === nodes.get(fromKey).xy[0] ? path : [];
}

let routePoints = dijkstra(start.key, end.key);

// Simplifier les points colinéaires
function simplifyCollinear(pts, tolerance = 4) {
  if (pts.length <= 2) return pts;
  const out = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const prev = out[out.length - 1];
    const next = pts[i + 1];
    const cur = pts[i];
    const cross = Math.abs((cur[0] - prev[0]) * (next[1] - prev[1]) - (cur[1] - prev[1]) * (next[0] - prev[0]));
    if (cross > tolerance) out.push(cur);
  }
  out.push(pts[pts.length - 1]);
  return out;
}

routePoints = simplifyCollinear(routePoints);

// Courbe légère pour adoucir les virages à angle droit
function routeToSmoothPath(pts) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const cur = pts[i];
    const mx = (prev[0] + cur[0]) / 2;
    const my = (prev[1] + cur[1]) / 2;
    if (i === 1) {
      d += ` Q ${prev[0]} ${prev[1]} ${mx} ${my}`;
    }
    if (i < pts.length - 1) {
      const next = pts[i + 1];
      const mx2 = (cur[0] + next[0]) / 2;
      const my2 = (cur[1] + next[1]) / 2;
      d += ` T ${mx2} ${my2}`;
    } else {
      d += ` T ${cur[0]} ${cur[1]}`;
    }
  }
  return d;
}

// Fallback si routage échoue
if (routePoints.length < 3) {
  routePoints = [
    [100, 340],
    [220, 310],
    [340, 270],
    [480, 210],
    [620, 160],
    [760, 120],
    [880, 95],
  ];
}

const routePath = pathToD(routePoints);
const [carX, carY] = routePoints[0];
const [fuiteX, fuiteY] = routePoints[routePoints.length - 1];
const waypoints = routePoints.slice(1, -1).filter((_, i, arr) => i % Math.max(1, Math.floor(arr.length / 4)) === 0);

// Toutes les artères + rues résidentielles jusqu'à la limite d'affichage
streets.sort((a, b) => b.weight - a.weight);
const displayStreets = streets.slice(0, 180);

const file = `/**
 * Réseau routier — Gobras City (OpenGeofiction)
 * @see https://opengeofiction.net
 * Généré par scripts/generate-ogf-city-network.mjs
 */
export const OGF_ATTRIBUTION = "Carte inspirée de Gobras City — OpenGeofiction (ODbL)";

export const OGF_CAR_POS: [number, number] = [${carX}, ${carY}];
export const OGF_FUITE_POS: [number, number] = [${fuiteX}, ${fuiteY}];
export const OGF_CAR_ROTATE = ${Math.round((Math.atan2(routePoints[1][1] - carY, routePoints[1][0] - carX) * 180) / Math.PI - 90)};

export const OGF_ROUTE_PATH = ${JSON.stringify(routePath)};
export const OGF_ROUTE_WAYPOINTS: [number, number][] = ${JSON.stringify(waypoints)};

export type OgfStreet = { d: string; weight: number };

export const OGF_STREETS: OgfStreet[] = ${JSON.stringify(
  displayStreets.map((s) => ({ d: s.d, weight: s.weight })),
  null,
  2,
)};
`;

fs.writeFileSync(OUTPUT, file);
console.log(`Wrote ${OUTPUT}`);
console.log(`Streets: ${displayStreets.length}, route points: ${routePoints.length}`);
