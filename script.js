/* =========================================================
   CONTENU À PERSONNALISER / CONTENT TO CUSTOMIZE
   Chaque texte traduisible est un objet { fr: "...", en: "..." }.
   Une simple chaîne (dates, noms de société, tags...) est commune aux deux langues.
   ========================================================= */

/* ---------- Textes de l'interface ---------- */
const UI = {
  fr: {
    "meta.title": "Ousmane Ka — Ingénieur Infrastructure, Cloud & DevOps",
    "meta.desc": "Portfolio d'Ousmane Ka : ingénieur Infrastructure, Cloud & DevOps. CI/CD, Kubernetes, GitOps, Terraform, Ansible, AWS, Azure.",
    "menu.aria": "Menu",
    "theme.aria": "Changer de thème",
    "lang.aria": "Switch to English",

    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.experience": "Parcours",
    "nav.contact": "Contact",

    "hero.kicker": "// bonjour, je suis",
    "hero.role": "Ingénieur Infrastructure, Cloud & DevOps",
    "hero.building": "Je construis ",
    "hero.lead": `Ingénieur DevOps passionné et rigoureux : infrastructures hybrides <strong>cloud / on-premise</strong>, automatisation <strong>CI/CD</strong>, <strong>conteneurisation</strong> et <strong>GitOps</strong>, avec une attention constante portée à la sécurité.`,
    "hero.projects": "Voir mes projets",
    "hero.cv": "Télécharger mon CV",
    "stats.years": "ans d'expérience",
    "stats.companies": "entreprises",
    "stats.projects": "projets présentés",

    "about.title": "À propos",
    "about.p1": `Fort d'un parcours en <strong>grande entreprise</strong> et d'une veille technologique constante, j'apporte une réelle expertise technique et un vrai esprit d'équipe sur des projets structurants.`,
    "about.p2": `J'ai déployé et exploité des infrastructures hybrides (VMware et AWS), automatisé des chaînes CI/CD sécurisées (GitLab CI, Ansible, Trivy, SonarQube) et assuré le run de clusters Kubernetes. Aujourd'hui ingénieur DevOps chez <strong>Diapason</strong>, je pousse les bonnes pratiques <strong>Infrastructure as Code</strong> et <strong>GitOps</strong>.`,
    "about.langs": "🗣 Français (langue maternelle) · Anglais (B2)",
    "terminal.aria": "Profil en format terminal",
    "terminal": `<span class="c-dim">$</span> whoami
ousmane.ka
<span class="c-dim">$</span> cat focus.txt
- Cloud   : AWS / Azure / VMware
- DevOps  : K8s, Argo CD, Terraform
- CI/CD   : GitLab CI, Jenkins
- Sécurité: Trivy, SonarQube
<span class="c-dim">$</span> status
<span class="c-ok">●</span> ingénieur DevOps @ Diapason`,

    "skills.title": "Compétences",
    "skills.cloud": "☁ Cloud & Virtualisation",
    "skills.devops": "📦 DevOps & Conteneurisation",
    "skills.cicd": "🛡 CI/CD & Qualité",
    "skills.systems": "🖥 Systèmes & Web",
    "skills.observability": "📊 Observabilité & DB",
    "skills.scripting": "⌨ Scripting & Code",

    "projects.title": "Projets",
    "projects.lead": "Une sélection de projets DevOps, cloud et sécurité réalisés en autonomie.",
    "projects.code": "code ↗",
    "projects.demo": "démo ↗",

    "experience.title": "Parcours",
    "experience.education": "Formation",
    "experience.interests": "Centres d'intérêt",
    "interest.museums": "🎨 Musées",
    "interest.cinema": "🎬 Cinéma",
    "interest.music": "🎵 Musique (RnB, Afro, Pop)",
    "interest.manga": "📖 Manga (Naruto)",

    "contact.title": "Contact",
    "contact.lead": "Un projet structurant, une mission DevOps ou simplement envie d'échanger ? Écrivez-moi.",
    "contact.cv": "CV en ligne",
    "footer.made": "Fait à la main en HTML, CSS & JS",
  },
  en: {
    "meta.title": "Ousmane Ka — Infrastructure, Cloud & DevOps Engineer",
    "meta.desc": "Ousmane Ka's portfolio: Infrastructure, Cloud & DevOps engineer. CI/CD, Kubernetes, GitOps, Terraform, Ansible, AWS, Azure.",
    "menu.aria": "Menu",
    "theme.aria": "Toggle theme",
    "lang.aria": "Passer en français",

    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.kicker": "// hi, I'm",
    "hero.role": "Infrastructure, Cloud & DevOps Engineer",
    "hero.building": "I build ",
    "hero.lead": `Passionate and rigorous DevOps engineer: hybrid <strong>cloud / on-premise</strong> infrastructures, <strong>CI/CD</strong> automation, <strong>containerization</strong> and <strong>GitOps</strong>, with constant attention to security.`,
    "hero.projects": "See my projects",
    "hero.cv": "Download my CV",
    "stats.years": "years of experience",
    "stats.companies": "companies",
    "stats.projects": "featured projects",

    "about.title": "About",
    "about.p1": `With a background in <strong>large companies</strong> and constant technology watch, I bring real technical expertise and a genuine team spirit to structuring projects.`,
    "about.p2": `I have deployed and operated hybrid infrastructures (VMware and AWS), automated secured CI/CD pipelines (GitLab CI, Ansible, Trivy, SonarQube) and run Kubernetes clusters. Today a DevOps engineer at <strong>Diapason</strong>, I promote <strong>Infrastructure as Code</strong> and <strong>GitOps</strong> best practices.`,
    "about.langs": "🗣 French (native) · English (B2)",
    "terminal.aria": "Profile in terminal format",
    "terminal": `<span class="c-dim">$</span> whoami
ousmane.ka
<span class="c-dim">$</span> cat focus.txt
- Cloud   : AWS / Azure / VMware
- DevOps  : K8s, Argo CD, Terraform
- CI/CD   : GitLab CI, Jenkins
- Security: Trivy, SonarQube
<span class="c-dim">$</span> status
<span class="c-ok">●</span> DevOps engineer @ Diapason`,

    "skills.title": "Skills",
    "skills.cloud": "☁ Cloud & Virtualization",
    "skills.devops": "📦 DevOps & Containerization",
    "skills.cicd": "🛡 CI/CD & Quality",
    "skills.systems": "🖥 Systems & Web",
    "skills.observability": "📊 Observability & DB",
    "skills.scripting": "⌨ Scripting & Code",

    "projects.title": "Projects",
    "projects.lead": "A selection of DevOps, cloud and security projects built on my own.",
    "projects.code": "code ↗",
    "projects.demo": "demo ↗",

    "experience.title": "Experience",
    "experience.education": "Education",
    "experience.interests": "Interests",
    "interest.museums": "🎨 Museums",
    "interest.cinema": "🎬 Cinema",
    "interest.music": "🎵 Music (R&B, Afro, Pop)",
    "interest.manga": "📖 Manga (Naruto)",

    "contact.title": "Contact",
    "contact.lead": "A structuring project, a DevOps assignment, or just want to chat? Write to me.",
    "contact.cv": "Online CV",
    "footer.made": "Handcrafted with HTML, CSS & JS",
  },
};

const TYPED_PHRASES = [
  { fr: "des pipelines CI/CD fiables", en: "reliable CI/CD pipelines" },
  { fr: "des infrastructures hybrides cloud / on-premise", en: "hybrid cloud / on-premise infrastructures" },
  { fr: "du GitOps sur Kubernetes", en: "GitOps on Kubernetes" },
  { fr: "des déploiements sécurisés (Trivy, SonarQube)", en: "secure deployments (Trivy, SonarQube)" },
];

// categories possibles : "cloud", "devops", "security"
// "year" est facultatif : laissez "" pour ne pas l'afficher
const PROJECTS = [
  {
    title: { fr: "Pipeline CI/CD & déploiement Kubernetes GitOps", en: "CI/CD pipeline & GitOps Kubernetes deployment" },
    year: "2025",
    category: ["devops", "cloud"],
    desc: {
      fr: "Conteneurisation d'une application web Nginx et pipeline multi-stages (Build, Test, Push, Deploy). Déploiement continu automatisé sur Kubernetes avec Argo CD.",
      en: "Containerization of a Nginx web application and a multi-stage pipeline (Build, Test, Push, Deploy). Automated continuous deployment on Kubernetes with Argo CD.",
    },
    tags: ["GitLab CI", "Argo CD", "Docker", "Helm", "Kubernetes", "Proxmox"],
    repo: "https://github.com/Ousmane-KA/Pipeline-GitLab-CI.git",
    demo: "",
  },
  {
    title: { fr: "Provisionnement EC2 automatisé via interface web", en: "Automated EC2 provisioning through a web interface" },
    year: "2025",
    category: ["cloud", "devops"],
    desc: {
      fr: "Interface Flask qui génère dynamiquement des scripts Terraform (templates Jinja2) pour déployer des instances EC2 sur AWS.",
      en: "Flask interface that dynamically generates Terraform scripts (Jinja2 templates) to deploy EC2 instances on AWS.",
    },
    tags: ["AWS", "Terraform", "Python", "Flask", "Jinja2"],
    repo: "https://github.com/Ousmane-KA/TP-EC2-AUTO-WITH-PYTHON",
    demo: "",
  },
  {
    title: { fr: "Pipeline CI/CD avec analyse de sécurité sur Azure", en: "CI/CD pipeline with security analysis on Azure" },
    year: "2024",
    category: ["security", "devops", "cloud"],
    desc: {
      fr: "Déploiement d'instances via Terraform, avec intégration de SonarQube et Trivy pour l'analyse de la qualité et de la sécurité du code.",
      en: "Instance deployment with Terraform, with SonarQube and Trivy integrated to analyze code quality and security.",
    },
    tags: ["Jenkins", "Azure", "Docker", "SonarQube", "Trivy", "Terraform"],
    repo: "https://github.com/Ousmane-KA/Project-CI-CD-V1",
    demo: "",
  },
  {
    title: { fr: "SIEM avec ELK Stack", en: "SIEM with ELK Stack" },
    year: "",
    category: ["security", "devops"],
    desc: {
      fr: "Implémentation d'une solution SIEM complète avec Docker, Elasticsearch, Logstash et Kibana pour la surveillance sécuritaire.",
      en: "Implementation of a complete SIEM solution with Docker, Elasticsearch, Logstash and Kibana for security monitoring.",
    },
    tags: ["ELK", "Docker", "Security"],
    repo: "https://github.com/Ousmane-KA/SIEM-ELK",
    demo: "",
  },
  {
    title: { fr: "Déploiement & monitoring Dynatrace", en: "Dynatrace deployment & monitoring" },
    year: "",
    category: ["devops", "cloud"],
    desc: {
      fr: "Mise en place d'un projet de supervision combinant Dynatrace SaaS pour le monitoring applicatif et des VM locales dans un environnement VMware.",
      en: "Setup of a monitoring project combining Dynatrace SaaS for application monitoring and local VMs in a VMware environment.",
    },
    tags: ["Dynatrace", "VMware", "Monitoring"],
    repo: "https://github.com/Ousmane-KA/Dynatrace.git",
    demo: "",
  },
  {
    title: { fr: "Mise en place de Zammad", en: "Zammad setup" },
    year: "",
    category: ["devops"],
    desc: {
      fr: "Déploiement de Zammad, une solution de gestion de tickets open source. Installation via Docker et configuration des canaux de communication.",
      en: "Deployment of Zammad, an open-source ticketing solution. Docker-based installation and configuration of communication channels.",
    },
    tags: ["Zammad", "Docker", "Ticketing"],
    repo: "https://github.com/Ousmane-KA/Zammad.git",
    demo: "",
  },
  {
    title: { fr: "Déploiement Kubernetes de n8n & PostgreSQL", en: "Kubernetes deployment of n8n & PostgreSQL" },
    year: "",
    category: ["devops", "cloud"],
    desc: {
      fr: "Mise en place d'une plateforme d'automatisation n8n orchestrée avec Kubernetes, utilisant PostgreSQL comme base de données persistante.",
      en: "Setup of an n8n automation platform orchestrated on Kubernetes, using PostgreSQL as a persistent database.",
    },
    tags: ["Kubernetes", "n8n", "PostgreSQL"],
    repo: "https://github.com/Ousmane-KA/k8s-n8n-postgresql.git",
    demo: "",
  },
  {
    title: {
      fr: "Déploiement d'un LLM local avec Docker",
      en: "Local LLM deployment with Docker"
    },
    year: "2026",
    category: ["devops", "ai", "self-hosted"],
    desc: {
      fr: "Déploiement d'un environnement d'intelligence artificielle local sur une VM Linux avec Docker Compose. Intégration d'Ollama pour l'exécution de modèles LLM (Qwen 2.5) et d'Open WebUI pour fournir une interface conversationnelle type ChatGPT. Mise en place d'une architecture conteneurisée avec persistance des données et optimisation des ressources pour un environnement de laboratoire à faible capacité.",
      en: "Deployment of a self-hosted AI environment on a Linux VM using Docker Compose. Integration of Ollama to run local LLM models (Qwen 2.5) and Open WebUI to provide a ChatGPT-like conversational interface. Implementation of a containerized architecture with persistent storage and resource optimization for a low-resource laboratory environment."
    },
    tags: [
      "Docker",
      "Docker Compose",
      "Ollama",
      "Open WebUI",
      "LLM",
      "Qwen 2.5",
      "Linux",
      "AI",
      "Self-hosted"
    ],
    repo: "https://github.com/Ousmane-KA/Internal-AI-Chat-Plateforme/blob/main/readme.md",
    demo: "",
},

];

const EXPERIENCES = [
  {
    date: { fr: "Actuellement", en: "Currently" },
    role: { fr: "Ingénieur DevOps", en: "DevOps Engineer" },
    org: "Diapason",
    points: {
      fr: [
        "Conception, automatisation et maintien des pipelines CI/CD et gestion des environnements cloud.",
        "Déploiement, optimisation et supervision des architectures applicatives en production.",
        "Mise en place de bonnes pratiques Infrastructure as Code (IaC) et approche GitOps.",
      ],
      en: [
        "Design, automation and maintenance of CI/CD pipelines and management of cloud environments.",
        "Deployment, optimization and monitoring of production application architectures.",
        "Implementation of Infrastructure as Code (IaC) best practices and a GitOps approach.",
      ],
    },
    tags: [],
  },
  {
    date: "09/2023 — 09/2025",
    role: { fr: "Ingénieur Cloud / DevOps Junior", en: "Junior Cloud / DevOps Engineer" },
    org: "CompuGroup Medical / INSERM",
    points: {
      fr: [
        "Déploiement et gestion d'infrastructures hybrides (VMware ESXi / vSphere / vCenter et AWS).",
        "Intégration, automatisation et maintien de chaînes CI/CD (GitLab CI, Ansible) avec sécurisation.",
        "Exploitation, run quotidien et gestion d'incidents sur clusters Kubernetes (Rancher).",
        "Supervision et observabilité (Grafana, Prometheus, Splunk, Centreon).",
        "Administration d'API, middlewares (IIS, Nginx) et SGBD (MySQL, PostgreSQL).",
      ],
      en: [
        "Deployment and management of hybrid infrastructures (VMware ESXi / vSphere / vCenter and AWS).",
        "Integration, automation and maintenance of secured CI/CD pipelines (GitLab CI, Ansible).",
        "Operations, daily run and incident management on Kubernetes clusters (Rancher).",
        "Monitoring and observability (Grafana, Prometheus, Splunk, Centreon).",
        "Administration of APIs, middleware (IIS, Nginx) and databases (MySQL, PostgreSQL).",
      ],
    },
    tags: ["VMware", "AWS", "Kubernetes", "Ansible", "Terraform", "Argo CD", "GitLab CI", "Red Hat", "Nginx"],
  },
  {
    date: "04/2023 — 08/2023",
    role: { fr: "Technicien informatique (stage)", en: "IT Technician (internship)" },
    org: "Groupe MeilleurTaux",
    points: {
      fr: [
        "Administration des logiciels d'authentification et gestion d'environnements cloud Azure.",
        "Rédaction de documentations techniques sur Confluence et gestion d'incidents (N1/N2).",
      ],
      en: [
        "Administration of authentication software and management of Azure cloud environments.",
        "Writing technical documentation on Confluence and incident management (L1/L2).",
      ],
    },
    tags: ["Azure", "Confluence"],
  },
];

const EDUCATION = [
  { title: { fr: "Master Cloud & Cybersécurité", en: "Master's in Cloud & Cybersecurity" }, school: "EFREI Paris" },
  { title: { fr: "Licence Informatique", en: "Bachelor's in Computer Science" }, school: "Université de Rouen" },
];

const FILTER_LABELS = {
  all: { fr: "Tous", en: "All" },
  cloud: { fr: "Cloud", en: "Cloud" },
  devops: { fr: "DevOps", en: "DevOps" },
  security: { fr: "Sécurité", en: "Security" },
};

/* =========================================================
   CODE — pas besoin de modifier en dessous
   ========================================================= */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

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

/* ---------- Langue (FR / EN) ---------- */
let lang = "fr";
try {
  const saved = localStorage.getItem("lang");
  if (saved === "fr" || saved === "en") lang = saved;
  else lang = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
} catch (e) {}

// Valeur dans la langue courante (une chaîne ou un tableau est commun aux deux langues)
const tr = o => (typeof o === "string" || Array.isArray(o)) ? o : (o?.[lang] ?? o?.fr ?? "");
const ui = key => UI[lang][key] ?? UI.fr[key] ?? key;

function applyStatic() {
  root.lang = lang;
  document.title = ui("meta.title");
  const md = $('meta[name="description"]');
  if (md) md.content = ui("meta.desc");
  $$("[data-i18n]").forEach(el => { el.textContent = ui(el.dataset.i18n); });
  $$("[data-i18n-html]").forEach(el => { el.innerHTML = ui(el.dataset.i18nHtml); });
  $$("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", ui(el.dataset.i18nAria)));
  const btn = $("#lang");
  btn.textContent = lang === "fr" ? "EN" : "FR";
  btn.setAttribute("aria-label", ui("lang.aria"));
  btn.title = ui("lang.aria");
}

// Effet machine à écrire
const typer = (() => {
  const el = $("#typed");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let p = 0, c = 0, deleting = false, timer;
  const phrases = () => TYPED_PHRASES.map(x => tr(x));
  function tick() {
    const list = phrases(), phrase = list[p];
    c += deleting ? -1 : 1;
    el.textContent = phrase.slice(0, c);
    let delay = deleting ? 30 : 60;
    if (!deleting && c === phrase.length) { deleting = true; delay = 1600; }
    else if (deleting && c === 0) { deleting = false; p = (p + 1) % list.length; delay = 400; }
    timer = setTimeout(tick, delay);
  }
  function restart() {
    clearTimeout(timer);
    p = 0; c = 0; deleting = false;
    if (reduce) { el.textContent = phrases()[0]; return; }
    tick();
  }
  return { restart };
})();

// Projets + filtres
let currentFilter = "all";
const filters = $("#filters");

function renderFilters() {
  filters.innerHTML = Object.entries(FILTER_LABELS)
    .map(([k, v]) => `<button data-f="${k}" class="${k === currentFilter ? "active" : ""}">${escapeHTML(tr(v))}</button>`).join("");
}
function renderProjects() {
  const list = $("#project-list");
  list.innerHTML = PROJECTS
    .filter(p => currentFilter === "all" || p.category.includes(currentFilter))
    .map(p => {
      const badge = [...p.category.map(c => tr(FILTER_LABELS[c])), p.year]
        .filter(Boolean).map(escapeHTML).join(" · ");
      return `
      <article class="card">
        <span class="badge">${badge}</span>
        <h3>${escapeHTML(tr(p.title))}</h3>
        <p>${escapeHTML(tr(p.desc))}</p>
        <div class="tags">${p.tags.map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div>
        <div class="links">
          ${p.repo ? `<a href="${escapeHTML(p.repo)}" target="_blank" rel="noopener">${escapeHTML(ui("projects.code"))}</a>` : ""}
          ${p.demo ? `<a href="${escapeHTML(p.demo)}" target="_blank" rel="noopener">${escapeHTML(ui("projects.demo"))}</a>` : ""}
        </div>
      </article>`;
    }).join("");
}
filters.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  currentFilter = b.dataset.f;
  renderFilters();
  renderProjects();
});

// Timeline
function renderTimeline() {
  $("#timeline").innerHTML = EXPERIENCES.map(x => `
  <div class="t-item">
    <span class="t-date">${escapeHTML(tr(x.date))}</span>
    <h3>${escapeHTML(tr(x.role))}</h3>
    <p class="t-org">${escapeHTML(x.org)}</p>
    <ul>${tr(x.points).map(pt => `<li>${escapeHTML(pt)}</li>`).join("")}</ul>
    ${x.tags.length ? `<div class="tags">${x.tags.map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div>` : ""}
  </div>`).join("");
}

// Formation
function renderEducation() {
  $("#education").innerHTML = EDUCATION.map(e => `
  <article class="card">
    <h3>🎓 ${escapeHTML(tr(e.title))}</h3>
    <p>${escapeHTML(e.school)}</p>
  </article>`).join("");
}

function render() {
  applyStatic();
  renderFilters();
  renderProjects();
  renderTimeline();
  renderEducation();
  typer.restart();
}

$("#lang").addEventListener("click", () => {
  lang = lang === "fr" ? "en" : "fr";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
});

render();

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
