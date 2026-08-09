export const profile = {
  name: "Sunil Sodhi",
  displayName: "Sunil Sodhi",
  headline: "AI Governance & Risk · LLM Security · Model Validation",
  subheadline: "NIST AI RMF · ISO/IEC 42001 · EU AI Act · OWASP LLM Top 10 · MITRE ATLAS",
  location: "NYC Metro · Relocating December 2026",
  locationShort: "NYC Metro",
  availability: "Open to AI Governance, AI Risk & Model Validation roles — NYC / New Jersey / Remote",
  email: "sunilksodhi@gmail.com",
  phone: "+1 949-545-4237",
  linkedin: "https://www.linkedin.com/in/sunil-sodhi-30901a81",
  github: "https://github.com/sharingkapotter",
  tagline: "Governance that is enforced in a pipeline, not just written in a policy.",
  summary: `Twenty years spent independently validating whether a system actually does what the business claims it does — and building the automated evidence to prove it. AI governance is that same discipline applied to models instead of applications: risk-tier classification, control gap analysis, adversarial testing and enforceable pipeline gates, mapped to the NIST AI Risk Management Framework, ISO/IEC 42001, the EU AI Act, the OWASP Top 10 for LLM Applications and MITRE ATLAS.`,
  summaryLong: `Twenty years spent independently validating whether a system actually does what the business claims it does — and building the automated evidence to prove it. AI governance is that same discipline applied to models instead of applications.

I build AI governance assessment methodology and tooling against the NIST AI Risk Management Framework, ISO/IEC 42001 and the EU AI Act — risk-tier classification, control gap analysis, AI risk registers and costed remediation roadmaps — alongside adversarial LLM security assessment covering prompt injection, indirect injection, jailbreak and insecure output handling, mapped to the OWASP Top 10 for LLM Applications and MITRE ATLAS.

The foundation is two decades of independent verification on regulated platforms across insurance, banking, healthcare and retail. I have built quality functions from nothing, managed onshore and offshore teams, defined control criteria and release-readiness standards, and reported risk to senior leadership as the basis for go/no-go decisions. As a consultant I mapped engineering processes to ISO 9000, ISO/IEC 27001 Annex A and NIST 800-53.

Most AI governance practitioners write policy but cannot enforce it. Most engineers can enforce controls but cannot map them to a regulation or explain them to a risk committee. The gap between those two is where the actual risk lives — and it is the gap I work in.`,
};

export const highlights = [
  { metric: "20+", label: "Years of Independent Validation" },
  { metric: "8", label: "AI Governance & Security Tools Built" },
  { metric: "10", label: "Frameworks Mapped & Applied" },
  { metric: "12", label: "Engineers Led" },
  { metric: "5+", label: "Quality Functions Built from Scratch" },
  { metric: "4", label: "Regulated Sectors" },
];

export const focusAreas = [
  {
    title: "AI Governance & Risk",
    description:
      "Risk-tier classification, control gap analysis, AI risk registers and prioritized remediation roadmaps against the NIST AI RMF, ISO/IEC 42001 and the EU AI Act.",
    tags: ["NIST AI RMF", "ISO/IEC 42001", "EU AI Act", "AI Risk Register", "Audit Readiness"],
  },
  {
    title: "LLM Security & AI Red Teaming",
    description:
      "Adversarial assessment of deployed LLM applications — prompt injection, role-play injection, instruction smuggling, indirect injection via data, prompt leaking and jailbreak — with formal vulnerability reporting.",
    tags: ["OWASP LLM Top 10", "MITRE ATLAS", "Prompt Injection", "Jailbreak Testing", "Red Teaming"],
  },
  {
    title: "Model Validation & Assurance",
    description:
      "Independent verification of model behaviour: evasion and perturbation testing, bias and fairness evaluation, output quality scoring, and defensive countermeasure assessment across the model lifecycle.",
    tags: ["Adversarial ML", "FGSM / PGD", "Bias Testing", "Explainability", "Model Risk"],
  },
  {
    title: "AppSec & DevSecOps Enforcement",
    description:
      "Turning controls into build-blocking gates — static analysis with custom rules, software composition analysis and container scanning that fail on high and critical findings under a documented suppression policy.",
    tags: ["SAST", "SCA", "Container Scanning", "OWASP API Top 10", "Secure SDLC"],
  },
];

export const frameworks = [
  "NIST AI RMF",
  "NIST AI 600-1 (GenAI Profile)",
  "ISO/IEC 42001",
  "EU AI Act",
  "ISO/IEC 27001",
  "NIST 800-53",
  "OWASP Top 10 for LLM Applications",
  "OWASP Top 10 for Agentic Applications",
  "MITRE ATLAS",
  "Google SAIF",
  "OWASP API Security Top 10",
  "ISO 9000",
];

export const skills = {
  "AI Governance & Risk": [
    "AI Governance",
    "AI Risk Management",
    "Model Risk Management",
    "Model Validation",
    "Responsible AI",
    "AI Risk Register",
    "Risk Assessment",
    "Controls Testing",
    "Audit Readiness",
    "Regulatory Compliance",
  ],
  "AI & LLM Security": [
    "LLM Security",
    "AI Red Teaming",
    "Prompt Injection",
    "Indirect Injection",
    "Jailbreak Testing",
    "Adversarial Machine Learning",
    "Insecure Output Handling",
    "Bias & Fairness Testing",
  ],
  "Application Security": [
    "OWASP Top 10",
    "OWASP API Security Top 10",
    "SAST",
    "Software Composition Analysis",
    "Container Scanning",
    "Threat Modeling",
    "Fuzzing",
    "Authentication Testing",
    "Secure SDLC",
  ],
  "DevSecOps & CI/CD": [
    "GitHub Actions",
    "Azure DevOps Pipelines",
    "Quality & Security Gates",
    "Semgrep",
    "Trivy",
    "Nexus IQ",
    "Docker",
    "Git",
  ],
  "Languages": ["Python", "C#", "SQL", "JavaScript"],
  "Validation Engineering": [
    "Test Strategy",
    "BDD (Reqnroll / SpecFlow)",
    "Playwright",
    "Selenium WebDriver",
    "pytest / pytest-bdd",
    "RestSharp",
    "xUnit / NUnit",
    "Kafka Event Validation",
  ],
  "Performance & Observability": [
    "JMeter",
    "Datadog APM & RUM",
    "Dynatrace",
    "New Relic",
    "Splunk",
    "Google Lighthouse",
  ],
  "Data": ["SQL Server", "PostgreSQL", "AWS Redshift", "MongoDB", "pandas", "Dapper"],
  "Leadership": [
    "Team Leadership",
    "Stakeholder Management",
    "Executive Reporting",
    "Release Readiness / Go-No-Go",
    "Onshore & Offshore Delivery",
    "Consulting",
  ],
};

export const experience = [
  {
    title: "Sr. Consultant",
    company: "Consulting · Contract",
    location: "Remote",
    period: "Feb 2026 – Present",
    track: "security",
    bullets: [
      "Sole quality and assurance lead on enterprise platforms in insurance and retail — established the quality engineering function end to end across strategy, process, standards and the full SDLC.",
      "Led application security assessment across web and API surfaces against the OWASP Top 10 and OWASP API Security Top 10 — authentication, injection and fuzzing — ensuring compliance with enterprise security standards.",
      "Own CI/CD pipeline strategy end to end in Azure DevOps — build, security scanning and automated test execution on enterprise agents, published as a quality gate on every commit.",
      "Architected a C# BDD validation platform (Reqnroll, RestSharp, Dapper, xUnit) covering REST API and Kafka event-driven message flows, structured as a reusable core library shared across squads.",
      "Architected a Python automation framework from scratch (pytest, pytest-bdd, PostgreSQL, AWS Redshift, Allure) running against live certification environments; engineered an allocation validation engine in Python/pandas that reduced planogram validation from 3–4 hours for 4 products to under 2 minutes for 800+.",
      "Designed and deployed a Datadog APM and RUM observability platform from scratch — P95 latency, error rate and database performance monitors with automated alerting and executive daily reporting.",
      "Defined entry and exit criteria and established release-readiness reporting used for go/no-go decisions; mentor QA and automation engineers on BDD practice, test design and code review.",
    ],
  },
  {
    title: "Professional Development — AI Security & Governance",
    company: "Self-Directed",
    location: "Remote",
    period: "Oct 2025 – Jan 2026",
    track: "governance",
    bullets: [
      "Structured coursework in MLSecOps, the NIST Cybersecurity Framework, ISO/IEC 27001, ethical hacking fundamentals and SIEM/event management, taken as the bridge from application assurance into AI risk and governance.",
      "Applied the material by building working tooling rather than stopping at certificates — EU AI Act risk-tier and conformity analysis, an adversarial LLM security assessment suite mapped to the OWASP Top 10 for LLM Applications and MITRE ATLAS, an FGSM/PGD evasion lab, and a DevSecOps pipeline gate that fails builds on high and critical findings.",
      "Published the full body of work as open reference implementations — every governance and security claim on this site is inspectable on GitHub.",
    ],
  },
  {
    title: "Sr. QA Engineering Consultant — Controls & Process Mapping",
    company: "AdoptUSKids.org",
    location: "Remote",
    period: "Jul 2025 – Sep 2025",
    track: "governance",
    bullets: [
      "Mapped engineering and release processes to ISO 9000, ISO/IEC 27001 Annex A and NIST 800-53 control families, producing audit-ready control evidence and a prioritized remediation plan for leadership.",
      "Conducted an in-depth quality function gap analysis for a ReactJS and microservices platform, identifying process inefficiencies, tooling limitations and control gaps.",
      "Delivered a comprehensive quality and automation strategy covering test planning, framework selection, CI/CD integration, reporting and security testing approach.",
      "Designed a performance testing plan (JMeter, Google Lighthouse) with an Azure DevOps CI/CD integration roadmap, plus resource planning and team structure recommendations.",
    ],
  },
  {
    title: "QA Manager / Sr. SDET Lead",
    company: "Word & Brown Companies",
    location: "Remote",
    period: "Jul 2024 – Feb 2025",
    track: "validation",
    bullets: [
      "Quality leadership for a healthcare web platform serving health-insurance brokers — managed onshore and offshore teams, reviewed test code, and presented QA metrics and release-readiness reporting to senior leadership.",
      "Led architecture of Page Object Model and data-driven C# automation frameworks (Reqnroll/Playwright, .NET Core) covering UI, API and database layers.",
      "Created and owned Azure DevOps CI/CD pipelines for nightly automated regression as a standing quality gate; migrated legacy test systems from TFS to Azure DevOps.",
      "Recommended security testing processes leveraging OWASP guidelines and automated vulnerability scanning for proactive risk mitigation.",
    ],
  },
  {
    title: "Sr. SDET → Sr. Test Consultant",
    company: "Starbucks Coffee Company",
    location: "Remote",
    period: "Feb 2022 – Jul 2024",
    track: "validation",
    bullets: [
      "Owned end-to-end test strategy for an iPad application rollout spanning security, performance, functional and UX coverage, executed on secured browsers (Island, VMware Browser).",
      "Led QA strategy and automation for the Connect Platform (POS), implementing a SpecFlow/C# BDD framework that reduced manual testing effort by 50% across a large retail estate.",
      "Revamped the regression automation suite using Page Object Model and BDD with C#, Playwright and Reqnroll, and built a reusable component library shared across projects.",
      "Began API security testing for MFA authentication flows using C# and Postman; presented defect and readiness findings to senior stakeholders via Smartsheet executive dashboards.",
    ],
  },
  {
    title: "Sr. Performance Engineer",
    company: "Premera Blue Cross",
    location: "Remote",
    period: "Jun 2021 – Dec 2021",
    track: "validation",
    bullets: [
      "Developed JMeter performance test suites simulating 10,000+ concurrent users for healthcare claims processing.",
      "Reduced API response times by 40% using Dynatrace, Splunk and New Relic for bottleneck identification.",
    ],
  },
  {
    title: "SDET — Security Testing / Automation / Performance",
    company: "ReverseVision",
    location: "Remote",
    period: "Jul 2020 – May 2021",
    track: "security",
    bullets: [
      "Performed API security assessments — authentication testing, injection, fuzzing, weak-password and boundary scans, and cross-site scripting — surfacing vulnerabilities for engineering remediation across a mortgage lending platform.",
      "Built a Selenium, SpecFlow and C# automation framework with Page Object Model architecture; conducted cross-browser and mobile testing across 50+ configurations using BrowserStack.",
    ],
  },
  {
    title: "Sr. Automation Engineer / SDET",
    company: "CoStar Group",
    location: "Austin & Irvine",
    period: "Oct 2016 – Jun 2020",
    track: "validation",
    bullets: [
      "Automated test suites for Apartments.com and LoopNet (50M+ monthly visitors); reduced regression defects by 45%.",
      "Performed UI, API and performance testing; mentored junior SDETs on automation practice and framework architecture.",
    ],
  },
  {
    title: "QA Manager / QA Lead / QA Project Manager",
    company: "Multiple Organizations",
    location: "USA",
    period: "2010 – 2016",
    sub: "Wells Fargo · Experian · Guthy|Renker · Word & Brown General Agency · LA Fitness",
    track: "validation",
    bullets: [
      "Led QA teams of up to 12 engineers across onshore and offshore locations in banking, credit, insurance and retail.",
      "Implemented quality governance processes including defect triage workflows, release quality gates and executive quality reporting.",
      "Delivered on regulated programmes including a state health insurance exchange (HIX) implementation.",
    ],
  },
];

export const education = [
  {
    degree: "Certificate in Global Management Operations",
    school: "University of California, Irvine",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Boston Computer Institute, India",
  },
  {
    degree: "Bachelor of Commerce (Accounting & Finance)",
    school: "University of Mumbai, India",
  },
];

export const certificationsInProgress = [
  {
    name: "IAPP AIGP — Artificial Intelligence Governance Professional",
    issuer: "International Association of Privacy Professionals",
    note: "In progress",
  },
  {
    name: "ISACA CRISC — Certified in Risk and Information Systems Control",
    issuer: "ISACA",
    note: "Planned",
  },
];

export const certifications = [
  { name: "MLSecOps Foundation", issuer: "Coursera · 2025–2026", group: "AI & Security" },
  { name: "ISO/IEC 27001 Information Security", issuer: "Coursera · 2025–2026", group: "AI & Security" },
  { name: "NIST Cybersecurity Framework", issuer: "Coursera · 2025–2026", group: "AI & Security" },
  { name: "Managing Cybersecurity (GRC)", issuer: "Coursera", group: "AI & Security" },
  { name: "Ethical Hacking Fundamentals", issuer: "Coursera", group: "AI & Security" },
  { name: "SIEM & Event Management", issuer: "LinkedIn Learning · 2025–2026", group: "AI & Security" },
  { name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance", group: "Delivery & Engineering" },
  { name: "ASTQB Foundation", issuer: "ASTQB", group: "Delivery & Engineering" },
  { name: "ITIL Foundation", issuer: "AXELOS", group: "Delivery & Engineering" },
  { name: "Python Foundations", issuer: "University of Michigan", group: "Delivery & Engineering" },
  { name: "JavaScript / HTML / CSS", issuer: "Duke University", group: "Delivery & Engineering" },
  { name: "Advanced JMeter", issuer: "LinkedIn Learning", group: "Delivery & Engineering" },
];

export const projects = [
  {
    title: "EU AI Act Compliance Analyzer",
    description:
      "Automated EU AI Act conformity assessment: classifies a system by risk tier, scores it against every mandatory requirement, identifies control gaps and produces a costed 12-month remediation roadmap. Cross-mapped to NIST AI RMF functions so one assessment satisfies both frameworks.",
    tech: ["Python", "EU AI Act", "NIST AI RMF", "Risk Tiering", "Gap Analysis", "Remediation Roadmap"],
    github: "https://github.com/sharingkapotter/eu-ai-act-compliance-analyzer",
    type: "AI Governance",
    featured: true,
  },
  {
    title: "LLM Security Assessment Suite",
    description:
      "Adversarial red-team harness running eight categories of injection against a deployed LLM assistant — direct and role-play prompt injection, instruction smuggling, indirect injection via retrieved data, prompt leaking, jailbreak, insecure output handling and data exfiltration — with severity scoring and PDF vulnerability reporting mapped to the OWASP Top 10 for LLM Applications and MITRE ATLAS.",
    tech: ["Python", "OWASP LLM Top 10", "MITRE ATLAS", "Prompt Injection", "Red Teaming", "PDF Reporting"],
    github: "https://github.com/sharingkapotter/llm-security-assessment",
    type: "LLM Security",
    featured: true,
  },
  {
    title: "Adversarial Attack Lab",
    description:
      "FGSM and PGD evasion attacks against a production-grade image classifier, demonstrating how imperceptible perturbations flip a model from 77% confident and correct to 100% confident and wrong — then evaluating which defensive countermeasures actually hold. Framework-mapped to NIST AI RMF MEASURE and MITRE ATLAS techniques.",
    tech: ["Python", "PyTorch", "FGSM", "PGD", "Adversarial ML", "Model Robustness"],
    github: "https://github.com/sharingkapotter/adversarial-lab",
    type: "Model Validation",
    featured: true,
  },
  {
    title: "DevSecOps Pipeline Gate",
    description:
      ".NET application on GitHub Actions with static analysis (Semgrep plus custom C# rules), software composition analysis and Trivy container scanning, failing the build on high and critical findings. Includes the complete fail → remediate → pass loop and a documented suppression policy — governance enforced in the pipeline rather than written in a policy.",
    tech: [".NET", "GitHub Actions", "Semgrep", "SCA", "Trivy", "SAST", "Secure SDLC"],
    github: "https://github.com/sharingkapotter/devsecops-pipeline-gate",
    type: "AppSec / DevSecOps",
    featured: true,
  },
  {
    title: "AI Incident & Risk Dashboard",
    description:
      "Monitoring surface for bias, explainability and safety metrics across the model lifecycle, with incident logging structured for AI risk register intake and executive reporting.",
    tech: ["Python", "AI Risk Register", "Bias Metrics", "Explainability", "Executive Reporting"],
    github: "https://github.com/sharingkapotter/ai-incident-risk-dashboard",
    type: "AI Governance",
  },
  {
    title: "AI Resume Bias Detector",
    description:
      "Fairness evaluation harness for automated screening models — measures disparate treatment across perturbed candidate attributes and reports where a model's decisions shift for reasons a regulator would care about.",
    tech: ["Python", "Fairness Testing", "Responsible AI", "Bias Evaluation"],
    github: "https://github.com/sharingkapotter/ai-resume-bias-detector",
    type: "Responsible AI",
  },
  {
    title: "LLM Output Quality Evaluator",
    description:
      "Systematic evaluation of LLM output quality — grounding, consistency and failure-mode detection — the assurance layer that has to exist before a model is signed off for production use.",
    tech: ["Python", "LLM Evaluation", "Model Assurance", "Quality Metrics"],
    github: "https://github.com/sharingkapotter/llm-output-quality-evaluator",
    type: "Model Validation",
  },
  {
    title: "API Security Testing Toolkit",
    description:
      "Automated Python API security scanner targeting the OWASP API Security Top 10 — HTTP method tampering, SQL injection (21 payloads), authentication failures and XSS reflection — with JSON and HTML scan reporting.",
    tech: ["Python", "OWASP API Top 10", "SQLi", "XSS", "Auth Testing", "Jinja2"],
    github: "https://github.com/sharingkapotter/api-security-toolkit",
    type: "AppSec / DevSecOps",
  },
  {
    title: "JMeter Performance Testing Framework",
    description:
      "Reusable Apache JMeter framework for REST API performance testing — CSV data-driven tests, response assertions, environment switching via user-defined variables, non-GUI CI/CD execution and HTML dashboard reporting.",
    tech: ["JMeter", "Java", "REST API", "CI/CD", "HTML Reports"],
    github: "https://github.com/sharingkapotter/jmeter-performance-framework",
    type: "Quality Engineering",
  },
  {
    title: "UnravelTrip Automation Framework",
    description:
      "End-to-end .NET C# automation framework using Playwright for UI and RestSharp for API testing, built with Reqnroll BDD and NUnit. 26 passing tests across UI and API layers.",
    tech: ["C#", ".NET", "Playwright", "Reqnroll", "RestSharp", "BDD", "NUnit"],
    github: "https://github.com/sharingkapotter/UnravelTripAutomationFramework",
    type: "Quality Engineering",
  },
];
