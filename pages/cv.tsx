import Head from 'next/head'
import { NextSeo } from 'next-seo'

/* ================================================================
   Skill tag with optional devicon
   Uses CDN: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/
   ================================================================ */
type SkillTagProps = { name: string; icon?: string }

const SkillTag = ({ name, icon }: SkillTagProps) => (
  <span className="cv-skill-tag">
    {icon && (
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
        alt=""
        width={14}
        height={14}
        loading="lazy"
      />
    )}
    {name}
  </span>
)

/* ================================================================
   CV Page V2
   Warm editorial design: navy hero, coral accents, timeline,
   metric highlight bands, tech-icon skill cards.
   ================================================================ */
export default function CVPage() {
  return (
    <>
      <NextSeo
        title="David Behar Lombrozo | Senior Full-Stack Engineer"
        description="AI-native full-stack engineer with 10+ years of experience. Drove Webpack Module Federation migration reducing bundle size by ~70% across 3 React apps serving 500+ users."
        canonical="https://behar.io/cv"
        openGraph={{
          title: 'David Behar Lombrozo | Senior Full-Stack Engineer',
          description: 'AI-native full-stack engineer with 10+ years of experience.',
          url: 'https://behar.io/cv',
          type: 'profile',
        }}
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="cv-page">
        {/* ============================================================
            HERO - THE BILLBOARD
            ============================================================ */}
        <section className="cv-hero">
          <div className="cv-hero__inner">
            <h1 className="cv-hero__name">David Behar Lombrozo</h1>
            <p className="cv-hero__title">
              Senior Full-Stack Engineer | Team Lead at <strong>Autodesk</strong>
            </p>
            <p className="cv-hero__summary">
              AI-native full-stack engineer with 10+ years of experience. Specializes in scalable
              React/TypeScript architecture, CI/CD optimization, and Core Web Vitals. Uses Claude Code
              and multi-agent orchestration to accelerate design, implementation, refactoring, and
              testing across the full stack.
            </p>

            {/* 4 metric cards */}
            <div className="cv-hero__metrics">
              <div className="cv-hero__metric">
                <span className="cv-hero__metric-number">~70%</span>
                <span className="cv-hero__metric-label">Bundle Size Reduction</span>
              </div>
              <div className="cv-hero__metric">
                <span className="cv-hero__metric-number">500+</span>
                <span className="cv-hero__metric-label">Users Served</span>
              </div>
              <div className="cv-hero__metric">
                <span className="cv-hero__metric-number">15+</span>
                <span className="cv-hero__metric-label">Microfrontends</span>
              </div>
              <div className="cv-hero__metric">
                <span className="cv-hero__metric-number">50%</span>
                <span className="cv-hero__metric-label">Faster Builds</span>
              </div>
            </div>

            {/* Actions: download + contact links */}
            <div className="cv-hero__actions">
              <a href="/david-behar-cv.pdf" download className="cv-hero__download">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              <a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer" className="cv-hero__link">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer" className="cv-hero__link">
                <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
              <a href="mailto:davbelom@gmail.com" className="cv-hero__link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                davbelom@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            EXPERIENCE - TIMELINE
            ============================================================ */}
        <section className="cv-experience">
          <div className="cv-experience__inner">
            <h2 className="cv-section__heading cv-animate">Experience</h2>

            <div className="cv-timeline">
              {/* --- Autodesk --- */}
              <article className="cv-timeline__entry cv-animate cv-animate-delay-1">
                <div className="cv-timeline__header">
                  <div>
                    <h3 className="cv-timeline__company">Autodesk</h3>
                    <p className="cv-timeline__role">Full Stack Engineer | Team Lead | Platform</p>
                  </div>
                  <div className="cv-timeline__meta">
                    <span className="cv-timeline__dates">Nov 2019 - Present</span>
                    <span className="cv-timeline__location">Mexico City, MX</span>
                  </div>
                </div>
                <ul className="cv-timeline__highlights">
                  <li>
                    Developed and maintained <strong>3 large-scale React applications</strong> comprising
                    15+ microfrontends and 7 shared libraries (real-time water telemetry, CCTV, asset
                    management, pipe analytics) supporting <strong>500+ users</strong>, establishing
                    front-end architecture patterns utilized by <strong>70+ engineers across 3 time zones</strong>.
                  </li>
                  <li id="achievement-module-federation">
                    Directed migration to <strong>Webpack Module Federation</strong>, decomposing a ~4MB
                    monolithic bundle into 20+ independently deployable modules (~15 MFEs, 3 shell apps,
                    7 collective libraries) with on-demand route-based loading. Diminished initial bundle
                    size by <strong>~70%</strong> and improved page load times by <strong>~35%</strong>.
                  </li>
                  <li>
                    Built end-to-end <strong>serverless upload/download workflows</strong> with compliance
                    validation steps using AWS Lambda, API Gateway, and EventBridge, while maintaining
                    <strong> 75+ Lambda functions</strong> across 15+ microservice backends.
                  </li>
                  <li>
                    Created <strong>5+ internal packages</strong> (auth SDKs, telemetry modules, common
                    UI components) adopted across 5+ teams, shortening developer onboarding from ~2 months
                    to ~2 weeks and reducing AWS authentication setup time by <strong>50%</strong>.
                  </li>
                  <li id="achievement-cicd-optimization">
                    Led and mentored a <strong>team of 4 engineers</strong>, ran architecture and code
                    reviews, and instituted CI/CD improvements (incremental builds, pipeline
                    parallelization, independent MFE releases) that reduced build times by <strong>50%</strong> and
                    cut deployment pipelines from 12+ to ~5 per shared component change.
                  </li>
                  <li>
                    Adopted <strong>Claude Code</strong> as a daily engineering tool for AI-augmented
                    architecture design, code generation, refactoring, and testing, using multi-agent
                    orchestration across the microfrontend ecosystem.
                  </li>
                </ul>
              </article>

              {/* --- Social Piper --- */}
              <article className="cv-timeline__entry cv-animate cv-animate-delay-2">
                <div className="cv-timeline__header">
                  <div>
                    <h3 className="cv-timeline__company">Social Piper</h3>
                    <p className="cv-timeline__role">Senior Front-End Developer</p>
                  </div>
                  <div className="cv-timeline__meta">
                    <span className="cv-timeline__dates">Jan 2019 - Nov 2019</span>
                    <span className="cv-timeline__location">Mexico City, MX</span>
                  </div>
                </div>
                <ul className="cv-timeline__highlights">
                  <li>
                    Led <strong>Vue to React migration</strong> and developed a TypeScript component
                    library with Storybook supporting Desktop and Mobile Web; integrated frontend with
                    backend APIs to cut feature delivery time by <strong>25%</strong>.
                  </li>
                  <li>
                    Improved <strong>Core Web Vitals 30-50%</strong> through performance audits, code
                    splitting, image optimization, and render optimization strategies.
                  </li>
                  <li>
                    Enhanced accessibility of a <strong>30+ collaborative component library</strong>{' '}
                    (Storybook) with semantic HTML and ARIA attributes, adopted by at least 30+ engineers
                    across 3 apps and 15+ microfrontends.
                  </li>
                </ul>
              </article>

              {/* --- Qubit Works --- */}
              <article className="cv-timeline__entry cv-animate cv-animate-delay-3">
                <div className="cv-timeline__header">
                  <div>
                    <h3 className="cv-timeline__company">Qubit Works</h3>
                    <p className="cv-timeline__role">Head of Operations / Lead Engineer</p>
                  </div>
                  <div className="cv-timeline__meta">
                    <span className="cv-timeline__dates">Jan 2015 - Dec 2018</span>
                    <span className="cv-timeline__location">Mexico City, MX</span>
                  </div>
                </div>
                <ul className="cv-timeline__highlights">
                  <li>
                    Managed <strong>20+ client projects</strong> across web and mobile platforms,
                    architecting React frontends, Node.js backends, and e-commerce solutions while growing
                    the engineering team from 2 to <strong>10+ members</strong> and establishing Agile
                    practices, code review culture, and technical training programs.
                  </li>
                  <li>
                    Translated <strong>50+ ambiguous client requirements</strong> into MVP-first release
                    plans with incremental iterations, delivering projects with cross-functional teams of
                    3-5 (design and engineering) and improving delivery consistency across the agency.
                  </li>
                </ul>
              </article>

              {/* --- Farmaldea --- */}
              <article className="cv-timeline__entry cv-animate cv-animate-delay-4">
                <div className="cv-timeline__header">
                  <div>
                    <h3 className="cv-timeline__company">Farmaldea</h3>
                    <p className="cv-timeline__role">Head of Technology</p>
                  </div>
                  <div className="cv-timeline__meta">
                    <span className="cv-timeline__dates">Jan 2014 - Dec 2016</span>
                    <span className="cv-timeline__location">Mexico City, MX</span>
                  </div>
                </div>
                <ul className="cv-timeline__highlights">
                  <li>
                    Architected from scratch a <strong>digital pharmacy aggregator</strong> with
                    point-of-sale capabilities, enabling users to search and purchase medications across
                    <strong> 500+ pharmacies</strong> through a unified platform.
                  </li>
                  <li>
                    Built a <strong>REST API integration</strong> with GTN&apos;s appointment platform,
                    enabling automated order creation from their scheduling system and periodic inventory
                    synchronization across the pharmacy network.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================
            HIGHLIGHT BAND 1
            ============================================================ */}
        <section className="cv-highlight-band cv-animate">
          <div className="cv-highlight-band__inner">
            <h3 className="cv-highlight-band__title">Webpack Module Federation Migration</h3>
            <div className="cv-highlight-band__number cv-highlight-band__number--coral">~35%</div>
            <p className="cv-highlight-band__text">
              <strong>Faster page loads</strong> after decomposing a ~4MB monolithic bundle into 20+
              independently deployable modules with on-demand route-based loading
            </p>
            <a href="#achievement-module-federation" className="cv-highlight-band__link">See in experience &darr;</a>
          </div>
        </section>

        <div className="cv-highlight-band__spacer" />

        <section className="cv-highlight-band cv-animate">
          <div className="cv-highlight-band__inner">
            <h3 className="cv-highlight-band__title">CI/CD Pipeline Optimization</h3>
            <div className="cv-highlight-band__number cv-highlight-band__number--teal">50%</div>
            <p className="cv-highlight-band__text">
              <strong>Build time reduction</strong> through incremental builds, pipeline parallelization,
              and independent microfrontend releases
            </p>
            <a href="#achievement-cicd-optimization" className="cv-highlight-band__link">See in experience &darr;</a>
          </div>
        </section>

        {/* ============================================================
            SKILLS - 3-COLUMN CARDS WITH TECH ICONS
            ============================================================ */}
        <section className="cv-skills-section">
          <div className="cv-skills-section__inner">
            <h2 className="cv-section__heading cv-animate">Technical Skills</h2>

            <div className="cv-skills__grid">
              {/* Core Web */}
              <div className="cv-skill-card cv-animate cv-animate-delay-1">
                <h3 className="cv-skill-card__title">Core Web</h3>
                <div className="cv-skill-card__tags">
                  <SkillTag name="TypeScript" icon="typescript" />
                  <SkillTag name="JavaScript" icon="javascript" />
                  <SkillTag name="React" icon="react" />
                  <SkillTag name="Redux" icon="redux" />
                  <SkillTag name="HTML5" icon="html5" />
                  <SkillTag name="CSS3" icon="css3" />
                  <SkillTag name="styled-components" />
                  <SkillTag name="State Management" />
                </div>
              </div>

              {/* AI-Augmented */}
              <div className="cv-skill-card cv-animate cv-animate-delay-2">
                <h3 className="cv-skill-card__title">AI-Augmented Dev</h3>
                <div className="cv-skill-card__tags">
                  <SkillTag name="Claude Code" />
                  <SkillTag name="OpenAI Codex" />
                  <SkillTag name="AI Refactoring" />
                  <SkillTag name="Context Engineering" />
                  <SkillTag name="Multi-Agent Orchestration" />
                </div>
              </div>

              {/* Performance */}
              <div className="cv-skill-card cv-animate cv-animate-delay-3">
                <h3 className="cv-skill-card__title">Performance</h3>
                <div className="cv-skill-card__tags">
                  <SkillTag name="Core Web Vitals" />
                  <SkillTag name="Lighthouse CI" />
                  <SkillTag name="Code Splitting" />
                  <SkillTag name="Lazy Loading" />
                  <SkillTag name="PWA" />
                  <SkillTag name="Bundle Optimization" />
                  <SkillTag name="Caching Strategies" />
                </div>
              </div>

              {/* Build & Testing */}
              <div className="cv-skill-card cv-animate cv-animate-delay-4">
                <h3 className="cv-skill-card__title">Build &amp; Testing</h3>
                <div className="cv-skill-card__tags">
                  <SkillTag name="Webpack" icon="webpack" />
                  <SkillTag name="Jest" icon="jest" />
                  <SkillTag name="Cypress" />
                  <SkillTag name="Vitest" />
                  <SkillTag name="Storybook" icon="storybook" />
                  <SkillTag name="CI/CD" />
                  <SkillTag name="Jenkins" icon="jenkins" />
                  <SkillTag name="Azure DevOps" icon="azure" />
                </div>
              </div>

              {/* Backend & Cloud */}
              <div className="cv-skill-card cv-animate cv-animate-delay-5">
                <h3 className="cv-skill-card__title">Backend &amp; Cloud</h3>
                <div className="cv-skill-card__tags">
                  <SkillTag name="Node.js" icon="nodejs" />
                  <SkillTag name="REST APIs" />
                  <SkillTag name="GraphQL" icon="graphql" />
                  <SkillTag name="AWS Lambda" icon="amazonwebservices" />
                  <SkillTag name="API Gateway" />
                  <SkillTag name="EventBridge" />
                  <SkillTag name="S3" />
                  <SkillTag name="Serverless" />
                </div>
              </div>

              {/* Architecture */}
              <div className="cv-skill-card cv-animate cv-animate-delay-6">
                <h3 className="cv-skill-card__title">Architecture</h3>
                <div className="cv-skill-card__tags">
                  <SkillTag name="Microfrontends" />
                  <SkillTag name="Module Federation" />
                  <SkillTag name="DX Tooling" />
                  <SkillTag name="Responsive Design" />
                  <SkillTag name="Scalable Systems" />
                  <SkillTag name="Event-Driven Patterns" />
                  <SkillTag name="Git" icon="git" />
                  <SkillTag name="Agile/Scrum" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            EDUCATION + LANGUAGES (two-column compact)
            ============================================================ */}
        <section className="cv-bottom-section">
          <div className="cv-bottom-section__inner">
            <div className="cv-bottom-grid">
              {/* Education column */}
              <div>
                <h2 className="cv-section__heading cv-animate">Education</h2>

                <div className="cv-edu cv-animate cv-animate-delay-1">
                  <div className="cv-edu__header">
                    <h3 className="cv-edu__school">Universidad Iberoamericana</h3>
                    <span className="cv-edu__year">2014</span>
                  </div>
                  <p className="cv-edu__degree">B.A. | Interactive Design</p>
                  <p className="cv-edu__detail">
                    Speciality in Software Development, Digital Systems, and UX/UI. Foundation in
                    user-centered design and interaction patterns. Mexico City, MX.
                  </p>
                </div>

                <div className="cv-edu cv-animate cv-animate-delay-2">
                  <div className="cv-edu__header">
                    <h3 className="cv-edu__school">Platzi Master Bootcamp</h3>
                    <span className="cv-edu__year">2021</span>
                  </div>
                  <p className="cv-edu__degree">Selective Program (Top 1% LATAM)</p>
                  <p className="cv-edu__detail">
                    Completed 100+ advanced courses in computer science, React, Node.js, AWS,
                    algorithms, and distributed systems. Selected as one of the top 1% of the best
                    students of the year 2019.
                  </p>
                </div>
              </div>

              {/* Languages column */}
              <div>
                <h2 className="cv-section__heading cv-animate">Languages</h2>

                <div className="cv-languages cv-animate cv-animate-delay-1">
                  <div className="cv-language">
                    <span className="cv-language__name">Spanish</span>
                    <span className="cv-language__level">Native</span>
                  </div>
                  <div className="cv-language">
                    <span className="cv-language__name">English</span>
                    <span className="cv-language__level">Advanced</span>
                  </div>
                  <div className="cv-language">
                    <span className="cv-language__name">Hebrew</span>
                    <span className="cv-language__level">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA BAND - DOWNLOAD
            ============================================================ */}
        <section className="cv-cta-band cv-animate">
          <div className="cv-cta-band__inner">
            <h2 className="cv-cta-band__heading">Interested in working together?</h2>
            <p className="cv-cta-band__text">
              Download the full CV or reach out directly at davbelom@gmail.com
            </p>
            <a href="/david-behar-cv.pdf" download className="cv-cta-band__button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV (PDF)
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
