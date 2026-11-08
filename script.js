/* =========================================================
   CONTENU À PERSONNALISER — modifiez uniquement cette zone
   ========================================================= */
const TYPED_PHRASES = [
  "des pipelines CI/CD fiables",
  "des infrastructures hybrides cloud / on-premise",
  "du GitOps sur Kubernetes",
  "des déploiements sécurisés (Trivy, SonarQube)",
];

// categories possibles : "cloud", "devops", "security"
const PROJECTS = [
  {
    title: "Pipeline CI/CD & déploiement Kubernetes GitOps",
    year: "2025",
    category: ["devops", "cloud"],
    desc: "Conteneurisation d'une application web Nginx et pipeline multi-stages (Build, Test, Push, Deploy). Déploiement continu automatisé sur Kubernetes avec Argo CD.",
    tags: ["GitLab CI", "Argo CD", "Docker", "Helm", "Kubernetes", "Proxmox"],
    repo: "",
    demo: "",
  },
  {
    title: "Provisionnement EC2 automatisé via interface web",
    year: "2025",
    category: ["cloud", "devops"],
    desc: "Interface Flask qui génère dynamiquement des scripts Terraform (templates Jinja2) pour déployer des instances EC2 sur AWS.",
    tags: ["AWS", "Terraform", "Python", "Flask", "Jinja2"],
    repo: "",
    demo: "",
  },
  {
    title: "Pipeline CI/CD avec analyse de sécurité sur Azure",
    year: "2024",
    category: ["security", "devops", "cloud"],
    desc: "Déploiement d'instances via Terraform, avec intégration de SonarQube et Trivy pour l'analyse de la qualité et de la sécurité du code.",
    tags: ["Jenkins", "Azure", "Docker", "SonarQube", "Trivy", "Terraform"],
    repo: "",
    demo: "",
  },
];

const EXPERIENCES = [
  {
    date: "Actuellement",
    role: "Ingénieur DevOps",
    org: "Diapason",
    points: [
      "Conception, automatisation et maintien des pipelines CI/CD et gestion des environnements cloud.",
      "Déploiement, optimisation et supervision des architectures applicatives en production.",
      "Mise en place de bonnes pratiques Infrastructure as Code (IaC) et approche GitOps.",
    ],
    tags: [],
  },
  {
    date: "09/2023 — 09/2025",
    role: "Ingénieur Cloud / DevOps Junior",
    org: "CompuGroup Medical / INSERM",
    points: [
      "Déploiement et gestion d'infrastructures hybrides (VMware ESXi / vSphere / vCenter et AWS).",
      "Intégration, automatisation et maintien de chaînes CI/CD (GitLab CI, Ansible) avec sécurisation.",
      "Exploitation, run quotidien et gestion d'incidents sur clusters Kubernetes (Rancher).",
      "Supervision et observabilité (Grafana, Prometheus, Splunk, Centreon).",
      "Administration d'API, middlewares (IIS, Nginx) et SGBD (MySQL, PostgreSQL).",
    ],
    tags: ["VMware", "AWS", "Kubernetes", "Ansible", "Terraform", "Argo CD", "GitLab CI", "Red Hat", "Nginx"],
  },
  {
    date: "04/2023 — 08/2023",
    role: "Technicien informatique (stage)",
    org: "Groupe MeilleurTaux",
    points: [
      "Administration des logiciels d'authentification et gestion d'environnements cloud Azure.",
      "Rédaction de documentations techniques sur Confluence et gestion d'incidents (N1/N2).",
    ],
    tags: ["Azure", "Confluence"],
  },
];

const EDUCATION = [
  { title: "Master Cloud & Cybersécurité", school: "EFREI Paris" },
  { title: "Licence Informatique", school: "Université de Rouen" },
];

const FILTER_LABELS = { all: "Tous", cloud: "Cloud", devops: "DevOps", security: "Sécurité" };

/* =========================================================
   CODE — pas besoin de modifier en dessous
   ========================================================= */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

// Année du footer
$("#year").textContent = new Date().getFullYear();

// Thème (mémorisé)
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}
$("#theme").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Menu mobile
const burger = $("#burger"), menu = $("#menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
$$("#menu a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

// Effet machine à écrire
(function typeEffect() {
  const el = $("#typed");
  let p = 0, c = 0, deleting = false;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { el.textContent = TYPED_PHRASES[0]; return; }
  function tick() {
    const phrase = TYPED_PHRASES[p];
    c += deleting ? -1 : 1;
    el.textContent = phrase.slice(0, c);
    let delay = deleting ? 30 : 60;
    if (!deleting && c === phrase.length) { deleting = true; delay = 1600; }
    else if (deleting && c === 0) { deleting = false; p = (p + 1) % TYPED_PHRASES.length; delay = 400; }
    setTimeout(tick, delay);
  }
  tick();
})();

// Projets + filtres
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}
function renderProjects(filter = "all") {
  const list = $("#project-list");
  list.innerHTML = PROJECTS
    .filter(p => filter === "all" || p.category.includes(filter))
    .map(p => `
      <article class="card">
        <span class="badge">${p.category.map(c => FILTER_LABELS[c]).join(" · ")} · ${escapeHTML(p.year)}</span>
        <h3>${escapeHTML(p.title)}</h3>
        <p>${escapeHTML(p.desc)}</p>
        <div class="tags">${p.tags.map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div>
        <div class="links">
          ${p.repo ? `<a href="${escapeHTML(p.repo)}" target="_blank" rel="noopener">code ↗</a>` : ""}
          ${p.demo ? `<a href="${escapeHTML(p.demo)}" target="_blank" rel="noopener">démo ↗</a>` : ""}
        </div>
      </article>`).join("");
}
const filters = $("#filters");
filters.innerHTML = Object.entries(FILTER_LABELS)
  .map(([k, v]) => `<button data-f="${k}" class="${k === "all" ? "active" : ""}">${v}</button>`).join("");
filters.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  $$("button", filters).forEach(x => x.classList.toggle("active", x === b));
  renderProjects(b.dataset.f);
});
renderProjects();

// Timeline
$("#timeline").innerHTML = EXPERIENCES.map(x => `
  <div class="t-item">
    <span class="t-date">${escapeHTML(x.date)}</span>
    <h3>${escapeHTML(x.role)}</h3>
    <p class="t-org">${escapeHTML(x.org)}</p>
    <ul>${x.points.map(pt => `<li>${escapeHTML(pt)}</li>`).join("")}</ul>
    ${x.tags.length ? `<div class="tags">${x.tags.map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div>` : ""}
  </div>`).join("");

// Formation
$("#education").innerHTML = EDUCATION.map(e => `
  <article class="card">
    <h3>🎓 ${escapeHTML(e.title)}</h3>
    <p>${escapeHTML(e.school)}</p>
  </article>`).join("");

// Apparition au scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => io.observe(el));

// Compteurs
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix ?? "+";
    let n = 0;
    const step = () => { n += Math.max(1, Math.ceil(target / 30)); el.textContent = Math.min(n, target) + suffix; if (n < target) requestAnimationFrame(step); };
    step();
    counterIO.unobserve(el);
  });
});
$$("[data-count]").forEach(el => counterIO.observe(el));

// Lien actif dans le menu
const sections = $$("main section[id]");
const navIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) $$("#menu a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => navIO.observe(s));

// Fond animé : réseau de points
(function network() {
  const canvas = $("#bg"), ctx = canvas.getContext("2d");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let w, h, pts;
  const resize = () => {
    w = canvas.width = innerWidth; h = canvas.height = innerHeight;
    const n = Math.min(90, Math.floor(w * h / 18000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
  };
  resize(); addEventListener("resize", resize);
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const color = getComputedStyle(root).getPropertyValue("--accent").trim() || "#2ee6a6";
    ctx.fillStyle = color; ctx.strokeStyle = color;
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.globalAlpha = .6; ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, 6.283); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) { ctx.globalAlpha = (1 - d / 130) * .25; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
