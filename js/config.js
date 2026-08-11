const portfolioConfig = {
    profile: {
        name: "Praise Ojerinola",
        title: "AWS Certified Data Engineer & Software Engineering Master's Graduate",
        tagline: "Building enterprise-scale data pipelines, cloud solutions, and full-stack digital applications.",
        bio: [
            "Developed a production-grade Python ETL pipeline with unit, integration, and end-to-end test coverage, comprehensive logging, and automated code quality checks, turning a messy fitness dataset into a clean, tested pipeline with a Streamlit dashboard. Building a full-stack marketplace application, developing cross-platform Flutter apps, and working daily alongside large-scale automated systems at Amazon have all reinforced the same principle: proper testing, clear documentation, and a practical approach are what separate code that works in a demo from software that holds up in production.",
            "I work across Python, SQL, PySpark, and AWS in data engineering, PHP, Symfony, and JavaScript in web application development, and Flutter/Dart in cross-platform mobile development. This is backed by an MSc in Software Engineering (Distinction) from the University of Salford and an AWS Certified Data Engineer – Associate certification, both built on practical implementation across real projects rather than theory alone.",
            "Looking for a role in software development, data engineering, or the intersection of both, where I can apply these skills directly. Open to full-time or contract-based positions."
        ],
        location: "Salford, England, United Kingdom",
        phone: "+44 7478 358217",
        status: "UK Citizen • Open to Relocation • Ready for full-time roles",
        avatar: "assets/images/praise_portrait.jpg",
        resumeUrl: "#",
        socials: {
            github: "https://github.com/praiseOjay",
            linkedin: "https://linkedin.com/in/praise-ojerinola-4125311b6",
            hyperion: "https://hyperiondev.com/portfolio/PO25010016717/",
            email: "ojerinolapraise@gmail.com"
        },
        stats: [
            { icon: "fas fa-graduation-cap", value: "Distinction", label: "MSc Qualification" },
            { icon: "fab fa-aws", value: "DEA-C01", label: "AWS Data Engineer" },
            { icon: "fas fa-award", value: "8+", label: "Certifications" },
            { icon: "fas fa-code", value: "Full-Stack", label: "Python • Java • PHP" }
        ]
    },
    education: [
        {
            degree: "Bootcamp, Data Engineering",
            institution: "Digital Futures",
            period: "Sept 2025 - Dec 2025",
            result: "AWS Certified (DEA-C01)",
            details: "Completed an intensive 12-week data engineering bootcamp covering Python programming, SQL, ETL processes, data pipelines, AWS cloud technologies, and Big Data tools (PySpark). Successfully achieved AWS Certified Data Engineer - Associate certification (January 2026), demonstrating proficiency in designing, building, and maintaining data engineering solutions on AWS."
        },
        {
            degree: "Bootcamp, Data Science",
            institution: "Hyperion Dev",
            period: "Jan 2025 - Apr 2025",
            result: "97% Grade Average",
            details: "The Data Science bootcamp covers Python, probability, statistics, data science libraries and fundamental machine-learning concepts. Achieved an overall grade average of 97% for the bootcamp tasks. Mastered Python programming within four months, enhancing coding skills and efficiency in data manipulation and analysis. Acquired hands-on experience with key data science libraries, including NumPy, pandas, and scikit-learn."
        },
        {
            degree: "Master's, Software Engineering",
            institution: "University of Salford",
            period: "Sept 2023 - Dec 2024",
            result: "Distinction",
            details: "Mastered advanced concepts in Lean and Agile methodologies, large-scale software engineering, and cutting-edge software architecture and security practices. My Dissertation focused on a comparative analysis of Flutter and React Native for small-scale mobile application development, showcasing proficiency in cross-platform development techniques."
        },
        {
            degree: "Bachelor's, Computer Science",
            institution: "University of Salford",
            period: "Sept 2020 - June 2023",
            result: "Upper Second Class (2:1)",
            details: "Experienced in web development and mobile application design with a focus on projects that apply my knowledge effectively. I have studied modules such as Database Systems, AI & Data Mining, and Client-server systems. For my year project, I created an Android fitness application that showcased my skills in full-stack development and user-centred design."
        }
    ],
    certifications: [
        { name: "AWS Certified Data Engineer - Associate (DEA-C01)", issuer: "Amazon Web Services", date: "Jan 2026", link: "https://www.credly.com/badges/53369df2-187c-4b08-9ed8-18911445242d/public_url" },
        { name: "Google AI Professional", issuer: "Google", date: "May 2026", link: "https://www.credly.com/badges/a22df458-67c8-4520-8d8f-c88485dce414/public_url" },
        { name: "Generative AI: LLM Engineering, RAG & Agents", issuer: "Udemy", date: "June 2026", link: "https://ude.my/UC-522a591f-1a4a-408f-8a81-dec223acca15" },
        { name: "Microsoft Power BI - Beginner to Pro", issuer: "Udemy", date: "March 2026", link: "https://www.udemy.com/certificate/UC-106654b1-c132-492c-902f-40239ecf1a77/" },
        { name: "Agile Explorer & Cybersecurity Fundamentals", issuer: "IBM", date: "Nov 2025", link: "https://www.credly.com/badges/f2a9434e-35b5-4e98-995d-d8b9d60e091f/linked_in_profile" },
        { name: "Ethics of AI", issuer: "University of Helsinki", date: "Nov 2025", link: "https://certificates.mooc.fi/validate/etlylbhivrr" }
    ],
    skills: [
        /* Data Engineering & Analytics */
        { name: "Python & PySpark ETL", category: "data", level: 96, icon: "fab fa-python", details: "PySpark, Pandas, ETL Pipelines, Data Transformation & Parquet" },
        { name: "SQL & Databases", category: "data", level: 95, icon: "fas fa-database", details: "MySQL, PostgreSQL, SQLite, MongoDB & Schema Architecture" },
        { name: "Power BI & Analytics", category: "data", level: 92, icon: "fas fa-chart-bar", details: "DAX Modeling, Tableau, Business Intelligence, Seaborn & Plotly" },
        { name: "Data Engineering Architecture", category: "data", level: 94, icon: "fas fa-network-wired", details: "Data Ingestion, Storage Technologies, Data Cleaning & Warehousing" },

        /* AI, Data Science & GenAI */
        { name: "Generative AI, RAG & LLMs", category: "ai", level: 92, icon: "fas fa-robot", details: "LangChain, Prompt Chaining, Responsible AI, Multimodal Prompting" },
        { name: "Data Science & ML", category: "ai", level: 94, icon: "fas fa-brain", details: "NumPy, Pandas, Scikit-learn, TensorFlow, SpaCy & NLP" },
        { name: "AI Tools & LLM Ecosystem", category: "ai", level: 95, icon: "fas fa-magic", details: "ChatGPT, Claude, Gemini, DeepSeek, Cursor & Ollama" },

        /* Backend, Languages & Software Architecture */
        { name: "Java & JavaFX Development", category: "backend", level: 90, icon: "fab fa-java", details: "Java, JavaFX, OOP, Multithreading & Particle Engines" },
        { name: "PHP & Symfony Framework", category: "backend", level: 88, icon: "fab fa-php", details: "Symfony, Doctrine ORM, Twig, CRUD Systems & Web Security" },
        { name: "C# & C/C++ Development", category: "backend", level: 86, icon: "fas fa-code", details: "C#, C/C++, .NET, Data Structures & Algorithms" },
        { name: "Software Architecture & Security", category: "backend", level: 92, icon: "fas fa-shield-alt", details: "Design Patterns, MVC/MVVM, TDD, Clean Code & Security" },

        /* Mobile & Frontend Development */
        { name: "Flutter & React Native", category: "mobile", level: 94, icon: "fas fa-mobile-alt", details: "Flutter/Dart, React Native, Provider, Expo SDK 51 & Router" },
        { name: "Native Mobile (Android & iOS)", category: "mobile", level: 88, icon: "fab fa-android", details: "Android (Kotlin/Java), iOS (Swift), Android Studio & Xcode" },
        { name: "Frontend & Web Tech", category: "backend", level: 90, icon: "fab fa-js-square", details: "JavaScript, HTML5/CSS3, Tailwind CSS, Bootstrap & Responsive UI" },

        /* DevOps, Cloud & Cyber Security */
        { name: "AWS Cloud Engineering (DEA-C01)", category: "devops", level: 94, icon: "fab fa-aws", details: "AWS Certified Data Engineer, S3, Lambda, Glue, Athena & Serverless" },
        { name: "Cybersecurity & Cyber Defense", category: "devops", level: 88, icon: "fas fa-lock", details: "Threat Assessment, Cryptography, Security Auditing & Kali Linux" },
        { name: "DevOps & Developer Tools", category: "devops", level: 95, icon: "fab fa-git-alt", details: "Git, GitHub, Linux/Unix, PowerShell, Docker/VirtualBox & Firebase" },
        { name: "Agile Leadership & SDLC", category: "devops", level: 92, icon: "fas fa-users-cog", details: "Scrum, Kanban, Agile Stand-ups, Code Review & SDLC Management" }
    ],
    projects: [
        {
            id: "capstone-etl-project",
            title: "Data Engineering Capstone Project",
            role: "Data Engineer",
            period: "Dec 2025 - Dec 2025",
            location: "Salford, England, United Kingdom",
            category: "data",
            image: "assets/images/project_etl_fitness.png",
            summary: "Comprehensive Python-based ETL capstone solution focused on fitness statistics analysis, featuring multi-stage cleaning, Parquet storage, and an interactive Streamlit dashboard.",
            fullDescription: "This is a comprehensive Python-based ETL (Extract, Transform, Load) capstone project that demonstrates a complete data engineering solution focused on fitness statistics analysis. The project extracts fitness data from CSV sources, performs multi-stage data cleaning and enrichment, loads data into structured formats (CSV and Parquet), and provides interactive visualizations through a Streamlit dashboard. It emphasizes professional development practices including modular architecture, comprehensive testing (unit, integration, component, and E2E tests), code quality standards (flake8, sqlfluff), and structured logging throughout the pipeline.",
            tags: ["Python", "ETL Pipeline", "PySpark", "Streamlit", "Parquet", "Pytest", "Data Engineering"],
            liveUrl: "https://github.com/praiseOjay/capstone_project",
            githubUrl: "https://github.com/praiseOjay/capstone_project",
            featured: true,
            metrics: ["Modular ETL Architecture", "Parquet & CSV Storage", "Streamlit Dashboard"],
            keyFeatures: [
                "Multi-stage automated extract, transform, and load (ETL) pipeline",
                "Columnar data storage optimization using Apache Parquet and CSV formats",
                "Interactive Streamlit visualization analytics dashboard",
                "Automated testing suite (pytest) and code quality standards (flake8, sqlfluff)"
            ]
        },
        {
            id: "global-ai-education",
            title: "Global AI in Education Dashboard (2015–2026)",
            role: "Data Engineer",
            period: "Apr 2026 - Apr 2026",
            location: "Salford, England, United Kingdom",
            category: "data",
            image: "assets/images/project_powerbi_global_ai_education.png",
            gallery: [
                { title: "Overview", src: "assets/images/project_ai_education_overview.png" },
                { title: "Urban vs Rural Divide", src: "assets/images/project_ai_education_urban_rural.png" },
                { title: "Government Policy Impact", src: "assets/images/project_ai_education_government_policy.png" },
                { title: "Gender Gap Tracker", src: "assets/images/project_ai_education_gender_gap.png" },
                { title: "Tool Market Share", src: "assets/images/project_ai_education_tool_market_share.png" },
                { title: "Australia Trends", src: "assets/images/project_ai_education_australia_trends.png" },
                { title: "Urban Rural Gap", src: "assets/images/project_ai_education_country_gap.png" }
            ],
            summary: "Power BI project investigating AI adoption within global education across 10 countries and 5 regions, tracking student/teacher usage and socio-demographic indicators.",
            fullDescription: "This Power BI project investigates how Artificial Intelligence has been adopted within global education systems over an 11-year period (2015–2026). The analysis spans 10 countries across 5 regions: North America, Europe, Asia, South America, and Africa and tracks student usage, teacher usage, school adoption rates, policy development, and socio-demographic indicators such as the urban/rural divide and gender gap.",
            tags: ["Power BI", "Data Engineering", "DAX", "Data Analytics", "Global AI Trends"],
            liveUrl: "https://app.powerbi.com/groups/me/reports/0e1a5453-ca1e-4ea9-8f43-316c21cdcc8a/41f84e6fd80c77bda6ea?experience=power-bi",
            githubUrl: "https://github.com/praiseOjay/Global_AI_in_Education.git",
            featured: true,
            metrics: ["11-Year Longitudinal Analysis", "10 Countries / 5 Regions", "Socio-Demographic DAX Metrics"],
            keyFeatures: [
                "Longitudinal analysis of AI adoption rates across 10 countries and 5 global regions",
                "Tracking of student usage, teacher integration, and institutional policy developments",
                "Socio-demographic metric modeling focusing on urban/rural divides and gender equality"
            ]
        },
        {
            id: "uk-retail-sales",
            title: "UK Online Retail Sales Performance & Customer Insights (2009–2011)",
            role: "Data Engineer",
            period: "Apr 2026 - Apr 2026",
            location: "Salford, England, United Kingdom",
            category: "data",
            image: "assets/images/project_powerbi_uk_retail.png",
            summary: "Power BI dashboard delivering end-to-end analysis of UK online retail sales data (2009–2011), detailing product demand, revenue, and customer behavior trends.",
            fullDescription: "This Power BI dashboard provides a comprehensive analysis of UK online retail sales data spanning from 2009 to 2011. It delivers actionable insights into product demand, revenue performance, customer behaviour, and seasonal trends, enabling data-driven decision-making for retail stakeholders.",
            tags: ["Power BI", "Data Analytics", "DAX", "SQL", "E-commerce", "Data Visualization"],
            liveUrl: "https://app.powerbi.com/groups/me/reports/087bb9a2-329f-497c-a396-24b4adf845c2/6b665f201c5599e30ad0?experience=power-bi",
            githubUrl: "https://github.com/praiseOjay/PowerBI_capstone_project.git",
            featured: true,
            metrics: ["Multi-Year Retail Analytics", "DAX Data Modeling", "Customer Behavior Insights"],
            keyFeatures: [
                "Comprehensive product demand and revenue trend analysis across 2009-2011 retail dataset",
                "Advanced DAX metrics for customer segmentation and cohort analysis",
                "Interactive Power BI dynamic filtering and seasonal trend visualizations"
            ]
        },
        {
            id: "connect-talent-cio",
            title: "Connect Talent CIO Website",
            role: "Front-end Developer",
            period: "Jul 2025 - Aug 2025",
            location: "Salford, England, United Kingdom",
            category: "fullstack",
            image: "assets/images/project_connect_talent.png",
            summary: "Modern, fully responsive web platform built for Connect Talent CIO (Registered Charity No. 1165973) using PHP, Tailwind CSS, and robust web security standards.",
            fullDescription: "The Connect Talent CIO website is a modern, fully responsive digital platform designed to advance digital inclusion, accredited skills development, and community support for residents across Salford and Greater Manchester. Built using PHP, Tailwind CSS, and robust web security standards, the platform showcases the charity's mission (Registered Charity No. 1165973) while enabling seamless community interaction through intuitive popup forms for volunteering, device and financial donation pledges, resident referrals, and corporate partnership inquiries.",
            tags: ["PHP", "Tailwind CSS", "Web Security", "Responsive Design", "Front-end"],
            liveUrl: "https://www.connect-talent.org/",
            githubUrl: "",
            featured: true,
            metrics: ["Live Production Charity Portal", "Volunteering & Donation Pledges", "Community Referrals"],
            keyFeatures: [
                "Fully responsive modern digital layout built with PHP and Tailwind CSS",
                "Interactive donation pledges, volunteer registration, and resident referral workflows",
                "Strict web security compliance and web accessibility standards"
            ]
        },
        {
            id: "connect-institute",
            title: "Connect Institute",
            role: "Full-stack Developer",
            period: "Aug 2025 - Nov 2025",
            location: "Salford, England, United Kingdom",
            category: "fullstack",
            image: "assets/images/project_connect_institute.png",
            summary: "WordPress web development for Connect Institute, the training division of Connect International Resources, offering FE diplomas, MSc, and PhD programs.",
            fullDescription: "This project involves developing a website for Connect Institute using WordPress. Connect Institute is the training and education division of Connect International Resources, which provides a comprehensive range of courses from Further Education diplomas to postgraduate MSc and PhD degrees, all of which contribute to career progression and development.",
            tags: ["WordPress", "Full-Stack", "CMS", "Web Design", "Higher Education"],
            liveUrl: "https://coinst.uk/",
            githubUrl: "",
            featured: true,
            metrics: ["Live Higher Education Portal", "Comprehensive Course Catalog", "Responsive Design"],
            keyFeatures: [
                "Complete WordPress build for higher education and FE diploma courses",
                "Structured program pathways from FE diplomas to postgraduate MSc and PhD degrees",
                "SEO-optimized responsive UI tailored for prospective international students"
            ]
        },
        {
            id: "connect-international-resources",
            title: "Connect International Resources",
            role: "Full-stack Developer",
            period: "Apr 2025 - Jul 2025",
            location: "Salford, England, United Kingdom",
            category: "fullstack",
            image: "assets/images/project_connect_international_resources.png",
            summary: "Complete WordPress corporate website for Connect International Resources Limited (CIR), connecting clients to UK education and global employment opportunities.",
            fullDescription: "The project entails developing a complete WordPress website for an organisation called Connect International Resources. Connect International Resources Limited (CIR) is a UK-based international consultancy agency based at Salford, Manchester. It is a premier resource connecting people worldwide to education, employment opportunities as well as professional development resources in the UK and abroad.",
            tags: ["WordPress", "CMS", "Consultancy", "Global Mobility", "SEO"],
            liveUrl: "https://connectinternationalresources.com/",
            githubUrl: "",
            featured: true,
            metrics: ["Global Consultancy Portal", "International Placement Resources", "SEO & Performance"],
            keyFeatures: [
                "Corporate WordPress architecture for UK-based international agency",
                "Streamlined portal connecting global candidates to UK education & employment",
                "Custom responsive theme, security hardening, and performance optimization"
            ]
        },
        {
            id: "advert-marketplace",
            title: "Advert Marketplace Website",
            role: "Full-stack Developer",
            period: "Jan 2024 - Mar 2024",
            location: "Salford, England, United Kingdom",
            category: "fullstack",
            image: "assets/images/project_marketplace.png",
            summary: "Classifieds advert marketplace application built with PHP, Symfony, Doctrine ORM, and MySQL featuring full CRUD, search, pagination, and admin moderation.",
            fullDescription: "A web-based classifieds and advert marketplace application developed with PHP, Symfony, Doctrine ORM, and MySQL. It offers listing CRUD capabilities, category filtering, search, pagination, access control roles, and an administrative moderation panel.",
            tags: ["PHP", "Symfony", "Doctrine ORM", "MySQL", "Twig", "Full-Stack"],
            liveUrl: "https://github.com/praiseOjay/Marketplace_website",
            githubUrl: "https://github.com/praiseOjay/Marketplace_website",
            featured: true,
            metrics: ["Full CRUD Functionality", "Role-Based Auth", "Admin Moderation Panel"],
            keyFeatures: [
                "Comprehensive listing creation, edition, and category management",
                "Search engine with dynamic pagination and category filtering",
                "Secure access control roles and administrative moderation panel"
            ]
        },
        {
            id: "notes-manager",
            title: "Notes Manager App",
            role: "Mobile Developer",
            period: "May 2024 - Jul 2024",
            location: "Salford, England, United Kingdom",
            category: "mobile",
            image: "assets/images/project_notes_manager.png",
            summary: "Cross-platform task and note-taking app built with Flutter, Provider, and Material 3 design with real-time state sync, scheduled reminders, and dark mode.",
            fullDescription: "A cross-platform task and note-taking application built with Flutter, Provider, and Material 3 design. It delivers real-time state synchronization, local scheduled notification reminders, checklist creation, and dark mode support across Android, iOS, Web, and Windows desktop.",
            tags: ["Flutter", "Dart", "Provider", "Material 3", "Cross-Platform", "Mobile Dev"],
            liveUrl: "https://github.com/praiseOjay/notes_manager",
            githubUrl: "https://github.com/praiseOjay/notes_manager",
            featured: true,
            metrics: ["Android / iOS / Web / Desktop", "Scheduled Push Notifications", "Provider State Sync"],
            keyFeatures: [
                "Real-time state synchronization using Flutter Provider",
                "Local scheduled push notification reminders and checklist creation",
                "Material 3 responsive design supporting Android, iOS, Web, and Windows"
            ]
        },
        {
            id: "task-manager-app",
            title: "Task Manager App",
            role: "Mobile Developer",
            period: "May 2024 - Jul 2024",
            location: "Salford, England, United Kingdom",
            category: "mobile",
            image: "assets/images/project_task_manager.png",
            summary: "Cross-platform mobile task management application built with React Native, Expo SDK 51, and Expo Router with file attachments and persistent offline storage.",
            fullDescription: "A cross-platform mobile task management application created with React Native, Expo SDK 51, and Expo Router. It includes complete task lifecycle tracking, category and priority labeling, image and document attachments, real-time filtering, and persistent offline local storage.",
            tags: ["React Native", "Expo SDK 51", "Expo Router", "JavaScript", "Mobile Dev"],
            liveUrl: "https://github.com/praiseOjay/TaskManager",
            githubUrl: "https://github.com/praiseOjay/TaskManager",
            featured: true,
            metrics: ["Expo SDK 51 & Router", "Offline Local Storage", "Media Attachments"],
            keyFeatures: [
                "Task lifecycle tracking with category tagging and priority scheduling",
                "Image and document file attachment management",
                "Real-time task filtering and offline local storage persistence"
            ]
        },
        {
            id: "supercharged-fitness",
            title: "Supercharged Fitness Application",
            role: "Android Mobile Developer",
            period: "Jan 2023 - Jun 2023",
            location: "Salford, England, United Kingdom",
            category: "mobile",
            image: "assets/images/project_mobile_fitness.png",
            summary: "Android mobile application written in Kotlin designed to guide users through bodyweight workouts with visual guidance, interval timers, and text-to-speech.",
            fullDescription: "An Android mobile application written in Kotlin designed to guide users through bodyweight exercises. It incorporates structured workout routines, step-by-step visual exercise guidance, interval timers, text-to-speech directions, and video demonstrations.",
            tags: ["Android", "Kotlin", "Mobile Dev", "TTS Directions", "SQLite"],
            liveUrl: "https://github.com/praiseOjay/Supercharged-Fitness",
            githubUrl: "https://github.com/praiseOjay/Supercharged-Fitness",
            featured: true,
            metrics: ["Kotlin Native", "TTS Directions", "Visual Exercise Guidance"],
            keyFeatures: [
                "Structured bodyweight workout routines with step-by-step visual guidance",
                "Interval timers and real-time text-to-speech voice instructions",
                "Exercise video demonstrations and local workout history tracking"
            ]
        },
        {
            id: "javafx-space-game",
            title: "JavaFX-game",
            role: "Java Developer",
            period: "Feb 2022 - Apr 2022",
            location: "Salford, England, United Kingdom",
            category: "backend",
            image: "assets/images/project_javafx_game.png",
            summary: "2D arcade space shooter game ('Aliens & Asteroids') built in Java using JavaFX with 720p widescreen graphics, parallax scrolling, particle engines, and score tracking.",
            fullDescription: "A 2D arcade space shooter game (\"Aliens & Asteroids\") built in Java using JavaFX. It includes 720p widescreen graphics with parallax scrolling, laser combat mechanics, particle flame and explosion engines, power-ups, synthesized audio, and score tracking.",
            tags: ["Java", "JavaFX", "Game Dev", "Particle Engine", "OOP Architecture"],
            liveUrl: "https://github.com/praiseOjay/JavaFX-game.git",
            githubUrl: "https://github.com/praiseOjay/JavaFX-game.git",
            featured: true,
            metrics: ["720p Widescreen Graphics", "Particle Engine", "Synthesized Audio"],
            keyFeatures: [
                "Custom particle flame & explosion rendering engine",
                "Smooth multi-layer parallax scrolling background graphics",
                "Laser combat mechanics, weapon power-ups, and collision detection"
            ]
        }
    ],
    experience: [
        {
            role: "FC Associate — Automated Fulfilment Operations",
            company: "Amazon",
            period: "Sept 2018 - Present",
            location: "Bolton, England, United Kingdom",
            description: "Operating advanced automated inventory management and robotic fulfillment systems within a fast-paced technology environment.",
            achievements: [
                "Operate robotic automation systems, barcode scanners, and image recognition technology to maintain real-time inventory precision.",
                "Maintain accurate real-time inventory tracking for order fulfillment and shipping processes.",
                "Demonstrate rapid adaptability, operational efficiency, and complex problem-solving under strict SLAs."
            ]
        }
    ]
};
