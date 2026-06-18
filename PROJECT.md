You are an expert frontend developer, UI/UX designer, Vue engineer, and GitHub Pages deployment specialist.

Your task is to fully design and implement a simple, modern, professional, mobile-responsive personal website for:

Bright Osei Amankwatia

Professional identity:
ICT & Computing Educator | Computer Science Researcher | AI & Web Solutions Developer

The website should position him as:
1. An ICT and Computing educator.
2. An educational technology practitioner.
3. A computer science researcher.
4. A founder/developer of an emerging solo software solutions studio focused on AI agents, websites, and web applications.
5. A future mobile app developer with plans to expand into Android and iOS development.
6. A facilitator of ICT, AI, cybersecurity, digital literacy, and educational technology programs/events.

The website must be simple, clean, professional, appealing, and suitable for international professional visibility.

Do not make the website look flashy, overcrowded, or like a basic online CV. It should feel like:

academic + technology consultant + software founder + program facilitator.

TECHNOLOGY STACK

Use:
- Vue 3
- Vite
- Vue Router
- Bootstrap 5 as the main layout/component framework
- Bootstrap Icons
- Tailwind CSS may be added only if it can be configured cleanly without visual conflict with Bootstrap
- GitHub Pages deployment
- Static website only
- No backend for now
- Frontend-only contact form with mailto fallback or Formspree-ready structure
- SEO-friendly metadata
- Accessible semantic HTML
- Mobile-first responsive design

Important Bootstrap/Tailwind instruction:
Bootstrap should be the main design and layout framework. Use Bootstrap grid, cards, buttons, navbar, spacing, and utilities. Tailwind may be used only if it does not conflict with Bootstrap. If Tailwind causes unnecessary complexity or style conflict, skip Tailwind and document the reason in README.md.

BRAND STYLE

Use:
- Primary colour: deep navy blue
- Secondary colour: white
- Accent colour: soft gold or muted red
- Text colour: dark grey
- Background: white and very light grey sections
- Clean cards
- Rounded corners
- Subtle shadows
- Spacious layout
- Professional icons
- Minimal animations only
- Clear typography
- Good contrast

The website should communicate:
Professionalism, trust, education, research, technology, and practical digital transformation.

PRIVACY INSTRUCTION

Do not publicly display:
- Date of birth
- Religion
- Marital status
- Referees
- Full private CV details
- Full phone number prominently

Use email and contact form instead.

Email to display:
amankwatiabright@gmail.com

Add placeholder links for:
- LinkedIn
- GitHub
- Google Scholar
- ORCID

PROFESSIONAL PHOTO REQUIREMENT

The website must include a clear space for a professional photo.

Use the photo in:
1. Homepage hero section
2. About page profile section
3. Optional small profile image in the footer or contact page

If no real photo is available, use a clean professional placeholder image or initials-based avatar temporarily.

Create:
src/assets/images/profile-placeholder.svg

The design should make it easy to replace the placeholder later with a real professional photo.

Recommended image style:
- Formal or smart casual appearance
- Clear face
- Neutral or simple background
- Good lighting
- Portrait orientation
- Friendly but professional expression

Do not stretch or distort the image.
Use object-fit: cover.
Use rounded corners, circular frame, or a soft rounded portrait frame.
Ensure the image looks good on mobile and desktop.

PROJECT STRUCTURE

Create the project using Vue 3 + Vite.

Recommended structure:

src/
  assets/
    images/
      profile-placeholder.svg
      logo-placeholder.svg
  components/
    Navbar.vue
    Footer.vue
    HeroSection.vue
    SectionTitle.vue
    ServiceCard.vue
    ProjectCard.vue
    PublicationCard.vue
    SkillBadge.vue
    EventCard.vue
    CTASection.vue
  data/
    profile.js
    services.js
    projects.js
    publications.js
    skills.js
    timeline.js
    programsEvents.js
  views/
    HomeView.vue
    AboutView.vue
    TeachingView.vue
    ResearchView.vue
    ProjectsView.vue
    SoftwareSolutionsView.vue
    ProgramsEventsView.vue
    ContactView.vue
  router/
    index.js
  styles/
    main.css
  App.vue
  main.js

Also create:
.github/workflows/deploy.yml
vite.config.js
README.md

GENERAL DEVELOPMENT REQUIREMENTS

- Use Vue Router for page navigation.
- Keep content data in separate JavaScript files under src/data.
- Do not hardcode all content directly inside page components.
- Use reusable components for cards, section titles, badges, publications, services, projects, and events.
- Each page should have a clear hero/header section.
- Use semantic HTML.
- Ensure all pages are responsive.
- Use Bootstrap grid system.
- Use Bootstrap Icons where appropriate.
- Ensure all images have alt text.
- Ensure buttons and links are keyboard accessible.
- Add visible focus states.
- Avoid unnecessary dependencies.
- Avoid heavy animation libraries.
- Keep the site fast and lightweight.

WEBSITE PAGES

Create the following pages:

1. Home
2. About
3. Teaching & Leadership
4. Research & Publications
5. Projects / Portfolio
6. Software Solutions
7. Programs & Events
8. Contact

NAVIGATION BAR

The navbar should include:

Home | About | Teaching | Research | Projects | Software Solutions | Programs & Events | Contact

Navbar requirements:
- Sticky or fixed at the top
- Responsive
- Collapses properly on mobile
- Uses active route styling
- Uses initials/logo placeholder “BOA”
- Clean, professional appearance

ROUTES

Set up Vue Router routes:

/
about
teaching
research
projects
software-solutions
programs-events
contact

PROFILE DATA

Create src/data/profile.js with the following information:

Name:
Bright Osei Amankwatia

Main title:
ICT & Computing Educator | Computer Science Researcher | AI & Web Solutions Developer

Short professional summary:
I help schools, professionals, and organisations use technology more effectively through ICT education, research-informed digital solutions, AI agents, websites, and web applications.

Longer about summary:
Bright Osei Amankwatia is an ICT and Computing educator, computer science researcher, and educational technology practitioner with experience in teaching, school technology support, digital literacy, programming education, and practical web-based systems. His work connects education, technology, research, and software development. He is currently pursuing an MPhil in Computer Science and is building a small software solutions studio focused on AI agents, websites, and web applications, with future expansion into Android and iOS mobile app development.

Current roles:
- ICT / Computing Teacher, Presbyterian Senior High School, Berekum
- Form Master, Presbyterian Senior High School, Berekum
- MPhil Computer Science student, University of Energy and Natural Resources
- Founder / Developer, emerging AI and Web Solutions Studio

Education:
- MPhil Computer Science, University of Energy and Natural Resources, Sunyani, 2025 – ongoing
- BSc Information Technology Education, First Class Honours, University of Education, Winneba, 2018 – 2022
- Diploma in Basic Education, First Class Honours, University of Cape Coast, 2012 – 2015

Professional development:
- Google Data Analytics – Google, 2023
- IBM Cybersecurity Analyst – IBM, 2023
- Python Programming – University of Michigan, 2023

Core skills:
- ICT and Computing Education
- Educational Technology
- Web Development
- AI Agent Development
- Learning Management Systems
- Cybersecurity Awareness
- Data Analytics
- Programming Education
- School Technology Support
- Database-backed Web Applications

Technical skills:
- HTML
- CSS
- JavaScript
- Bootstrap
- WordPress
- Vue
- MySQL
- phpMyAdmin
- MongoDB
- Python
- PHP
- Laravel
- React
- Flask
- C++
- Java

Languages:
- English
- Twi

Working philosophy:
Technology should be practical, accessible, secure, and useful. My work focuses on helping learners, schools, and organisations adopt digital tools that solve real problems and improve productivity.

HOME PAGE REQUIREMENTS

The homepage should include:

1. Hero section

The hero section must include:
- Professional photo or placeholder portrait
- Name: Bright Osei Amankwatia
- Title: ICT & Computing Educator | Computer Science Researcher | AI & Web Solutions Developer
- Short professional summary:
  I help schools, professionals, and organisations use technology more effectively through ICT education, research-informed digital solutions, AI agents, websites, and web applications.

Buttons:
- View My Work
- Software Solutions
- Programs & Events
- Contact Me

Layout:
- Desktop: two-column layout
  Left: text and buttons
  Right: professional photo
- Mobile: stack photo and text neatly
- Keep design clean, modern, and professional

2. Focus area cards

Create three cards:
- ICT & Computing Education
  Description: Teaching digital literacy, programming basics, computer applications, cybersecurity awareness, and responsible technology use.

- Research & Publications
  Description: Research interests in educational technology, cybersecurity, digital skills, AI, and learning management systems.

- AI & Web Solutions
  Description: Developing AI agents, websites, web applications, school systems, and digital tools for organisations.

3. About preview

Add a short paragraph and a button to the About page.

4. Selected achievements

Use elegant cards or counters:
- MPhil Computer Science student
- First Class Honours graduate
- Peer-reviewed journal publications
- ICT / Computing educator
- Software solutions developer

5. Featured services

Show:
- AI Agents
- Websites
- Web Applications
- School Digital Systems

6. Featured projects

Show:
- Web-Based LMS for Prempeh College
- Educational technology project
- School systems and web app concepts

7. Programs preview

Add a short section introducing Programs & Events:
Text:
I support and facilitate programs in ICT education, digital literacy, cybersecurity awareness, AI in education, and educational technology.

Button:
Explore Programs & Events

8. Call-to-action

Text:
Ready to collaborate on ICT education, research, AI agents, websites, web applications, or digital skills programs?

Button:
Start a Conversation

ABOUT PAGE REQUIREMENTS

The About page should include:

1. Professional overview
Use the long about summary from profile.js.

2. Profile photo section
Show a professional photo or placeholder image beside the biography.

3. What I do
Use cards:
- Teach ICT and Computing
- Support educational technology
- Conduct research and publish
- Develop AI and web solutions
- Facilitate ICT and digital skills programs

4. Education
Display education records from profile.js.

5. Professional development
Display:
- Google Data Analytics – Google, 2023
- IBM Cybersecurity Analyst – IBM, 2023
- Python Programming – University of Michigan, 2023

6. Skills
Display skill badges grouped into:
- Education
- Research
- Web and software development
- AI and data
- Cybersecurity
- Database and systems

7. Personal working philosophy
Show the working philosophy:
Technology should be practical, accessible, secure, and useful. My work focuses on helping learners, schools, and organisations adopt digital tools that solve real problems and improve productivity.

TEACHING & LEADERSHIP PAGE REQUIREMENTS

Create sections for:

1. Teaching profile

Describe teaching experience in:
- ICT
- Computing
- Mathematics
- Digital literacy
- Programming basics
- MS Office
- Internet safety
- Responsible technology use
- Student mentoring
- Computer laboratory support

2. Current teaching and leadership work

Include:
- ICT / Computing Teacher at Presbyterian Senior High School, Berekum
- Form Master at Presbyterian Senior High School, Berekum

3. Previous experience timeline

Use a clean timeline component with:

- ICT / Computing Teacher, Presbyterian Senior High School, Berekum, January 2023 – Present
- Form Master, Presbyterian Senior High School, Berekum, January 2023 – Present
- ICT Teacher Intern, Prempeh College, Kumasi, January 2022 – April 2022
- IT Personnel Attachment, Purview Computer Services, IPT, Kumasi, June 2019 – August 2019
- Form Master, Asuotiano D/A JHS, September 2017 – August 2018
- ICT and Mathematics Teacher, Asuotiano D/A JHS, September 2017 – August 2018
- Assistant Headteacher, Akontanim Roman Catholic Basic School, September 2016 – August 2017
- ICT and Mathematics Teacher, Akontanim Roman Catholic Basic School, September 2015 – August 2017
- ICT and Mathematics Teacher, Berekum Demonstration ‘B’ Basic School, September 2014 – May 2015
- Pupil Teacher, Emmanuel Presbyterian Preparatory School, August 2006 – June 2012

4. Teaching strengths

Create cards:
- Curriculum-based ICT instruction
- Practical digital skills
- Programming education
- Student welfare and mentoring
- Computer laboratory management
- Cybersecurity and digital citizenship
- Technology integration in teaching
- School administration support

RESEARCH & PUBLICATIONS PAGE REQUIREMENTS

Create sections:

1. Research interests

Use cards:
- Educational Technology
- Cybersecurity
- Artificial Intelligence in Education
- Learning Management Systems
- Digital Skills and Youth Empowerment
- Digital Transformation in Schools
- AI and Multimodal Systems

2. Publications

Create PublicationCard component.

Include the following peer-reviewed journal publications:

- Amankwatia, B. O., & Ofori-Kyeremeh, J. (2026). Cloud-based Learning Management Systems (LMS) forensics. International Journal of Computer Applications, 187(97), 50–55. https://doi.org/10.5120/ijca1eec8fd576a4

- Ofori-Kyeremeh, J., Amankwatia, B. O., Ofori-Kyeremeh, L., Gyabaa, E., Kyeremeh, B. O., Nyame-Tabiri, A., Gyampoh, A. Q., Dapaah, V. T., Dartey, F., & Kwarteng, K. A. (2026). Enhancing teaching effectiveness in computer science education through purposeful technology integration. International Journal of Computer Applications, 187(89), 1–9. https://doi.org/10.5120/ijca2026926544

- Munhaimin, A., Ofori-Kyeremeh, J., Ofori-Kyeremeh, L., Kyereh, R., Gyabaa, E., Nyame-Tabiri, A., Amankwatia, B. O., Dapaah, V. T., & Dartey, F. (2026). A rights-centered cyber resilience framework for higher education institutions. International Journal of Computer Applications, 187(88), 9–13. https://doi.org/10.5120/ijca2026926523

- Ofori-Kyeremeh, J., Amankwatia, B. O., Ofori-Kyeremeh, L., Dartey, F., Munhaimin, A., & Dapaah, V. T. (2026). The rising threat of ransomware: Prevention and response strategies for organizations. International Journal of Computer Applications, 187(73), 32–38. https://doi.org/10.5120/ijca2026926224

- Ofori-Kyeremeh, J., Poatob, E., Ofori-Kyeremeh, L., Asante Frimpong, A., Munhaimin, A., Amankwatia, B. O., Dartey, F., Dapaah, V. T., & Ofori, K. (2025). Digital skills and youth empowerment in the 21st century: Leveraging technology for personal and national development. International Journal of Computer Applications, 187(67), 14–20. https://doi.org/10.5120/ijca2025926122

- Amankwatia, B. O., Ofori-Kyeremeh, J., & Munhaimin, A. (2025). The behavioural economics of cybersecurity: Emphasizing the role of human behaviour, cultural influences, and cognitive biases in shaping cybersecurity vulnerabilities and solutions. International Journal of Computer Applications, 187(39), 67–76. https://doi.org/10.5120/ijca2025925698

3. Current academic direction

Add:
Currently pursuing MPhil Computer Science with growing research interests in artificial intelligence, cybersecurity, educational technology, and practical digital systems.

PROJECTS / PORTFOLIO PAGE REQUIREMENTS

Create project cards with:
- Project title
- Type
- Short description
- Tools/technologies
- Status
- Impact
- Button for “View Details” or “Coming Soon”

Initial projects:

1. Web-Based LMS for Prempeh College
Type: Educational Technology / Web Application
Description: A web-based learning management system project designed to support digital teaching and learning.
Technologies: HTML, CSS, JavaScript, PHP, MySQL or related web technologies.
Status: Academic project
Impact: Demonstrates ability to design practical school-based digital learning systems.

2. Using Abacus & Dienes Blocks to Improve Three-Digit Addition Skills
Type: Education Research / Teaching Innovation
Description: A practical teaching project focused on improving numeracy through hands-on learning materials.
Technologies: Teaching aids, classroom intervention, assessment.
Status: Academic project
Impact: Demonstrates problem-solving in education and learner-centred teaching.

3. School Registration System Concept
Type: Web Application
Description: A concept for a school registration and student data management platform.
Technologies: Vue, Laravel, MySQL, Bootstrap.
Status: Concept / In development
Impact: Supports school administration and digital transformation.

4. Student Report System Concept
Type: Web Application
Description: A system concept for managing student assessment records, reports, and academic summaries.
Technologies: Vue, Laravel, MySQL.
Status: Concept / In development
Impact: Helps schools manage academic reporting more efficiently.

5. AI Teaching Assistant Concept
Type: AI Agent / Education
Description: A concept for an AI agent that helps teachers prepare lesson plans, notes, assessment items, and student materials.
Technologies: AI agents, prompt engineering, web interface.
Status: Concept / In development
Impact: Supports teacher productivity and digital learning.

SOFTWARE SOLUTIONS PAGE REQUIREMENTS

This is the business/studio page.

Page title:
AI & Web Solutions Studio

Intro text:
I am building a small software solutions studio focused on practical AI agents, professional websites, and web applications for schools, small businesses, professionals, churches, organisations, and community institutions. Mobile app development for Android and iOS is part of the future growth plan.

Important tone:
Be honest that this is an emerging solo studio.
Do not exaggerate.
Do not say “leading software company.”
Use honest language such as:
- emerging software solutions studio
- solo studio
- building practical AI and web-based solutions

Create service sections:

1. AI Agent Development
Description:
Custom AI assistants for education, administration, customer support, document handling, content generation, and workflow automation.
Example solutions:
- Teacher lesson planning assistant
- School enquiry assistant
- Document Q&A assistant
- Customer support assistant
- Research assistant

2. Website Development
Description:
Simple, professional, mobile-friendly websites for schools, professionals, businesses, churches, NGOs, and organisations.
Example solutions:
- Personal websites
- School websites
- Business websites
- Church websites
- Portfolio websites

3. Web Application Development
Description:
Database-driven systems that help organisations manage information, workflows, and reporting.
Example solutions:
- School registration systems
- Student report systems
- LMS platforms
- Inventory systems
- Staff portals
- Dashboards

4. Educational Technology Support
Description:
Technology support for schools and educators seeking to improve teaching, learning, and administration.
Example solutions:
- Digital literacy training
- ICT integration workshops
- Cybersecurity awareness
- LMS setup and support
- School technology consultation

5. Future Mobile App Development
Description:
Android and iOS mobile app development will be added as the studio grows.
Example future solutions:
- School mobile apps
- Business mobile apps
- Student portals
- Parent communication apps

Add a call-to-action:
Need a website, AI agent, web app, or digital school system?

Button:
Request a Consultation

PROGRAMS & EVENTS PAGE REQUIREMENTS

Create a page titled:
Programs & Events

Purpose:
This page should showcase professional programs, training sessions, workshops, school ICT activities, community technology engagements, public education work, and future events connected to ICT education, digital literacy, AI, cybersecurity, and educational technology.

The page should help visitors understand that Bright Osei Amankwatia is not only a teacher and researcher, but also someone who can organise, support, facilitate, and participate in technology-related programs.

Page intro text:
I support and participate in programs that promote ICT education, digital literacy, responsible technology use, cybersecurity awareness, educational innovation, and practical digital skills for learners, educators, schools, and community institutions.

Create these sections:

1. Featured Program Areas

Use cards for:

- ICT & Computing Workshops
Description:
Practical training sessions for students, teachers, and school communities on ICT, computing, programming basics, digital tools, and responsible technology use.

- Digital Literacy Programs
Description:
Programs designed to help learners, educators, and community members build confidence in using technology for learning, work, communication, and productivity.

- Cybersecurity Awareness Sessions
Description:
Training and awareness programs on safe internet use, data protection, online behaviour, phishing, password safety, and responsible digital citizenship.

- AI in Education Programs
Description:
Introductory programs on how artificial intelligence can support teaching, learning, lesson planning, assessment preparation, and school administration.

- Educational Technology Support
Description:
Programs that help schools adopt digital tools, learning management systems, websites, registration systems, and other school-based technology solutions.

- Community Technology Engagements
Description:
Technology-related community service, public education, and training activities that support digital inclusion and practical ICT use.

2. Past and Current Engagements

Create event/program cards for:

A. ICT / Computing Teaching and Digital Skills Development
Type: School Program
Description:
Ongoing ICT and Computing instruction focused on digital literacy, computer applications, programming basics, internet safety, and responsible technology use.
Role:
Facilitator / Teacher
Audience:
Senior High School students
Status:
Ongoing

B. Electoral Commission IT Training and Support
Type: Community / National Service
Description:
Technology-related support and training during Electoral Commission activities, including IT technician/trainer duties and election-related digital support.
Role:
IT Technician / Trainer / Verification Officer
Audience:
Electoral officers and community members
Status:
Completed / Periodic

C. School Technology Support and Digital Administration
Type: School Digital Support
Description:
Support for school technology systems, online registration, computer laboratory activities, and practical digital administration.
Role:
ICT Support / Teacher
Audience:
School administration and students
Status:
Ongoing

D. Educational Technology Project Engagement
Type: Academic / EdTech Project
Description:
Web-based LMS and school digital system ideas aimed at improving teaching, learning, and school administration.
Role:
Designer / Developer / Researcher
Audience:
Schools and educators
Status:
Ongoing development

3. Future Programs

Create cards for planned future programs:

- AI Tools for Teachers Workshop
Description:
A practical workshop to help teachers use AI responsibly for lesson planning, notes preparation, assessment items, and teaching support.

- Cybersecurity Awareness for Schools
Description:
A school-focused program on password safety, phishing, online privacy, data protection, and responsible internet use.

- Website Development for Beginners
Description:
An introductory program for students and young professionals on HTML, CSS, Bootstrap, Vue, and building simple portfolio websites.

- Digital Skills for Students
Description:
A practical student-focused program covering productivity tools, internet research, online safety, programming basics, and responsible technology use.

- School Digital Transformation Seminar
Description:
A program for school leaders and educators on websites, LMS platforms, student registration systems, report systems, and digital administration.

4. Call-to-action section

Text:
Interested in organising an ICT, AI, cybersecurity, or digital literacy program for your school, organisation, or community?

Button:
Invite Me for a Program

The button should link to the Contact page and indicate “Program / Event Invitation” where possible.

CONTACT PAGE REQUIREMENTS

Include:
- Contact intro
- Email: amankwatiabright@gmail.com
- Placeholder LinkedIn
- Placeholder GitHub
- Placeholder Google Scholar
- Placeholder ORCID

Create a contact form with:
- Full name
- Email address
- Enquiry type dropdown
- Message
- Submit button

Enquiry dropdown options:
- Website development
- Web application
- AI agent
- School digital system
- ICT training
- Program / Event invitation
- ICT workshop
- Cybersecurity awareness session
- AI in education training
- Research collaboration
- Other

Since this is a static GitHub Pages site:
- The form should not pretend to submit to a backend.
- Use a mailto fallback or prepare it for Formspree.
- Add clear comments in the code showing where to add a Formspree endpoint later.

FOOTER REQUIREMENTS

Footer should include:
- Name
- Short tagline
- Quick links
- Services
- Programs & Events link
- Contact email
- Placeholder social/profile links
- Copyright year dynamically generated

Footer text:
Built with Vue, Bootstrap, and a passion for practical digital transformation.

SEO REQUIREMENTS

Add metadata:
- Title: Bright Osei Amankwatia | ICT Educator, Researcher & AI/Web Developer
- Description: Personal website of Bright Osei Amankwatia, ICT and Computing educator, computer science researcher, AI/web solutions developer, and digital skills program facilitator.
- Keywords: ICT educator, Computing teacher, AI agents, web applications, educational technology, cybersecurity, Ghana, software solutions, Vue developer, digital literacy, AI in education, programs and events
- Open Graph title and description
- Favicon placeholder

ACCESSIBILITY REQUIREMENTS

Ensure:
- Semantic HTML
- All images have alt text
- Buttons and links are keyboard accessible
- Good colour contrast
- Visible focus states
- No important text hidden in images
- Screen-reader friendly navigation
- aria-labels where appropriate
- Mobile navigation works properly

PERFORMANCE REQUIREMENTS

- Keep design lightweight
- Avoid heavy animation libraries
- Avoid unnecessary dependencies
- Use SVG placeholders where possible
- Ensure production build works
- Minimise unused code
- Keep components clean and reusable

GITHUB PAGES DEPLOYMENT

Create:

.github/workflows/deploy.yml

The workflow should:
- Trigger on push to main
- Install dependencies
- Build the Vite app
- Upload dist as GitHub Pages artifact
- Deploy to GitHub Pages

Configure vite.config.js properly.

If deploying to:
https://USERNAME.github.io/REPOSITORY_NAME/

set base to:
'/REPOSITORY_NAME/'

If deploying to:
https://USERNAME.github.io/

or a custom domain, set base to:
'/'

Add clear comments in vite.config.js explaining this.

README.md REQUIREMENTS

Create a professional README.md with:
- Project title
- Description
- Tech stack
- Pages included
- Setup instructions
- Development command
- Build command
- Preview command
- GitHub Pages deployment instructions
- How to update content
- How to replace placeholder photo
- How to update publications
- How to update projects
- How to update services
- How to update programs and events
- How to update contact links
- Notes about static contact form
- Future improvements

COMMANDS THAT MUST WORK

The project must work after running:

npm install
npm run dev
npm run build
npm run preview

QUALITY CHECKS BEFORE FINISHING

Before finalising, verify:

1. npm install works.
2. npm run dev works.
3. npm run build works.
4. npm run preview works.
5. All routes work.
6. Mobile navbar works.
7. Cards are responsive.
8. Professional photo placeholder displays correctly.
9. Programs & Events page works.
10. Contact form layout works.
11. There are no broken imports.
12. There are no console errors.
13. README.md is complete.
14. GitHub Pages workflow exists.
15. The website looks professional, clean, modern, and not overcrowded.

IMPLEMENTATION STYLE

Use clean code.
Use meaningful component names.
Use clear reusable components.
Use data-driven content.
Use comments only where helpful.
Avoid unnecessary complexity.
Do not create a backend.
Do not use fake testimonials.
Do not include private personal details.
Do not exaggerate the software firm.
Do not present the solo studio as a large company.

Use honest language such as:
- emerging software solutions studio
- solo studio
- practical AI and web-based solutions
- future mobile app development

FINAL DELIVERABLES

Deliver a fully working Vue project with:

- All 8 pages implemented
- Responsive design
- Reusable components
- Data-driven content
- Professional photo placeholder
- Programs & Events page
- Software Solutions page
- Research and Publications page
- Projects page
- Contact page
- GitHub Pages deployment workflow
- README.md
- Clear instructions for replacing placeholders

After implementation, provide:

1. Summary of what was built.
2. Commands to run the project.
3. How to deploy to GitHub Pages.
4. Files to edit when updating content.
5. Where to replace the professional photo.
6. Any setup notes or assumptions.

PUBLIC CV DOWNLOAD REQUIREMENT

Add a “Download CV” button in:
- Homepage hero section
- About page
- Footer or Contact page

Use a placeholder file path:
public/Bright_Osei_Amankwatia_CV.pdf

Important:
The downloadable CV should be a public-safe version. It should not include private information such as date of birth, religion, marital status, referees, or unnecessary personal details.

Add a note in README.md explaining how to replace the placeholder CV file.

GITHUB PAGES ROUTING REQUIREMENT

Because this is a Vue Router single-page application deployed on GitHub Pages, handle route refresh problems properly.

Use one of these approaches:
1. Use createWebHashHistory() for simpler GitHub Pages compatibility.

OR

2. If using createWebHistory(), add a 404.html fallback/redirect solution so that direct links and page refreshes work correctly on GitHub Pages.

Document the chosen approach in README.md.

404 PAGE REQUIREMENT

Create:
src/views/NotFoundView.vue

Add a fallback route:
:pathMatch(.*)*

The 404 page should be professional and simple:
- Message: Page not found
- Short explanation
- Button back to Home
- Button to Contact

FUTURE BLOG / INSIGHTS STRUCTURE

Do not create a full blog unless requested, but prepare the site in a way that a future Blog or Insights page can be added easily.

Possible future article categories:
- ICT Education
- AI in Education
- Cybersecurity Awareness
- Web Development
- Digital Skills
- School Digital Transformation

Mention this future improvement in README.md.


SOFTWARE STUDIO NAME FLEXIBILITY

The software solutions section should support a future business/studio name.

For now, use:
AI & Web Solutions Studio

But structure the content so it can later be renamed easily from one data file, for example:
src/data/profile.js or src/data/services.js

Do not hardcode the studio name repeatedly across many components.


SEO FILES REQUIREMENT

Create basic SEO support files in the public folder:

public/robots.txt
public/sitemap.xml

Use placeholder domain values and add comments in README.md explaining how to update them after the final domain name is chosen.

CUSTOM DOMAIN SUPPORT

Add instructions in README.md for using:
- GitHub Pages default URL
- Custom domain

If a custom domain is later used, explain that a CNAME file can be added in the public folder.

Example:
public/CNAME

ACCESSIBILITY ADDITION

Add a visible-on-focus “Skip to main content” link for keyboard users.

Ensure the main content area has:
id="main-content"
