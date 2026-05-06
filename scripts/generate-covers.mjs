import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const API_KEY = process.env.KIE_API_KEY;
if (!API_KEY) { console.error("Set KIE_API_KEY"); process.exit(1); }

const BASE = "https://api.kie.ai/api/v1/gpt4o-image";
const HEADERS = { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" };

const STYLE = "Ultra-dark background (#060810 to #0a0e1a deep navy), soft glowing purple (#6c5ce7) and pink (#fd79a8) accent lighting, subtle cyan (#00cec9) highlights, no text or lettering whatsoever, no watermarks, glass-morphism feel with frosted translucent elements, minimal clean composition, cinematic depth of field, 4K photorealistic quality, premium tech brand aesthetic";

const images = [
  { name: "hero", dir: "images", prompt: `Abstract digital landscape representing digital marketing excellence — flowing data streams, glowing network nodes, and a stylized rocket or flame motif ascending through layers of interconnected light paths. Conveys innovation, growth, and premium quality. ${STYLE}` },
  { name: "geo-complete-guide-2026", dir: "images/insights", prompt: `Abstract AI brain with neural pathways connecting to floating search interfaces — holographic panels showing AI assistant orbs, data streams flowing between the AI mind and citation cards. ${STYLE}` },
  { name: "core-web-vitals-2026-update", dir: "images/insights", prompt: `Futuristic performance monitoring dashboard with three glowing circular gauge meters, a stylized browser frame with loading speed visualization, particle effects suggesting speed and optimization. ${STYLE}` },
  { name: "roi-content-marketing-2026", dir: "images/insights", prompt: `Elegant 3D ascending bar chart transforming into content documents at the top, revenue streams flowing upward through a marketing funnel, data visualization with floating percentage metrics. ${STYLE}` },
  { name: "ai-search-disruption", dir: "images/insights", prompt: `A traditional search bar fragmenting into glowing particles while a sleek AI conversational interface materializes from the dissolution, representing the shift from classic search to AI-powered discovery. ${STYLE}` },
  { name: "death-of-third-party-cookies", dir: "images/insights", prompt: `A stylized browser cookie dissolving into digital particles, a glowing privacy shield materializing in its place, first-party data streams redirecting through secure encrypted channels. ${STYLE}` },
  { name: "technical-seo-checklist", dir: "images/insights", prompt: `Isometric 3D website architecture blueprint with glowing interconnected nodes, floating checkmark icons above structural elements, code brackets and schema markup symbols orbiting the structure. ${STYLE}` },
  { name: "local-seo-guide", dir: "images/insights", prompt: `A luminous map pin hovering over a stylized dark cityscape at night, concentric location radius rings emanating outward with glowing purple light, small business icons dotting the landscape. ${STYLE}` },
  { name: "ppc-budget-optimization", dir: "images/insights", prompt: `A sleek control dashboard with glowing budget allocation sliders and bid strategy knobs, dollar symbols flowing through optimized channels into a conversion target, ROI meter radiating green light. ${STYLE}` },
  { name: "social-media-b2b", dir: "images/insights", prompt: `Professional networking visualization — glowing social platform nodes connected by professional relationship lines, corporate silhouettes exchanging data in a digital space. ${STYLE}` },
  { name: "ecommerce-seo-guide", dir: "images/insights", prompt: `A floating 3D product page interface being scanned by optimization beams, structured data code fragments orbiting the page, shopping cart icon with upward growth arrows, search result snippets glowing nearby. ${STYLE}` },
  { name: "email-marketing-automation", dir: "images/insights", prompt: `An elegant envelope icon unfolding to reveal a branching automation workflow diagram inside, glowing trigger points and decision nodes, conversion paths lighting up as emails flow through sequences. ${STYLE}` },
  { name: "website-speed-optimization", dir: "images/insights", prompt: `A sleek laptop screen with a performance speedometer at max speed, light trails and speed lines emanating from the screen, code optimization symbols floating around, a glowing sub-second timer display. ${STYLE}` },
  { name: "clarion-software-hero", dir: "images/case-studies", prompt: `Abstract SaaS dashboard visualization with lead generation metrics surging upward, a glowing conversion funnel transforming visitors into qualified leads, tech company growth trajectory displayed as ascending light paths. ${STYLE}` },
  { name: "lakeview-medical-hero", dir: "images/case-studies", prompt: `Modern healthcare concept blending medicine and digital marketing — a stylized medical cross icon merged with search ranking arrows pointing upward, patient data streams flowing through an optimized digital portal. ${STYLE}` },
  { name: "archer-lane-hero", dir: "images/case-studies", prompt: `Financial services AI citation concept — floating conversational AI interface panels displaying brand mentions, trust authority badges glowing, knowledge graph connections linking financial expertise topics. ${STYLE}` },
];

function exists(img) {
  return fs.existsSync(path.join(ROOT, "public", img.dir, `${img.name}.png`));
}

async function createTask(prompt) {
  const res = await fetch(`${BASE}/generate`, { method: "POST", headers: HEADERS, body: JSON.stringify({ prompt, size: "3:2", nVariants: 1 }) });
  const json = await res.json();
  if (json.code !== 200) throw new Error(JSON.stringify(json));
  return json.data.taskId;
}

async function pollTask(taskId, name, timeoutMs = 180000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    await new Promise(r => setTimeout(r, 4000));
    try {
      const res = await fetch(`${BASE}/record-info?taskId=${taskId}`, { headers: HEADERS });
      const json = await res.json();
      const d = json.data;
      if (!d) continue;
      if (d.successFlag === 1 || d.status === "SUCCESS") {
        const urls = d.response?.resultUrls || d.response?.result_urls;
        if (urls?.[0]) return urls[0];
        const str = JSON.stringify(d);
        const m = str.match(/https?:\/\/[^"'\s,}\]]+\.(png|jpg|jpeg|webp)/i);
        if (m) return m[0];
        throw new Error("No URL in response");
      }
      if (d.successFlag === 2) throw new Error("Generation failed");
    } catch (e) {
      if (e.message === "Generation failed" || e.message === "No URL in response") throw e;
    }
  }
  throw new Error(`Timed out after ${timeoutMs/1000}s`);
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  return (buf.length / 1024 / 1024).toFixed(2);
}

async function processOne(img) {
  const taskId = await createTask(img.prompt);
  console.log(`  [QUEUED] ${img.name}`);
  const url = await pollTask(taskId, img.name);
  const dest = path.join(ROOT, "public", img.dir, `${img.name}.png`);
  const mb = await download(url, dest);
  console.log(`  [DONE]  ${img.name} (${mb} MB)`);
  return true;
}

async function run() {
  const todo = images.filter(img => !exists(img));
  console.log(`\n${images.length - todo.length} already exist, ${todo.length} to generate\n`);
  if (!todo.length) { console.log("All images exist!"); return; }

  let done = 0, fail = 0;
  // Process in parallel batches of 5
  for (let i = 0; i < todo.length; i += 5) {
    const batch = todo.slice(i, i + 5);
    console.log(`--- Batch ${Math.floor(i/5)+1} (${batch.map(b=>b.name).join(", ")}) ---`);
    const results = await Promise.allSettled(batch.map(img => processOne(img)));
    for (let j = 0; j < results.length; j++) {
      if (results[j].status === "fulfilled") done++;
      else { fail++; console.log(`  [FAIL]  ${batch[j].name}: ${results[j].reason?.message}`); }
    }
    if (i + 5 < todo.length) await new Promise(r => setTimeout(r, 1500));
  }

  // Retry failures once
  const stillMissing = images.filter(img => !exists(img));
  if (stillMissing.length) {
    console.log(`\n--- Retrying ${stillMissing.length} failed images ---`);
    for (const img of stillMissing) {
      try { await processOne(img); done++; fail--; }
      catch (e) { console.log(`  [FAIL]  ${img.name}: ${e.message}`); }
    }
  }

  console.log(`\nDone: ${done} succeeded, ${fail} failed`);
  console.log(`Total images: ${images.filter(img => exists(img)).length}/${images.length}`);
}

run().catch(console.error);
