import Head from 'next/head'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const EXPERIENCE = [
  {
    company: 'Autodesk',
    role: 'Full Stack Engineer | Team Lead | Platform',
    location: 'Mexico City, MX',
    date: 'Nov 2019 - Present',
    bullets: [
      'Developed and maintained 3 large-scale React applications comprising 15+ microfrontends and 7 shared libraries (real-time water telemetry, CCTV, asset management, pipe analytics) supporting 500+ users, establishing front-end architecture patterns and reusable platform foundations utilized by 70+ engineers across 3 time zones.',
      'Directed migration to Webpack Module Federation, decomposing a ~4MB monolithic bundle into 20+ independently deployable modules (~15 MFEs, 3 shell apps, 7 collective libraries) with on-demand route-based loading. Diminished initial bundle size by ~70% and improved page load times by ~35%.',
      'Built end-to-end serverless upload/download workflows with compliance validation steps using AWS Lambda, API Gateway, and EventBridge, while maintaining 75+ Lambda functions across 15+ microservice backends serving the platform\'s microfrontend ecosystem.',
      'Created 5+ internal packages (auth SDKs, telemetry modules, common UI components) adopted across 5+ teams, shortening developer onboarding from ~2 months to ~2 weeks and reducing AWS authentication setup time by 50% while preserving security standards.',
      'Led and mentored a team of 4 engineers, ran architecture and code reviews, and instituted CI/CD improvements (incremental builds, pipeline parallelization, independent MFE releases) that reduced build times by 50% and cut deployment pipelines from 12+ to ~5 per shared component change.',
      'Adopted Claude Code as a daily engineering tool for AI-augmented architecture design, code generation, refactoring, and testing, using multi-agent orchestration across the platform\'s microfrontend ecosystem.',
    ],
  },
  {
    company: 'Social Piper',
    role: 'Senior Front-End Developer',
    location: 'Mexico City, MX',
    date: 'Jan 2019 - Nov 2019',
    bullets: [
      'Led Vue to React migration and developed a TypeScript component library with Storybook supporting Desktop and Mobile Web; integrated frontend with backend APIs to cut feature delivery time by 25%.',
      'Improved Core Web Vitals 30-50% through performance audits, code splitting, image optimization, and render optimization strategies.',
      'Enhanced accessibility of a 30+ collaborative component library (Storybook) with semantic HTML and ARIA attributes, adopted by at least 30+ engineers across 3 apps and 15+ microfrontends.',
    ],
  },
  {
    company: 'Qubit Works',
    role: 'Head of Operations / Lead Engineer',
    location: 'Mexico City, MX',
    date: 'Jan 2015 - Dec 2018',
    bullets: [
      'Managed 20+ client projects across web and mobile platforms, architecting React frontends, Node.js backends, and e-commerce solutions while growing the engineering team from 2 to 10+ members and establishing Agile practices, code review culture, and technical training programs.',
      'Translated 50+ ambiguous client requirements into MVP-first release plans with incremental iterations, delivering projects with cross-functional teams of 3 to 5 (design and engineering) and improving delivery consistency across the agency.',
    ],
  },
  {
    company: 'Farmaldea',
    role: 'Head of Technology',
    location: 'Mexico City, MX',
    date: 'Jan 2014 - Dec 2016',
    bullets: [
      'Architected from scratch a digital pharmacy aggregator with point-of-sale capabilities, enabling users to search and purchase medications across 500+ pharmacies through a unified platform.',
      'Built a REST API integration with GTN\'s appointment platform, enabling automated order creation from their scheduling system and periodic inventory synchronization across the pharmacy network.',
    ],
  },
]

const EDUCATION = [
  {
    school: 'Universidad Iberoamericana',
    degree: 'B.A. | Interactive Design',
    year: '2014',
    location: 'Mexico City, MX',
    desc: 'Speciality in Software Development, Digital Systems, and UX/UI. Foundation in user-centered design and interaction patterns.',
  },
  {
    school: 'Platzi Master Bootcamp',
    degree: 'Selective Program (Top 1% LATAM)',
    year: '2021',
    location: '',
    desc: 'Completed 100+ advanced courses in computer science, React, Node.js, AWS, algorithms, and distributed systems. Selected as one of the top 1% of the best students of the year 2019.',
  },
]

const SKILL_GROUPS = [
  {
    label: 'Core Web Technologies',
    items: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Redux', 'HTML5', 'CSS3', 'CSS-in-JS (styled-components)', 'HTTP', 'State management', 'DOM'],
  },
  {
    label: 'AI-Augmented Development',
    items: ['Claude Code', 'OpenAI Codex', 'Open Claw Automations', 'AI-assisted refactoring & testing', 'Context engineering', 'Multi-agent orchestration'],
  },
  {
    label: 'Performance',
    items: ['Core Web Vitals optimization', 'Lighthouse CI', 'code splitting', 'API integration', 'lazy loading', 'Progressive Web Apps (PWA)', 'bundle optimization', 'caching strategies'],
  },
  {
    label: 'Build & Testing',
    items: ['Webpack', 'Jest', 'Cypress (E2E)', 'Vitest', 'Storybook', 'CI/CD', 'Jenkins', 'Azure DevOps'],
  },
  {
    label: 'Backend & Cloud',
    items: ['Node.js', 'API design', 'REST APIs', 'GraphQL (AppSync)', 'AWS (Lambda, API Gateway, EventBridge, S3, Serverless Framework)'],
  },
  {
    label: 'Architecture',
    items: ['Microfrontends (Webpack Module Federation)', 'Developer Experience (DX)', 'Responsive Design', 'Scalable systems', 'Web Architecture', 'Event-Driven Patterns'],
  },
  {
    label: 'Practices',
    items: ['Git', 'Agile/Scrum', 'OOP', 'SOLID Principles', 'TDD', 'Code reviews', 'Technical Mentorship'],
  },
]

const METRICS = [
  { number: '~70%', label: 'Bundle Size Reduction' },
  { number: '~35%', label: 'Faster Page Loads' },
  { number: '500+', label: 'Users Supported' },
  { number: '70+', label: 'Engineers on Platform' },
]

const LANGUAGES = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Advanced' },
  { name: 'Hebrew', level: 'Intermediate' },
]

export default function CVPage() {
  return (
    <>
      <NextSeo
        title="CV - David Behar Lombrozo | The Behar Times"
        description="AI-native full-stack engineer with 10+ years of experience. Newspaper broadsheet CV showcasing scalable React/TypeScript architecture, microfrontends, and AI-augmented engineering."
        canonical="https://behar.io/cv"
        openGraph={{
          title: 'CV - David Behar Lombrozo | The Behar Times',
          description: 'Senior Engineer ships microfrontends at scale. 10+ years building React platforms.',
          url: 'https://behar.io/cv',
        }}
      />
      <Head>
        <style>{`
          body {
            background: #faf6ef !important;
            margin: 0 !important;
          }
          .dark body {
            background: #1a1610 !important;
          }
        `}</style>
      </Head>

      <div className="cv-newspaper">
        {/* ===== MASTHEAD ===== */}
        <header className="np-masthead">
          <hr className="np-masthead-rule np-masthead-rule-thick" />
          <h1 className="np-masthead-name">The Behar Times</h1>
          <hr className="np-masthead-rule" />
          <p className="np-masthead-tagline">
            All the code that&apos;s fit to ship
          </p>
          <div className="np-dateline-bar">
            <span>Mexico City, April 2026</span>
            <span>
              <Link href="/">behar.io</Link>
              {' | '}
              <a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {' | '}
              <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {' | '}
              <a href="mailto:davbelom@gmail.com">davbelom@gmail.com</a>
              {' | '}
              <span>+52 55 1698 8310</span>
            </span>
          </div>
        </header>

        {/* ===== HEADLINE AREA ===== */}
        <div className="np-headline-area">
          <span className="np-breaking">Breaking</span>
          <p className="np-overline">Exclusive Report</p>
          <h2 className="np-main-headline">
            Senior Engineer Ships Microfrontends at Scale
          </h2>
          <p className="np-sub-headline">
            Webpack Module Federation migration cuts bundle size by ~70% and page loads by ~35%
            across 3 React applications serving 500+ users
          </p>
          <p className="np-byline">
            By <span className="np-byline-name">David Behar Lombrozo</span> | Software Developer | 10+ Years Experience
          </p>
          <hr className="np-headline-rule" />
        </div>

        {/* ===== LEDE / SUMMARY ===== */}
        <div className="np-lede-section">
          <p className="np-lede">
            AI-native full-stack engineer with 10+ years of experience. Drove Webpack Module Federation
            migration reducing bundle size by ~70% and page load times by ~35% across 3 React apps serving
            500+ users. Specializes in scalable React/TypeScript architecture, CI/CD optimization, and Core
            Web Vitals. Adopts AI-augmented engineering as a daily practice, using Claude Code and
            multi-agent orchestration to accelerate design, implementation, refactoring, and testing across
            the full stack.
          </p>
          <hr className="np-lede-rule" />
        </div>

        {/* ===== KEY METRICS STRIP ===== */}
        <div className="np-metrics-strip">
          <div className="np-metrics-inner">
            {METRICS.map((m) => (
              <div key={m.label} className="np-metric">
                <div className="np-metric-number">{m.number}</div>
                <div className="np-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== THREE-COLUMN BODY ===== */}
        <div className="np-body">
          <div className="np-three-col">
            {/* --- COLUMN 1: EXPERIENCE --- */}
            <div>
              <div className="np-section-header">
                <span className="np-section-label">Experience</span>
              </div>

              {EXPERIENCE.map((exp, idx) => (
                <article key={exp.company} className="np-article">
                  <h3 className="np-article-headline">{exp.company}</h3>
                  <p className="np-article-subhead">{exp.role}</p>
                  <p className="np-article-byline">
                    {exp.location} | {exp.date}
                  </p>
                  <div className="np-article-body">
                    {exp.bullets.map((bullet, i) => (
                      <p key={i}>{bullet}</p>
                    ))}
                  </div>

                  {/* Pull quote after first experience entry */}
                  {idx === 0 && (
                    <div className="np-pull-quote">
                      <div className="np-pull-quote-stat">~70%</div>
                      <div className="np-pull-quote-text">
                        &ldquo;Decomposed a ~4MB monolithic bundle into 20+ independently
                        deployable modules with on-demand route-based loading&rdquo;
                      </div>
                      <div className="np-pull-quote-source">
                        Webpack Module Federation Migration
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* --- COLUMN 2: SKILLS (CLASSIFIEDS) --- */}
            <div>
              <div className="np-section-header">
                <span className="np-section-label">Technical Skills</span>
              </div>

              <div className="np-classifieds-title">Classifieds</div>

              {SKILL_GROUPS.map((group) => (
                <div key={group.label} className="np-classified-group">
                  <div className="np-classified-label">{group.label}</div>
                  <div className="np-classified-items">
                    {group.items.map((item, i) => (
                      <span key={item}>
                        {i > 0 && <span className="np-classified-sep">&middot;</span>}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Pull quote for AI skills */}
              <div className="np-pull-quote">
                <div className="np-pull-quote-text">
                  &ldquo;Adopts AI-augmented engineering as a daily practice, using Claude Code
                  and multi-agent orchestration&rdquo;
                </div>
                <div className="np-pull-quote-source">Summary</div>
              </div>
            </div>

            {/* --- COLUMN 3: EDUCATION, LANGUAGES, CONTACT --- */}
            <div>
              <div className="np-section-header">
                <span className="np-section-label">Education</span>
              </div>

              <div className="np-sidebar-box">
                <div className="np-sidebar-box-title">Education</div>
                {EDUCATION.map((edu) => (
                  <div key={edu.school} className="np-sidebar-entry">
                    <div className="np-sidebar-entry-title">
                      {edu.school} ({edu.year})
                    </div>
                    <div className="np-sidebar-entry-sub">{edu.degree}</div>
                    <div className="np-sidebar-entry-desc">{edu.desc}</div>
                  </div>
                ))}
              </div>

              <div className="np-sidebar-box">
                <div className="np-sidebar-box-title">Languages</div>
                <div className="np-languages">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name}>
                      <div className="np-lang-name">{lang.name}</div>
                      <div className="np-lang-level">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="np-sidebar-box">
                <div className="np-sidebar-box-title">Contact</div>
                <div className="np-sidebar-entry">
                  <div className="np-sidebar-entry-desc">
                    <strong>Location:</strong> Mexico City, MX
                  </div>
                  <div className="np-sidebar-entry-desc">
                    <strong>Phone:</strong> +52 55 1698 8310
                  </div>
                  <div className="np-sidebar-entry-desc">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:davbelom@gmail.com">davbelom@gmail.com</a>
                  </div>
                  <div className="np-sidebar-entry-desc">
                    <strong>LinkedIn:</strong>{' '}
                    <a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/davidbehar
                    </a>
                  </div>
                  <div className="np-sidebar-entry-desc">
                    <strong>GitHub:</strong>{' '}
                    <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer">
                      github.com/behagoras
                    </a>
                  </div>
                </div>
              </div>

              {/* Second pull quote */}
              <div className="np-pull-quote">
                <div className="np-pull-quote-stat">50%</div>
                <div className="np-pull-quote-text">
                  &ldquo;Reduced build times by 50% and cut deployment pipelines from 12+ to ~5
                  per shared component change&rdquo;
                </div>
                <div className="np-pull-quote-source">CI/CD Improvements</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== DOWNLOAD BANNER ===== */}
        <div className="np-download-banner">
          <div className="np-download-inner">
            <span className="np-download-text">
              Get the full edition (PDF)
            </span>
            <a href="/david-behar-cv.pdf" download className="np-download-link">
              Download PDF &darr;
            </a>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="np-footer">
          <div className="np-footer-inner">
            <Link href="/">behar.io</Link>
            <span className="np-contact-sep"> | </span>
            <a href="mailto:davbelom@gmail.com">davbelom@gmail.com</a>
            <span className="np-contact-sep"> | </span>
            <a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="np-contact-sep"> | </span>
            <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </footer>
      </div>

      {/* ===== ACCESSIBLE SCREEN-READER CONTENT ===== */}
      <div className="sr-only" role="document" aria-label="David Behar Lombrozo full CV">
        <h1>David Behar Lombrozo - Software Developer</h1>
        <p>Mexico City, MX | +52 55 1698 8310 | davbelom@gmail.com</p>
        <h2>Summary</h2>
        <p>
          AI-native full-stack engineer with 10+ years of experience. Drove Webpack Module Federation
          migration reducing bundle size by ~70% and page load times by ~35% across 3 React apps serving
          500+ users. Specializes in scalable React/TypeScript architecture, CI/CD optimization, and Core
          Web Vitals.
        </p>
        <h2>Experience</h2>
        {EXPERIENCE.map((exp) => (
          <div key={exp.company}>
            <h3>{exp.company} - {exp.role} ({exp.date})</h3>
            <ul>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
        <h2>Education</h2>
        {EDUCATION.map((edu) => (
          <div key={edu.school}>
            <h3>{edu.school} ({edu.year}) - {edu.degree}</h3>
            <p>{edu.desc}</p>
          </div>
        ))}
        <h2>Languages</h2>
        <p>Spanish (Native), English (Advanced), Hebrew (Intermediate)</p>
      </div>
    </>
  )
}
