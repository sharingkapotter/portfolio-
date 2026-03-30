export const profile = {
  name: "Sunil Sodhi",
  displayName: "Sunil Sodhi",
  headline: "Senior SDET & QA Manager",
  subheadline: "Automation Architecture · Team Leadership · 20 Years",
  location: "Austin, TX",
  email: "sunilksodhi@gmail.com",
  phone: "+1 949-545-4237",
  linkedin: "https://www.linkedin.com/in/sunil-sodhi-30901a81",
  github: "https://github.com/sharingkapotter",
  summary: `Quality engineering leader and hands-on automation architect with 20 years of experience building scalable test frameworks, leading distributed QA teams, and driving measurable improvements in software quality. Expert in C#, Python, Playwright, Selenium, and SpecFlow with deep CI/CD integration in Azure DevOps. Proficient in REST/SOAP API testing and security endpoint validation (OWASP Top 10, fuzzing, XSS, boundary scans), and performance/load testing using JMeter — including simulations of 10,000+ concurrent users for healthcare claims processing at Premera Blue Cross. Track record of reducing manual testing by 50%+, improving regression coverage from 40% to 85%, and building QA organizations from the ground up. Background spans regulated industries including financial services (Wells Fargo, Experian), healthcare (Premera Blue Cross), insurance (Word & Brown), and retail (Starbucks, CoStar).`,
};

export const highlights = [
  { metric: "20+", label: "Years of Experience" },
  { metric: "50%", label: "Reduction in Manual Testing" },
  { metric: "12", label: "Engineers Led" },
  { metric: "85%", label: "Regression Coverage Achieved" },
  { metric: "45%", label: "Regression Defects Reduced" },
  { metric: "5+", label: "QA Orgs Built from Scratch" },
];

export const skills = {
  "Languages": ["C#", "Python", "JavaScript", "SQL", "VBA"],
  "Automation": ["Playwright", "Selenium WebDriver", "SpecFlow (BDD)", "Appium", "WinAppDriver"],
  "Frameworks": ["Page Object Model", "Data-Driven", "Keyword-Driven", "Hybrid", ".NET/NUnit"],
  "API Testing": ["RestSharp", "Postman", "Newman", "SoapUI", "Swagger", "REST/SOAP"],
  "CI/CD & DevOps": ["Azure DevOps Pipelines", "Git", "GitHub Actions", "Docker", "Kubernetes"],
  "Performance": ["JMeter", "Google Lighthouse", "LoadUI", "Distributed Load Testing"],
  "Security Testing": ["OWASP Top 10", "Fuzzing", "Boundary Scans", "XSS", "Weak Auth Testing"],
  "Monitoring": ["Dynatrace", "New Relic", "Splunk"],
  "Databases": ["SQL Server", "PostgreSQL", "MongoDB", "AWS Redshift"],
  "Tools": ["JIRA", "Azure DevOps Boards", "BrowserStack", "Smartsheet", "TestRail"],
  "Methodologies": ["Agile Scrum", "Kanban", "Shift-Left Testing", "TDD", "BDD"],
};

export const experience = [
  {
    title: "Professional Development & Certification Sprint",
    company: "Self-Directed",
    location: "Remote",
    period: "Oct 2025 – Jan 2026",
    bullets: [
      "Dedicated period to advancing cybersecurity and AI/ML security expertise through structured coursework: MLSecOps Foundation, CEH v12 (Ethical Hacking), NIST Cybersecurity Framework, ISO/IEC 27001, and SIEM & Event Management.",
      "Deepened hands-on knowledge in security operations, threat modeling, and AI security posture management — directly applicable to SDET and QA leadership roles in regulated industries.",
    ],
  },
  {
    title: "Senior Consultant / Lead SDET",
    company: "AdoptUSKids.org",
    location: "Remote",
    period: "Jul 2025 – Sep 2025",
    bullets: [
      "Architected and implemented a .NET C# test automation framework using Playwright (UI) and RestSharp (API) for a ReactJS/microservices-based child welfare platform.",
      "Integrated the full automation suite into Azure DevOps CI/CD pipelines with POM and data-driven architecture in C#/NUnit, enabling automated regression on every build.",
      "Assessed QA processes, conducted gap analysis, and delivered a roadmap for automation maturity covering functional, performance (JMeter), and security (OWASP) testing.",
    ],
  },
  {
    title: "Senior DevOps / Lead SDET Engineer",
    company: "Word & Brown Companies",
    location: "Remote",
    period: "Jul 2024 – Feb 2025",
    bullets: [
      "Led a team of 4 QA engineers, coordinating onshore/offshore activities to deliver 200+ automated test cases for enterprise insurance platforms.",
      "Designed POM and data-driven automation frameworks in C# covering UI, API (RestSharp, Postman), and database (SQL Server, Dapper ORM) layers.",
      "Built CI/CD pipelines in Azure DevOps; drove TFS to Azure DevOps migration reducing build times by 30%.",
    ],
  },
  {
    title: "Senior Test Consultant",
    company: "Starbucks Coffee Company",
    location: "Remote",
    period: "Apr 2024 – Jul 2024",
    bullets: [
      "Led end-to-end testing strategy for secure iPad-based retail applications deployed across 30,000+ Starbucks locations.",
      "Built executive dashboards and KPI tracking in Smartsheet; delivered go/no-go release recommendations based on defect trend analysis.",
    ],
  },
  {
    title: "Senior SDET",
    company: "Starbucks Coffee Company",
    location: "Remote",
    period: "Feb 2022 – Mar 2024",
    bullets: [
      "Built SpecFlow + C# BDD automation framework for POS and retail order management systems processing millions of daily transactions.",
      "Reduced manual testing by 50%, decreased regression cycles from 5 days to 2 days, improved coverage from 40% to 85%, and cut defect escape rate by 35%.",
      "Collaborated with 3 distributed teams to implement shift-left testing practices and define quality standards.",
    ],
  },
  {
    title: "Senior Performance Engineer",
    company: "Premera Blue Cross",
    location: "Remote",
    period: "Jun 2021 – Dec 2021",
    bullets: [
      "Developed JMeter performance test suites simulating 10,000+ concurrent users for healthcare claims processing.",
      "Reduced API response times by 40% using Dynatrace, Splunk, and New Relic for bottleneck identification.",
    ],
  },
  {
    title: "SDET (Security, Automation, Performance)",
    company: "ReverseVision",
    location: "Remote",
    period: "Jul 2020 – May 2021",
    bullets: [
      "Performed API security testing including boundary scans, fuzzing, XSS, and weak auth vulnerability assessments.",
      "Built Selenium + SpecFlow + C# automation framework with POM architecture; conducted cross-browser/mobile testing across 50+ configurations using BrowserStack.",
    ],
  },
  {
    title: "Senior Automation Engineer / Software Engineer in Test",
    company: "CoStar Group",
    location: "Austin & Irvine",
    period: "Oct 2016 – Jun 2020",
    bullets: [
      "Automated test suites for Apartments.com and LoopNet (50M+ monthly visitors); reduced regression defects by 45%.",
      "Performed UI, API, and performance testing; mentored junior SDETs on automation best practices and framework architecture.",
    ],
  },
  {
    title: "QA Manager / QA Lead / QA Project Manager",
    company: "Multiple Organizations",
    location: "USA",
    period: "2010 – 2016",
    sub: "Wells Fargo · Experian · Guthy Renker · Word & Brown · LA Fitness",
    bullets: [
      "Led QA teams of up to 12 engineers across onshore and offshore locations; transitioned organizations from 100% manual to 60% automated testing.",
      "Implemented quality governance processes including defect triage workflows, release quality gates, and executive quality reporting.",
      "Drove process improvements resulting in 25% faster release cycles across multiple enterprise platforms.",
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

export const certifications = [
  { name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance" },
  { name: "ASTQB Foundation", issuer: "ASTQB" },
  { name: "ITIL Foundation", issuer: "AXELOS" },
  { name: "MLSecOps Foundation", issuer: "Coursera · Oct 2025 – Jan 2026" },
  { name: "ISO/IEC 27001 Information Security", issuer: "Coursera · Oct 2025 – Jan 2026" },
  { name: "NIST Cybersecurity Framework", issuer: "Coursera · Oct 2025 – Jan 2026" },
  { name: "SIEM & Event Management", issuer: "LinkedIn Learning · Oct 2025 – Jan 2026" },
  { name: "CEH v12 – Certified Ethical Hacker", issuer: "Coursera · Oct 2025 – Jan 2026" },
  { name: "Ethical Hacking Fundamentals", issuer: "Coursera" },
  { name: "Managing Cybersecurity (GRC)", issuer: "Coursera" },
  { name: "Python Foundations", issuer: "University of Michigan" },
  { name: "JavaScript / HTML / CSS", issuer: "Duke University" },
  { name: "Advanced JMeter", issuer: "LinkedIn Learning" },
];

export const projects = [
  {
    title: "UnravelTrip Automation Framework",
    description: "End-to-end .NET C# test automation framework targeting unraveltrip.com using Playwright for UI and RestSharp for API testing. Built with SpecFlow/Reqnroll BDD, NUnit, and Newtonsoft.Json. 26 passing tests (20 UI + 6 API).",
    tech: ["C#", ".NET", "Playwright", "SpecFlow", "RestSharp", "BDD", "NUnit"],
    github: "https://github.com/sharingkapotter/UnravelTripAutomationFramework",
    type: "QA Automation",
  },
  {
    title: "LLM Security Assessment",
    description: "Red-team tool for assessing LLM security vulnerabilities. Tests prompt injection, jailbreaks, data exfiltration attempts, and adversarial inputs against language model endpoints.",
    tech: ["Python", "LLM Security", "Red Teaming", "Prompt Injection", "AI Safety"],
    github: "https://github.com/sharingkapotter/llm-security-assessment",
    type: "AI Security",
  },
];
