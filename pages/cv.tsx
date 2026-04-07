import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import DarkModeToggle from '../components/misc/dark-mode-toggle'

const SECTIONS = [
  { id: 'about', label: 'About', icon: '\ud83d\udcdd' },
  { id: 'experience', label: 'Experience', icon: '\ud83d\udcbc' },
  { id: 'skills', label: 'Skills', icon: '\ud83d\udee0\ufe0f' },
  { id: 'education', label: 'Education', icon: '\ud83c\udf93' },
  { id: 'languages', label: 'Languages', icon: '\ud83c\udf10' },
]

const SKILLS_DATA = [
  { skill: 'TypeScript', category: 'Core', proficiency: 5 },
  { skill: 'React', category: 'Core', proficiency: 5 },
  { skill: 'JavaScript (ES6+)', category: 'Core', proficiency: 5 },
  { skill: 'Redux', category: 'Core', proficiency: 4 },
  { skill: 'HTML5 / CSS3', category: 'Core', proficiency: 5 },
  { skill: 'Node.js', category: 'Backend', proficiency: 4 },
  { skill: 'REST APIs', category: 'Backend', proficiency: 5 },
  { skill: 'GraphQL (AppSync)', category: 'Backend', proficiency: 3 },
  { skill: 'AWS Lambda', category: 'Cloud', proficiency: 4 },
  { skill: 'API Gateway', category: 'Cloud', proficiency: 4 },
  { skill: 'EventBridge / S3', category: 'Cloud', proficiency: 3 },
  { skill: 'Serverless Framework', category: 'Cloud', proficiency: 3 },
  { skill: 'Webpack', category: 'Build', proficiency: 5 },
  { skill: 'Module Federation', category: 'Architecture', proficiency: 5 },
  { skill: 'Jest / Vitest', category: 'Testing', proficiency: 4 },
  { skill: 'Cypress (E2E)', category: 'Testing', proficiency: 4 },
  { skill: 'Storybook', category: 'Build', proficiency: 4 },
  { skill: 'CI/CD (Jenkins, Azure)', category: 'Build', proficiency: 4 },
  { skill: 'Core Web Vitals', category: 'Performance', proficiency: 5 },
  { skill: 'Claude Code', category: 'AI', proficiency: 5 },
  { skill: 'Multi-agent Orchestration', category: 'AI', proficiency: 4 },
  { skill: 'Git / Agile / Scrum', category: 'Practices', proficiency: 5 },
  { skill: 'TDD / Code Reviews', category: 'Practices', proficiency: 5 },
  { skill: 'Technical Mentorship', category: 'Practices', proficiency: 4 },
]

const CATEGORY_COLORS: Record<string, string> = {
  Core: 'cv-notion-tag-blue',
  Backend: 'cv-notion-tag-green',
  Cloud: 'cv-notion-tag-orange',
  Build: 'cv-notion-tag-yellow',
  Architecture: 'cv-notion-tag-pink',
  Testing: 'cv-notion-tag-red',
  Performance: 'cv-notion-tag-purple',
  AI: 'cv-notion-tag-green',
  Practices: 'cv-notion-tag-gray',
}

function Dots({ count }: { count: number }) {
  return (
    <span className="cv-notion-dots">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`cv-notion-dot${i <= count ? ' filled' : ''}`} />
      ))}
    </span>
  )
}

export default function CVPage() {
  const [activeSection, setActiveSection] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sectionIds = SECTIONS.map((s) => s.id)
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            current = id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <NextSeo
        title="Resume"
        description="David Behar Lombrozo - AI-native full-stack engineer with 10+ years of experience. React, TypeScript, AWS, microfrontends."
        canonical="https://behar.io/cv"
      />

      <div className="cv-notion">
        {/* SIDEBAR */}
        <aside className="cv-notion-sidebar">
          <div className="cv-notion-sidebar-header">
            <div className="cv-notion-sidebar-workspace">
              <span className="cv-notion-sidebar-workspace-icon">D</span>
              David Behar
            </div>
          </div>

          <nav className="cv-notion-sidebar-nav">
            <div className="cv-notion-sidebar-section-label">On this page</div>
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                className={`cv-notion-sidebar-link${activeSection === section.id ? ' active' : ''}`}
                onClick={() => scrollTo(section.id)}
              >
                <span className="cv-notion-sidebar-link-icon">{section.icon}</span>
                {section.label}
              </a>
            ))}

            <div className="cv-notion-sidebar-section-label" style={{ marginTop: '1rem' }}>Links</div>
            <Link href="/" className="cv-notion-sidebar-link">
              <span className="cv-notion-sidebar-link-icon">{'\u2190'}</span>
              behar.io
            </Link>
            <a
              href="https://linkedin.com/in/davidbehar"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-notion-sidebar-link"
            >
              <span className="cv-notion-sidebar-link-icon">{'\ud83d\udd17'}</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/behagoras"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-notion-sidebar-link"
            >
              <span className="cv-notion-sidebar-link-icon">{'\ud83d\udd17'}</span>
              GitHub
            </a>
          </nav>

          <div className="cv-notion-sidebar-export">
            <a href="/david-behar-cv.pdf" download>
              <span className="cv-notion-sidebar-link-icon">{'\u2b07\ufe0f'}</span>
              Export as PDF
            </a>
          </div>
        </aside>

        {/* MAIN AREA */}
        <div className="cv-notion-main">
          {/* TOP BAR */}
          <div className={`cv-notion-topbar${scrolled ? ' scrolled' : ''}`}>
            <div className="cv-notion-breadcrumb">
              <Link href="/">David Behar</Link>
              <span className="cv-notion-breadcrumb-separator">/</span>
              <span className="cv-notion-breadcrumb-current">Resume</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <DarkModeToggle />
              <a
                href="/david-behar-cv.pdf"
                download
                className="cv-notion-export-btn"
                title="Download PDF"
              >
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z" />
                  <path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06Z" />
                </svg>
                Export
              </a>
            </div>
          </div>

          {/* COVER */}
          <div className="cv-notion-cover" />

          {/* PAGE CONTENT */}
          <div className="cv-notion-page">
            {/* Page icon + title */}
            <div className="cv-notion-page-icon">{'\ud83d\udcbb'}</div>
            <h1 className="cv-notion-page-title">David Behar Lombrozo</h1>
            <p className="cv-notion-page-subtitle">Software Developer</p>

            {/* Properties */}
            <div className="cv-notion-properties">
              <div className="cv-notion-property">
                <span className="cv-notion-property-label">Status</span>
                <span className="cv-notion-property-tags">
                  <span className="cv-notion-tag cv-notion-tag-green">Open to work</span>
                  <span className="cv-notion-tag cv-notion-tag-blue">Open to remote</span>
                </span>
              </div>
              <div className="cv-notion-property">
                <span className="cv-notion-property-label">Location</span>
                <span className="cv-notion-property-value">Mexico City, MX</span>
              </div>
              <div className="cv-notion-property">
                <span className="cv-notion-property-label">Experience</span>
                <span className="cv-notion-tag cv-notion-tag-orange">10+ years</span>
              </div>
              <div className="cv-notion-property">
                <span className="cv-notion-property-label">Focus</span>
                <span className="cv-notion-property-tags">
                  <span className="cv-notion-tag cv-notion-tag-purple">React / TypeScript</span>
                  <span className="cv-notion-tag cv-notion-tag-purple">Microfrontends</span>
                  <span className="cv-notion-tag cv-notion-tag-purple">AI-Augmented Dev</span>
                </span>
              </div>
              <div className="cv-notion-property">
                <span className="cv-notion-property-label">Email</span>
                <a href="mailto:davbelom@gmail.com" className="cv-notion-property-link">davbelom@gmail.com</a>
              </div>
              <div className="cv-notion-property">
                <span className="cv-notion-property-label">Phone</span>
                <span className="cv-notion-property-value">+52 55 1698 8310</span>
              </div>
              <div className="cv-notion-property">
                <span className="cv-notion-property-label">LinkedIn</span>
                <a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer" className="cv-notion-property-link">linkedin.com/in/davidbehar</a>
              </div>
              <div className="cv-notion-property">
                <span className="cv-notion-property-label">GitHub</span>
                <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer" className="cv-notion-property-link">github.com/behagoras</a>
              </div>
            </div>

            {/* ABOUT / SUMMARY */}
            <h2 id="about" className="cv-notion-h2">Summary</h2>
            <hr className="cv-notion-divider" />
            <p className="cv-notion-text">
              AI-native full-stack engineer with 10+ years of experience. Drove Webpack Module Federation
              migration reducing bundle size by ~70% and page load times by ~35% across 3 React apps serving
              500+ users. Specializes in scalable React/TypeScript architecture, CI/CD optimization, and
              Core Web Vitals. Adopts AI-augmented engineering as a daily practice, using Claude Code and
              multi-agent orchestration to accelerate design, implementation, refactoring, and testing
              across the full stack.
            </p>

            {/* EXPERIENCE */}
            <h2 id="experience" className="cv-notion-h2">Experience</h2>
            <hr className="cv-notion-divider" />

            {/* Autodesk */}
            <details className="cv-notion-toggle" open>
              <summary>
                <div className="cv-notion-toggle-title">Autodesk</div>
                <span className="cv-notion-toggle-meta">Nov 2019 - Present</span>
              </summary>
              <div className="cv-notion-toggle-content">
                <div className="cv-notion-toggle-role">Full Stack Engineer | Team Lead | Platform</div>
                <div className="cv-notion-toggle-location">Mexico City, MX</div>
                <ul className="cv-notion-list">
                  <li>
                    Developed and maintained 3 large-scale React applications comprising 15+ microfrontends
                    and 7 shared libraries (real-time water telemetry, CCTV, asset management, pipe analytics)
                    supporting 500+ users, establishing front-end architecture patterns and reusable platform
                    foundations utilized by 70+ engineers across 3 time zones.
                  </li>
                  <li>
                    Directed migration to Webpack Module Federation, decomposing a ~4MB monolithic bundle into
                    20+ independently deployable modules (~15 MFEs, 3 shell apps, 7 collective libraries) with
                    on-demand route-based loading. Diminished initial bundle size by ~70% and improved page
                    load times by ~35%.
                  </li>
                  <li>
                    Built end-to-end serverless upload/download workflows with compliance validation steps using
                    AWS Lambda, API Gateway, and EventBridge, while maintaining 75+ Lambda functions across 15+
                    microservice backends serving the platform&#39;s microfrontend ecosystem.
                  </li>
                  <li>
                    Created 5+ internal packages (auth SDKs, telemetry modules, common UI components) adopted
                    across 5+ teams, shortening developer onboarding from ~2 months to ~2 weeks and reducing
                    AWS authentication setup time by 50% while preserving security standards.
                  </li>
                  <li>
                    Led and mentored a team of 4 engineers, ran architecture and code reviews, and instituted
                    CI/CD improvements (incremental builds, pipeline parallelization, independent MFE releases)
                    that reduced build times by 50% and cut deployment pipelines from 12+ to ~5 per shared
                    component change.
                  </li>
                  <li>
                    Adopted Claude Code as a daily engineering tool for AI-augmented architecture design, code
                    generation, refactoring, and testing, using multi-agent orchestration across the platform&#39;s
                    microfrontend ecosystem.
                  </li>
                </ul>
              </div>
            </details>

            {/* Social Piper */}
            <details className="cv-notion-toggle">
              <summary>
                <div className="cv-notion-toggle-title">Social Piper</div>
                <span className="cv-notion-toggle-meta">Jan 2019 - Nov 2019</span>
              </summary>
              <div className="cv-notion-toggle-content">
                <div className="cv-notion-toggle-role">Senior Front-End Developer</div>
                <div className="cv-notion-toggle-location">Mexico City, MX</div>
                <ul className="cv-notion-list">
                  <li>
                    Led Vue to React migration and developed a TypeScript component library with Storybook
                    supporting Desktop and Mobile Web; integrated frontend with backend APIs to cut feature
                    delivery time by 25%.
                  </li>
                  <li>
                    Improved Core Web Vitals 30-50% through performance audits, code splitting, image
                    optimization, and render optimization strategies.
                  </li>
                  <li>
                    Enhanced accessibility of a 30+ collaborative component library (Storybook) with semantic
                    HTML and ARIA attributes, adopted by at least 30+ engineers across 3 apps and 15+
                    microfrontends.
                  </li>
                </ul>
              </div>
            </details>

            {/* Qubit Works */}
            <details className="cv-notion-toggle">
              <summary>
                <div className="cv-notion-toggle-title">Qubit Works</div>
                <span className="cv-notion-toggle-meta">Jan 2015 - Dec 2018</span>
              </summary>
              <div className="cv-notion-toggle-content">
                <div className="cv-notion-toggle-role">Head of Operations / Lead Engineer</div>
                <div className="cv-notion-toggle-location">Mexico City, MX</div>
                <ul className="cv-notion-list">
                  <li>
                    Managed 20+ client projects across web and mobile platforms, architecting React frontends,
                    Node.js backends, and e-commerce solutions while growing the engineering team from 2 to
                    10+ members and establishing Agile practices, code review culture, and technical training
                    programs.
                  </li>
                  <li>
                    Translated 50+ ambiguous client requirements into MVP-first release plans with incremental
                    iterations, delivering projects with cross-functional teams of 3 to 5 (design and
                    engineering) and improving delivery consistency across the agency.
                  </li>
                </ul>
              </div>
            </details>

            {/* Farmaldea */}
            <details className="cv-notion-toggle">
              <summary>
                <div className="cv-notion-toggle-title">Farmaldea</div>
                <span className="cv-notion-toggle-meta">Jan 2014 - Dec 2016</span>
              </summary>
              <div className="cv-notion-toggle-content">
                <div className="cv-notion-toggle-role">Head of Technology</div>
                <div className="cv-notion-toggle-location">Mexico City, MX</div>
                <ul className="cv-notion-list">
                  <li>
                    Architected from scratch a digital pharmacy aggregator with point-of-sale capabilities,
                    enabling users to search and purchase medications across 500+ pharmacies through a unified
                    platform.
                  </li>
                  <li>
                    Built a REST API integration with GTN&#39;s appointment platform, enabling automated order
                    creation from their scheduling system and periodic inventory synchronization across the
                    pharmacy network.
                  </li>
                </ul>
              </div>
            </details>

            {/* SKILLS */}
            <h2 id="skills" className="cv-notion-h2">Technical Skills</h2>
            <hr className="cv-notion-divider" />

            <div className="cv-notion-db">
              <div className="cv-notion-db-header">
                <div className="cv-notion-db-header-cell">Skill</div>
                <div className="cv-notion-db-header-cell">Category</div>
                <div className="cv-notion-db-header-cell">Proficiency</div>
              </div>
              {SKILLS_DATA.map((row) => (
                <div key={row.skill} className="cv-notion-db-row">
                  <div className="cv-notion-db-cell">{row.skill}</div>
                  <div className="cv-notion-db-cell">
                    <span className={`cv-notion-tag ${CATEGORY_COLORS[row.category] || 'cv-notion-tag-gray'}`}>
                      {row.category}
                    </span>
                  </div>
                  <div className="cv-notion-db-cell">
                    <Dots count={row.proficiency} />
                  </div>
                </div>
              ))}
            </div>

            {/* Supplementary skills callout */}
            <div className="cv-notion-callout">
              <span className="cv-notion-callout-icon">{'\ud83d\udca1'}</span>
              <div className="cv-notion-callout-content">
                <strong>Also experienced with:</strong> CSS-in-JS (styled-components), Progressive Web Apps (PWA),
                Lighthouse CI, caching strategies, lazy loading, code splitting, Responsive Design,
                Event-Driven Patterns, OOP, SOLID Principles, Developer Experience (DX).
              </div>
            </div>

            {/* EDUCATION */}
            <h2 id="education" className="cv-notion-h2">Education</h2>
            <hr className="cv-notion-divider" />

            <div className="cv-notion-edu-entry">
              <div className="cv-notion-edu-header">
                <span className="cv-notion-edu-school">Universidad Iberoamericana</span>
                <span className="cv-notion-edu-year">2014</span>
              </div>
              <div className="cv-notion-edu-degree">B.A. | Interactive Design</div>
              <p className="cv-notion-edu-desc">
                Speciality in Software Development, Digital Systems, and UX/UI. Foundation in user-centered
                design and interaction patterns. Mexico City, MX.
              </p>
            </div>

            <div className="cv-notion-edu-entry">
              <div className="cv-notion-edu-header">
                <span className="cv-notion-edu-school">Platzi Master Bootcamp</span>
                <span className="cv-notion-edu-year">2021</span>
              </div>
              <div className="cv-notion-edu-degree">Selective Program (Top 1% LATAM)</div>
              <p className="cv-notion-edu-desc">
                Completed 100+ advanced courses in computer science, React, Node.js, AWS, algorithms, and
                distributed systems. Selected as one of the top 1% of the best students of the year 2019.
              </p>
            </div>

            {/* LANGUAGES */}
            <h2 id="languages" className="cv-notion-h2">Languages</h2>
            <hr className="cv-notion-divider" />

            <div className="cv-notion-lang-list">
              <div className="cv-notion-lang-item">
                <span className="cv-notion-lang-name">Spanish</span>
                <span className="cv-notion-lang-level">Native</span>
              </div>
              <div className="cv-notion-lang-item">
                <span className="cv-notion-lang-name">English</span>
                <span className="cv-notion-lang-level">Advanced</span>
              </div>
              <div className="cv-notion-lang-item">
                <span className="cv-notion-lang-name">Hebrew</span>
                <span className="cv-notion-lang-level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
