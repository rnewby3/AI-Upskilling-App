const modules = [
  {
    id: "strategy-ai-operating-model",
    pillar: "Strategy",
    title: "AI Operating Model",
    desc: "Define governance, ownership, and delivery lanes across IT Apps, Product, Security, and BU teams.",
  },
  {
    id: "security-data-classification",
    pillar: "Security",
    title: "Data Classification for AI",
    desc: "Map data classes to approved AI tools and enforce boundaries for public, internal, sensitive, and regulated data.",
  },
  {
    id: "security-model-risk",
    pillar: "Security",
    title: "Model and Vendor Risk Reviews",
    desc: "Use repeatable risk assessments for model providers, retention terms, prompt injection, and data residency.",
  },
  {
    id: "adoption-change-management",
    pillar: "Adoption",
    title: "Change Management and Enablement",
    desc: "Launch role-based training and office-hours cadence to drive measurable adoption beyond pilot teams.",
  },
  {
    id: "exec-ceo-ciso-comms",
    pillar: "Leadership",
    title: "CEO and CISO Communication Rhythm",
    desc: "Create concise monthly narratives: business value, risks, incident posture, and next quarter investment asks.",
  },
  {
    id: "analytics-value-realization",
    pillar: "Analytics",
    title: "Value Realization Dashboard",
    desc: "Track active usage, efficiency impact, and quality outcomes to prove ROI and prevent novelty-driven sprawl.",
  },
  {
    id: "architecture-ai-platform",
    pillar: "Architecture",
    title: "Enterprise AI Platform Blueprint",
    desc: "Design an architecture for approved tools, connectors, data gateways, logging, and guardrails.",
  },
  {
    id: "security-monitoring-response",
    pillar: "Security",
    title: "AI Monitoring and Incident Response",
    desc: "Define telemetry, alerting, abuse patterns, and incident playbooks for unauthorized prompts or exfiltration risk.",
  },
];

const stakeholderNames = ["CEO", "CISO", "IT Apps Leader", "Business Units"];

const defaultRadar = [
  {
    id: crypto.randomUUID(),
    name: "Clawdbot",
    date: "2026-02-20",
    risk: "High",
    summary:
      "Rapidly adopted assistant with broad data connector claims and agentic workflows.",
    security:
      "Validate connector auth model, data retention policy, tenant isolation, and prompt injection controls before any rollout.",
    recommendation:
      "Run a 30-day security-first pilot in a sandbox tenant with red-team prompts and DLP policies enforced.",
  },
];

const KEY = "caio-skills-state-v1";

function loadState() {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    return {
      moduleState: {},
      stakeholderState: {},
      metrics: { users: "", hours: "", risks: "" },
      radar: defaultRadar,
    };
  }

  try {
    return JSON.parse(raw);
  } catch {
    return {
      moduleState: {},
      stakeholderState: {},
      metrics: { users: "", hours: "", risks: "" },
      radar: defaultRadar,
    };
  }
}

let state = loadState();

function saveState() {
  localStorage.setItem(KEY, JSON.stringify(state));
  renderStats();
}

function renderRoadmap() {
  const host = document.getElementById("roadmap");
  const tpl = document.getElementById("module-template");
  host.innerHTML = "";

  modules.forEach((m) => {
    const node = tpl.content.firstElementChild.cloneNode(true);
    node.querySelector("h4").textContent = m.title;
    node.querySelector(".tag").textContent = m.pillar;
    node.querySelector(".module-desc").textContent = m.desc;

    const check = node.querySelector("input[type='checkbox']");
    const notes = node.querySelector(".module-notes");

    const saved = state.moduleState[m.id] || { done: false, notes: "" };
    check.checked = saved.done;
    notes.value = saved.notes;

    check.addEventListener("change", () => {
      state.moduleState[m.id] = { ...saved, done: check.checked, notes: notes.value };
      saveState();
    });

    notes.addEventListener("input", () => {
      state.moduleState[m.id] = { done: check.checked, notes: notes.value };
      saveState();
    });

    host.appendChild(node);
  });
}

function renderStakeholders() {
  const host = document.getElementById("stakeholders");
  const tpl = document.getElementById("stakeholder-template");
  host.innerHTML = "";

  stakeholderNames.forEach((name) => {
    const node = tpl.content.firstElementChild.cloneNode(true);
    node.querySelector("h4").textContent = name;

    const keys = ["mapped", "cadence", "metrics"];
    const checks = [...node.querySelectorAll("input[type='checkbox']")];
    const saved = state.stakeholderState[name] || {};

    checks.forEach((box, idx) => {
      box.checked = Boolean(saved[keys[idx]]);
      box.addEventListener("change", () => {
        state.stakeholderState[name] = {
          ...(state.stakeholderState[name] || {}),
          [keys[idx]]: box.checked,
        };
        saveState();
      });
    });

    host.appendChild(node);
  });
}

function renderRadar() {
  const host = document.getElementById("radar-list");
  host.innerHTML = "";

  const sorted = [...(state.radar || [])].sort((a, b) => b.date.localeCompare(a.date));

  sorted.forEach((item) => {
    const card = document.createElement("article");
    card.className = "radar-item";

    const top = document.createElement("div");
    top.className = "radar-top";

    const title = document.createElement("h4");
    title.textContent = item.name;

    const risk = document.createElement("span");
    risk.className = `risk ${(item.risk || "").toLowerCase()}`;
    risk.textContent = `${item.risk} Risk`;

    top.appendChild(title);
    top.appendChild(risk);
    card.appendChild(top);

    const fields = [
      ["Date", item.date],
      ["What It Is", item.summary],
      ["Security Lens", item.security],
      ["Recommendation", item.recommendation],
    ];

    fields.forEach(([label, value]) => {
      const p = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = `${label}: `;
      p.appendChild(strong);
      p.append(document.createTextNode(value || ""));
      card.appendChild(p);
    });

    host.appendChild(card);
  });
}

function renderStats() {
  const moduleValues = modules.map((m) => state.moduleState[m.id]?.done || false);
  const done = moduleValues.filter(Boolean).length;
  const total = modules.length;
  const overall = total ? Math.round((done / total) * 100) : 0;

  const securityModules = modules.filter((m) => m.pillar === "Security");
  const secDone = securityModules.filter((m) => state.moduleState[m.id]?.done).length;
  const secPct = securityModules.length ? Math.round((secDone / securityModules.length) * 100) : 0;

  document.getElementById("overall-progress").textContent = `${overall}%`;
  document.getElementById("completed-modules").textContent = `${done} / ${total}`;
  document.getElementById("security-progress").textContent = `${secPct}%`;
}

function wireMetrics() {
  const users = document.getElementById("metric-users");
  const hours = document.getElementById("metric-hours");
  const risks = document.getElementById("metric-risks");

  users.value = state.metrics.users;
  hours.value = state.metrics.hours;
  risks.value = state.metrics.risks;

  [users, hours, risks].forEach((el) => {
    el.addEventListener("input", () => {
      state.metrics = {
        users: users.value,
        hours: hours.value,
        risks: risks.value,
      };
      saveState();
    });
  });
}

function wireRadarForm() {
  const form = document.getElementById("radar-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("radar-name").value.trim();
    const date = document.getElementById("radar-date").value;
    const risk = document.getElementById("radar-risk").value;
    const summary = document.getElementById("radar-summary").value.trim();
    const security = document.getElementById("radar-security").value.trim();
    const recommendation = document.getElementById("radar-reco").value.trim();

    state.radar = state.radar || [];
    state.radar.push({
      id: crypto.randomUUID(),
      name,
      date,
      risk,
      summary,
      security,
      recommendation,
    });

    saveState();
    renderRadar();
    form.reset();
  });
}

function wireDataActions() {
  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!confirm("Reset all local progress and notes?")) {
      return;
    }

    localStorage.removeItem(KEY);
    state = loadState();
    refreshUI();
  });

  document.getElementById("export-data").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `caio-skills-snapshot-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("import-data").addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const text = await file.text();
    try {
      state = JSON.parse(text);
      saveState();
      refreshUI();
      e.target.value = "";
    } catch {
      alert("Import failed. Please provide a valid snapshot JSON file.");
    }
  });
}

function refreshUI() {
  renderRoadmap();
  renderStakeholders();
  renderRadar();
  renderStats();
  applyMetricValues();
}

function applyMetricValues() {
  document.getElementById("metric-users").value = state.metrics.users || "";
  document.getElementById("metric-hours").value = state.metrics.hours || "";
  document.getElementById("metric-risks").value = state.metrics.risks || "";
}

function init() {
  wireMetrics();
  wireRadarForm();
  wireDataActions();
  refreshUI();
}

init();
