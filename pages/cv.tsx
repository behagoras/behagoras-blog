import { useEffect, useRef } from 'react'
import Layout from '../components/misc/layout'
import { NextSeo } from 'next-seo'
import styles from '../components/cv/cv-timeline.module.css'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const skills = {
  'Core Web': [
    'TypeScript', 'JavaScript (ES6+)', 'React', 'Redux', 'HTML5', 'CSS3',
    'CSS-in-JS', 'HTTP', 'State Management', 'DOM',
  ],
  'AI-Augmented Dev': [
    'Claude Code', 'OpenAI Codex', 'Open Claw Automations',
    'AI-Assisted Refactoring & Testing', 'Context Engineering',
    'Multi-Agent Orchestration',
  ],
  Performance: [
    'Core Web Vitals', 'Lighthouse CI', 'Code Splitting',
    'Lazy Loading', 'PWA', 'Bundle Optimization', 'Caching Strategies',
  ],
  'Build & Testing': [
    'Webpack', 'Jest', 'Cypress (E2E)', 'Vitest', 'Storybook',
    'CI/CD', 'Jenkins', 'Azure DevOps',
  ],
  'Backend & Cloud': [
    'Node.js', 'API Design', 'REST APIs', 'GraphQL (AppSync)',
    'AWS Lambda', 'API Gateway', 'EventBridge', 'S3', 'Serverless Framework',
  ],
  Architecture: [
    'Microfrontends (Module Federation)', 'Developer Experience (DX)',
    'Responsive Design', 'Scalable Systems', 'Event-Driven Patterns',
  ],
  Practices: [
    'Git', 'Agile/Scrum', 'OOP', 'SOLID Principles', 'TDD',
    'Code Reviews', 'Technical Mentorship',
  ],
}

type TimelineEntry = {
  id: string
  year: string
  endYear: string
  company: string
  title: string
  location: string
  bullets: string[]
  type: 'role' | 'education'
}

const timeline: TimelineEntry[] = [
  {
    id: 'autodesk',
    year: '2019',
    endYear: 'Present',
    company: 'Autodesk',
    title: 'Full Stack Engineer | Team Lead | Platform',
    location: 'Mexico City, MX',
    type: 'role',
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
    id: 'social-piper',
    year: '2019',
    endYear: '2019',
    company: 'Social Piper',
    title: 'Senior Front-End Developer',
    location: 'Mexico City, MX',
    type: 'role',
    bullets: [
      'Led Vue to React migration and developed a TypeScript component library with Storybook supporting Desktop and Mobile Web; integrated frontend with backend APIs to cut feature delivery time by 25%.',
      'Improved Core Web Vitals 30-50% through performance audits, code splitting, image optimization, and render optimization strategies.',
      'Enhanced accessibility of a 30+ collaborative component library (Storybook) with semantic HTML and ARIA attributes, adopted by at least 30+ engineers across 3 apps and 15+ microfrontends.',
    ],
  },
  {
    id: 'qubit-works',
    year: '2015',
    endYear: '2018',
    company: 'Qubit Works',
    title: 'Head of Operations / Lead Engineer',
    location: 'Mexico City, MX',
    type: 'role',
    bullets: [
      'Managed 20+ client projects across web and mobile platforms, architecting React frontends, Node.js backends, and e-commerce solutions while growing the engineering team from 2 to 10+ members and establishing Agile practices, code review culture, and technical training programs.',
      'Translated 50+ ambiguous client requirements into MVP-first release plans with incremental iterations, delivering projects with cross-functional teams of 3-5 (design and engineering) and improving delivery consistency across the agency.',
    ],
  },
  {
    id: 'farmaldea',
    year: '2014',
    endYear: '2016',
    company: 'Farmaldea',
    title: 'Head of Technology',
    location: 'Mexico City, MX',
    type: 'role',
    bullets: [
      'Architected from scratch a digital pharmacy aggregator with point-of-sale capabilities, enabling users to search and purchase medications across 500+ pharmacies through a unified platform.',
      'Built a REST API integration with GTN\'s appointment platform, enabling automated order creation from their scheduling system and periodic inventory synchronization across the pharmacy network.',
    ],
  },
  {
    id: 'ibero',
    year: '2014',
    endYear: '',
    company: 'Universidad Iberoamericana',
    title: 'B.A. | Interactive Design',
    location: 'Mexico City, MX',
    type: 'education',
    bullets: [
      'Speciality in Software Development, Digital Systems, and UX/UI. Foundation in user-centered design and interaction patterns.',
    ],
  },
  {
    id: 'platzi',
    year: '2021',
    endYear: '',
    company: 'Platzi Master Bootcamp',
    title: 'Selective Program (Top 1% LATAM)',
    location: '',
    type: 'education',
    bullets: [
      'Completed 100+ advanced courses in computer science, React, Node.js, AWS, algorithms, and distributed systems. Selected as one of the top 1% of the best students of the year 2019.',
    ],
  },
]

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Advanced' },
  { name: 'Hebrew', level: 'Intermediate' },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CVPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const eduRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const observeAll = (ref: React.RefObject<HTMLDivElement | null>) => {
      const nodes = ref.current?.querySelectorAll(`.${styles.timelineItem}`)
      nodes?.forEach((node) => observer.observe(node))
    }

    observeAll(timelineRef)
    observeAll(eduRef)

    return () => observer.disconnect()
  }, [])

  return (
    <Layout>
      <NextSeo
        title="CV"
        description="David Behar Lombrozo - Software Developer CV. 10+ years building scalable web applications with React, TypeScript, Node.js, and AWS."
        canonical="https://behar.io/cv"
      />

      <div className={styles.cvPage}>
        {/* ---- Hero / Header ---- */}
        <section className={styles.hero}>
          <h1 className={styles.heroName}>David Behar Lombrozo</h1>
          <p className={styles.heroTitle}>Software Developer</p>
          <div className={styles.heroContact}>
            <span>Mexico City, MX</span>
            <span className={styles.separator}>|</span>
            <a href="mailto:davbelom@gmail.com">davbelom@gmail.com</a>
            <span className={styles.separator}>|</span>
            <a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className={styles.separator}>|</span>
            <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <a href="/david-behar-cv.pdf" download className={styles.downloadBtn}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 1v10M8 11L4 7M8 11l4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV (PDF)
          </a>
        </section>

        {/* ---- Summary ---- */}
        <section className={styles.summary}>
          <p>
            AI-native full-stack engineer with 10+ years of experience. Drove Webpack Module Federation migration reducing bundle size by ~70% and page load times by ~35% across 3 React apps serving 500+ users. Specializes in scalable React/TypeScript architecture, CI/CD optimization, and Core Web Vitals. Adopts AI-augmented engineering as a daily practice, using Claude Code and multi-agent orchestration to accelerate design, implementation, refactoring, and testing across the full stack.
          </p>
        </section>

        {/* ---- Skills ---- */}
        <section className={styles.skills}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillGroups}>
            {Object.entries(skills).map(([group, tags]) => (
              <div key={group} className={styles.skillGroup}>
                <h3 className={styles.skillGroupLabel}>{group}</h3>
                <div className={styles.skillPills}>
                  {tags.map((tag) => (
                    <span key={tag} className={styles.pill}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Experience Timeline ---- */}
        <section className={styles.timelineSection} ref={timelineRef}>
          <h2 className={styles.sectionTitle}>Experience</h2>

          <div className={styles.timeline}>
            {/* The glowing vertical line */}
            <div className={styles.timelineLine} aria-hidden="true" />

            {timeline.filter(e => e.type === 'role').map((entry, i) => (
              <article
                key={entry.id}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
              >
                <div className={styles.timelineDot} aria-hidden="true" />
                <div className={styles.yearMarker}>
                  {entry.year === entry.endYear
                    ? entry.year
                    : `${entry.year} - ${entry.endYear}`}
                </div>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.company}>{entry.company}</h3>
                    <span className={styles.location}>{entry.location}</span>
                  </div>
                  <p className={styles.role}>{entry.title}</p>
                  <ul className={styles.bullets}>
                    {entry.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---- Education Timeline ---- */}
        <section className={styles.timelineSection} ref={eduRef}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} aria-hidden="true" />
            {timeline.filter(e => e.type === 'education').map((entry, i) => (
              <article
                key={entry.id}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
              >
                <div className={styles.timelineDot} aria-hidden="true" />
                <div className={styles.yearMarker}>{entry.year}</div>
                <div className={`${styles.card} ${styles.cardSmall}`}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.company}>{entry.company}</h3>
                    {entry.location && <span className={styles.location}>{entry.location}</span>}
                  </div>
                  <p className={styles.role}>{entry.title}</p>
                  <ul className={styles.bullets}>
                    {entry.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---- Languages ---- */}
        <section className={styles.languagesSection}>
          <h2 className={styles.sectionTitle}>Languages</h2>
          <div className={styles.languageGrid}>
            {languages.map((l) => (
              <div key={l.name} className={styles.languageCard}>
                <span className={styles.langName}>{l.name}</span>
                <span className={styles.langLevel}>{l.level}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
