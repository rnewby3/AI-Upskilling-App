/* ═══════════════════════════════════════════════════════════
   CAIO Skills — app.js
   ═══════════════════════════════════════════════════════════ */

// ─── CURRICULUM DATA ─────────────────────────────────────────
const tracks = [
  {
    id: "foundation",
    title: "CAIO Foundations",
    icon: "🏗️",
    color: "#4f46e5",
    desc: "What the role actually is, how it fits in the org, and the mindset shift required.",
    modules: [
      {
        id: "found-1",
        title: "Defining the CAIO Role",
        duration: "30 min",
        summary: "The CAIO is an emerging executive function at the intersection of technology, risk, and culture. Understand what separates it from a CTO or CDO, and why companies are creating it now.",
        keyPoints: [
          "The CAIO (or AI Enablement Lead/VP AI) owns the strategy, governance, and adoption of AI across the enterprise — not product AI development.",
          "Core responsibilities: build the AI operating model, define governance, own security policy, measure adoption, and serve as executive translator between AI capability and business value.",
          "CAIO is distinct from CTO (infrastructure & platforms), CDO (data strategy), and Product (feature AI). Overlap exists with all three — political clarity matters from day one.",
          "The role requires three fluencies: technical literacy (enough to evaluate vendor claims), strategic communication (board and C-suite), and change management (you are driving culture change).",
          "Early quick wins are critical. Pick 2–3 high-visibility use cases you can deliver in the first 90 days to establish credibility before building the governance layer.",
        ],
        framework: {
          title: "First 90 Days Framework",
          steps: [
            "Days 1–30: Listen. Map current AI usage across all teams (shadow IT included). Interview the CEO, CISO, key BU heads, and IT Apps. Document what's already happening.",
            "Days 31–60: Assess. Gap-analyse against a benchmark AI maturity model. Identify the top 3 use cases with the best ROI-to-risk ratio. Draft the first version of your AI policy.",
            "Days 61–90: Act. Launch one pilot with tight guardrails. Publish the AI use policy. Set up your first executive AI review cadence. Demonstrate early value.",
          ],
        },
      },
      {
        id: "found-2",
        title: "Enterprise AI Landscape",
        duration: "45 min",
        summary: "A map of the current AI landscape — types of AI, key vendors, and how enterprise tools differ from consumer AI. Know the terrain before you govern it.",
        keyPoints: [
          "LLMs (Large Language Models): Foundation models like GPT-4o, Gemini, Claude, and Llama that power most enterprise AI productivity tools. Understand context windows, fine-tuning, and prompt sensitivity.",
          "Enterprise AI Layers: (1) Foundation models, (2) Platform orchestration (LangChain, Semantic Kernel, Azure AI Foundry), (3) SaaS AI copilots (Microsoft Copilot, Glean, Salesforce Einstein), (4) Custom apps built by your org.",
          "Agentic AI is moving fast: AI agents that can take multi-step actions (create tickets, send emails, query data) represent a step-change in risk. Evaluate every agentic tool with elevated scrutiny.",
          "Key enterprise tools to master: Microsoft Copilot (M365 integration), Glean (enterprise search + agents), GitHub Copilot (dev), and the growing category of 'AI in the workflow' tools inside existing SaaS.",
          "Shadow AI is real: Employees are already using ChatGPT, Claude, Gemini, Perplexity, and personal AI subscriptions for work tasks. Your job is to channel this energy into approved, governed tools — not kill it.",
        ],
        checklist: [
          "Inventory all AI tools currently in use (licensed and shadow)",
          "Map each tool to its data handling and retention policies",
          "Identify which tools touch regulated or sensitive data",
          "Document which teams are most AI-active vs. AI-resistant",
          "Establish a 'pending review' queue for new tools as employees request them",
        ],
      },
      {
        id: "found-3",
        title: "AI Maturity Model",
        duration: "25 min",
        summary: "Assess where your organisation sits on the AI maturity curve and use that baseline to set realistic milestones and prioritise investments.",
        keyPoints: [
          "Level 1 – Ad Hoc: Teams using consumer AI on their own. No policy, no governance, no measurement. Most companies start here.",
          "Level 2 – Aware: The company has licensed enterprise AI tools (Copilot, Glean). Usage is inconsistent. A single champion (likely you) is pushing adoption.",
          "Level 3 – Governed: An AI use policy exists. A data classification framework is applied to approved tools. Basic adoption metrics are tracked.",
          "Level 4 – Optimised: AI is embedded in key workflows. ROI is measured. The CAIO has a seat at the table in strategic planning. Continuous monitoring of AI risk is in place.",
          "Level 5 – Transformative: AI is a core business capability. The org contributes to AI strategy at industry level. Feedback loops between usage and model improvement exist.",
          "Most mid-market companies sit at Level 1–2. Your goal in Year 1 is to reach Level 3 reliably — governance, policy, and measured adoption.",
        ],
      },
    ],
  },
  {
    id: "strategy",
    title: "AI Strategy",
    icon: "🎯",
    color: "#0ea5e9",
    desc: "Build and communicate a coherent enterprise AI strategy that aligns with business goals.",
    modules: [
      {
        id: "strat-1",
        title: "Building the AI Operating Model",
        duration: "50 min",
        summary: "The operating model defines who owns what in AI delivery, governance, and enablement. Without it, AI sprawls and accountability disappears.",
        keyPoints: [
          "Core model question: centralised vs. federated vs. hybrid. Most enterprises land on 'federated with central standards' — BUs move fast but must comply with central security and data policy.",
          "Define four ownership lanes: (1) CAIO/AI Enablement — strategy, policy, approved tool catalogue; (2) IT/Security — infrastructure, access, monitoring; (3) Product — AI features in the product; (4) Business Units — implementation and adoption within their domain.",
          "The AI Centre of Excellence (CoE) doesn't need to be a big team. For many companies a 1–3 person CoE with a network of BU champions is more effective than a siloed large team.",
          "Governance rituals matter: monthly AI review meeting (exec + CISO + BU leads), quarterly tool catalogue review, and an annual AI strategy review tied to budget planning.",
          "Escalation paths must be clear: who approves a new AI tool? Who gets called when there's an AI incident? Who owns the AI budget? Document all three before you need them.",
        ],
        framework: {
          title: "RACI for AI Decisions",
          steps: [
            "New tool approval: CAIO Responsible, CISO Accountable, IT Consulted, BU Informed.",
            "AI incident response: CISO Responsible, CAIO Accountable, Legal Consulted, CEO Informed.",
            "AI use policy update: CAIO Responsible, Legal Accountable, BU leads Consulted, All staff Informed.",
            "Adoption programme design: CAIO Responsible, HR Consulted, BU champions Accountable, IT Informed.",
          ],
        },
      },
      {
        id: "strat-2",
        title: "AI Roadmapping",
        duration: "40 min",
        summary: "Prioritise AI investments using a business value vs. implementation risk framework. Sequence quick wins alongside strategic bets.",
        keyPoints: [
          "Use a 2x2 matrix: Y-axis = business value (time saved, revenue impact, risk reduced), X-axis = implementation complexity (data readiness, change resistance, integration effort).",
          "Start with high-value, low-complexity initiatives: document summarisation, email drafting, FAQ bots on internal knowledge bases, BI data Q&A. These build confidence and fund the next wave.",
          "Mid-term plays: agentic workflows (automated ticket routing, data pipeline monitoring), AI-assisted hiring, intelligent contract review.",
          "Long-term bets: predictive analytics on business KPIs, LLM-powered customer-facing features, synthetic data generation for analytics.",
          "Build your roadmap in 90-day sprints with named owners and measurable outcomes. Resist the urge to boil the ocean in the first year.",
          "The roadmap is a communication artefact as much as a planning tool — use it to align CEO, CISO, and BU heads on what's coming and what trade-offs are being made.",
        ],
      },
      {
        id: "strat-3",
        title: "Build vs. Buy vs. Configure",
        duration: "35 min",
        summary: "Most enterprises should configure and adopt, not build from scratch. Know when each approach is justified and how to evaluate the options.",
        keyPoints: [
          "Buy (SaaS AI): Fastest time to value. Lowest engineering overhead. Highest vendor lock-in and data sharing risk. Good for: productivity tools, document intelligence, conversational agents on public data.",
          "Configure (platform + low-code): Use Azure AI Foundry, AWS Bedrock, or similar to build custom apps on top of foundation models. Balanced risk. Good for: internal chatbots on proprietary data, custom workflows.",
          "Build (fine-tuning, custom models): Highest cost and complexity. Reserved for cases where differentiated capability is a core competitive advantage or data cannot leave your environment.",
          "Evaluation scorecard for any vendor: (1) Where does data go? (2) What is the retention policy? (3) Is there tenant isolation? (4) SOC2/ISO27001 compliance? (5) Can we audit usage? (6) Can we turn it off cleanly?",
          "Total Cost of Ownership: licence + integration + training + ongoing governance + incident response overhead. The sticker price is never the full cost.",
        ],
      },
    ],
  },
  {
    id: "governance",
    title: "Governance & Risk",
    icon: "⚖️",
    color: "#10b981",
    desc: "Build the policy and compliance framework that lets the business move fast without blowing up.",
    modules: [
      {
        id: "gov-1",
        title: "Writing Your AI Use Policy",
        duration: "45 min",
        summary: "A well-written AI use policy is the cornerstone of everything else. It sets boundaries, enables autonomy, and protects the company.",
        keyPoints: [
          "Every AI policy needs four sections: (1) Approved tools and their data class limits, (2) Prohibited uses (regulated data in unapproved tools, impersonation, autonomous decisions over a risk threshold), (3) Employee responsibilities, (4) Consequences and reporting mechanism.",
          "Don't make it a 20-page legal document. The best policies are a 2-page document employees can actually read, plus a decision-tree quick reference card.",
          "Tiered approach: Green (approved, self-service), Amber (approved with controls, manager sign-off), Red (not approved, requires CAIO review). Employees should be able to self-classify most situations.",
          "Revisit the policy every quarter in the first year. The AI landscape moves faster than annual policy cycles.",
          "Get Legal and CISO sign-off before publishing. Get CEO endorsement so it lands with authority, not as an IT memo.",
        ],
        checklist: [
          "Identify all prohibited use cases before drafting approved list",
          "Define data classification tiers applicable to AI input/output",
          "Establish the process for employees to request new tool approvals",
          "Include a clear contact/escalation path for uncertainty",
          "Plan the all-hands communication strategy alongside the policy launch",
          "Set a policy review date no more than 6 months out",
        ],
      },
      {
        id: "gov-2",
        title: "Data Classification for AI",
        duration: "40 min",
        summary: "Not all data should go into all AI tools. A clear classification framework tells employees exactly what they can use, where.",
        keyPoints: [
          "Four-tier model: (1) Public — already externally available, safe in any AI tool. (2) Internal — routine business data, approved enterprise AI tools only. (3) Sensitive — HR, financials, customer PII, approved tools with DLP controls. (4) Regulated — HIPAA, GDPR, PCI — no AI tools without explicit legal review and contractual data processing agreements.",
          "Build a matrix: rows = data class, columns = AI tools. Each cell = approved / conditional / prohibited. Make it a one-page reference.",
          "The biggest real-world risk: employees pasting customer data into ChatGPT to draft a response. Address this explicitly and repeatedly.",
          "Technical controls reinforce policy: DLP policies in M365, Defender for Cloud Apps to shadow IT detection, browser plugins to warn on sensitive data paste.",
          "AI outputs can contain sensitive data even if inputs appear clean. Outputs that include inferred PII or confidential summaries need equal policy coverage.",
        ],
      },
      {
        id: "gov-3",
        title: "Regulatory Landscape",
        duration: "50 min",
        summary: "AI regulation is accelerating globally. Know the frameworks that matter and how to position your organisation ahead of compliance requirements.",
        keyPoints: [
          "EU AI Act (enforceable from 2025–2027): Risk-based classification of AI systems. High-risk AI (recruitment, credit, HR decisions) requires conformity assessments, transparency, and human oversight. Most enterprise productivity AI falls in 'limited risk' but get legal analysis for anything touching HR or customer decisions.",
          "NIST AI Risk Management Framework (AI RMF): Voluntary US framework with four core functions: Govern, Map, Measure, Manage. Widely adopted by US enterprises and federal agencies. Excellent structured baseline regardless of regulation.",
          "GDPR/privacy: Any AI processing personal data of EU residents needs a lawful basis, data minimisation, and the right to explanation for automated decisions. Check vendor DPAs carefully.",
          "SEC disclosure guidance (US): Public companies may need to disclose material AI-related risks. If you're at a public company, involve Legal and IR early.",
          "Industry-specific: Financial services (SR 11-7 model risk guidance), healthcare (FDA for AI/ML as medical device), and government contractors have additional requirements.",
          "Practical posture: You don't need to be a compliance lawyer. You need to know which frameworks apply, have a Legal/Compliance partner, and design your governance to accommodate the most likely requirements before they become mandatory.",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security & Data Protection",
    icon: "🔐",
    color: "#ef4444",
    desc: "The CAIO owns the security posture for AI. Understand threats, controls, and incident response.",
    modules: [
      {
        id: "sec-1",
        title: "AI Threat Model",
        duration: "55 min",
        summary: "AI introduces a new attack surface unlike anything in the traditional OWASP top ten. Know the threats before you build the controls.",
        keyPoints: [
          "Prompt injection: Malicious instructions embedded in user input or retrieved documents that hijack model behaviour. Particularly dangerous in agentic systems with access to email, files, or external APIs.",
          "Data exfiltration via LLMs: Models trained on sensitive data can 'leak' it in outputs. Also: employees can use AI tools to exfiltrate data from the org (ask the AI to 'summarise everything you know about Project X and email it to me').",
          "Model inversion and membership inference: With API access to models fine-tuned on proprietary data, adversaries may be able to reconstruct training data.",
          "Supply chain attacks: Compromised model weights, malicious plugins in agent frameworks, or tampered fine-tuning datasets.",
          "Jailbreaking and policy bypass: Social engineering techniques to get models to ignore safety guardrails (DAN prompts, role-play scenarios, iterative refinement).",
          "Hallucination as a risk vector: Confident but wrong outputs in high-stakes decisions (legal, medical, financial). The risk isn't just embarrassment — it's liability.",
          "Agentic risk amplification: An agent with email-send capability and calendar access that can be prompt-injected into performing actions on behalf of a compromised user is a fundamentally new threat class.",
        ],
      },
      {
        id: "sec-2",
        title: "Vendor & Model Risk Reviews",
        duration: "45 min",
        summary: "A repeatable framework for assessing any AI vendor or model before approving enterprise use. Build this process once and run it at scale.",
        keyPoints: [
          "Tier your review process: Low-risk tools (writing assist, summarisation on public data) → lighter-touch self-service form. High-risk tools (agentic, connected to sensitive systems) → full security review with CISO sign-off.",
          "Core assessment areas: (1) Data retention & training — does the vendor train on your data? How long is data retained? (2) Tenant isolation — are your prompts and completions logically separated from other customers? (3) Access & auth — SSO, MFA, audit logs, SCIM provisioning? (4) Compliance certifications — SOC2 Type II, ISO 27001, CSA STAR? (5) Breach notification — what's their obligation and SLA?",
          "Red flags: Vague or evasive answers about data retention. No SOC2. No option to disable model training on your data. No audit log. No data residency option for regulated industries.",
          "Contract and DPA: Ensure the vendor agreement includes a Data Processing Agreement (DPA) that specifies sub-processors, data location, breach notification timing (72 hours for GDPR), and the right to audit.",
          "Ongoing monitoring: Security reviews aren't one-time. Re-review when a vendor has a major update, acquisition, or policy change. Subscribe to vendor security bulletins.",
        ],
        checklist: [
          "Confirm no training on customer data (or that opt-out is configured)",
          "Validate tenant isolation architecture with vendor documentation",
          "Confirm SSO and MFA support",
          "Obtain and review SOC2 Type II report",
          "Execute a Data Processing Agreement before any sensitive data touches the tool",
          "Test prompt injection resistance with a red-team prompt set",
          "Document approved use cases and data class limits in the tool catalogue",
        ],
      },
      {
        id: "sec-3",
        title: "AI Monitoring & Incident Response",
        duration: "50 min",
        summary: "You need telemetry, alerts, and a playbook before an AI incident happens — not after.",
        keyPoints: [
          "What to monitor: (1) Prompt and completion volumes by user/team — anomaly detection for data exfiltration attempts. (2) Policy violations flagged by the AI platform's content filters. (3) Access logs — unusual tool access outside business hours or from unexpected locations. (4) Output quality sampling — did the AI produce something harmful or incorrect that was acted upon?",
          "Microsoft Purview + Defender for Cloud Apps give you reasonable coverage for M365-integrated AI tools. For third-party SaaS AI tools, most vendors provide usage dashboards and SIEM-compatible audit logs.",
          "Define AI-specific incident categories: (1) Data leak — sensitive data sent to unapproved system. (2) Policy bypass — employee deliberately circumventing AI controls. (3) Agentic action incident — AI agent performed an unintended action. (4) Hallucination consequence — AI output led to a business or legal harm.",
          "Playbook per category: Who is notified? What is the containment action (suspend the tool, revoke access, disable the integration)? What is the documentation and legal notification requirement?",
          "Tabletop exercises: Run a quarterly 30-minute AI incident tabletop with IT, Security, and Legal. Walk through a realistic scenario. Find the gaps in your playbook before an incident does.",
        ],
      },
      {
        id: "sec-4",
        title: "Zero Trust Principles for AI",
        duration: "35 min",
        summary: "Apply Zero Trust architecture thinking to AI deployments — never trust, always verify, limit blast radius.",
        keyPoints: [
          "Least-privilege for AI agents: An AI agent should only have the minimum permissions needed for its defined task. An HR scheduling agent has no reason to read financial data.",
          "Just-in-time access: Where possible, grant AI systems ephemeral access tokens rather than long-lived credentials. Reduces the blast radius of a compromised agent.",
          "Network segmentation: AI workloads processing sensitive data should operate in isolated network segments with strictly controlled egress. Prevent LLM API calls from leaking data to unexpected endpoints.",
          "Human-in-the-loop gates: For high-stakes agentic actions (sending external communications, executing financial transactions, modifying access control lists), require explicit human confirmation.",
          "Immutable audit logs: AI actions — especially agentic ones — must generate tamper-proof logs. This is non-negotiable for regulated industries and essential for incident post-mortems.",
        ],
      },
    ],
  },
  {
    id: "tech",
    title: "Technical AI Literacy",
    icon: "⚙️",
    color: "#8b5cf6",
    desc: "You don't need to build models, but you need to understand how they work well enough to ask hard questions.",
    modules: [
      {
        id: "tech-1",
        title: "How LLMs Actually Work",
        duration: "40 min",
        summary: "A working mental model of large language models without the PhD — focused on what matters for enterprise governance.",
        keyPoints: [
          "LLMs are trained on massive text corpora to predict the next token. They don't 'know' facts — they pattern-match on statistical co-occurrence. This is why they hallucinate confidently.",
          "Context window: The amount of text the model can 'see' at once (8K to 128K+ tokens in modern models). Everything outside the context window doesn't exist for the model. Relevant for RAG architecture design.",
          "Temperature: Controls randomness in outputs. Low temperature (0.0–0.2) = deterministic and consistent, good for structured data tasks. High temperature (0.7–1.0) = creative and varied, good for brainstorming.",
          "System prompt: Developer-set instructions that define the model's behaviour, persona, and constraints. The system prompt is your primary governance lever in any LLM-powered product.",
          "Fine-tuning vs. prompting vs. RAG: Fine-tuning trains the model on new data (expensive, slow to update, good for style/format). Prompting uses examples in-context (flexible, no training cost). RAG (Retrieval-Augmented Generation) retrieves relevant documents at query time (best for knowledge freshness and citation).",
          "Model providers to know: OpenAI (GPT-4o, o3), Anthropic (Claude 3.5), Google (Gemini 1.5/2.0), Meta (Llama 3 — open weights), Mistral (European, smaller models). Each has different terms, capabilities, and enterprise agreements.",
        ],
      },
      {
        id: "tech-2",
        title: "RAG Architecture for the Enterprise",
        duration: "45 min",
        summary: "Retrieval-Augmented Generation (RAG) is the dominant pattern for enterprise AI on private data. Understand it well enough to spec, govern, and evaluate implementations.",
        keyPoints: [
          "RAG pattern: User query → retrieve relevant chunks from a vector database → inject into LLM prompt → generate grounded response. Answers are cited and auditable.",
          "Why RAG over fine-tuning for enterprise: Your data changes constantly. RAG lets the knowledge base update without retraining. You can also see exactly what documents are being retrieved, which is critical for audit.",
          "Vector databases: Embeddings convert text to numerical vectors; similar meaning = similar vectors. Key players: Azure AI Search, Pinecone, Weaviate, Qdrant, pgvector (Postgres). For most enterprise deployments starting out, Azure AI Search is the pragmatic choice if you're in the Microsoft stack.",
          "Chunking strategy matters: How you split documents into pieces significantly affects retrieval quality. Too small = loses context. Too large = noisy. Semantic chunking (by topic/paragraph) outperforms fixed-size chunking.",
          "Evaluation is non-negotiable: RAG hallucination still happens when the right chunk isn't retrieved. Measure: retrieval precision, answer faithfulness, answer relevance. Tools: RAGAS, Azure AI Evaluation, DeepEval.",
          "Access control in RAG: Retrieved documents must respect the querying user's permissions. Don't surface HR documents to someone who shouldn't see them just because their query matches.",
        ],
      },
      {
        id: "tech-3",
        title: "Agentic AI & MCP",
        duration: "50 min",
        summary: "AI agents that take actions are the next frontier — and the next governance challenge. Understand the architecture before the use cases land on your desk.",
        keyPoints: [
          "An AI agent = LLM + tools + memory + instructions. The LLM reasons about which tool to use, calls it, observes the result, and continues until the task is done.",
          "Common tools in enterprise agents: web search, document retrieval, code execution, API calls (CRM, ITSM, email), calendar/scheduler, file read/write.",
          "Model Context Protocol (MCP): An emerging open standard (from Anthropic, widely adopted) that standardises how LLMs connect to tools and data sources. Think of it as USB-C for AI integrations. Knowing MCP is increasingly table-stakes.",
          "Multi-agent systems: Complex workflows can be broken into specialist agents (a researcher agent, a writer agent, a validator agent) orchestrated by a planner. Frameworks: LangGraph, AutoGen, CrewAI.",
          "Governance implications of agents: (1) Actions can be irreversible (sent email cannot be unsent). (2) Agents can chain tools in unexpected ways. (3) Prompt injection can hijack agent actions. (4) Audit trails become critical. Require human-in-the-loop checkpoints for any agent touching external systems.",
          "Evaluate every agent's tool permissions with the same rigour as a service account in your network. Principle of least privilege applies.",
        ],
      },
    ],
  },
  {
    id: "adoption",
    title: "Adoption & Change",
    icon: "🚀",
    color: "#f59e0b",
    desc: "Governance without adoption is theatre. Drive real behaviour change across the organisation.",
    modules: [
      {
        id: "adopt-1",
        title: "Change Management for AI",
        duration: "45 min",
        summary: "AI adoption is fundamentally a change management problem. Apply established frameworks to disrupt resistance before it kills your programme.",
        keyPoints: [
          "The ADKAR model applied to AI: Awareness (employees know AI tools exist and are available), Desire (they want to use them — often requires showing personal time-saving), Knowledge (they know how to use them effectively), Ability (they can actually do it — training and practice), Reinforcement (use is sustained — recognition, integration into workflows).",
          "Common resistance patterns: fear of job displacement (address directly and honestly — AI augments, restructuring is a separate business decision), privacy concerns (show them the data policy), distrust of AI accuracy (demonstrate limitations AND strengths), 'I don't need it' from high performers (show them the 10% who are using it to leap ahead).",
          "Executive sponsorship is not optional. If the CEO is not actively using and talking about AI tools, middle management will not prioritise adoption.",
          "Segment your workforce: early adopters (leverage as champions), pragmatists (need use-case demonstration and ROI), laggards (need mandated integration and manager reinforcement). Different interventions for each segment.",
          "Change saturation is real. If your company is simultaneously rolling out 3 other major changes, AI adoption will get deprioritised. Sequence or integrate where possible.",
        ],
      },
      {
        id: "adopt-2",
        title: "Role-Based Enablement",
        duration: "40 min",
        summary: "Generic AI training doesn't stick. Build targeted enablement for each persona — from the analyst to the exec.",
        keyPoints: [
          "Personas and their highest-value AI use cases: (1) Knowledge workers: document summarisation, email drafting, research synthesis. (2) Analysts/BI: natural language data querying, report generation, anomaly explanation. (3) Developers: code generation, review, test writing, documentation. (4) Managers: meeting summaries, status report drafting, briefing packs. (5) Executives: briefing digests, speech drafting, scenario analysis.",
          "Build a 'one prompt makes my day better' quick win for each persona. Get them to that aha moment in the first 10 minutes of training.",
          "Format matters: Executives want a 15-minute executive briefing. Analysts want a hands-on lab. Developers want a GitHub Copilot setup guide. Tailor delivery, not just content.",
          "Office hours outperform one-time training: A weekly 30-minute open session where employees bring their real work problems and an expert helps them solve it with AI is more effective than any formal training programme.",
          "Measure: training completion, tool activation rate, weekly active users, and qualitative feedback (NPS or simple Likert on 'I feel confident using AI in my work'). Don't measure seats licensed — measure people using.",
        ],
      },
      {
        id: "adopt-3",
        title: "AI Champions Network",
        duration: "30 min",
        summary: "You can't be everywhere. A distributed champions network multiplies your reach and embeds AI adoption into the business units themselves.",
        keyPoints: [
          "Champions are not IT ambassadors — they're business peers who have become enthusiastic users and can translate AI capability into the language of their team.",
          "Selection criteria: Intrinsically motivated, respected by peers, willing to spend 1–2 hours per week on the programme, located in each major BU.",
          "Support your champions: Give them early access to new tools, a private Slack/Teams channel for sharing tips, a monthly 1-hour briefing direct from the CAIO, and recognition visibility (shoutouts, internal newsletter features).",
          "Champion responsibilities: Promote approved tools, gather feedback from their team, escalate policy questions, and run informal peer learning sessions.",
          "Governance role: Champions are your early warning system. They'll know when teams are working around policy — and they'll tell you if they trust you.",
        ],
      },
    ],
  },
  {
    id: "leadership",
    title: "Executive Leadership",
    icon: "📣",
    color: "#ec4899",
    desc: "Lead up, out, and across. Master the executive conversations that fund and protect the AI programme.",
    modules: [
      {
        id: "lead-1",
        title: "CEO Communication Rhythm",
        duration: "40 min",
        summary: "The CEO doesn't want an AI update — they want a business update about AI. Frame everything through the lens of business value and strategic risk.",
        keyPoints: [
          "CEO communication format: (1) What did we do? (max 3 bullets of outcomes, not activities). (2) What is it worth? (time saved, cost avoided, revenue enabled — in numbers). (3) What's the risk we're managing? (1-2 sentences). (4) What do we need? (a single clear ask if any).",
          "Monthly AI narrative: Tell a story. 'This month our sales team cut proposal prep from 3 hours to 45 minutes using Copilot. 12 of 18 reps are now active users. At their billing rate that's $X recovered per month.' CEOs remember stories.",
          "Bring the CISO perspective into CEO comms: 'Here is the risk we avoided, and here's the control we added.' This builds your credibility as someone who manages both sides of the equation.",
          "Never surprise the CEO. If a significant AI incident occurs, or a high-profile new tool (like a Clawdbot moment) creates conversation internally, reach out proactively before they ask.",
          "Get a standing agenda item in the monthly exec review — even 5 minutes. Visibility compounds.",
        ],
      },
      {
        id: "lead-2",
        title: "CISO Partnership",
        duration: "35 min",
        summary: "The CISO is your most important partner, not an obstacle. Build a relationship that makes both of you more effective.",
        keyPoints: [
          "The CISO's primary concern is risk, not progress. Your job is to make the risk picture clear, not to minimise it. If you downplay risks to move faster, you lose their trust — and you deserve the consequences.",
          "Proactively involve the CISO in vendor evaluations before creating momentum around a tool. Surprises destroy the relationship.",
          "Create a shared AI risk dashboard: open control gaps, in-flight vendor reviews, recent incidents, and policy violations. Review jointly every month.",
          "Areas where CISO and CAIO interests align perfectly: data classification, access governance, incident response, vendor scrutiny. Lean into these.",
          "Where tension arises: speed of adoption vs. completeness of controls. Use compensating controls as a bridge — 'we can pilot this tool with these guardrails while the full security review completes.' This unblocks delivery without ignoring risk.",
          "Make the CISO look good in front of the CEO. If your joint AI governance work avoids an incident, give the CISO credit visibly. What goes around comes around.",
        ],
      },
      {
        id: "lead-3",
        title: "Board & Investor Communication",
        duration: "45 min",
        summary: "Boards are increasingly asking about AI strategy, risk, and competitive positioning. Be prepared with clear, credible answers.",
        keyPoints: [
          "Boards ask three types of AI questions: (1) Strategic — 'Are we competitive? What are others doing?' (2) Risk — 'Are we exposed? What's our liability?' (3) Financial — 'What are we spending and what's the return?'",
          "One-page AI strategy summary for board pack: Vision (one sentence), current state (maturity level, active tools, user adoption), risk posture (key controls in place, open gaps), financials (AI spend vs. value delivered), and next quarter priorities.",
          "Never over-promise to the board. AI hype is at peak levels — boards will appreciate honest, calibrated assessments over breathless optimism.",
          "Prepare for the 'responsible AI' question: How is the company ensuring AI is used ethically? What's the governance structure? Who is accountable? Have crisp answers.",
          "Benchmark externally: bring competitive context. 'Peers in our segment are at X maturity; here's where we stand and the timeline to catch up/lead.' Boards respond to competitive framing.",
        ],
      },
      {
        id: "lead-4",
        title: "Building the Business Case",
        duration: "40 min",
        summary: "AI programmes live and die by budget cycles. Build a business case that speaks to finance, not technology.",
        keyPoints: [
          "Frame around efficiency, revenue, and risk mitigation — the three levers CFOs recognise. 'AI reduces analyst report-prep time by 60%' becomes 'AI recovers $X analyst FTE hours per quarter, allowing redeployment to higher-value work without additional headcount.'",
          "Total Cost of Ownership: licences + IT infrastructure + security tooling + enablement and training + CAIO function overhead. Undersell the TCO and you'll be back asking for more money in 6 months.",
          "NPV / payback period: For every $1 invested in AI tooling and programme, what is the projected return and when? Even rough models (with stated assumptions) build credibility vs. qualitative narratives alone.",
          "Risk-adjusted value: 'If we don't invest in governed AI tools, our employees will use ungoverned tools. The cost of a data breach via shadow AI is $X (cite Ponemon or IBM Cost of Data Breach report). Our investment reduces that probability by Y%.'",
          "Start with a pilot business case, not a full programme ask. Prove value at small scale, then scale the investment. CFOs trust pilots more than grand visions.",
        ],
      },
    ],
  },
  {
    id: "value",
    title: "Measuring Value",
    icon: "📊",
    color: "#14b8a6",
    desc: "Quantify the impact of AI investments and communicate ROI in terms the business respects.",
    modules: [
      {
        id: "val-1",
        title: "AI KPIs & Adoption Metrics",
        duration: "35 min",
        summary: "Measure what matters — not what's easy. Define leading and lagging indicators that tell a coherent story of AI impact.",
        keyPoints: [
          "Adoption metrics (leading indicators): Monthly Active Users per licensed tool, feature adoption depth (users using basic vs. advanced features), activation rate (licensed seats that are actively using), prompt volume trends.",
          "Value metrics (lagging indicators): Time saved (survey-based or workflow instrumentation), task completion rate improvement, error rate reduction, NPS on AI-assisted vs. manual workflows.",
          "Business outcome metrics: Revenue influenced by AI-assisted activities, cost reduction from automation, risk events prevented or detected via AI monitoring.",
          "Don't track vanity metrics: Seats licensed, AI budget spent, number of POCs run. These measure activity, not impact.",
          "Cadence: Weekly adoption pulse (MAU trend), monthly value dashboard (for exec review), quarterly ROI report (for board pack).",
          "Be honest about attribution: AI impact is notoriously hard to isolate from other variables. Use control groups where possible, or be explicit that your value numbers are estimates with stated methodology.",
        ],
      },
      {
        id: "val-2",
        title: "Value Realization Framework",
        duration: "40 min",
        summary: "Systematically track value from pilot through scale, and use that evidence to fund the next wave of investment.",
        keyPoints: [
          "The value realization cycle: (1) Baseline — measure the current state before AI. (2) Pilot — instrument the AI-assisted workflow. (3) Measure delta — compare AI vs. baseline. (4) Synthesise — calculate value, document case study. (5) Scale — use evidence to expand and fund.",
          "Use cases needing formal measurement: any use case involving headcount decisions, significant licence spend (>$50K/year), or board-level visibility.",
          "Time-to-value metric: How long from tool approval to first measurable business outcome? Long time-to-value is usually a training/adoption gap, not a capability gap.",
          "Case study format for internal communication: (1) The problem (before state). (2) The AI solution (what was implemented, how it works). (3) The outcome (numbers). (4) The lesson (what would you do differently). Post these internally monthly — they build culture and create demand.",
          "Sunset the tools that don't deliver: This is as important as finding new tools. AI programme credibility requires being willing to say 'this didn't work, we're stopping it and reallocating the budget.'",
        ],
      },
      {
        id: "val-3",
        title: "Executive AI Reporting",
        duration: "30 min",
        summary: "Design a one-page monthly AI report that answers the questions executives actually ask — before they ask them.",
        keyPoints: [
          "Monthly AI Report structure: (1) Adoption snapshot — MAU trend chart, top 3 tools by active users. (2) Value delivered — top 3 outcomes this month with dollar or hour impact. (3) Risk posture — open risk items, recent incidents, policy changes. (4) Horizon scan — 1–2 new AI developments relevant to the business. (5) Next actions — what you need from leadership.",
          "Visuals over text: One trend line is worth three paragraphs. Use percentage change vs. prior month, not absolute numbers in isolation.",
          "The 'so what' test: For every metric on the page, ask 'so what?' If you can't answer that in one sentence, don't include it.",
          "Consistent format builds trust: Use the same template every month. Executives scan for changes, not new layouts. Consistency signals discipline.",
          "Distribute it before the meeting, not in it. Execs who have read the report use meeting time for decisions, not information transfer.",
        ],
      },
    ],
  },
];

// ─── RESOURCES DATA ───────────────────────────────────────────
const resources = [
  {
    category: "Frameworks & Standards",
    items: [
      { title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf", type: "Framework", desc: "The authoritative US framework for identifying, assessing, and managing AI risk. Free, vendor-neutral, widely adopted." },
      { title: "EU AI Act — Official Text", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021PC0206", type: "Regulation", desc: "Risk-based AI regulation with tiered compliance requirements. Essential for any company with EU operations or users." },
      { title: "OWASP Top 10 for LLM Applications", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", type: "Security", desc: "The definitive security threat catalogue for LLM-based applications. Required reading before approving any AI tool." },
      { title: "Google SAIF (Secure AI Framework)", url: "https://safety.google/cybersecurity-advancements/saif/", type: "Framework", desc: "Google's practical framework for securing AI systems. Covers supply chain, deployment, and runtime security." },
      { title: "ISO/IEC 42001 — AI Management System", url: "https://www.iso.org/standard/81230.html", type: "Framework", desc: "The international standard for AI management systems. Increasingly required in enterprise procurement and board-level governance conversations." },
      { title: "MITRE ATLAS — AI Threat Matrix", url: "https://atlas.mitre.org/", type: "Security", desc: "MITRE's adversarial threat landscape for AI systems. Maps real-world attack techniques against ML models — companion to ATT&CK for AI." },
      { title: "NIST Cybersecurity Framework 2.0", url: "https://www.nist.gov/cyberframework", type: "Framework", desc: "Updated CSF with explicit AI risk integration. Use this alongside the AI RMF to align security and AI governance in a single programme." },
      { title: "White House EO on Safe, Secure AI", url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/", type: "Regulation", desc: "Biden EO that mandated federal CAIO roles and set safety standards. Foundational policy context for any CAIO operating in or with the US government." },
      { title: "UK AI Safety Institute", url: "https://www.gov.uk/government/organisations/ai-safety-institute", type: "Research", desc: "UK government body publishing frontier AI safety evaluations. Useful for understanding emerging regulatory posture in the UK market." },
    ],
  },
  {
    category: "Certifications & Learning",
    items: [
      { title: "Microsoft AI-900 (Azure AI Fundamentals)", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/", type: "Cert", desc: "Vendor-neutral AI literacy certification. Excellent foundation and strong signal for enterprise AI practitioners." },
      { title: "Google Cloud Professional ML Engineer", url: "https://cloud.google.com/learn/certification/machine-learning-engineer", type: "Cert", desc: "Validates ability to design and deploy ML solutions at scale. Good technical depth for executives who want fluency." },
      { title: "DeepLearning.AI Short Courses", url: "https://www.deeplearning.ai/short-courses/", type: "Course", desc: "Practical 1–2 hour courses on LLMs, RAG, agents, and AI safety. Built by Andrew Ng. Free and best-in-class." },
      { title: "Anthropic's AI Safety Fundamentals", url: "https://www.aisafetyfundamentals.com/", type: "Course", desc: "Rigorous grounding in AI alignment and safety. Understanding this makes you a better CAIO." },
      { title: "AWS Certified ML — Specialty", url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/", type: "Cert", desc: "AWS's machine learning certification. Valuable if your org runs on AWS and you need hands-on credibility with your engineering teams." },
      { title: "AI for Everyone (Coursera / Andrew Ng)", url: "https://www.coursera.org/learn/ai-for-everyone", type: "Course", desc: "Non-technical course designed for business leaders. Ideal for a CAIO onboarding executives and boardroom stakeholders to AI concepts. Free to audit." },
      { title: "MIT Sloan AI Strategy Programme", url: "https://executive.mit.edu/course/artificial-intelligence-implications-for-business-strategy/", type: "Course", desc: "MIT Sloan executive education on AI business strategy. Strong credibility signal and excellent frameworks for the C-suite strategy track." },
      { title: "LinkedIn Learning: AI for Business Leaders", url: "https://www.linkedin.com/learning/topics/artificial-intelligence", type: "Course", desc: "Practical AI literacy courses available to LinkedIn Premium and enterprise licence holders. Good for rolling out to BU champions at scale." },
      { title: "ISACA CSX AI Fundamentals", url: "https://www.isaca.org/credentialing/certificate-in-ai-and-data-fundamentals", type: "Cert", desc: "ISACA's AI and data fundamentals certificate. Bridges AI literacy and IT audit/risk management — useful for CAIO + CISO alignment." },
    ],
  },
  {
    category: "Publications & Research",
    items: [
      { title: "IBM Cost of a Data Breach Report 2024", url: "https://www.ibm.com/reports/data-breach", type: "Report", desc: "Annual benchmark used to quantify risk in business cases. Cite this when making the security investment case." },
      { title: "McKinsey State of AI Report", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai", type: "Report", desc: "Annual survey of enterprise AI adoption, investment, and value. Essential for competitive benchmarking in exec comms." },
      { title: "Stanford AI Index Report", url: "https://aiindex.stanford.edu/report/", type: "Research", desc: "Comprehensive annual report on AI progress across capability, economics, policy, and public opinion." },
      { title: "Gartner Hype Cycle for AI", url: "https://www.gartner.com/en/articles/what-s-new-in-artificial-intelligence-from-the-2023-gartner-hype-cycle", type: "Research", desc: "Annual positioning of AI technologies on the maturity curve. Useful for calibrating internal expectations." },
      { title: "AI Now Institute Annual Report", url: "https://ainowinstitute.org/reports", type: "Research", desc: "Critical, policy-focused research on AI's social and governance implications. Essential for understanding labour, bias, and power concentration risks." },
      { title: "BCG AI Adoption at Scale", url: "https://www.bcg.com/publications/2024/ai-adoption-at-scale", type: "Report", desc: "BCG research on what separates organisations achieving ROI from AI vs. those stuck at experimentation. Key finding: governance infrastructure, not technology, is the differentiator." },
      { title: "Anthropic Economic Index", url: "https://www.anthropic.com/research/economic-index", type: "Research", desc: "Anthropic's analysis of how workers are actually using AI. Useful data for building the CAIO value measurement case and understanding real workforce impact." },
      { title: "Deloitte Tech Trends: AI Edition", url: "https://www2.deloitte.com/us/en/insights/focus/tech-trends.html", type: "Report", desc: "Deloitte's annual enterprise technology trends report with deep AI coverage. Strong benchmarking data for board presentations." },
      { title: "HBR: Why Every Company Needs a CAIO", url: "https://hbr.org/2024/01/why-every-company-needs-a-chief-ai-officer", type: "Article", desc: "Harvard Business Review's case for the CAIO role. Use this to socialise the concept with executives who question whether the role is necessary." },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { title: "Microsoft Copilot Adoption Hub", url: "https://adoption.microsoft.com/en-us/copilot/", type: "Tool", desc: "Microsoft's official resource centre for Copilot adoption — training guides, use case templates, and readiness tools." },
      { title: "RAGAS — RAG Evaluation Framework", url: "https://docs.ragas.io/", type: "Tool", desc: "Open-source framework for evaluating RAG pipelines on faithfulness, relevance, and context precision." },
      { title: "Azure AI Foundry", url: "https://ai.azure.com/", type: "Platform", desc: "Microsoft's enterprise AI development portal — model catalogue, deployment, fine-tuning, and evaluation in one place." },
      { title: "Hugging Face Model Hub", url: "https://huggingface.co/models", type: "Platform", desc: "Open-source model repository. Essential for evaluating open-weight models and understanding the landscape." },
      { title: "LangSmith (LangChain)", url: "https://smith.langchain.com/", type: "Tool", desc: "Observability and evaluation platform for LLM applications. Use this when reviewing your engineering team's AI app quality and debugging agentic workflows." },
      { title: "Weights & Biases (W&B)", url: "https://wandb.ai/", type: "Platform", desc: "ML experiment tracking and model evaluation platform. Standard tooling for teams doing fine-tuning or custom model development." },
      { title: "LMSYS Chatbot Arena", url: "https://chat.lmsys.org/", type: "Benchmark", desc: "Community-driven side-by-side LLM evaluation. The most honest performance comparison available — not controlled by any single vendor." },
      { title: "Amazon Bedrock", url: "https://aws.amazon.com/bedrock/", type: "Platform", desc: "AWS's managed foundation model service. Key procurement option for AWS-native organisations wanting enterprise LLM access with tenant isolation." },
      { title: "Google Vertex AI", url: "https://cloud.google.com/vertex-ai", type: "Platform", desc: "Google's enterprise ML platform. Provides access to Gemini models, fine-tuning, and agent-building for GCP-centric organisations." },
    ],
  },
  {
    category: "Stay Current",
    items: [
      { title: "The Batch (deeplearning.ai)", url: "https://www.deeplearning.ai/the-batch/", type: "Newsletter", desc: "Weekly AI news and commentary by Andrew Ng. Excellent signal-to-noise ratio for enterprise practitioners." },
      { title: "Import AI (Jack Clark)", url: "https://jack-clark.net/", type: "Newsletter", desc: "Weekly technical AI research digest. Great for staying ahead on capability developments before they become products." },
      { title: "AI Governance & Safety News (GovAI)", url: "https://www.governance.ai/", type: "Research", desc: "Centre for the Governance of AI — policy analysis, safety research, and responsible deployment guidance." },
      { title: "Hacker News — AI threads", url: "https://news.ycombinator.com/", type: "Community", desc: "Real-time community discussion on new AI tools, papers, and incidents. Good early signal on what practitioners are actually seeing." },
      { title: "TLDR AI Newsletter", url: "https://tldr.tech/ai", type: "Newsletter", desc: "Daily 5-minute digest of the most important AI news. High signal, low noise. Free. Good for staying aware without deep dives every day." },
      { title: "Ben's Bites", url: "https://bensbites.com/", type: "Newsletter", desc: "Daily AI news and product releases aimed at practitioners and builders. Covers new tools, papers, and use cases as they emerge." },
      { title: "Last Week in AI", url: "https://lastweekin.ai/", type: "Newsletter", desc: "Weekly roundup of AI news with thoughtful commentary on implications. Good for synthesising the week's signal before your Monday executive briefing." },
      { title: "AI Snake Oil (blog)", url: "https://aisnakeoil.com/", type: "Research", desc: "Princeton researchers cutting through AI hype with evidence-based critique. Essential counter-balance to vendor marketing — helps CAIOs ask better questions." },
      { title: "Lex Fridman Podcast", url: "https://lexfridman.com/podcast/", type: "Community", desc: "Long-form interviews with leading AI researchers and executives. Excellent for building technical fluency and understanding the frontier research landscape." },
    ],
  },
];

// ─── DEFAULT RADAR DATA ───────────────────────────────────────
const defaultRadar = [
  {
    id: crypto.randomUUID(),
    name: "Clawdbot",
    date: "2026-02-20",
    risk: "High",
    summary: "Rapidly adopted AI assistant with aggressive marketing and broad native data connector claims, including agentic workflows that can take actions across integrated SaaS platforms. Reached viral enterprise adoption within weeks of launch.",
    security: "Data retention policy is opaque — initial ToS allowed training on enterprise inputs. Connector auth model uses broad OAuth scopes. No independently verified SOC2 at time of review. No documented tenant isolation confirmed. Prompt injection risk is unmitigated in agentic flows.",
    recommendation: "Do not approve for production use on internal or sensitive data. Optionally run a 30-day red-team pilot in an isolated sandbox tenant with DLP policies enforced and no access to production SaaS integrations. Revisit once SOC2 is obtained and ToS is revised.",
  },
];

// ─── STATE ────────────────────────────────────────────────────
const KEY = "caio-skills-state-v2";

function loadState() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return defaultState();
  try { return JSON.parse(raw); } catch { return defaultState(); }
}
function defaultState() {
  return { moduleState: {}, metrics: { users: "", hours: "", risks: "" }, radar: defaultRadar };
}

let state = loadState();

function saveState() {
  localStorage.setItem(KEY, JSON.stringify(state));
  updateStats();
}

// ─── NAV ──────────────────────────────────────────────────────
let currentTrack = tracks[0].id;

function initNav() {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => showView(btn.dataset.view));
  });
  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => showView(btn.dataset.goto));
  });
}

function showView(view) {
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
  const el = document.getElementById(`view-${view}`);
  const btn = document.querySelector(`.nav-btn[data-view="${view}"]`);
  if (el) el.classList.remove("hidden");
  if (btn) btn.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ─── PROGRESS ─────────────────────────────────────────────────
function allModules() {
  return tracks.flatMap((t) => t.modules.map((m) => ({ ...m, trackId: t.id })));
}
function securityModules() {
  const secTrack = tracks.find((t) => t.id === "security");
  return secTrack ? secTrack.modules : [];
}

function updateStats() {
  const all = allModules();
  const done = all.filter((m) => state.moduleState[m.id]?.done).length;
  const total = all.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  const secAll = securityModules();
  const secDone = secAll.filter((m) => state.moduleState[m.id]?.done).length;
  const secPct = secAll.length ? Math.round((secDone / secAll.length) * 100) : 0;

  setEl("stat-done", `${done} / ${total}`);
  setEl("stat-pct", `${pct}%`);
  setEl("stat-sec", `${secPct}%`);
  setEl("stat-radar", String((state.radar || []).length));
  setEl("nav-progress-pill", `${pct}% complete`);

  const barFill = document.getElementById("curriculum-bar-fill");
  if (barFill) barFill.style.width = `${pct}%`;
  const pctLabel = document.getElementById("curriculum-pct-label");
  if (pctLabel) pctLabel.textContent = `${pct}%`;

  updateTrackCards();
  updateSidebarPcts();
}

function trackProgress(track) {
  const done = track.modules.filter((m) => state.moduleState[m.id]?.done).length;
  return { done, total: track.modules.length, pct: track.modules.length ? Math.round((done / track.modules.length) * 100) : 0 };
}

function setEl(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ─── HOME — TRACK CARDS ───────────────────────────────────────
function renderTrackGrid() {
  const grid = document.getElementById("track-grid");
  if (!grid) return;
  grid.innerHTML = "";
  tracks.forEach((track) => {
    const { done, total, pct } = trackProgress(track);
    const card = document.createElement("div");
    card.className = "track-card";
    card.style.setProperty("--track-color", track.color);
    card.innerHTML = `
      <div class="track-card-icon">${track.icon}</div>
      <h4>${track.title}</h4>
      <p>${track.desc}</p>
      <div class="track-progress-row">
        <div class="track-mini-bar"><div class="track-mini-fill" style="width:${pct}%"></div></div>
        <span class="track-pct">${done}/${total}</span>
      </div>`;
    card.addEventListener("click", () => {
      currentTrack = track.id;
      renderCurriculum();
      showView("curriculum");
    });
    grid.appendChild(card);
  });
}

function updateTrackCards() {
  document.querySelectorAll(".track-card").forEach((card, i) => {
    const track = tracks[i];
    if (!track) return;
    const { done, total, pct } = trackProgress(track);
    const fill = card.querySelector(".track-mini-fill");
    const pctEl = card.querySelector(".track-pct");
    if (fill) fill.style.width = `${pct}%`;
    if (pctEl) pctEl.textContent = `${done}/${total}`;
  });
}

// ─── RADAR PREVIEW (HOME) ────────────────────────────────────
function renderRadarPreview() {
  const host = document.getElementById("radar-preview");
  if (!host) return;
  const latest = [...(state.radar || [])].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);
  host.innerHTML = latest.length
    ? latest.map((item) => `
      <div class="radar-preview-card">
        <h5>${item.name} <span class="risk ${(item.risk || "").toLowerCase()}" style="font-size:.65rem">${item.risk} Risk</span></h5>
        <p>${item.summary.slice(0, 120)}…</p>
      </div>`).join("")
    : `<p style="color:var(--ink-3);font-size:.9rem">No radar briefs yet. <button class="btn text-btn" data-goto="radar">Add one →</button></p>`;
}

// ─── CURRICULUM ───────────────────────────────────────────────
function renderCurriculum() {
  renderSidebar();
  renderTrackContent(currentTrack);
}

function renderSidebar() {
  const sidebar = document.getElementById("track-sidebar");
  if (!sidebar) return;
  sidebar.innerHTML = "";
  tracks.forEach((track) => {
    const { pct } = trackProgress(track);
    const btn = document.createElement("button");
    btn.className = "sidebar-btn" + (track.id === currentTrack ? " active" : "");
    btn.innerHTML = `<span class="sb-dot" style="background:${track.color}"></span>${track.title}<span class="sidebar-pct">${pct}%</span>`;
    btn.addEventListener("click", () => {
      currentTrack = track.id;
      renderCurriculum();
    });
    sidebar.appendChild(btn);
  });
}

function updateSidebarPcts() {
  const btns = document.querySelectorAll(".sidebar-btn .sidebar-pct");
  btns.forEach((el, i) => {
    if (tracks[i]) el.textContent = `${trackProgress(tracks[i]).pct}%`;
  });
}

function renderTrackContent(trackId) {
  const track = tracks.find((t) => t.id === trackId);
  const host = document.getElementById("track-content");
  if (!track || !host) return;

  host.innerHTML = `
    <div class="track-intro">
      <h3>${track.icon} ${track.title}</h3>
      <p>${track.desc}</p>
    </div>
    <div class="modules-grid" id="modules-grid"></div>`;

  const grid = document.getElementById("modules-grid");
  const tpl = document.getElementById("module-tpl");

  track.modules.forEach((m, idx) => {
    const node = tpl.content.firstElementChild.cloneNode(true);
    const saved = state.moduleState[m.id] || { done: false, notes: "" };

    node.querySelector(".module-num").textContent = `Module ${idx + 1}`;
    node.querySelector(".module-duration").textContent = m.duration;
    node.querySelector(".module-title").textContent = m.title;
    node.querySelector(".module-summary").textContent = m.summary;

    // Key points
    const kpList = node.querySelector(".key-point-list");
    m.keyPoints.forEach((kp) => {
      const li = document.createElement("li");
      li.textContent = kp;
      kpList.appendChild(li);
    });

    // Checklist
    if (m.checklist) {
      const cl = node.querySelector(".module-checklist");
      cl.classList.remove("hidden");
      const ul = cl.querySelector(".checklist-list");
      m.checklist.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
    }

    // State
    const check = node.querySelector("input[type='checkbox']");
    check.checked = saved.done;
    check.dataset.moduleId = m.id;
    if (saved.done) node.classList.add("done");

    // Expand/collapse — entire clickzone (header + title + summary)
    const clickzone = node.querySelector(".module-clickzone");
    const body = node.querySelector(".module-body");
    clickzone.addEventListener("click", () => {
      const isExpanded = !body.classList.contains("hidden");
      body.classList.toggle("hidden", isExpanded);
      node.classList.toggle("expanded", !isExpanded);
    });
    clickzone.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") clickzone.click();
    });

    // Mark complete handler
    check.addEventListener("change", () => {
      state.moduleState[m.id] = { ...(state.moduleState[m.id] || {}), done: check.checked };
      node.classList.toggle("done", check.checked);
      saveState();
      updateStats();
    });

    // Start Module button or Coming Soon badge
    const deepDiveBtn = node.querySelector(".module-deepdive-btn");
    if (deepDiveBtn) {
      deepDiveBtn.classList.remove("hidden");
      if (modulePageContent[m.id]) {
        deepDiveBtn.textContent = `Start Module ${idx + 1}`;
        deepDiveBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          openModuleDetailPage(m.id);
        });
      } else {
        deepDiveBtn.textContent = "Coming Soon";
        deepDiveBtn.classList.add("module-coming-soon-btn");
        deepDiveBtn.disabled = true;
      }
    }

    grid.appendChild(node);
  });
}

// ─── RADAR ────────────────────────────────────────────────────
let radarFilter = "all";

function renderRadar() {
  const host = document.getElementById("radar-list");
  if (!host) return;
  const list = [...(state.radar || [])].sort((a, b) => b.date.localeCompare(a.date));
  const filtered = radarFilter === "all" ? list : list.filter((i) => i.risk === radarFilter);

  host.innerHTML = "";
  if (!filtered.length) {
    host.innerHTML = `<p style="color:var(--ink-3);padding:1rem 0">No briefs match this filter.</p>`;
    return;
  }

  const riskColors = { Low: "#15803d", Medium: "#a16207", High: "#dc2626" };

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "radar-item";
    card.style.setProperty("--risk-color", riskColors[item.risk] || "var(--line)");

    card.innerHTML = `
      <div class="radar-top">
        <h4>${item.name}</h4>
        <div class="radar-top-right">
          <span class="risk ${(item.risk || "").toLowerCase()}">${item.risk} Risk</span>
          <button class="radar-delete" data-id="${item.id}" title="Delete brief">✕ Delete</button>
        </div>
      </div>
      <div class="radar-field"><strong>Date:</strong> ${item.date}</div>
      <div class="radar-field"><strong>What it is:</strong> ${item.summary}</div>
      <div class="radar-field"><strong>Security lens:</strong> ${item.security}</div>
      <div class="radar-field"><strong>Recommendation:</strong> ${item.recommendation}</div>`;

    card.querySelector(".radar-delete").addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      if (!confirm("Delete this radar brief?")) return;
      state.radar = (state.radar || []).filter((r) => r.id !== id);
      saveState();
      renderRadar();
      renderRadarPreview();
    });

    host.appendChild(card);
  });
}

function wireRadarForm() {
  const openBtn = document.getElementById("open-radar-form");
  const cancelBtn = document.getElementById("cancel-radar-form");
  const formContainer = document.getElementById("radar-form-container");
  const form = document.getElementById("radar-form");

  openBtn?.addEventListener("click", () => {
    formContainer.classList.toggle("hidden");
    openBtn.textContent = formContainer.classList.contains("hidden") ? "+ Add Brief" : "✕ Close Form";
  });
  cancelBtn?.addEventListener("click", () => {
    formContainer.classList.add("hidden");
    openBtn.textContent = "+ Add Brief";
    form.reset();
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    state.radar = state.radar || [];
    state.radar.push({
      id: crypto.randomUUID(),
      name: document.getElementById("radar-name").value.trim(),
      date: document.getElementById("radar-date").value,
      risk: document.getElementById("radar-risk").value,
      summary: document.getElementById("radar-summary").value.trim(),
      security: document.getElementById("radar-security").value.trim(),
      recommendation: document.getElementById("radar-reco").value.trim(),
    });
    saveState();
    renderRadar();
    renderRadarPreview();
    form.reset();
    formContainer.classList.add("hidden");
    openBtn.textContent = "+ Add Brief";
  });

  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      radarFilter = pill.dataset.risk;
      renderRadar();
    });
  });
}

// ─── RESOURCES ────────────────────────────────────────────────
function resourceCardHTML(item) {
  return `<div class="resource-card">
    <span class="resource-type" data-type="${item.type}">${item.type}</span>
    <a href="${item.url}" target="_blank" rel="noopener">${item.title}</a>
    <p>${item.desc}</p>
  </div>`;
}

function renderResources() {
  const grid = document.getElementById("resources-grid");
  if (!grid) return;
  grid.innerHTML = "";

  resources.forEach((group, catIdx) => {
    const section = document.createElement("div");
    section.className = "res-section";

    const carouselId = `carousel-${catIdx}`;
    section.innerHTML = `
      <div class="res-section-header">
        <h3>${group.category}</h3>
        <button class="res-see-all" data-cat="${catIdx}">See all ${group.items.length} →</button>
      </div>
      <div class="res-carousel-wrap">
        <button class="res-arrow prev" data-cat="${catIdx}" aria-label="Previous">&#8249;</button>
        <div class="res-carousel-overflow">
          <div class="res-carousel-track" id="${carouselId}">
            ${group.items.map((item) => resourceCardHTML(item)).join("")}
          </div>
        </div>
        <button class="res-arrow next" data-cat="${catIdx}" aria-label="Next">&#8250;</button>
      </div>`;

    grid.appendChild(section);

    // Wire carousel
    const track = document.getElementById(carouselId);
    let idx = 0;
    const visibleCount = 4;
    const total = group.items.length;
    const prevBtn = section.querySelector(".res-arrow.prev");
    const nextBtn = section.querySelector(".res-arrow.next");

    function updateCarousel() {
      const cardEl = track.querySelector(".resource-card");
      if (!cardEl) return;
      const cardW = cardEl.offsetWidth;
      const gap = 16; // 1rem
      track.style.transform = `translateX(-${idx * (cardW + gap)}px)`;
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx >= total - visibleCount;
    }

    prevBtn.addEventListener("click", () => { if (idx > 0) { idx--; updateCarousel(); } });
    nextBtn.addEventListener("click", () => { if (idx < total - visibleCount) { idx++; updateCarousel(); } });

    // Initial state
    updateCarousel();
    prevBtn.disabled = true;
    nextBtn.disabled = total <= visibleCount;
  });

  // Wire "See all" buttons
  grid.querySelectorAll(".res-see-all").forEach((btn) => {
    btn.addEventListener("click", () => openResourceCategory(Number(btn.dataset.cat)));
  });
}

let resCatFilter = "all";

function openResourceCategory(catIdx) {
  const group = resources[catIdx];
  if (!group) return;

  document.getElementById("res-cat-title").textContent = group.category;
  document.getElementById("res-cat-breadcrumb").textContent = `Resources › ${group.category}`;
  document.getElementById("res-cat-count").textContent = `${group.items.length} resources`;

  // Build filter pills from unique types
  const types = ["All", ...new Set(group.items.map((i) => i.type))];
  const filterRow = document.getElementById("res-cat-filter-row");
  filterRow.innerHTML = types.map((t) =>
    `<button class="res-cat-pill${t === "All" ? " active" : ""}" data-filter="${t}">${t}</button>`
  ).join("");

  // Render all cards
  const catGrid = document.getElementById("res-cat-grid");
  catGrid.innerHTML = group.items.map((item) => resourceCardHTML(item)).join("");

  // Wire filter pills
  resCatFilter = "all";
  filterRow.querySelectorAll(".res-cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      filterRow.querySelectorAll(".res-cat-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const f = pill.dataset.filter;
      catGrid.querySelectorAll(".resource-card").forEach((card, i) => {
        const match = f === "All" || group.items[i].type === f;
        card.classList.toggle("filtered-out", !match);
      });
    });
  });

  // Back button
  document.getElementById("res-cat-back-btn").onclick = () => showView("resources");

  // Show view
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
  document.getElementById("view-resource-category").classList.remove("hidden");
  document.querySelector(".nav-btn[data-view='resources']")?.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ─── DATA PAGE ────────────────────────────────────────────────
function wireDataActions() {
  document.getElementById("reset-progress")?.addEventListener("click", () => {
    if (!confirm("Reset ALL progress, notes, and radar briefs? This cannot be undone.")) return;
    localStorage.removeItem(KEY);
    state = loadState();
    renderTrackGrid();
    renderCurriculum();
    renderRadar();
    renderRadarPreview();
    updateStats();
    syncMetricFields();
  });

  document.getElementById("export-data")?.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `caio-skills-snapshot-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("import-data")?.addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      state = JSON.parse(await file.text());
      saveState();
      renderTrackGrid();
      renderCurriculum();
      renderRadar();
      renderRadarPreview();
      syncMetricFields();
      e.target.value = "";
      alert("Snapshot imported successfully.");
    } catch {
      alert("Import failed. Please provide a valid snapshot JSON.");
    }
  });
}

function wireMetrics() {
  const fields = {
    "metric-users": "users",
    "metric-hours": "hours",
    "metric-risks": "risks",
  };
  Object.entries(fields).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = state.metrics?.[key] || "";
    el.addEventListener("input", () => {
      state.metrics = state.metrics || {};
      state.metrics[key] = el.value;
      saveState();
    });
  });
}

function syncMetricFields() {
  document.getElementById("metric-users").value = state.metrics?.users || "";
  document.getElementById("metric-hours").value = state.metrics?.hours || "";
  document.getElementById("metric-risks").value = state.metrics?.risks || "";
}

// ─── MODULE DETAIL PAGES ─────────────────────────────────────
// Add rich page content here for any module by its ID.
// Each entry is a function returning an HTML string so SVGs and
// dynamic expressions are fully supported.

const modulePageContent = {

  "found-1": () => /* html */`

<article class="module-detail-article">

  <!-- HERO -->
  <div class="detail-hero">
    <div class="detail-hero-meta">
      <span class="detail-tag">🏗️ CAIO Foundations</span>
      <span class="detail-tag">Module 1</span>
      <span class="detail-tag">~30 min</span>
      <span class="detail-tag accent">Foundational</span>
    </div>
    <h1>Defining the CAIO Role</h1>
    <p>The Chief AI Officer is one of the fastest-growing executive titles of the 2020s — yet its boundaries, authority, and day-to-day scope remain genuinely unclear at most companies. This module cuts through the hype and gives you a working definition of what the role actually requires.</p>
  </div>

  <!-- SECTION 1: CONTEXT -->
  <div class="detail-section">
    <h2>What is a CAIO?</h2>
    <p>The Chief AI Officer — or AI Enablement Lead, VP of AI, Head of AI Enablement depending on how your company titles things — is the executive responsible for ensuring the organisation uses AI <strong>effectively, safely, and in alignment with business strategy</strong>. This is emphatically not the same as the person who <em>builds</em> AI features in a product, or the CTO who manages the infrastructure that AI runs on.</p>
    <p>The CAIO owns the <strong>strategy, governance, and adoption</strong> layer of enterprise AI. Think of it this way: the Product team builds AI into the product, the CTO keeps the lights on, and the CAIO ensures that every team across the company knows which AI tools are approved, how to use them safely, and whether they're actually delivering value.</p>

    <div class="callout">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <p><strong>The term is still evolving.</strong> In 2023, the Biden administration issued an executive order on AI safety that included a mandate for federal agencies to appoint a Chief AI Officer. Since then, enterprise adoption of the title has accelerated rapidly. In 2024, McKinsey reported that 27% of enterprises with an active AI programme had appointed or were planning to appoint a dedicated AI leadership role at the C-suite or C-1 level — up from under 10% in 2022.</p>
      </div>
    </div>

    <div class="callout warn">
      <span class="callout-icon">⚠️</span>
      <div class="callout-body">
        <p><strong>Watch out for scope creep.</strong> The single biggest failure mode for early-stage CAIOs is trying to own everything AI-related — including product features, engineering infrastructure, and data pipelines. Your leverage is in <em>governance, enablement, and strategy</em>. Protect that lane and let the technical teams own theirs.</p>
      </div>
    </div>
  </div>

  <!-- SECTION 2: ORG CHART -->
  <div class="detail-section">
    <h2>Where does the CAIO fit in the organisation?</h2>
    <p>Most CAIOs report directly to the CEO or COO, which gives them the cross-functional authority needed to drive policy across business units, IT, security, and product simultaneously. A CAIO buried in IT or reporting to the CTO will struggle to influence HR, Legal, or Finance adoption — the org chart matters.</p>

    <div class="diagram-wrap">
      <svg viewBox="0 0 760 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Org chart showing the CAIO reporting to the CEO alongside other C-suite peers">
        <defs>
          <filter id="card-shadow" x="-5%" y="-5%" width="110%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#00000018"/>
          </filter>
        </defs>

        <!-- CEO box -->
        <rect x="310" y="8" width="140" height="44" rx="10" fill="#1e1b4b" filter="url(#card-shadow)"/>
        <text x="380" y="26" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="white">CEO / COO</text>
        <text x="380" y="41" text-anchor="middle" font-family="Inter, sans-serif" font-size="9.5" fill="rgba(255,255,255,.65)">Executive leadership</text>

        <!-- Vertical spine from CEO -->
        <line x1="380" y1="52" x2="380" y2="82" stroke="#cbd5e1" stroke-width="2"/>
        <!-- Horizontal spine -->
        <line x1="60" y1="82" x2="700" y2="82" stroke="#cbd5e1" stroke-width="2"/>

        <!-- Peer boxes + spines -->
        <!-- CFO x=60 -->
        <line x1="60" y1="82" x2="60" y2="96" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="7" y="96" width="106" height="44" rx="9" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#card-shadow)"/>
        <text x="60" y="114" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="10.5" font-weight="700" fill="#0d1117">CFO</text>
        <text x="60" y="129" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#8b95a1">Finance</text>

        <!-- CHRO x=190 -->
        <line x1="190" y1="82" x2="190" y2="96" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="137" y="96" width="106" height="44" rx="9" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#card-shadow)"/>
        <text x="190" y="114" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="10.5" font-weight="700" fill="#0d1117">CHRO</text>
        <text x="190" y="129" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#8b95a1">People &amp; Culture</text>

        <!-- CTO x=320 -->
        <line x1="320" y1="82" x2="320" y2="96" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="267" y="96" width="106" height="44" rx="9" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#card-shadow)"/>
        <text x="320" y="114" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="10.5" font-weight="700" fill="#0d1117">CTO / CIO</text>
        <text x="320" y="129" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#8b95a1">Technology</text>

        <!-- CAIO x=450 HIGHLIGHTED -->
        <line x1="450" y1="82" x2="450" y2="96" stroke="#4f46e5" stroke-width="2.5"/>
        <rect x="394" y="96" width="112" height="52" rx="10" fill="#4f46e5" filter="url(#card-shadow)"/>
        <text x="450" y="117" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="11.5" font-weight="700" fill="white">CAIO</text>
        <text x="450" y="132" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="rgba(255,255,255,.8)">AI Enablement</text>
        <text x="450" y="142" text-anchor="middle" font-family="Inter, sans-serif" font-size="8.5" fill="rgba(255,255,255,.6)">(You)</text>

        <!-- CISO x=580 -->
        <line x1="580" y1="82" x2="580" y2="96" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="527" y="96" width="106" height="44" rx="9" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#card-shadow)"/>
        <text x="580" y="114" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="10.5" font-weight="700" fill="#0d1117">CISO</text>
        <text x="580" y="129" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#8b95a1">Security</text>

        <!-- CDO x=700 -->
        <line x1="700" y1="82" x2="700" y2="96" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="647" y="96" width="106" height="44" rx="9" fill="white" stroke="#e2e8f0" stroke-width="1.5" filter="url(#card-shadow)"/>
        <text x="700" y="114" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="10.5" font-weight="700" fill="#0d1117">CDO</text>
        <text x="700" y="129" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#8b95a1">Data &amp; Analytics</text>

        <!-- Dotted collaboration lines below CAIO to CISO and CTO -->
        <line x1="450" y1="148" x2="450" y2="165" stroke="#c7d2fe" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="320" y1="140" x2="450" y2="165" stroke="#c7d2fe" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="580" y1="140" x2="450" y2="165" stroke="#c7d2fe" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="450" y="178" text-anchor="middle" font-family="Inter, sans-serif" font-size="8.5" fill="#a5b4fc">Key working relationships</text>
      </svg>
      <p class="diagram-caption">Typical CAIO position in the C-suite. Reporting to CEO/COO gives cross-functional authority. Closest working relationships are with CTO/CIO and CISO.</p>
    </div>

    <div class="callout tip">
      <span class="callout-icon">✅</span>
      <div class="callout-body">
        <p><strong>Reporting line is a negotiating point.</strong> If the CAIO role is being created within an existing company, push to report directly to the CEO or COO. Reporting to the CTO signals that AI is an IT function, not a business strategy function — and will limit your ability to drive adoption across non-technical business units.</p>
      </div>
    </div>
  </div>

  <!-- SECTION 3: RESPONSIBILITIES -->
  <div class="detail-section">
    <h2>What does a CAIO actually do?</h2>
    <p>The CAIO role has six distinct responsibility areas. Not all will be equally active at the same time — in the first year, governance and adoption dominate. By Year 2–3, value measurement and executive communication become the primary surface area.</p>

    <div class="resp-grid">
      <div class="resp-card">
        <div class="resp-card-icon">📋</div>
        <h4>Strategy &amp; Roadmap</h4>
        <p>Define the multi-year AI vision, prioritise use cases by value-to-risk ratio, and translate that plan into quarterly investment asks the board can approve.</p>
      </div>
      <div class="resp-card">
        <div class="resp-card-icon">⚖️</div>
        <h4>Governance &amp; Policy</h4>
        <p>Own the AI use policy, maintain the approved tool catalogue, design the vendor review process, and ensure compliance with emerging AI regulation.</p>
      </div>
      <div class="resp-card">
        <div class="resp-card-icon">🔐</div>
        <h4>Security &amp; Risk</h4>
        <p>Partner with the CISO to define the AI threat model, assess AI vendor risk, set data classification rules for AI inputs, and establish incident response playbooks.</p>
      </div>
      <div class="resp-card">
        <div class="resp-card-icon">🚀</div>
        <h4>Adoption &amp; Enablement</h4>
        <p>Design role-based training, run the AI champions network, measure activation rates, and drive behavioural change across the organisation — not just licence deployment.</p>
      </div>
      <div class="resp-card">
        <div class="resp-card-icon">📣</div>
        <h4>Executive Communication</h4>
        <p>Translate AI activity into business language for the CEO, CISO, board, and investors. Own the monthly AI narrative, incident reporting, and competitive benchmarking.</p>
      </div>
      <div class="resp-card">
        <div class="resp-card-icon">📊</div>
        <h4>Value Measurement</h4>
        <p>Define and track AI KPIs — adoption rates, time saved, cost avoided, risk events — and use that data to justify continued investment and course-correct underperforming programmes.</p>
      </div>
    </div>
  </div>

  <!-- SECTION 4: STAKEHOLDER MAP -->
  <div class="detail-section">
    <h2>Who does the CAIO interact with?</h2>
    <p>The CAIO is fundamentally a cross-functional role. On any given week you may be reviewing a vendor security assessment with the CISO, presenting ROI data to the CEO, debugging an adoption barrier with a BU head, and reviewing a legal risk memo from General Counsel. Understanding each relationship — and what each stakeholder needs from you — is critical.</p>

    <div class="stakeholder-grid">
      <div class="stakeholder-card-d">
        <h4>👑 CEO / COO <span class="s-role">Executive Sponsor</span></h4>
        <p>Your most important relationship. The CEO validates the AI programme's strategic importance. Without visible CEO sponsorship, middle management will not prioritise AI adoption.</p>
        <ul class="s-topics"><li>Monthly AI narrative</li><li>Business value framing</li><li>Investment asks</li><li>Competitive positioning</li></ul>
      </div>
      <div class="stakeholder-card-d">
        <h4>🔐 CISO <span class="s-role">Co-owner</span></h4>
        <p>The CISO is your closest technical partner. Align on the AI threat model, share the vendor review process, co-own the AI incident response playbook, and give the CISO credit publicly for the controls you build together.</p>
        <ul class="s-topics"><li>Vendor risk reviews</li><li>Data classification</li><li>Incident response</li><li>Policy sign-off</li></ul>
      </div>
      <div class="stakeholder-card-d">
        <h4>⚙️ CTO / IT Apps Leader <span class="s-role">Infrastructure Partner</span></h4>
        <p>CTO owns the infrastructure on which AI runs. Coordinate closely on approved tool catalogue, SSO/IAM integration for AI platforms, and the data architecture that underpins RAG and analytics use cases.</p>
        <ul class="s-topics"><li>Tool catalogue governance</li><li>SSO &amp; access control</li><li>AI platform architecture</li><li>Sandbox environments</li></ul>
      </div>
      <div class="stakeholder-card-d">
        <h4>🏢 Business Unit Leaders <span class="s-role">Adoption Champions</span></h4>
        <p>BU heads are where adoption either happens or stalls. They need to see a clear value case for their specific function before committing team time to training. Tailor your message to their outcomes, not your programme metrics.</p>
        <ul class="s-topics"><li>Use case identification</li><li>Change management</li><li>Champions placement</li><li>ROI by function</li></ul>
      </div>
      <div class="stakeholder-card-d">
        <h4>🏗️ Product Team <span class="s-role">AI-In-Product Boundary</span></h4>
        <p>Product builds AI features in the product. CAIO governs AI used internally. These lanes must be clearly separated early — otherwise scope conflict and funding battles emerge. Partner on shared infrastructure (model access, data governance) while respecting the product team's autonomy.</p>
        <ul class="s-topics"><li>Shared infrastructure</li><li>Model procurement</li><li>Responsible AI features</li></ul>
      </div>
      <div class="stakeholder-card-d">
        <h4>⚖️ Legal &amp; Compliance <span class="s-role">Risk Partner</span></h4>
        <p>AI regulation is incoming. Legal needs to be involved in AI policy, vendor contracts (DPAs), and any AI use case touching regulated data or automated decisions. Involve them early — surprises in Legal are expensive.</p>
        <ul class="s-topics"><li>AI use policy review</li><li>Data processing agreements</li><li>Regulatory tracking</li><li>Liability framing</li></ul>
      </div>
      <div class="stakeholder-card-d">
        <h4>🎓 HR &amp; L&D <span class="s-role">Enablement Engine</span></h4>
        <p>HR owns the training and change management infrastructure. L&amp;D can scale your enablement programmes far beyond what a small AI team can deliver alone. Partner on role-based training curricula and AI literacy onboarding for new hires.</p>
        <ul class="s-topics"><li>Training delivery</li><li>Skills gap analysis</li><li>AI in onboarding</li><li>Change management</li></ul>
      </div>
      <div class="stakeholder-card-d">
        <h4>💼 CFO / Board <span class="s-role">Investment Decision Makers</span></h4>
        <p>CFO controls AI budget. The board reviews strategic AI risk and competitive positioning. Both need clear ROI framing, honest risk disclosure, and a credible multi-year investment case — not just enthusiasm about AI capabilities.</p>
        <ul class="s-topics"><li>AI business case</li><li>Total cost of ownership</li><li>Board-level risk summary</li><li>Competitive benchmarks</li></ul>
      </div>
    </div>
  </div>

  <!-- SECTION 5: CAIO VS OTHER ROLES -->
  <div class="detail-section">
    <h2>CAIO vs. related roles</h2>
    <p>Confusion about role boundaries is one of the fastest ways to create political friction. Here is a clear delineation between the CAIO and the adjacent executive roles most likely to overlap.</p>
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>CTO / CIO</th>
            <th>CISO</th>
            <th>CDO</th>
            <th class="hl">CAIO (You)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary mandate</td>
            <td>Technology infrastructure &amp; delivery</td>
            <td>Information security &amp; risk</td>
            <td>Data strategy &amp; quality</td>
            <td class="hl">AI enablement, adoption, and governance</td>
          </tr>
          <tr>
            <td>Owns AI tools?</td>
            <td>Infrastructure that runs them</td>
            <td>Security posture for them</td>
            <td>Data pipelines feeding them</td>
            <td class="hl">The approved catalogue and use policy</td>
          </tr>
          <tr>
            <td>Primary customer</td>
            <td>Engineering &amp; IT teams</td>
            <td>Whole org (risk protection)</td>
            <td>Data consumers, analysts</td>
            <td class="hl">All business users of AI</td>
          </tr>
          <tr>
            <td>Key metric</td>
            <td>System uptime, delivery velocity</td>
            <td>Risk posture, incidents avoided</td>
            <td>Data quality, analytics ROI</td>
            <td class="hl">AI adoption rate, business value delivered</td>
          </tr>
          <tr>
            <td>AI security responsibility</td>
            <td>Shared (infrastructure layer)</td>
            <td>Primary owner</td>
            <td>Data security overlap</td>
            <td class="hl">Policy &amp; vendor gate; co-owns with CISO</td>
          </tr>
          <tr>
            <td>Talks to board about</td>
            <td>Tech debt, platform modernisation</td>
            <td>Breach risk, compliance posture</td>
            <td>Data maturity, analytics value</td>
            <td class="hl">AI strategy, adoption ROI, AI-specific risk</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- SECTION 6: 90 DAYS -->
  <div class="detail-section">
    <h2>First 90 days</h2>
    <p>The first 90 days are your window to establish credibility, learn the landscape, and show early enough progress that the CEO and board see the role as worth continuing to invest in. Resist the urge to build the governance framework before you've done the listening.</p>

    <div class="timeline">
      <div class="timeline-phase">
        <div class="timeline-phase-header">
          <div class="phase-dot" style="background:#4f46e5">1</div>
          <div>
            <h4>Days 1–30</h4>
            <p class="phase-subtitle">Listen &amp; Map</p>
          </div>
        </div>
        <ul>
          <li>Interview CEO, CISO, CTO, and at least 2 BU heads</li>
          <li>Inventory all AI tools currently in use — licensed and shadow</li>
          <li>Map who is AI-active vs. AI-resistant and why</li>
          <li>Document the top 5 AI use cases already happening</li>
          <li>Identify the 3 biggest pain points teams want AI to solve</li>
          <li>Review any existing AI or data policies</li>
        </ul>
      </div>
      <div class="timeline-phase">
        <div class="timeline-phase-header">
          <div class="phase-dot" style="background:#0ea5e9">2</div>
          <div>
            <h4>Days 31–60</h4>
            <p class="phase-subtitle">Assess &amp; Prioritise</p>
          </div>
        </div>
        <ul>
          <li>Run a maturity assessment against the NIST AI RMF</li>
          <li>Gap-analyse current tools against the data classification framework</li>
          <li>Score the top use cases: value vs. complexity vs. risk</li>
          <li>Draft v1 of the AI use policy with Legal and CISO</li>
          <li>Identify 1–2 quick-win pilots ready to launch</li>
          <li>Define the first 3 AI KPIs you will report on monthly</li>
        </ul>
      </div>
      <div class="timeline-phase">
        <div class="timeline-phase-header">
          <div class="phase-dot" style="background:#10b981">3</div>
          <div>
            <h4>Days 61–90</h4>
            <p class="phase-subtitle">Act &amp; Communicate</p>
          </div>
        </div>
        <ul>
          <li>Publish v1 of the AI use policy company-wide</li>
          <li>Launch the first governed pilot with telemetry in place</li>
          <li>Deliver your first executive AI briefing to the CEO</li>
          <li>Stand up the monthly AI review meeting cadence</li>
          <li>Recruit the first 3–5 AI champions from the BUs</li>
          <li>Present the 6-month roadmap to the leadership team</li>
        </ul>
      </div>
    </div>

    <div class="callout tip" style="margin-top:1.25rem">
      <span class="callout-icon">✅</span>
      <div class="callout-body">
        <p><strong>Ship one visible win before Day 90.</strong> It doesn't have to be big — a single team using Copilot to cut a weekly report from 2 hours to 20 minutes, documented and shared internally, builds more organisational belief than any governance framework launched in isolation.</p>
      </div>
    </div>
  </div>

  <!-- SECTION 7: RESOURCES -->
  <div class="detail-section">
    <h2>Further reading &amp; source material</h2>
    <p>These are the primary sources and most useful references for understanding the CAIO role, its emergence, and its operational expectations.</p>

    <div class="detail-resources">
      <div class="detail-resource-card">
        <span class="r-type">US Government</span>
        <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/" target="_blank" rel="noopener">🔗 Biden EO on Safe AI (Oct 2023)</a>
        <p>The executive order that mandated federal CAIOs and accelerated the title's adoption in enterprise. Section 10 covers the Chief AI Officer mandate directly.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Framework</span>
        <a href="https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf" target="_blank" rel="noopener">🔗 NIST AI Risk Management Framework</a>
        <p>The most widely adopted enterprise AI governance framework. The 90-day maturity assessment referenced in this module uses the NIST AI RMF as its baseline.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Research</span>
        <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener">🔗 McKinsey State of AI Report</a>
        <p>Annual survey cited for the 27% figure on enterprise AI leadership appointments. Essential reading for competitive context in your first board presentation.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Playbook</span>
        <a href="https://ainowinstitute.org/" target="_blank" rel="noopener">🔗 AI Now Institute</a>
        <p>Independent research institute focused on the social implications of AI. Useful for responsible AI frameworks and staying ahead of regulatory trends.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Book</span>
        <a href="https://www.amazon.com/Power-Prediction-Disruptive-Economics-Artificial/dp/1647824192" target="_blank" rel="noopener">🔗 Power and Prediction — Agrawal, Gans, Goldfarb</a>
        <p>The best book for understanding how AI shifts decision-making power in organisations. Essential framing for the CAIO's strategic role — AI reduces the cost of prediction, which reshapes who makes decisions and how.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Course</span>
        <a href="https://www.deeplearning.ai/short-courses/" target="_blank" rel="noopener">🔗 DeepLearning.AI Short Courses</a>
        <p>Andrew Ng's practical 1–2 hour courses on LLMs, agents, and AI for business. The "AI for Everyone" course is a particularly clean primer on the CAIO framing of AI strategy.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Community</span>
        <a href="https://www.chiefaiofficerassociation.org/" target="_blank" rel="noopener">🔗 Chief AI Officer Association</a>
        <p>Emerging peer community specifically for CAIO and VP AI practitioners. Useful for benchmarking against peers and staying current on how the role is evolving across industries.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Article</span>
        <a href="https://hbr.org/2024/01/why-every-company-needs-a-chief-ai-officer" target="_blank" rel="noopener">🔗 HBR: Why Every Company Needs a Chief AI Officer</a>
        <p>Harvard Business Review's case for the CAIO role. Useful for socialising the concept internally with executives who question whether the role is necessary.</p>
      </div>
    </div>
  </div>

</article>
`,

  "found-2": () => /* html */`

<article class="module-detail-article">

  <!-- HERO -->
  <div class="detail-hero">
    <div class="detail-hero-meta">
      <span class="detail-tag">🏗️ CAIO Foundations</span>
      <span class="detail-tag">Module 2</span>
      <span class="detail-tag">~45 min</span>
      <span class="detail-tag accent">Foundational</span>
    </div>
    <h1>Enterprise AI Landscape</h1>
    <p>Before you can govern AI, you need to understand the terrain. This module gives you a working map of how enterprise AI is structured — from foundation models to the SaaS tools sitting on your employees' desktops right now.</p>
  </div>

  <!-- SECTION 1: LLMs -->
  <div class="detail-section">
    <h2>Why Large Language Models Changed Everything</h2>
    <p>The enterprise AI story of the 2020s is largely the story of <strong>Large Language Models (LLMs)</strong>. These are foundation models — neural networks trained on massive text datasets — that can understand and generate human language with enough fluency to be useful in business workflows.</p>
    <p>The major frontier LLMs as of 2025–26 are <strong>GPT-4o</strong> (OpenAI / Microsoft), <strong>Gemini 1.5/2.0</strong> (Google DeepMind), <strong>Claude 3.5/3.7</strong> (Anthropic), and <strong>Llama 3</strong> (Meta, open-weights). Each has different strengths, pricing models, data handling policies, and enterprise compliance postures. Your job is not to know every benchmark — it is to know <em>which to trust with which data</em> and <em>what each costs at scale</em>.</p>

    <div class="callout">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <p><strong>Three concepts every CAIO must understand about LLMs:</strong></p>
        <ul style="margin:.4rem 0 0 1.2rem;padding:0;line-height:1.8;font-size:.9rem">
          <li><strong>Context window:</strong> The amount of text the model can "see" at once. Larger windows (128k–1M tokens) allow longer documents but increase cost and latency.</li>
          <li><strong>Fine-tuning vs prompting:</strong> Prompting is free and fast. Fine-tuning trains the model on your data for specialised tasks — higher quality, higher cost, higher risk if training data is sensitive.</li>
          <li><strong>Prompt sensitivity:</strong> The same question phrased differently can produce wildly different outputs. This is a governance risk: employees need structured prompting guidance, not just access.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SECTION 2: 4-LAYER STACK DIAGRAM -->
  <div class="detail-section">
    <h2>The Four-Layer Enterprise AI Stack</h2>
    <p>Enterprise AI is not one thing — it is four stacking layers, each with different owners, risks, and governance levers. A CAIO needs to understand all four and know which layer most of your organisation's day-to-day AI activity lives in.</p>

    <div class="diagram-wrap">
      <svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-layer enterprise AI stack diagram">
        <defs>
          <filter id="ls" x="-5%" y="-5%" width="115%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#00000015"/>
          </filter>
        </defs>

        <!-- Layer 4 — Foundation Models (bottom) -->
        <rect x="20" y="228" width="640" height="52" rx="12" fill="#1e1b4b" filter="url(#ls)"/>
        <text x="40" y="249" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="white">Layer 1 — Foundation Models</text>
        <text x="40" y="265" font-family="Inter, sans-serif" font-size="9.5" fill="rgba(255,255,255,.65)">GPT-4o · Gemini 2.0 · Claude 3.7 · Llama 3 · Mistral</text>
        <text x="640" y="259" text-anchor="end" font-family="Inter, sans-serif" font-size="9" fill="rgba(255,255,255,.5)">Owner: Vendors (OpenAI, Google, Anthropic, Meta)</text>

        <!-- Layer 3 — Orchestration -->
        <rect x="20" y="162" width="640" height="52" rx="12" fill="#312e81" filter="url(#ls)"/>
        <text x="40" y="183" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="white">Layer 2 — Platform Orchestration</text>
        <text x="40" y="199" font-family="Inter, sans-serif" font-size="9.5" fill="rgba(255,255,255,.65)">Azure AI Foundry · LangChain · Semantic Kernel · AWS Bedrock · Google Vertex AI</text>
        <text x="640" y="193" text-anchor="end" font-family="Inter, sans-serif" font-size="9" fill="rgba(255,255,255,.5)">Owner: IT / Engineering</text>

        <!-- Layer 2 — SaaS AI Copilots -->
        <rect x="20" y="96" width="640" height="52" rx="12" fill="#4338ca" filter="url(#ls)"/>
        <text x="40" y="117" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="white">Layer 3 — Enterprise SaaS AI Copilots</text>
        <text x="40" y="133" font-family="Inter, sans-serif" font-size="9.5" fill="rgba(255,255,255,.75)">Microsoft 365 Copilot · Glean · Salesforce Einstein · GitHub Copilot · Notion AI · Slack AI</text>
        <text x="640" y="127" text-anchor="end" font-family="Inter, sans-serif" font-size="9" fill="rgba(255,255,255,.6)">Owner: CAIO + IT (procurement &amp; policy)</text>

        <!-- Layer 1 — Custom Apps (top) -->
        <rect x="20" y="20" width="640" height="62" rx="12" fill="#4f46e5" filter="url(#ls)"/>
        <rect x="20" y="20" width="640" height="62" rx="12" fill="none" stroke="#818cf8" stroke-width="2"/>
        <text x="40" y="43" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="white">Layer 4 — Custom AI Applications</text>
        <text x="40" y="60" font-family="Inter, sans-serif" font-size="9.5" fill="rgba(255,255,255,.8)">RAG pipelines · Internal chatbots · AI-augmented workflows · Fine-tuned models on company data</text>
        <text x="640" y="50" text-anchor="end" font-family="Inter, sans-serif" font-size="9" fill="rgba(255,255,255,.65)">Owner: Product / Engineering  ← highest risk</text>

        <!-- Arrow label -->
        <text x="4" y="162" font-family="Space Grotesk, sans-serif" font-size="8.5" fill="#94a3b8" transform="rotate(-90,4,162)">Increasing customisation &amp; risk →</text>
      </svg>
      <p class="diagram-caption">The four-layer enterprise AI stack. Most employees interact at Layer 3 (SaaS copilots). CAIOs govern Layers 2–4. Layer 1 is vendor territory — your leverage there is in procurement terms and data processing agreements.</p>
    </div>

    <div class="callout tip">
      <span class="callout-icon">🎯</span>
      <div class="callout-body">
        <p><strong>Where most orgs are today:</strong> The majority of enterprise AI spend in 2025 is at Layer 3 — SaaS copilots embedded into existing tools (Microsoft Copilot in M365, AI in Salesforce, Slack AI). This is where your governance focus should be in Year 1. Layer 4 custom applications are higher risk and typically require a separate review process.</p>
      </div>
    </div>
  </div>

  <!-- SECTION 3: Agentic AI -->
  <div class="detail-section">
    <h2>Agentic AI: The Next Governance Frontier</h2>
    <p>While most current enterprise AI is <strong>reactive</strong> (a user asks a question, the model answers), <strong>agentic AI</strong> is different — these systems can take sequences of actions autonomously: browse the web, execute code, query databases, send emails, create calendar events, and call APIs.</p>
    <p>Examples already in production: <strong>Microsoft Copilot Agents</strong> in M365 that can autonomously draft and send emails based on triggers, <strong>Salesforce Agentforce</strong> that can manage customer conversations end-to-end, <strong>GitHub Copilot Workspace</strong> that can write and commit code with minimal human review.</p>

    <div class="callout warn">
      <span class="callout-icon">⚠️</span>
      <div class="callout-body">
        <p><strong>Why agentic AI demands elevated scrutiny:</strong> A traditional LLM that gives bad advice is embarrassing. An agent that autonomously sends a bad email to a customer, commits incorrect code, or exfiltrates data as part of a multi-step task is a security and compliance incident. Treat every agentic tool as if it has human-level access to whatever systems it can reach — because functionally, it does.</p>
      </div>
    </div>

    <div class="resp-grid" style="margin-top:1.25rem">
      <div class="resp-card">
        <h4>Reactive AI</h4>
        <ul style="padding-left:1.2rem;font-size:.88rem;color:var(--ink-2);line-height:1.8;margin:.5rem 0 0">
          <li>User-initiated at every step</li>
          <li>Output is text/content only</li>
          <li>No system access</li>
          <li>Auditable per interaction</li>
          <li><strong>Examples:</strong> ChatGPT, Copilot chat</li>
        </ul>
      </div>
      <div class="resp-card">
        <h4 style="color:#ef4444">Agentic AI ⚡</h4>
        <ul style="padding-left:1.2rem;font-size:.88rem;color:var(--ink-2);line-height:1.8;margin:.5rem 0 0">
          <li>Can act without per-step approval</li>
          <li>Takes real actions (emails, code, API calls)</li>
          <li>Access to systems and credentials</li>
          <li>Harder to audit — chains of steps</li>
          <li><strong>Examples:</strong> Copilot Agents, Agentforce</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SECTION 4: Key tools -->
  <div class="detail-section">
    <h2>Key Enterprise Tools to Know</h2>
    <p>You don't need to be an expert in every tool, but you need enough fluency to lead procurement conversations, evaluate vendor security claims, and set appropriate usage policies.</p>

    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Layer</th>
            <th>Primary Use Case</th>
            <th>Key Risk</th>
            <th>Data Handling</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Microsoft 365 Copilot</strong></td>
            <td>3 — SaaS Copilot</td>
            <td>Productivity across Word, Outlook, Teams, Excel</td>
            <td>Over-sharing of internal data; permissioning gaps in SharePoint</td>
            <td>Stays within Microsoft tenant; no training on your data by default</td>
          </tr>
          <tr>
            <td><strong>Glean</strong></td>
            <td>3 — SaaS Copilot</td>
            <td>Enterprise AI search + agents across all connected tools</td>
            <td>Broad data access; surface PII and restricted docs in responses</td>
            <td>Indexes your internal data; review data residency terms</td>
          </tr>
          <tr>
            <td><strong>GitHub Copilot</strong></td>
            <td>3 — SaaS Copilot</td>
            <td>AI code completion and generation for developers</td>
            <td>Suggesting code with security flaws; leaking proprietary patterns</td>
            <td>Code snippets sent to GitHub; business tier excludes training use</td>
          </tr>
          <tr>
            <td><strong>Salesforce Einstein / Agentforce</strong></td>
            <td>3–4 hybrid</td>
            <td>CRM AI: summarisation, predictive lead scoring, autonomous agents</td>
            <td>Customer data in model prompts; autonomous actions on records</td>
            <td>Within Salesforce org; check Einstein Trust Layer settings</td>
          </tr>
          <tr>
            <td><strong>Azure OpenAI / AWS Bedrock</strong></td>
            <td>2 — Orchestration</td>
            <td>API access to frontier models for custom app development</td>
            <td>Prompt injection in custom apps; developers bypassing governance</td>
            <td>Your cloud tenant; no training on data; enterprise DPA available</td>
          </tr>
          <tr>
            <td><strong>ChatGPT / Claude.ai (consumer)</strong></td>
            <td>Shadow AI</td>
            <td>General-purpose tasks on personal/free accounts</td>
            <td>Employees pasting confidential data into ungoverned endpoints</td>
            <td>May be used for training; no enterprise DPA on free tier</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- SECTION 5: Shadow AI -->
  <div class="detail-section">
    <h2>Shadow AI: Your Most Immediate Governance Challenge</h2>
    <p>Shadow AI is the use of AI tools that are not officially approved, provisioned, or monitored by your organisation. In 2025, the majority of knowledge workers in most enterprises are using some form of shadow AI — ChatGPT, Claude, Gemini, Perplexity, personal Copilot subscriptions, AI writing assistants in browsers, and more.</p>

    <div class="callout">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <p><strong>The right response is not prohibition.</strong> Companies that flatly ban consumer AI tools don't eliminate the behaviour — they drive it underground and create a culture of non-compliance. Your goal is to <em>channel</em> that energy into approved tools with proper data handling agreements, while clearly communicating why certain tools are off-limits for work data.</p>
      </div>
    </div>

    <div class="stakeholder-grid" style="margin-top:1.25rem">
      <div class="stakeholder-card-d">
        <div class="sk-top"><span class="sk-badge" style="background:#fee2e2;color:#b91c1c">High Risk</span></div>
        <h4>Pasting company data into consumer tools</h4>
        <p>Customer lists, financial models, source code, internal strategy docs pasted into ChatGPT free tier, Gemini, or Perplexity — no enterprise DPA, potentially used for training.</p>
      </div>
      <div class="stakeholder-card-d">
        <div class="sk-top"><span class="sk-badge" style="background:#fef9c3;color:#854d0e">Medium Risk</span></div>
        <h4>Unvetted browser extensions</h4>
        <p>AI writing assistants (Grammarly AI, various Chrome extensions) with access to everything in the browser — including logged-in SaaS apps and internal dashboards.</p>
      </div>
      <div class="stakeholder-card-d">
        <div class="sk-top"><span class="sk-badge" style="background:#dcfce7;color:#15803d">Manageable</span></div>
        <h4>Personal AI subscriptions for non-sensitive tasks</h4>
        <p>Employees using personal Claude/ChatGPT for general drafting, learning, or brainstorming with no company data involved. Nuanced — needs clear policy guidance rather than outright ban.</p>
      </div>
    </div>
  </div>

  <!-- SECTION 6: Inventory checklist -->
  <div class="detail-section">
    <h2>Your First Task: The AI Tool Inventory</h2>
    <p>Before you can govern AI, you need to know what's in use. This is typically the first concrete deliverable for a new CAIO and the foundation for everything that follows — your AI use policy, your approved tool catalogue, and your data classification framework.</p>

    <div class="callout tip">
      <span class="callout-icon">🎯</span>
      <div class="callout-body">
        <p><strong>How to run the inventory:</strong> Don't rely on self-reporting alone. Work with IT/Security to pull browser extension installs from MDM, check OAuth app authorisations in your identity provider (Okta, Azure AD), review SaaS spend in your finance system, and survey a cross-section of employees from the most AI-active departments.</p>
      </div>
    </div>

    <div class="resp-grid">
      <div class="resp-card">
        <h4>📋 What to capture</h4>
        <ul style="padding-left:1.2rem;font-size:.88rem;color:var(--ink-2);line-height:1.9;margin:.5rem 0 0">
          <li>Tool name and vendor</li>
          <li>Who approved / who's paying</li>
          <li>Which teams are using it</li>
          <li>What data does it touch</li>
          <li>Data residency and DPA status</li>
          <li>License tier (consumer vs. enterprise)</li>
        </ul>
      </div>
      <div class="resp-card">
        <h4>🚦 How to categorise</h4>
        <ul style="padding-left:1.2rem;font-size:.88rem;color:var(--ink-2);line-height:1.9;margin:.5rem 0 0">
          <li><strong>Approved:</strong> Enterprise DPA, reviewed, in catalogue</li>
          <li><strong>Pending:</strong> In use, under review — issue interim guidance</li>
          <li><strong>Prohibited:</strong> Clear policy violation (consumer tools with sensitive data)</li>
          <li><strong>Blocked:</strong> Network-level block + clear communication about why</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SECTION 7: Resources -->
  <div class="detail-section detail-resources">
    <h2>Resources</h2>
    <div class="detail-resources-grid">
      <div class="detail-resource-card">
        <span class="r-type">Report</span>
        <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener">🔗 McKinsey State of AI Report (annual)</a>
        <p>The most comprehensive annual survey of enterprise AI adoption. Tracks tool usage, investment levels, governance maturity, and use cases by industry. Essential CAIO reference.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Report</span>
        <a href="https://www.gartner.com/en/articles/what-s-new-in-artificial-intelligence-from-the-2024-gartner-hype-cycle" target="_blank" rel="noopener">🔗 Gartner Hype Cycle for AI</a>
        <p>Gartner's annual mapping of AI technologies from "Peak of Inflated Expectations" to "Plateau of Productivity." Useful for setting realistic timelines and resisting vendor hype.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Documentation</span>
        <a href="https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-overview" target="_blank" rel="noopener">🔗 Microsoft 365 Copilot — Admin Overview</a>
        <p>Microsoft's official documentation for IT admins governing Copilot deployments. Covers data handling, permissioning, sensitivity labels, and enterprise compliance features.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Course</span>
        <a href="https://www.deeplearning.ai/short-courses/" target="_blank" rel="noopener">🔗 DeepLearning.AI Short Courses</a>
        <p>Andrew Ng's free short courses on LLMs, agentic AI, RAG, and prompt engineering. The "ChatGPT Prompt Engineering for Developers" course is the fastest way for a CAIO to build LLM fluency.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Interactive</span>
        <a href="https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard" target="_blank" rel="noopener">🔗 LMSYS Chatbot Arena Leaderboard</a>
        <p>Community-driven benchmark comparing frontier LLMs side by side on real tasks. The most honest performance comparison available — not controlled by any single vendor.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Article</span>
        <a href="https://www.anthropic.com/news/claudes-constitution" target="_blank" rel="noopener">🔗 Anthropic: Claude's Model Spec</a>
        <p>Anthropic's published specification for how Claude is trained to behave. Understanding how leading vendors approach model safety and alignment is essential context for procurement decisions.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Article</span>
        <a href="https://www.microsoft.com/en-us/security/blog/2024/02/22/announcing-microsoft-copilot-for-security/" target="_blank" rel="noopener">🔗 Microsoft Security Copilot</a>
        <p>Overview of Microsoft's AI security tooling. Knowing what security-specific AI tools exist is important context when briefing your CISO on the agentic AI risk landscape.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Framework</span>
        <a href="https://cloudsecurityalliance.org/research/topics/artificial-intelligence" target="_blank" rel="noopener">🔗 CSA AI Safety Initiative</a>
        <p>The Cloud Security Alliance's working group outputs on AI security. Particularly useful for the AI Tool Inventory — their SaaS security questionnaire templates can be adapted for AI vendor reviews.</p>
      </div>
    </div>
  </div>

</article>
`,

  "found-3": () => /* html */`

<article class="module-detail-article">

  <!-- HERO -->
  <div class="detail-hero">
    <div class="detail-hero-meta">
      <span class="detail-tag">🏗️ CAIO Foundations</span>
      <span class="detail-tag">Module 3</span>
      <span class="detail-tag">~25 min</span>
      <span class="detail-tag accent">Foundational</span>
    </div>
    <h1>AI Maturity Model</h1>
    <p>One of the most important things a CAIO does in the first 90 days is honestly assess where the organisation sits on the AI maturity curve. Without that baseline, every milestone you set and every budget you request will be built on guesswork.</p>
  </div>

  <!-- SECTION 1: Why it matters -->
  <div class="detail-section">
    <h2>Why a Maturity Model?</h2>
    <p>AI maturity models give you a shared language with your leadership team, a defensible framework for prioritising investments, and a progress benchmark you can report on quarter over quarter. Without one, "how's AI going?" becomes a question with no useful answer.</p>
    <p>There are several published frameworks — Gartner's AI Maturity Model, the Stanford HAI framework, McKinsey's AI adoption index. For CAIO purposes, the model below distils the most practically useful elements: it focuses on <strong>organisational readiness</strong>, not technical sophistication, because that's the lever you control.</p>

    <div class="callout">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <p><strong>Use this as a conversation tool, not a scoring system.</strong> The value of a maturity model isn't the number you land on — it's the conversations it forces. When you walk a CFO or CEO through the five levels and ask "where do you think we are?", you learn more about organisational priorities, hidden blockers, and executive appetite for AI than any survey could tell you.</p>
      </div>
    </div>
  </div>

  <!-- SECTION 2: Maturity diagram -->
  <div class="detail-section">
    <h2>The Five Levels</h2>

    <div class="diagram-wrap">
      <svg viewBox="0 0 720 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-level AI maturity staircase diagram">
        <defs>
          <filter id="ms" x="-5%" y="-10%" width="115%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#00000018"/>
          </filter>
        </defs>

        <!-- Stair steps — each progressively higher and highlighted more -->
        <!-- L1 -->
        <rect x="10"  y="160" width="126" height="40" rx="9" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1.5" filter="url(#ms)"/>
        <text x="73"  y="176" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="10.5" font-weight="700" fill="#475569">Level 1</text>
        <text x="73"  y="191" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#94a3b8">Ad Hoc</text>

        <!-- L2 -->
        <rect x="148" y="128" width="126" height="72" rx="9" fill="#e0e7ff" stroke="#c7d2fe" stroke-width="1.5" filter="url(#ms)"/>
        <text x="211" y="158" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="10.5" font-weight="700" fill="#3730a3">Level 2</text>
        <text x="211" y="173" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="#6366f1">Aware</text>

        <!-- L3 — highlighted as Year 1 target -->
        <rect x="286" y="90" width="126" height="110" rx="9" fill="#4f46e5" filter="url(#ms)"/>
        <rect x="286" y="90" width="126" height="110" rx="9" fill="none" stroke="#818cf8" stroke-width="2"/>
        <text x="349" y="130" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="10.5" font-weight="700" fill="white">Level 3</text>
        <text x="349" y="145" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="rgba(255,255,255,.8)">Governed</text>
        <text x="349" y="162" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" fill="rgba(255,255,255,.65)">← Year 1 Target</text>

        <!-- L4 -->
        <rect x="424" y="52" width="126" height="148" rx="9" fill="#312e81" filter="url(#ms)"/>
        <text x="487" y="120" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="10.5" font-weight="700" fill="white">Level 4</text>
        <text x="487" y="135" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="rgba(255,255,255,.7)">Optimised</text>

        <!-- L5 -->
        <rect x="562" y="12" width="148" height="188" rx="9" fill="#1e1b4b" filter="url(#ms)"/>
        <text x="636" y="95" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="10.5" font-weight="700" fill="white">Level 5</text>
        <text x="636" y="110" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" fill="rgba(255,255,255,.65)">Transformative</text>

        <!-- Arrow baseline -->
        <line x1="10" y1="202" x2="710" y2="202" stroke="#e2e8f0" stroke-width="1.5"/>
        <polygon points="710,198 720,202 710,206" fill="#e2e8f0"/>
        <text x="365" y="215" text-anchor="middle" font-family="Inter,sans-serif" font-size="8.5" fill="#94a3b8">Increasing AI maturity →</text>
      </svg>
      <p class="diagram-caption">Five-level AI maturity staircase. Most organisations entering a CAIO programme sit at Level 1–2. The practical Year 1 target is Level 3: governed, measurable, and consistently applied.</p>
    </div>
  </div>

  <!-- SECTION 3: Each level in detail -->
  <div class="detail-section">
    <h2>What Each Level Looks Like in Practice</h2>

    <div class="resp-grid" style="grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem">

      <div class="resp-card" style="border-left:3px solid #94a3b8">
        <h4 style="color:#475569">Level 1 — Ad Hoc</h4>
        <p style="font-size:.88rem;color:var(--ink-2);margin:.4rem 0 .6rem"><em>Shadow AI everywhere. No governance, no policy, no visibility.</em></p>
        <ul style="padding-left:1.2rem;font-size:.87rem;color:var(--ink-2);line-height:1.85;margin:0">
          <li>Individuals using ChatGPT, Claude, Gemini on personal accounts</li>
          <li>No AI use policy exists</li>
          <li>IT has no visibility into AI tool usage</li>
          <li>No training or enablement programmes</li>
          <li>High risk of data leakage going undetected</li>
        </ul>
      </div>

      <div class="resp-card" style="border-left:3px solid #818cf8">
        <h4 style="color:#4338ca">Level 2 — Aware</h4>
        <p style="font-size:.88rem;color:var(--ink-2);margin:.4rem 0 .6rem"><em>Enterprise tools licensed but inconsistently used. One champion pushing the agenda.</em></p>
        <ul style="padding-left:1.2rem;font-size:.87rem;color:var(--ink-2);line-height:1.85;margin:0">
          <li>Microsoft Copilot or similar tool licensed and deployed</li>
          <li>Usage varies wildly by team and manager</li>
          <li>A draft AI policy exists but isn't enforced</li>
          <li>No systematic adoption measurement</li>
          <li>CAIO role newly created or being defined</li>
        </ul>
      </div>

      <div class="resp-card" style="border-left:3px solid #4f46e5;background:#f5f3ff">
        <h4 style="color:#4f46e5">Level 3 — Governed ✦ Year 1 Target</h4>
        <p style="font-size:.88rem;color:var(--ink-2);margin:.4rem 0 .6rem"><em>Policy in place, approved tool catalogue live, basic metrics tracked.</em></p>
        <ul style="padding-left:1.2rem;font-size:.87rem;color:var(--ink-2);line-height:1.85;margin:0">
          <li>Published AI use policy communicated to all staff</li>
          <li>Approved tool catalogue with data classification guidance</li>
          <li>Adoption rates tracked (at minimum: active users / licensed seats)</li>
          <li>AI review cadence established (monthly or quarterly)</li>
          <li>BU champions identified and enablement programmes running</li>
        </ul>
      </div>

      <div class="resp-card" style="border-left:3px solid #312e81">
        <h4 style="color:#312e81">Level 4 — Optimised</h4>
        <p style="font-size:.88rem;color:var(--ink-2);margin:.4rem 0 .6rem"><em>AI embedded in key workflows. ROI measured. CAIO in strategic planning.</em></p>
        <ul style="padding-left:1.2rem;font-size:.87rem;color:var(--ink-2);line-height:1.85;margin:0">
          <li>2–5 AI use cases with measured productivity or cost impact</li>
          <li>AI budget line item in annual planning</li>
          <li>Continuous risk monitoring via SIEM/DLP integration</li>
          <li>Vendor review process mature and repeatable</li>
          <li>CAIO presenting AI strategy to board annually</li>
        </ul>
      </div>

    </div>

    <div class="resp-card" style="border-left:3px solid #1e1b4b;margin-top:1rem">
      <h4 style="color:#1e1b4b">Level 5 — Transformative</h4>
      <p style="font-size:.88rem;color:var(--ink-2);margin:.4rem 0 .6rem"><em>AI is a core business capability. The organisation shapes industry AI practice.</em></p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem">
        <ul style="padding-left:1.2rem;font-size:.87rem;color:var(--ink-2);line-height:1.85;margin:0">
          <li>AI integrated into product strategy and customer experience</li>
          <li>Proprietary fine-tuned models on company data</li>
          <li>Continuous feedback loops between usage and model improvement</li>
        </ul>
        <ul style="padding-left:1.2rem;font-size:.87rem;color:var(--ink-2);line-height:1.85;margin:0">
          <li>Contributing to AI standards bodies or consortia</li>
          <li>AI CoE operates as internal consultancy for the industry</li>
          <li>CAIO is a public-facing thought leader for the company</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SECTION 4: How to assess -->
  <div class="detail-section">
    <h2>How to Run Your Maturity Assessment</h2>
    <p>Don't try to self-assess from your desk. A credible maturity score requires triangulating across three sources: what leadership <em>thinks</em> is happening, what IT can <em>see</em> is happening, and what employees are <em>actually</em> doing.</p>

    <div class="callout tip">
      <span class="callout-icon">🎯</span>
      <div class="callout-body">
        <p><strong>The fastest useful assessment:</strong> Run five 30-minute interviews (CEO, CISO, one BU head, one IT lead, one frontline manager who uses AI tools daily). Ask each: "What AI tools does your team use? What would happen if we took them away tomorrow? What worries you most about AI at this company?" The gaps between their answers will tell you exactly what level you're at.</p>
      </div>
    </div>

    <div class="compare-table-wrap" style="margin-top:1.25rem">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Assessment Area</th>
            <th>Level 1–2 signal</th>
            <th>Level 3 signal</th>
            <th>Level 4–5 signal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Policy</strong></td>
            <td>No policy or draft only</td>
            <td>Published, communicated, enforced</td>
            <td>Auto-enforced via DLP / tooling controls</td>
          </tr>
          <tr>
            <td><strong>Tool inventory</strong></td>
            <td>Unknown / incomplete</td>
            <td>Full catalogue with classifications</td>
            <td>Real-time monitored via SaaS management platform</td>
          </tr>
          <tr>
            <td><strong>Adoption data</strong></td>
            <td>None or anecdotal</td>
            <td>Monthly active user rates per tool</td>
            <td>Task-level ROI tracked per workflow</td>
          </tr>
          <tr>
            <td><strong>Risk monitoring</strong></td>
            <td>No monitoring</td>
            <td>Incident response process exists</td>
            <td>Continuous automated alerting with SIEM integration</td>
          </tr>
          <tr>
            <td><strong>Executive engagement</strong></td>
            <td>AI not on leadership agenda</td>
            <td>Quarterly AI review with exec team</td>
            <td>AI KPIs in board reporting</td>
          </tr>
          <tr>
            <td><strong>Training</strong></td>
            <td>None or ad hoc</td>
            <td>Role-based onboarding for approved tools</td>
            <td>Continuous learning integrated into L&amp;D curriculum</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- SECTION 5: Moving up the levels -->
  <div class="detail-section">
    <h2>What It Takes to Move Up a Level</h2>
    <p>Maturity doesn't advance by accident — each transition requires deliberate action. The most common failure mode is trying to skip Level 3 (governed) and jump straight to Level 4 (optimised). Companies that do this typically lack the policy and measurement infrastructure to sustain the programmes they launch, and they regress.</p>

    <div class="timeline">
      <div class="timeline-phase">
        <div class="tl-dot" style="background:#6366f1"></div>
        <h4>Level 1 → 2</h4>
        <p>License an enterprise AI tool with proper DPA. Identify 3–5 early adopters. Begin drafting an AI use policy. Get a single exec sponsor. Timeframe: <strong>4–8 weeks</strong>.</p>
      </div>
      <div class="timeline-phase">
        <div class="tl-dot" style="background:#4f46e5"></div>
        <h4>Level 2 → 3 <span style="font-size:.75em;color:var(--ink-3)">(Year 1 focus)</span></h4>
        <p>Publish the AI policy. Complete the tool inventory and approved catalogue. Launch BU champions programme. Set up monthly AI review meeting. Track adoption metrics. Timeframe: <strong>3–6 months</strong>.</p>
      </div>
      <div class="timeline-phase">
        <div class="tl-dot" style="background:#312e81"></div>
        <h4>Level 3 → 4</h4>
        <p>Measure ROI on 2–3 use cases. Integrate AI risk into security monitoring. Secure a budget line item. Present to board. Build repeatable vendor review process. Timeframe: <strong>6–18 months</strong>.</p>
      </div>
    </div>

    <div class="callout warn">
      <span class="callout-icon">⚠️</span>
      <div class="callout-body">
        <p><strong>The Level 3 trap:</strong> Many organisations achieve Level 3 once — they publish a policy and launch a tool catalogue — and then stop. Maturity degrades when policy isn't updated as new tools emerge, when metrics aren't reviewed, and when champions aren't supported. Level 3 is a <em>system</em> to maintain, not a milestone to claim.</p>
      </div>
    </div>
  </div>

  <!-- SECTION 6: Resources -->
  <div class="detail-section detail-resources">
    <h2>Resources</h2>
    <div class="detail-resources-grid">
      <div class="detail-resource-card">
        <span class="r-type">Framework</span>
        <a href="https://hai.stanford.edu/ai-index-report" target="_blank" rel="noopener">🔗 Stanford HAI AI Index Report</a>
        <p>Annual benchmarking of AI adoption, investment, and maturity across industries and regions. Essential for contextualising where your organisation sits relative to sector peers.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Framework</span>
        <a href="https://www.gartner.com/en/information-technology/insights/artificial-intelligence" target="_blank" rel="noopener">🔗 Gartner AI Maturity Model</a>
        <p>Gartner's five-stage enterprise AI maturity framework. Useful for board and executive communications — Gartner's brand recognition makes it easier to get leadership buy-in on maturity language.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Report</span>
        <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noopener">🔗 McKinsey State of AI Report</a>
        <p>Includes cross-industry data on where companies sit on AI adoption and what separates high performers from laggards. Valuable for benchmarking and building the business case for CAIO investment.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Tool</span>
        <a href="https://www.microsoft.com/en-us/microsoft-365/business/microsoft-copilot-for-microsoft-365" target="_blank" rel="noopener">🔗 Microsoft Copilot Adoption Hub</a>
        <p>Microsoft's official resource for Copilot adoption programmes — includes readiness assessments, champion programme guides, and usage tracking capabilities that map well onto Level 2→3 transition work.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Article</span>
        <a href="https://hbr.org/2023/11/how-to-build-an-ai-ready-organization" target="_blank" rel="noopener">🔗 HBR: How to Build an AI-Ready Organisation</a>
        <p>Harvard Business Review's practical guide to the cultural and structural changes required for AI maturity. Particularly useful for the Level 2→3 governance and change management work.</p>
      </div>
      <div class="detail-resource-card">
        <span class="r-type">Benchmark</span>
        <a href="https://www.bcg.com/publications/2024/ai-adoption-at-scale" target="_blank" rel="noopener">🔗 BCG AI Adoption at Scale</a>
        <p>BCG's research on what separates organisations that achieve Level 4–5 maturity from those stuck at Level 2–3. Key finding: governance infrastructure, not technical capability, is the primary differentiator.</p>
      </div>
    </div>
  </div>

</article>
`,

};

// ─── DETAIL PAGE RENDERER ─────────────────────────────────────

function openModuleDetailPage(moduleId) {
  const contentFn = modulePageContent[moduleId];
  if (!contentFn) return;

  // Find module and track meta
  let trackLabel = "";
  let moduleTitle = "";
  for (const track of tracks) {
    const mod = track.modules.find((m) => m.id === moduleId);
    if (mod) { trackLabel = track.title; moduleTitle = mod.title; break; }
  }

  const detailContent = document.getElementById("detail-content");
  const breadcrumb = document.getElementById("detail-breadcrumb");
  if (detailContent) detailContent.innerHTML = contentFn();
  // Tag .r-type spans so CSS data-type colour rules apply
  detailContent?.querySelectorAll(".r-type").forEach((el) => {
    el.dataset.type = el.textContent.trim();
  });
  if (breadcrumb) breadcrumb.textContent = `${trackLabel} › ${moduleTitle}`;

  // Back button
  document.getElementById("detail-back-btn")?.addEventListener("click", () => {
    showView("curriculum");
  });

  // ── Next Module nav bar ──────────────────────────────────
  // Find position of current module across all tracks
  let nextModuleId = null;
  let nextModuleTitle = "";
  let nextModuleNum = 1;
  outerLoop:
  for (const track of tracks) {
    for (let i = 0; i < track.modules.length; i++) {
      if (track.modules[i].id === moduleId) {
        // look for next in same track, then spill into next track
        const remaining = track.modules.slice(i + 1);
        for (const nm of remaining) {
          nextModuleId = nm.id;
          nextModuleTitle = nm.title;
          nextModuleNum = i + 2;
          break outerLoop;
        }
        // spill to next track's first module
        const trackIdx = tracks.indexOf(track);
        if (trackIdx + 1 < tracks.length) {
          const nt = tracks[trackIdx + 1];
          nextModuleId = nt.modules[0].id;
          nextModuleTitle = nt.modules[0].title;
          nextModuleNum = 1;
        }
        break outerLoop;
      }
    }
  }

  // Build nav bar and append after content
  const navBar = document.createElement("div");
  navBar.className = "detail-nav-bar";
  const hasNext = nextModuleId !== null;
  navBar.innerHTML = `
    <label class="detail-check">
      <input type="checkbox" id="detail-check-${moduleId}" />
      <span>Mark module complete</span>
    </label>
    ${ hasNext
      ? `<button class="detail-next-btn btn" id="detail-next-btn">Next: ${nextModuleTitle} →</button>`
      : `<button class="detail-next-btn btn" id="detail-next-btn">Finish track →</button>`
    }`;
  if (detailContent) detailContent.appendChild(navBar);

  // Wire complete checkbox (re-query after appending)
  const detailCheckEl = document.getElementById(`detail-check-${moduleId}`);
  if (detailCheckEl) {
    detailCheckEl.checked = state.moduleState[moduleId]?.done || false;
    detailCheckEl.addEventListener("change", () => {
      state.moduleState[moduleId] = { ...(state.moduleState[moduleId] || {}), done: detailCheckEl.checked };
      saveState();
      updateStats();
      const currCheck = document.querySelector(`[data-module-id="${moduleId}"]`);
      if (currCheck) { currCheck.checked = detailCheckEl.checked; }
    });
  }

  // Wire next button
  document.getElementById("detail-next-btn")?.addEventListener("click", () => {
    // Mark current module complete
    state.moduleState[moduleId] = { ...(state.moduleState[moduleId] || {}), done: true };
    saveState();
    updateStats();
    const currCheck = document.querySelector(`[data-module-id="${moduleId}"]`);
    if (currCheck) currCheck.checked = true;
    const currCard = currCheck?.closest(".module-card");
    if (currCard) currCard.classList.add("done");
    // Navigate
    if (hasNext && modulePageContent[nextModuleId]) {
      openModuleDetailPage(nextModuleId);
    } else if (hasNext) {
      showView("curriculum");
    } else {
      showView("curriculum");
    }
  });

  // Show the view
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  document.getElementById("view-module-detail").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ─── INIT ─────────────────────────────────────────────────────
function init() {
  initNav();
  renderTrackGrid();
  renderCurriculum();
  renderRadarPreview();
  renderRadar();
  renderResources();
  wireRadarForm();
  wireDataActions();
  wireMetrics();
  updateStats();
}

init();
