export const profile = {
  name: "Aaditya Kumar Gaurav",
  first: "Aaditya",
  last: "Kumar Gaurav",
  role: "Senior Software Engineer · SDET",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "aadityagaurav12@gmail.com",
  phone: "+91 8434701401",
  phoneHref: "tel:+918434701401",
  summary:
    "SDET with six years in test automation, API, and mobile testing across payments, automotive, and consumer electronics. I build the frameworks, then put AI inside them so coverage review, new scenarios, and failed-run analysis happen before a release waits on a person.",
};

export const metrics = [
  { value: "6 yrs", label: "Automation, API, and mobile testing" },
  { value: "300+", label: "Samsung test cases automated" },
  { value: "60%", label: "Less manual testing effort" },
  { value: "40%", label: "Faster API regression cycles" },
];

export const experience = [
  {
    company: "ChargePoint",
    place: "Gurugram",
    title: "Senior Software Engineer (SDET)",
    dates: "Sep 2025 — Jul 2026",
    domain: "Payments",
    points: [
      { text: "Built a BDD framework in Python, Gherkin, Behave, and the Page Object Model for end-to-end payment flows, turning requirements into reusable feature files and step definitions." },
      { text: "Added a daily Jenkins job that checks payment-flow stability and keeps the suite inside the CI/CD path." },
      { text: "Automated functional, regression, smoke, and API cases, plus shared utilities that made the suite easier to extend." },
      { text: "Raised execution stability with synchronization, exception handling, logging, and reporting." },
      { text: "Created a Claude skill that reviews pull requests for automation coverage and test quality before merge.", ai: true },
      { text: "Created a second Claude skill that drafts and automates new scenarios from the test data already in the suite.", ai: true },
      { text: "Used AI to speed up Gherkin, step definitions, edge cases, and refactors, and to trace failed runs from logs.", ai: true },
      { text: "Worked with developers, QA, and business analysts on acceptance criteria, test planning, and sprint regression." },
    ],
  },
  {
    company: "CARS24 Australia",
    place: "Gurugram",
    title: "Software Development Engineer in Test 2",
    dates: "Apr 2025 — Sep 2025",
    domain: "Automotive",
    points: [
      { text: "Modularized Page Object Models with PageFactory and custom utilities, cutting maintenance time by 30%." },
      { text: "Built a REST API framework with RestAssured and TestNG for inventory, pricing, and user journeys." },
      { text: "Automated token-based authentication and backend checks with POJOs and ObjectMapper." },
      { text: "Joined Agile planning, QA strategy, and retrospectives." },
    ],
  },
  {
    company: "Samsung R&D Institute",
    place: "Noida",
    title: "Software Test Engineer",
    dates: "Jul 2021 — Mar 2025",
    domain: "Consumer electronics",
    points: [
      { text: "Automated 300+ cases for Samsung Messages and Account apps with Java, Selenium, and Appium, reducing manual effort by 60%." },
      { text: "Built RestAssured API suites on Maven and Jenkins, cutting regression time by 40%." },
      { text: "Used QuickBuild pipelines to run scripts against the latest stable mobile binaries." },
      { text: "Handled test data with Apache POI so suites could read and write Excel files." },
      { text: "Led coverage and CI work for faster feedback, and trained new engineers on the automation frameworks." },
    ],
  },
  {
    company: "Samsung R&D Institute",
    place: "Noida",
    title: "Software Developer Intern",
    dates: "Jan 2021 — Jun 2021",
    domain: "Internal tools",
    points: [
      { text: "Built the frontend and backend of a Software Code Quality Portal with Angular and Spring Boot." },
      { text: "Designed REST APIs and connected them to MySQL." },
    ],
  },
  {
    company: "Deloitte",
    place: "Short engagement",
    title: "Technical Consultant",
    dates: "Apr 2020 — May 2020",
    domain: "Consulting",
    points: [
      { text: "Contributed as a technical consultant on a short-term engagement." },
    ],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Python"],
  },
  {
    label: "Automation",
    items: ["Selenium", "Appium", "RestAssured", "Postman", "BDD / Gherkin", "Cucumber", "Behave"],
  },
  {
    label: "Frameworks",
    items: ["TestNG", "Page Object Model", "Spring Boot", "Angular", "PyTest"],
  },
  {
    label: "Delivery",
    items: ["Git", "GitHub", "Maven", "Jenkins", "QuickBuild", "CI/CD"],
  },
  {
    label: "Platforms",
    items: ["Kafka", "Kibana", "Grafana", "Linux", "SQL", "MongoDB", "Apache POI"],
  },
  {
    label: "Practice",
    items: ["REST API testing", "Payments testing", "DSA", "JIRA", "TestRail"],
  },
  {
    label: "AI in testing",
    items: ["Claude skills", "PR coverage review", "Scenario generation", "Log-based debugging"],
  },
];

export const aiWork = {
  lead: "At ChargePoint I put Claude in the path between a requirement and a green build. The model writes the first draft. I still own the assertions, the data, and what is allowed to merge.",
  steps: ["Acceptance criteria", "Gherkin draft", "Step definitions", "Daily Jenkins"],
  cards: [
    {
      title: "Coverage review before merge",
      detail:
        "A custom Claude skill reads a pull request and checks whether the automation coverage and test quality are good enough to merge.",
    },
    {
      title: "New scenarios from existing data",
      detail:
        "A second skill drafts and automates new cases from the test data already in the suite, so coverage grows without a blank page.",
    },
    {
      title: "Failed runs, traced from logs",
      detail:
        "AI helps write Gherkin, step definitions, and edge cases, then reads a failed run and points at the likely cause in the logs.",
    },
  ],
};

export const project = {
  name: "SteelMenu",
  kicker: "Selected project",
  title: "Steel price analysis platform",
  summary:
    "A full-stack tool for tracking steel prices across Indian cities. I built the REST APIs that serve dynamic pricing and contributed the price-trend dashboard on top of them.",
  stack: ["Java", "Spring Boot", "MySQL", "Postman"],
};

export const education = {
  degree: "B.Tech, Electronics and Communication Engineering",
  school: "Jaypee Institute of Information Technology",
  meta: "June 2021 · CGPA 7.6 / 10",
};

export const certifications = [
  "Java Backend Development — GeeksforGeeks",
  "Data Structures and Algorithms — GeeksforGeeks",
  "Object-Oriented Programming with Java",
  "Jenkins Essential Training",
  "Angular: API Communication and Authentication",
];

export const awards = [
  {
    title: "Squad Award",
    detail: "From the MD, for MNO Portal development in Q4 2022.",
  },
  {
    title: "Employee of the Quarter",
    detail: "Q1 2023, for API automation and QA ownership.",
  },
  {
    title: "Spot Award",
    detail: "December 2024, for an outstanding contribution.",
  },
];
