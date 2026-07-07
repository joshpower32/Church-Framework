/* =====================================================================
   HAVEN — Church Framework
   "Find Your Place" ministry finder (signature feature), ministries,
   team, giving, plan-a-visit form. All content lives in the arrays below.
   ===================================================================== */

const CONFIG = {
  stripQuery: "sunlit church pews",
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  ownerEmail: "hello@havenchurch.ca",
  businessName: "HAVEN Church",
  phone: "(905) 555-1912",
};

/* ---------- Who are you? (finder chips) ---------- */
const SEEKERS = [
  { id: "kids", label: "Coming with kids" },
  { id: "teen", label: "I'm a teenager" },
  { id: "music", label: "Music & the arts" },
  { id: "serve", label: "Serving Hamilton" },
  { id: "community", label: "Community & friendship" },
  { id: "faith", label: "New to faith" },
  { id: "care", label: "I need support" },
];

/* ---------- Ministries ---------- */
const MINISTRIES = [
  { id: "gatherings", name: "Sunday Gatherings", cat: "Worship", desc: "One hour. Honest teaching, real music, no theatrics. The same service at 9 and 11.", when: "Sun 9 & 11 AM", where: "Sanctuary", who: "Everyone", tags: ["faith", "community", "music"], query: "congregation gathered" },
  { id: "kids", name: "HAVEN Kids", cat: "Families", desc: "Safe, screened, and genuinely fun — kids learn at their level while you're in the service.", when: "Both services", where: "Lower Hall", who: "Ages 0–11", tags: ["kids"], query: "kids story time" },
  { id: "youth", name: "HAVEN Youth", cat: "Students", desc: "Friday nights that teenagers actually choose. Big questions welcome, phones optional.", when: "Fri 7 PM", where: "The Loft", who: "Grades 6–12", tags: ["teen", "community"], query: "youth group talking" },
  { id: "worship", name: "Worship & Arts", cat: "Music", desc: "Band, choir, and tech teams — auditions monthly, nerves expected, grace supplied.", when: "Rehearsal Thu", where: "Sanctuary", who: "Musicians & makers", tags: ["music"], query: "worship hands raised" },
  { id: "citytable", name: "City Table", cat: "Outreach", desc: "A hot dinner for anyone in the neighbourhood, every Thursday. No forms, no sermon, no catch.", when: "Thu 5:30 PM", where: "Lower Hall", who: "The whole city", tags: ["serve", "community"], query: "shared dinner table" },
  { id: "pantry", name: "The Pantry", cat: "Outreach", desc: "Groceries and essentials for two hundred Hamilton families a month, packed by volunteers.", when: "Sat 10 AM", where: "James St entrance", who: "Volunteers welcome", tags: ["serve"], query: "volunteers boxes" },
  { id: "groups", name: "Small Groups", cat: "Community", desc: "Eight to twelve people around a table — dinner, scripture, and life without the highlight reel.", when: "Weeknights", where: "Homes across the city", who: "Everyone", tags: ["community", "faith"], query: "bible reading service" },
  { id: "care", name: "Care & Prayer", cat: "Support", desc: "Grief, illness, crisis, or just a hard season — a trained team that shows up and stays.", when: "By appointment", where: "Confidential", who: "Anyone, member or not", tags: ["care", "faith"], query: "donation support" },
];

/* ---------- Team ---------- */
const TEAM = [
  { name: "Rev. Marcus Oduya", role: "Lead Pastor", bio: "Fifteen years at HAVEN. Preaches like a neighbour, visits like a friend, and answers his own email.", query: "man portrait pastor" },
  { name: "Daniel Reyes", role: "Worship & Arts Director", bio: "Builds services that leave room for silence. Runs the monthly open auditions — bring your nerves.", query: "man portrait worship" },
  { name: "Claire Whitfield", role: "Kids & Family Director", bio: "Two decades in early education. Every volunteer on her team is screened, trained, and glad you came.", query: "woman portrait kids director" },
];

/* ---------- Ways to give ---------- */
const GIVING = [
  { name: "Sunday Giving", blurb: "The basket still works.", features: ["Cash or cheque at any service", "Tap-to-give kiosk in the foyer", "Envelopes for anonymous gifts", "Receipted annually"] },
  { name: "Monthly Partner", blurb: "Steady giving keeps the lights on and the Table set.", featured: true, badge: "Deepest impact", features: ["Pre-authorized monthly gift", "Funds City Table & The Pantry first", "Change or pause anytime", "Annual impact report to your inbox"] },
  { name: "Legacy & Memorial", blurb: "A gift that outlives us all.", features: ["Bequests and planned giving", "Memorial gifts in a loved one's name", "Directed gifts to a ministry", "Handled personally, confidentially"] },
];

/* ---------- Stories ---------- */
const STORIES = [
  { quote: "I came for my daughter's sake and stayed for mine. Nobody performed at me. They just kept saving us two seats.", name: "Jenna M." },
  { quote: "Thursday dinners got me through the winter I lost my job. Months later I found out half the servers weren't even churchgoers. That told me everything.", name: "Rob T." },
  { quote: "I emailed the care team about my mum at 11 PM. Marcus was at the hospital by nine the next morning. He still checks in.", name: "Priya S." },
];

// --- Demo photos: pinned Pexels shots, keyed by query -------------------
// Direct image URLs load with the page — no API call, no key, no pop-in.
// To change a photo: browse pexels.com, copy the image address, paste here.
const PEXELS_PHOTOS = {
  "congregation gathered": { u: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" },
  "kids story time": { u: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg" },
  "youth group talking": { u: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg" },
  "worship hands raised": { u: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg" },
  "shared dinner table": { u: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg" },
  "volunteers boxes": { u: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" },
  "bible reading service": { u: "https://images.pexels.com/photos/2351719/pexels-photo-2351719.jpeg" },
  "donation support": { u: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg" },
  "man portrait pastor": { u: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
  "man portrait worship": { u: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
  "woman portrait kids director": { u: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
  "sunlit church pews": { u: "https://images.pexels.com/photos/133699/pexels-photo-133699.jpeg" },
};
// Size an image via Pexels CDN params (w = width; pxCrop also crops to w×h)
const px = (u, w) => `${u}?auto=compress&cs=tinysrgb&w=${w}`;
const pxCrop = (u, w, h) => `${u}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

const $ = (id) => document.getElementById(id);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Find Your Place (signature feature) ---------- */
let activeSeeker = null;

function renderSeekerChips() {
  $("finderChips").innerHTML = SEEKERS.map((s) =>
    `<button class="finder-chip ${s.id === activeSeeker ? "active" : ""}" aria-pressed="${s.id === activeSeeker}" onclick="setSeeker('${s.id}')">${esc(s.label)}</button>`
  ).join("");
}

function renderFinderResults() {
  const results = $("finderResults");
  const note = $("finderNote");
  if (!activeSeeker) {
    results.innerHTML = "";
    note.textContent = "Pick whatever fits — we'll show you where to start.";
    return;
  }
  const matches = MINISTRIES.filter((m) => m.tags.includes(activeSeeker));
  const label = (SEEKERS.find((s) => s.id === activeSeeker) || {}).label || "";
  note.textContent = `${matches.length} place${matches.length === 1 ? "" : "s"} to start for “${label}” — and the front door counts too.`;
  results.innerHTML = matches.map((m, i) => `
    <div class="finder-card" data-tilt style="--fx-delay:${i * 70}ms">
      <span class="ministry-tag">${esc(m.cat)}</span>
      <h3>${esc(m.name)}</h3>
      <p>${esc(m.desc)}</p>
      <div class="ministry-meta"><span><strong>${esc(m.when)}</strong></span><span>${esc(m.where)}</span><span>${esc(m.who)}</span></div>
      <button class="btn btn-ghost btn-block" onclick="askAbout('${m.id}')">Ask about this when I visit</button>
    </div>`).join("");
  results.querySelectorAll(".finder-card").forEach((el) => requestAnimationFrame(() => el.classList.add("fx-in")));
}

function setSeeker(id) {
  activeSeeker = id;
  renderSeekerChips();
  renderFinderResults();
}

function askAbout(id) {
  const m = MINISTRIES.find((x) => x.id === id);
  if (!m) return;
  $("interest").value = m.name;
  document.getElementById("plan").scrollIntoView({ behavior: "smooth" });
  toast(`Added ${m.name} to your visit — just fill in your details.`);
}

/* ---------- Ministries grid ---------- */
function renderMinistries() {
  $("ministriesGrid").innerHTML = MINISTRIES.map((m, i) => {
    const ph = PEXELS_PHOTOS[m.query];
    return `
    <div class="ministry-card" data-tilt data-fx style="--fx-delay:${(i % 3) * 90}ms">
      ${ph ? `<img src="${esc(pxCrop(ph.u, 640, 480))}" alt="${esc(m.name)} at HAVEN Church" decoding="async" ${i < 3 ? "" : 'loading="lazy"'}>` : ""}
      <div class="ministry-body">
        <span class="ministry-tag">${esc(m.cat)}</span>
        <h3>${esc(m.name)}</h3>
        <p>${esc(m.desc)}</p>
        <div class="ministry-meta"><span><strong>${esc(m.when)}</strong></span><span>${esc(m.where)}</span><span>${esc(m.who)}</span></div>
      </div>
    </div>`;
  }).join("");
}

/* ---------- Team ---------- */
function renderTeam() {
  $("teamGrid").innerHTML = TEAM.map((t, i) => {
    const ph = PEXELS_PHOTOS[t.query];
    return `
    <div class="team-card" data-tilt data-fx style="--fx-delay:${i * 90}ms">
      ${ph ? `<img src="${esc(pxCrop(ph.u, 600, 750))}" alt="${esc(t.name)}, ${esc(t.role)}" decoding="async" loading="lazy">` : ""}
      <div class="team-body">
        <h3>${esc(t.name)}</h3>
        <span class="team-role">${esc(t.role)}</span>
        <p>${esc(t.bio)}</p>
      </div>
    </div>`;
  }).join("");
}

/* ---------- Giving ---------- */
function renderGiving() {
  $("givingGrid").innerHTML = GIVING.map((g, i) => `
    <div class="rate-card ${g.featured ? "featured" : ""}" data-fx style="--fx-delay:${i * 90}ms">
      ${g.badge ? `<span class="rate-badge">${esc(g.badge)}</span>` : ""}
      <h3>${esc(g.name)}</h3>
      <p class="rate-blurb">${esc(g.blurb)}</p>
      <ul>${g.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <a class="btn ${g.featured ? "btn-primary" : "btn-ghost"} btn-block" href="#plan">Talk to Us About Giving</a>
    </div>`).join("");
}

/* ---------- Stories ---------- */
function renderStories() {
  $("storiesGrid").innerHTML = STORIES.map((s, i) => `
    <div class="review-card" data-fx style="--fx-delay:${i * 90}ms">
      <div class="review-mark" aria-hidden="true">✦</div>
      <blockquote>“${esc(s.quote)}”</blockquote>
      <cite>— ${esc(s.name)}</cite>
    </div>`).join("");
}

/* ---------- Plan form select ---------- */
function renderFormOptions() {
  $("interest").innerHTML = `<option value="">Just Sunday, to start</option>` +
    MINISTRIES.map((m) => `<option value="${esc(m.name)}">${esc(m.name)} (${esc(m.cat)})</option>`).join("");
}

/* ---------- Plan-a-visit form ---------- */
const planForm = $("planForm");
const planNote = $("planNote");
const KEY_PLACEHOLDER = "YOUR_WEB3FORMS_ACCESS_KEY";

async function submitPlan(formData) {
  const firstName = String(formData.get("name") || "there").split(" ")[0];
  const btn = planForm.querySelector('button[type="submit"]');

  if (formData.get("botcheck")) return; // honeypot

  if (!CONFIG.web3formsKey || CONFIG.web3formsKey === KEY_PLACEHOLDER) {
    const subject = encodeURIComponent(`Planned visit — ${formData.get("name") || ""} · ${formData.get("service") || ""}`);
    const body = encodeURIComponent([...formData.entries()].filter(([k]) => k !== "botcheck").map(([k, v]) => `${k}: ${v}`).join("\n"));
    window.location.href = `mailto:${CONFIG.ownerEmail}?subject=${subject}&body=${body}`;
    toast(`Opening your email app to let us know you're coming…`);
    return;
  }

  const fd = new FormData();
  fd.append("access_key", CONFIG.web3formsKey);
  fd.append("subject", `⛪ PLANNED VISIT — ${formData.get("name") || "website"} · ${formData.get("service") || ""}`);
  fd.append("from_name", CONFIG.businessName);
  fd.append("botcheck", "");
  fd.append("Name", formData.get("name") || "");
  fd.append("Email", formData.get("email") || "");
  fd.append("Coming", formData.get("party") || "");
  fd.append("Service", formData.get("service") || "");
  fd.append("Curious about", formData.get("interest") || "Just Sunday");
  fd.append("Notes", formData.get("notes") || "");

  btn.disabled = true;
  const orig = btn.textContent;
  btn.textContent = "Sending…";

  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: fd });
    const data = await res.json();
    if (res.ok && data.success) {
      planForm.reset();
      toast(`Thanks ${firstName}! Your seat is saved — someone will meet you at the door.`);
      planNote.textContent = "Sent ✓ — we'll reply within a day to say hi before Sunday.";
    } else {
      throw new Error(data.message || "Send failed");
    }
  } catch (_) {
    toast(`Couldn't send — please call ${CONFIG.phone} or email ${CONFIG.ownerEmail}.`);
    planNote.textContent = `Something went wrong. Please call ${CONFIG.phone} or email ${CONFIG.ownerEmail}.`;
  } finally {
    btn.disabled = false;
    btn.textContent = orig;
  }
}

planForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitPlan(new FormData(planForm));
});

/* ---------- Mobile nav toggle ---------- */
const navToggle = $("navToggle");
const navLinks = $("navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", false);
}));
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open") && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Toast notifications ---------- */
let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => (t.hidden = true), 300);
  }, 3500);
}

/* ---------- Sanctuary strip background ---------- */
function loadStrip() {
  const ph = PEXELS_PHOTOS[CONFIG.stripQuery];
  if (ph) $("spaceImg").style.backgroundImage = `url("${px(ph.u, 1600)}")`;
}

/* ---------- Init ---------- */
renderSeekerChips();
renderFinderResults();
renderMinistries();
renderTeam();
renderGiving();
renderStories();
renderFormOptions();
loadStrip();
