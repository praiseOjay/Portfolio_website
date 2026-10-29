// Curated projects (images, links, case studies). The repository README for GitHub is built from this file too.
window.portfolioProjects = [
  {
    "id": "aws-serverless-pipeline",
    "title": "AWS Serverless Data Pipeline & Analytics Platform",
    "role": "Data Engineer",
    "period": "Aug 2026 - Aug 2026",
    "location": "Salford, England, United Kingdom",
    "category": "data",
    "image": "assets/images/project_aws_serverless_pipeline.png",
    "summary": "Production-grade, event-driven serverless data pipeline and real-time analytics platform built on AWS using TDD and Infrastructure as Code (AWS SAM), featuring Step Functions orchestration, dual-engine storage, and an interactive dashboard.",
    "fullDescription": "A production-level, event-driven, serverless data pipeline implemented on the AWS cloud platform in accordance with enterprise architecture principles. The application uses test-driven development and an infrastructure-as-code approach (AWS SAM) to design an automated data pipeline process that performs several stages of data ingestion and validation, saving the results of computation in two different data storage systems: the data warehouse (data lake) in the form of OLAP-column Parquet files (S3), and the OLTP key-value store (DynamoDB). The application features ad-hoc SQL queries and analysis through AWS Glue and Athena, and offers an interactive dashboard with time-based data visualisation using a serverless REST API.",
    "tags": [
      "AWS",
      "SAM",
      "Lambda",
      "Step Functions",
      "DynamoDB",
      "S3",
      "Athena",
      "Python",
      "TDD"
    ],
    "liveUrl": "https://praiseojay.github.io/aws-serverless-data-pipeline/",
    "githubUrl": "https://github.com/praiseOjay/aws-serverless-data-pipeline",
    "featured": true,
    "metrics": [
      "100% TDD Coverage",
      "Dual-Engine Storage",
      "Real-Time Analytics Dashboard"
    ],
    "keyFeatures": [
      "AWS Step Functions state machine orchestrating multi-stage ingestion, validation, and transformation",
      "Dual-engine storage: OLAP Parquet data lake in S3 + OLTP DynamoDB for low-latency queries",
      "Interactive Chart.js analytics dashboard with KPI cards, multi-timeframe trends, and CSV export",
      "100% test coverage with pytest & moto, automated CI/CD via GitHub Actions"
    ]
  },
  {
    "id": "capstone-etl-project",
    "title": "Data Engineering Capstone Project",
    "role": "Data Engineer",
    "period": "Dec 2025 - Dec 2025",
    "location": "Salford, England, United Kingdom",
    "category": "data",
    "image": "assets/images/project_etl_fitness.png",
    "summary": "Comprehensive Python-based ETL capstone solution focused on fitness statistics analysis, featuring multi-stage cleaning, Parquet storage, and an interactive Streamlit dashboard.",
    "fullDescription": "This is a comprehensive Python-based ETL (Extract, Transform, Load) capstone project that demonstrates a complete data engineering solution focused on fitness statistics analysis. The project extracts fitness data from CSV sources, performs multi-stage data cleaning and enrichment, loads data into structured formats (CSV and Parquet), and provides interactive visualizations through a Streamlit dashboard. It emphasizes professional development practices including modular architecture, comprehensive testing (unit, integration, component, and E2E tests), code quality standards (flake8, sqlfluff), and structured logging throughout the pipeline.",
    "tags": [
      "Python",
      "ETL Pipeline",
      "PySpark",
      "Streamlit",
      "Parquet",
      "Pytest",
      "Data Engineering"
    ],
    "liveUrl": "https://data-engineering-capstone-project.streamlit.app/",
    "githubUrl": "https://github.com/praiseOjay/capstone_project",
    "featured": true,
    "metrics": [
      "Modular ETL Architecture",
      "Parquet & CSV Storage",
      "Streamlit Dashboard"
    ],
    "keyFeatures": [
      "Multi-stage automated extract, transform, and load (ETL) pipeline",
      "Columnar data storage optimization using Apache Parquet and CSV formats",
      "Interactive Streamlit visualization analytics dashboard",
      "Automated testing suite (pytest) and code quality standards (flake8, sqlfluff)"
    ]
  },
  {
    "id": "global-ai-education",
    "title": "Global AI in Education Dashboard (2015–2026)",
    "role": "Data Engineer",
    "period": "Apr 2026 - Apr 2026",
    "location": "Salford, England, United Kingdom",
    "category": "data",
    "image": "assets/images/project_powerbi_global_ai_education.png",
    "gallery": [
      {
        "title": "Overview",
        "src": "assets/images/project_ai_education_overview.png"
      },
      {
        "title": "Urban vs Rural Divide",
        "src": "assets/images/project_ai_education_urban_rural.png"
      },
      {
        "title": "Government Policy Impact",
        "src": "assets/images/project_ai_education_government_policy.png"
      },
      {
        "title": "Gender Gap Tracker",
        "src": "assets/images/project_ai_education_gender_gap.png"
      },
      {
        "title": "Tool Market Share",
        "src": "assets/images/project_ai_education_tool_market_share.png"
      },
      {
        "title": "Australia Trends",
        "src": "assets/images/project_ai_education_australia_trends.png"
      },
      {
        "title": "Urban Rural Gap",
        "src": "assets/images/project_ai_education_country_gap.png"
      }
    ],
    "summary": "Power BI project investigating AI adoption within global education across 10 countries and 5 regions, tracking student/teacher usage and socio-demographic indicators.",
    "fullDescription": "This Power BI project investigates how Artificial Intelligence has been adopted within global education systems over an 11-year period (2015–2026). The analysis spans 10 countries across 5 regions: North America, Europe, Asia, South America, and Africa and tracks student usage, teacher usage, school adoption rates, policy development, and socio-demographic indicators such as the urban/rural divide and gender gap.",
    "tags": [
      "Power BI",
      "Data Engineering",
      "DAX",
      "Data Analytics",
      "Global AI Trends"
    ],
    "liveUrl": "https://app.powerbi.com/groups/me/reports/0e1a5453-ca1e-4ea9-8f43-316c21cdcc8a/41f84e6fd80c77bda6ea?experience=power-bi",
    "githubUrl": "https://github.com/praiseOjay/Global_AI_in_Education.git",
    "featured": true,
    "metrics": [
      "11-Year Longitudinal Analysis",
      "10 Countries / 5 Regions",
      "Socio-Demographic DAX Metrics"
    ],
    "keyFeatures": [
      "Longitudinal analysis of AI adoption rates across 10 countries and 5 global regions",
      "Tracking of student usage, teacher integration, and institutional policy developments",
      "Socio-demographic metric modeling focusing on urban/rural divides and gender equality"
    ]
  },
  {
    "id": "uk-retail-sales",
    "title": "UK Online Retail Sales Performance & Customer Insights (2009–2011)",
    "role": "Data Engineer",
    "period": "Apr 2026 - Apr 2026",
    "location": "Salford, England, United Kingdom",
    "category": "data",
    "image": "assets/images/project_powerbi_uk_retail.png",
    "summary": "Power BI dashboard delivering end-to-end analysis of UK online retail sales data (2009–2011), detailing product demand, revenue, and customer behavior trends.",
    "fullDescription": "This Power BI dashboard provides a comprehensive analysis of UK online retail sales data spanning from 2009 to 2011. It delivers actionable insights into product demand, revenue performance, customer behaviour, and seasonal trends, enabling data-driven decision-making for retail stakeholders.",
    "tags": [
      "Power BI",
      "Data Analytics",
      "DAX",
      "SQL",
      "E-commerce",
      "Data Visualization"
    ],
    "liveUrl": "https://app.powerbi.com/groups/me/reports/087bb9a2-329f-497c-a396-24b4adf845c2/6b665f201c5599e30ad0?experience=power-bi",
    "githubUrl": "https://github.com/praiseOjay/PowerBI_capstone_project.git",
    "featured": true,
    "metrics": [
      "Multi-Year Retail Analytics",
      "DAX Data Modeling",
      "Customer Behavior Insights"
    ],
    "keyFeatures": [
      "Comprehensive product demand and revenue trend analysis across 2009-2011 retail dataset",
      "Advanced DAX metrics for customer segmentation and cohort analysis",
      "Interactive Power BI dynamic filtering and seasonal trend visualizations"
    ]
  },
  {
    "location": "Salford, England, United Kingdom",
    "liveUrl": "",
    "githubUrl": "",
    "private": true,
    "featured": true,
    "id": "agent-hq",
    "title": "Agent HQ",
    "role": "Full-stack Developer",
    "period": "Sep 2026 - Oct 2026",
    "category": "fullstack",
    "image": "assets/images/project_agent_hq.png",
    "summary": "A local-first workspace where a team of persistent AI agents plans, writes, researches and runs scheduled routines on your own machine, with a React dashboard, a FastAPI backend and a YouTube channel studio.",
    "fullDescription": "Agent HQ is a private platform for running a team of persistent AI agents on local models, with hosted models as optional failover. A Chief of Staff triages work, an Ops agent runs routines, and a Writer produces scripts, while a local SQLite store keeps the work journal, notes and approvals. It integrates Gmail through Composio (read only), schedules routines with cron, renders faceless videos with Remotion and ffmpeg, manages local git projects, and drives the AutoApplyAI job-application service. Anything that changes the outside world waits for explicit approval.",
    "tags": [
      "Python",
      "FastAPI",
      "React",
      "MUI",
      "SQLite",
      "Remotion",
      "Playwright",
      "LLM agents"
    ],
    "metrics": [
      "800+ backend tests",
      "Local-first, approval-gated actions",
      "Scheduled routines"
    ],
    "keyFeatures": [
      "Persistent agents with their own roles, models and memory, sharing one backend and one approval queue",
      "Cron routines with missed-run recovery: inbox triage, library and security watch, backlog check, health check",
      "YouTube studio: research, script, narration, motion-graphics rendering with Remotion, thumbnails and an upload calendar",
      "Auto Apply: job radar, tailored CVs and cover letters, review-before-submit, recruiter-email scanning that moves a Kanban board",
      "Pytest, Vitest and Playwright suites, with a secret-scanning pre-commit hook"
    ]
  },
  {
    "location": "Salford, England, United Kingdom",
    "liveUrl": "",
    "githubUrl": "",
    "private": true,
    "featured": true,
    "id": "autoapplyai",
    "title": "AutoApplyAI",
    "role": "Full-stack Developer",
    "period": "Oct 2026 - Oct 2026",
    "category": "fullstack",
    "image": "assets/images/project_autoapplyai.png",
    "summary": "Tailors a CV and cover letter to each job in British English, humanises the writing, checks every claim against the master CV, builds ATS-friendly PDFs and fills the application form for review.",
    "fullDescription": "AutoApplyAI is a job-application service built with Node, Express, React and SQLite. A job radar finds live roles and scores them against the master CV; the tailoring pipeline rewrites the CV and cover letter for each posting without fabricating experience, and a verification step flags any figure, year or skill the master CV does not support. A Playwright bot fills application forms and stops for human review. It can run with its own model key or borrow the models of Agent HQ.",
    "tags": [
      "Node.js",
      "TypeScript",
      "Express",
      "React",
      "SQLite",
      "Playwright",
      "Docker",
      "LLM"
    ],
    "metrics": [
      "Claim verification against the master CV",
      "Review-before-submit form filling",
      "Automatic database backups"
    ],
    "keyFeatures": [
      "Job radar with filters, fit scoring and duplicate detection",
      "GB English enforcement and an AI-phrasing cleaner on every generated document",
      "ATS keyword scoring before and after tailoring, and PDF generation for CV and cover letter",
      "Access control for use from other devices, retry with backoff for model calls, and vitest coverage"
    ]
  },
  {
    "id": "connect-talent-cio",
    "title": "Connect Talent CIO Website",
    "role": "Front-end Developer",
    "period": "Jul 2025 - Aug 2025",
    "location": "Salford, England, United Kingdom",
    "category": "fullstack",
    "image": "assets/images/project_connect_talent.png",
    "summary": "Modern, fully responsive web platform built for Connect Talent CIO (Registered Charity No. 1165973) using PHP, Tailwind CSS, and robust web security standards.",
    "fullDescription": "The Connect Talent CIO website is a modern, fully responsive digital platform designed to advance digital inclusion, accredited skills development, and community support for residents across Salford and Greater Manchester. Built using PHP, Tailwind CSS, and robust web security standards, the platform showcases the charity's mission (Registered Charity No. 1165973) while enabling seamless community interaction through intuitive popup forms for volunteering, device and financial donation pledges, resident referrals, and corporate partnership inquiries.",
    "tags": [
      "PHP",
      "Tailwind CSS",
      "Web Security",
      "Responsive Design",
      "Front-end"
    ],
    "liveUrl": "https://connect-talent.org/",
    "githubUrl": "",
    "featured": true,
    "metrics": [
      "Live Production Charity Portal",
      "Volunteering & Donation Pledges",
      "Community Referrals"
    ],
    "keyFeatures": [
      "Fully responsive modern digital layout built with PHP and Tailwind CSS",
      "Interactive donation pledges, volunteer registration, and resident referral workflows",
      "Strict web security compliance and web accessibility standards"
    ]
  },
  {
    "id": "connect-institute",
    "title": "Connect Institute",
    "role": "Full-stack Developer",
    "period": "Aug 2025 - Nov 2025",
    "location": "Salford, England, United Kingdom",
    "category": "fullstack",
    "image": "assets/images/project_connect_institute.png",
    "summary": "WordPress web development for Connect Institute, the training division of Connect International Resources, offering FE diplomas, MSc, and PhD programs.",
    "fullDescription": "This project involves developing a website for Connect Institute using WordPress. Connect Institute is the training and education division of Connect International Resources, which provides a comprehensive range of courses from Further Education diplomas to postgraduate MSc and PhD degrees, all of which contribute to career progression and development.",
    "tags": [
      "WordPress",
      "Full-Stack",
      "CMS",
      "Web Design",
      "Higher Education"
    ],
    "liveUrl": "https://coinst.uk/",
    "githubUrl": "",
    "featured": true,
    "metrics": [
      "Live Higher Education Portal",
      "Comprehensive Course Catalog",
      "Responsive Design"
    ],
    "keyFeatures": [
      "Complete WordPress build for higher education and FE diploma courses",
      "Structured program pathways from FE diplomas to postgraduate MSc and PhD degrees",
      "SEO-optimized responsive UI tailored for prospective international students"
    ]
  },
  {
    "id": "connect-international-resources",
    "title": "Connect International Resources",
    "role": "Full-stack Developer",
    "period": "Apr 2025 - Jul 2025",
    "location": "Salford, England, United Kingdom",
    "category": "fullstack",
    "image": "assets/images/project_connect_international_resources.png",
    "summary": "Complete WordPress corporate website for Connect International Resources Limited (CIR), connecting clients to UK education and global employment opportunities.",
    "fullDescription": "The project entails developing a complete WordPress website for an organisation called Connect International Resources. Connect International Resources Limited (CIR) is a UK-based international consultancy agency based at Salford, Manchester. It is a premier resource connecting people worldwide to education, employment opportunities as well as professional development resources in the UK and abroad.",
    "tags": [
      "WordPress",
      "CMS",
      "Consultancy",
      "Global Mobility",
      "SEO"
    ],
    "liveUrl": "https://connectinternationalresources.com/",
    "githubUrl": "",
    "featured": true,
    "metrics": [
      "Global Consultancy Portal",
      "International Placement Resources",
      "SEO & Performance"
    ],
    "keyFeatures": [
      "Corporate WordPress architecture for UK-based international agency",
      "Streamlined portal connecting global candidates to UK education & employment",
      "Custom responsive theme, security hardening, and performance optimization"
    ]
  },
  {
    "id": "advert-marketplace",
    "title": "Advert Marketplace Website",
    "role": "Full-stack Developer",
    "period": "Jan 2024 - Mar 2024",
    "location": "Salford, England, United Kingdom",
    "category": "fullstack",
    "image": "assets/images/project_marketplace.png",
    "summary": "Classifieds advert marketplace application built with PHP, Symfony, Doctrine ORM, and MySQL featuring full CRUD, search, pagination, and admin moderation.",
    "fullDescription": "A web-based classifieds and advert marketplace application developed with PHP, Symfony, Doctrine ORM, and MySQL. It offers listing CRUD capabilities, category filtering, search, pagination, access control roles, and an administrative moderation panel.",
    "tags": [
      "PHP",
      "Symfony",
      "Doctrine ORM",
      "MySQL",
      "Twig",
      "Full-Stack"
    ],
    "liveUrl": "https://jkjl56qvog.execute-api.eu-west-2.amazonaws.com/",
    "githubUrl": "https://github.com/praiseOjay/Marketplace_website",
    "featured": true,
    "metrics": [
      "Full CRUD Functionality",
      "Role-Based Auth",
      "Admin Moderation Panel"
    ],
    "keyFeatures": [
      "Comprehensive listing creation, edition, and category management",
      "Search engine with dynamic pagination and category filtering",
      "Secure access control roles and administrative moderation panel"
    ]
  },
  {
    "id": "notes-manager",
    "title": "Notes Manager App",
    "role": "Mobile Developer",
    "period": "May 2024 - Jul 2024",
    "location": "Salford, England, United Kingdom",
    "category": "mobile",
    "image": "assets/images/project_notes_manager.png",
    "summary": "Cross-platform task and note-taking app built with Flutter, Provider, and Material 3 design with real-time state sync, scheduled reminders, and dark mode.",
    "fullDescription": "A cross-platform task and note-taking application built with Flutter, Provider, and Material 3 design. It delivers real-time state synchronization, local scheduled notification reminders, checklist creation, and dark mode support across Android, iOS, Web, and Windows desktop.",
    "tags": [
      "Flutter",
      "Dart",
      "Provider",
      "Material 3",
      "Cross-Platform",
      "Mobile Dev"
    ],
    "liveUrl": "https://github.com/praiseOjay/notes_manager",
    "githubUrl": "https://github.com/praiseOjay/notes_manager",
    "featured": true,
    "metrics": [
      "Android / iOS / Web / Desktop",
      "Scheduled Push Notifications",
      "Provider State Sync"
    ],
    "keyFeatures": [
      "Real-time state synchronization using Flutter Provider",
      "Local scheduled push notification reminders and checklist creation",
      "Material 3 responsive design supporting Android, iOS, Web, and Windows"
    ]
  },
  {
    "id": "task-manager-app",
    "title": "Task Manager App",
    "role": "Mobile Developer",
    "period": "May 2024 - Jul 2024",
    "location": "Salford, England, United Kingdom",
    "category": "mobile",
    "image": "assets/images/project_task_manager.png",
    "summary": "Cross-platform mobile task management application built with React Native, Expo SDK 51, and Expo Router with file attachments and persistent offline storage.",
    "fullDescription": "A cross-platform mobile task management application created with React Native, Expo SDK 51, and Expo Router. It includes complete task lifecycle tracking, category and priority labeling, image and document attachments, real-time filtering, and persistent offline local storage.",
    "tags": [
      "React Native",
      "Expo SDK 51",
      "Expo Router",
      "JavaScript",
      "Mobile Dev"
    ],
    "liveUrl": "https://github.com/praiseOjay/TaskManager",
    "githubUrl": "https://github.com/praiseOjay/TaskManager",
    "featured": true,
    "metrics": [
      "Expo SDK 51 & Router",
      "Offline Local Storage",
      "Media Attachments"
    ],
    "keyFeatures": [
      "Task lifecycle tracking with category tagging and priority scheduling",
      "Image and document file attachment management",
      "Real-time task filtering and offline local storage persistence"
    ]
  },
  {
    "id": "supercharged-fitness",
    "title": "Supercharged Fitness Application",
    "role": "Android Mobile Developer",
    "period": "Jan 2023 - Jun 2023",
    "location": "Salford, England, United Kingdom",
    "category": "mobile",
    "image": "assets/images/project_mobile_fitness.png",
    "summary": "Android mobile application written in Kotlin designed to guide users through bodyweight workouts with visual guidance, interval timers, and text-to-speech.",
    "fullDescription": "An Android mobile application written in Kotlin designed to guide users through bodyweight exercises. It incorporates structured workout routines, step-by-step visual exercise guidance, interval timers, text-to-speech directions, and video demonstrations.",
    "tags": [
      "Android",
      "Kotlin",
      "Mobile Dev",
      "TTS Directions",
      "SQLite"
    ],
    "liveUrl": "https://github.com/praiseOjay/Supercharged-Fitness",
    "githubUrl": "https://github.com/praiseOjay/Supercharged-Fitness",
    "featured": true,
    "metrics": [
      "Kotlin Native",
      "TTS Directions",
      "Visual Exercise Guidance"
    ],
    "keyFeatures": [
      "Structured bodyweight workout routines with step-by-step visual guidance",
      "Interval timers and real-time text-to-speech voice instructions",
      "Exercise video demonstrations and local workout history tracking"
    ]
  },
  {
    "id": "javafx-space-game",
    "title": "JavaFX-game",
    "role": "Java Developer",
    "period": "Feb 2022 - Apr 2022",
    "location": "Salford, England, United Kingdom",
    "category": "backend",
    "image": "assets/images/project_javafx_game.png",
    "summary": "2D arcade space shooter game ('Aliens & Asteroids') built in Java using JavaFX with 720p widescreen graphics, parallax scrolling, particle engines, and score tracking.",
    "fullDescription": "A 2D arcade space shooter game (\"Aliens & Asteroids\") built in Java using JavaFX. It includes 720p widescreen graphics with parallax scrolling, laser combat mechanics, particle flame and explosion engines, power-ups, synthesized audio, and score tracking.",
    "tags": [
      "Java",
      "JavaFX",
      "Game Dev",
      "Particle Engine",
      "OOP Architecture"
    ],
    "liveUrl": "https://github.com/praiseOjay/JavaFX-game.git",
    "githubUrl": "https://github.com/praiseOjay/JavaFX-game.git",
    "featured": true,
    "metrics": [
      "720p Widescreen Graphics",
      "Particle Engine",
      "Synthesized Audio"
    ],
    "keyFeatures": [
      "Custom particle flame & explosion rendering engine",
      "Smooth multi-layer parallax scrolling background graphics",
      "Laser combat mechanics, weapon power-ups, and collision detection"
    ]
  },
  {
    "location": "Salford, England, United Kingdom",
    "liveUrl": "",
    "githubUrl": "",
    "private": true,
    "featured": true,
    "id": "overload-ai",
    "title": "Overload AI: Gym & Hypertrophy Coach",
    "role": "Mobile Developer",
    "period": "Sep 2026 - Oct 2026",
    "category": "mobile",
    "image": "assets/images/project_gym_overload.jpg",
    "gallery": [
      {
        "title": "Progressive overload",
        "src": "assets/images/gym_dashboard.jpg"
      },
      {
        "title": "AI coach",
        "src": "assets/images/gym_ai_coach.jpg"
      },
      {
        "title": "Volume landmarks",
        "src": "assets/images/gym_volume.jpg"
      }
    ],
    "summary": "Offline-first strength-training app for Android built with React, TypeScript and Capacitor: progressive-overload targets, muscle recovery, an AI coach and five languages.",
    "fullDescription": "Overload AI is an offline-first Android app built with React 19, TypeScript, Vite and Capacitor, with a custom native plugin for the home-screen widget, the lock-screen rest timer and audio ducking. It calculates target weights and reps from previous performance, tracks volume landmarks and recovery, and includes an AI coach (Google Gemini behind a rate-limited Cloudflare Worker, so the app ships no AI key). Training data stays on the phone unless optional cloud backup is switched on.",
    "tags": [
      "React",
      "TypeScript",
      "Capacitor",
      "Android",
      "Supabase",
      "Cloudflare Workers",
      "Gemini",
      "Playwright"
    ],
    "metrics": [
      "Offline-first",
      "5 languages",
      "Automated and accessibility tests"
    ],
    "keyFeatures": [
      "Progressive-overload engine with RPE targets, mesocycles and deload suggestions",
      "Custom Capacitor plugin: Android widget, lock-screen rest timer, audio ducking",
      "AI coach through a private proxy with daily limits, so no API key is in the app",
      "Optional cloud backup with row-level security, Health Connect integration and in-app subscriptions"
    ]
  },
  {
    "location": "Salford, England, United Kingdom",
    "liveUrl": "",
    "githubUrl": "",
    "private": true,
    "featured": false,
    "id": "ai-humaniser",
    "title": "AI Humaniser Pro",
    "role": "Full-stack Developer",
    "period": "Jul 2026 - Aug 2026",
    "category": "fullstack",
    "image": "assets/images/project_ai_humaniser.png",
    "summary": "Web app that rewrites AI-generated text into natural prose: paste text or upload files, choose a tone, see a quality score and export the result.",
    "fullDescription": "AI Humaniser Pro is a Next.js and TypeScript web application. It accepts pasted text or .txt, .docx and .pdf files, processes them through a queue, and rewrites them with a local model or the OpenAI API according to the chosen tone and intensity. Results are scored and can be exported as .docx, .pdf or a .zip of a whole batch.",
    "tags": [
      "Next.js",
      "TypeScript",
      "React",
      "OpenAI API",
      "mammoth",
      "docx",
      "JSZip"
    ],
    "metrics": [
      "Batch processing",
      "Local or hosted models",
      ".docx / .pdf / .zip export"
    ],
    "keyFeatures": [
      "Multi-format input: text, Word and PDF",
      "Batch queue for many files at once",
      "Tone and intensity controls with a quality score",
      "Export to Word, PDF or a zip"
    ]
  }
];
