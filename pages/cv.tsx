import Head from 'next/head'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

/* ================================================================
   CV Page v2 - "Ultimate Blend"
   Split hero billboard + coral accents + Playfair Display +
   timeline experience + devicon tech icons + progressive disclosure +
   metric highlight bands + language bars + floating nav
   ================================================================ */

/* Helper: tech icon from devicon CDN */
const TechIcon = ({ name, alt }: { name: string; alt: string }) => (
  <img
    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
    alt={alt}
    width={14}
    height={14}
    loading="lazy"
  />
)

/* Skill pill with optional icon and highlight state */
type SkillPillProps = { children: React.ReactNode; icon?: string; highlighted?: boolean }
const SkillPill = ({ children, icon, highlighted }: SkillPillProps) => (
  <span className={`cv2-skill-pill${highlighted ? ' cv2-skill-pill--hl' : ''}`}>
    {icon && <TechIcon name={icon} alt={String(children)} />}
    {children}
  </span>
)

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="cv2-page">

        {/* ---- FLOATING NAV ---- */}
        <nav className="cv2-nav">
          <div className="cv2-nav__inner">
            <Link href="/" className="cv2-nav__brand">behar.io</Link>
            <div className="cv2-nav__links">
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="/david-behar-cv.pdf" download className="cv2-nav__cta">Download CV</a>
            </div>
          </div>
        </nav>

        {/* HERO: Split layout - Left identity, Right 2x2 metrics */}
        <section className="cv2-hero">
          <div className="cv2-hero__noise" aria-hidden="true" />
          <div className="cv2-hero__inner">
            <div className="cv2-hero__left">
              <h1 className="cv2-hero__name">
                David Behar<br />
                <span className="cv2-hero__name-accent">Lombrozo</span>
              </h1>
              <p className="cv2-hero__title">
                Full-Stack Engineer &amp; Team Lead at <strong>Autodesk</strong>
              </p>
              <p className="cv2-hero__summary">
                AI-native engineer with 10+ years shipping scalable React/TypeScript platforms,
                leading cross-timezone teams, and driving measurable performance gains.
              </p>
              <div className="cv2-hero__contact">
                <a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="mailto:davbelom@gmail.com" aria-label="Email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a href="https://behar.io" aria-label="Website">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </a>
                <span className="cv2-hero__location">Mexico City, MX</span>
              </div>
              <a href="/david-behar-cv.pdf" download className="cv2-hero__download">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download CV
              </a>
            </div>
            <div className="cv2-hero__right">
              <div className="cv2-metric-grid">
                <div className="cv2-metric-card"><span className="cv2-metric-card__number">~70%</span><span className="cv2-metric-card__label">Bundle Size Reduction</span></div>
                <div className="cv2-metric-card"><span className="cv2-metric-card__number">500+</span><span className="cv2-metric-card__label">Users Served</span></div>
                <div className="cv2-metric-card"><span className="cv2-metric-card__number">15+</span><span className="cv2-metric-card__label">Microfrontends</span></div>
                <div className="cv2-metric-card"><span className="cv2-metric-card__number">50%</span><span className="cv2-metric-card__label">Faster Builds</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE: Vertical timeline */}
        <section className="cv2-experience" id="experience">
          <div className="cv2-container">
            <h2 className="cv2-section-heading">Experience</h2>
            <div className="cv2-timeline">
              {/* Autodesk */}
              <article className="cv2-tl-entry cv2-anim cv2-anim-d1">
                <div className="cv2-tl-entry__dot" />
                <div className="cv2-tl-entry__card">
                  <div className="cv2-tl-entry__header">
                    <div><h3 className="cv2-tl-entry__company">Autodesk</h3><p className="cv2-tl-entry__role">Full Stack Engineer | Team Lead | Platform</p></div>
                    <div className="cv2-tl-entry__meta"><span className="cv2-tl-entry__dates">Nov 2019 - Present</span><span className="cv2-tl-entry__location">Mexico City, MX</span></div>
                  </div>
                  <ul className="cv2-tl-bullets">
                    <li>Developed and maintained <strong>3 large-scale React applications</strong> comprising 15+ microfrontends and 7 shared libraries (real-time water telemetry, CCTV, asset management, pipe analytics) supporting <strong>500+ users</strong>, establishing front-end architecture patterns utilized by <strong>70+ engineers across 3 time zones</strong>.</li>
                    <li>Directed migration to <strong>Webpack Module Federation</strong>, decomposing a ~4MB monolithic bundle into 20+ independently deployable modules (~15 MFEs, 3 shell apps, 7 collective libraries) with on-demand route-based loading. Diminished initial bundle size by <strong>~70%</strong> and improved page load times by <strong>~35%</strong>.</li>
                    <li>Built end-to-end <strong>serverless upload/download workflows</strong> with compliance validation steps using AWS Lambda, API Gateway, and EventBridge, while maintaining <strong>75+ Lambda functions</strong> across 15+ microservice backends.</li>
                  </ul>
                  <details className="cv2-disclosure">
                    <summary>Show more</summary>
                    <ul className="cv2-tl-bullets">
                      <li>Created <strong>5+ internal packages</strong> (auth SDKs, telemetry modules, common UI components) adopted across 5+ teams, shortening developer onboarding from ~2 months to ~2 weeks and reducing AWS authentication setup time by <strong>50%</strong>.</li>
                      <li>Led and mentored a <strong>team of 4 engineers</strong>, ran architecture and code reviews, and instituted CI/CD improvements (incremental builds, pipeline parallelization, independent MFE releases) that reduced build times by <strong>50%</strong> and cut deployment pipelines from 12+ to ~5 per shared component change.</li>
                      <li>Adopted <strong>Claude Code</strong> as a daily engineering tool for AI-augmented architecture design, code generation, refactoring, and testing, using multi-agent orchestration across the microfrontend ecosystem.</li>
                    </ul>
                  </details>
                </div>
              </article>
              {/* Metric band */}
              <div className="cv2-band"><div className="cv2-band__inner"><div className="cv2-band__item"><span className="cv2-band__number">~35%</span><span className="cv2-band__label">faster page loads</span></div><div className="cv2-band__sep" /><div className="cv2-band__item"><span className="cv2-band__number">75+</span><span className="cv2-band__label">Lambda functions</span></div><div className="cv2-band__sep" /><div className="cv2-band__item"><span className="cv2-band__number">70+</span><span className="cv2-band__label">engineers on platform</span></div></div></div>
              {/* Social Piper */}
              <article className="cv2-tl-entry cv2-anim cv2-anim-d2">
                <div className="cv2-tl-entry__dot" />
                <div className="cv2-tl-entry__card">
                  <div className="cv2-tl-entry__header">
                    <div><h3 className="cv2-tl-entry__company">Social Piper</h3><p className="cv2-tl-entry__role">Senior Front-End Developer</p></div>
                    <div className="cv2-tl-entry__meta"><span className="cv2-tl-entry__dates">Jan 2019 - Nov 2019</span><span className="cv2-tl-entry__location">Mexico City, MX</span></div>
                  </div>
                  <ul className="cv2-tl-bullets">
                    <li>Led <strong>Vue to React migration</strong> and developed a TypeScript component library with Storybook supporting Desktop and Mobile Web; integrated frontend with backend APIs to cut feature delivery time by <strong>25%</strong>.</li>
                    <li>Improved <strong>Core Web Vitals 30-50%</strong> through performance audits, code splitting, image optimization, and render optimization strategies.</li>
                  </ul>
                  <details className="cv2-disclosure"><summary>Show more</summary><ul className="cv2-tl-bullets"><li>Enhanced accessibility of a <strong>30+ collaborative component library</strong> (Storybook) with semantic HTML and ARIA attributes, adopted by at least 30+ engineers across 3 apps and 15+ microfrontends.</li></ul></details>
                </div>
              </article>
              {/* Qubit Works */}
              <article className="cv2-tl-entry cv2-anim cv2-anim-d3">
                <div className="cv2-tl-entry__dot" />
                <div className="cv2-tl-entry__card">
                  <div className="cv2-tl-entry__header">
                    <div><h3 className="cv2-tl-entry__company">Qubit Works</h3><p className="cv2-tl-entry__role">Head of Operations / Lead Engineer</p></div>
                    <div className="cv2-tl-entry__meta"><span className="cv2-tl-entry__dates">Jan 2015 - Dec 2018</span><span className="cv2-tl-entry__location">Mexico City, MX</span></div>
                  </div>
                  <ul className="cv2-tl-bullets">
                    <li>Managed <strong>20+ client projects</strong> across web and mobile platforms, architecting React frontends, Node.js backends, and e-commerce solutions while growing the engineering team from 2 to <strong>10+ members</strong> and establishing Agile practices, code review culture, and technical training programs.</li>
                    <li>Translated <strong>50+ ambiguous client requirements</strong> into MVP-first release plans with incremental iterations, delivering projects with cross-functional teams of 3-5 (design and engineering) and improving delivery consistency across the agency.</li>
                  </ul>
                </div>
              </article>
              {/* Farmaldea */}
              <article className="cv2-tl-entry cv2-anim cv2-anim-d4">
                <div className="cv2-tl-entry__dot" />
                <div className="cv2-tl-entry__card">
                  <div className="cv2-tl-entry__header">
                    <div><h3 className="cv2-tl-entry__company">Farmaldea</h3><p className="cv2-tl-entry__role">Head of Technology</p></div>
                    <div className="cv2-tl-entry__meta"><span className="cv2-tl-entry__dates">Jan 2014 - Dec 2016</span><span className="cv2-tl-entry__location">Mexico City, MX</span></div>
                  </div>
                  <ul className="cv2-tl-bullets">
                    <li>Architected from scratch a <strong>digital pharmacy aggregator</strong> with point-of-sale capabilities, enabling users to search and purchase medications across <strong>500+ pharmacies</strong> through a unified platform.</li>
                    <li>Built a <strong>REST API integration</strong> with GTN&apos;s appointment platform, enabling automated order creation from their scheduling system and periodic inventory synchronization across the pharmacy network.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS: 3x2 grid with tech icons */}
        <section className="cv2-skills" id="skills">
          <div className="cv2-container">
            <h2 className="cv2-section-heading">Technical Skills</h2>
            <div className="cv2-skills-grid">
              <div className="cv2-skill-card cv2-anim cv2-anim-d1"><h3 className="cv2-skill-card__title">Core Web Technologies</h3><div className="cv2-skill-card__pills"><SkillPill icon="typescript" highlighted>TypeScript</SkillPill><SkillPill icon="javascript" highlighted>JavaScript (ES6+)</SkillPill><SkillPill icon="react" highlighted>React</SkillPill><SkillPill icon="redux">Redux</SkillPill><SkillPill icon="html5">HTML5</SkillPill><SkillPill icon="css3">CSS3</SkillPill><SkillPill>styled-components</SkillPill><SkillPill>State Management</SkillPill></div></div>
              <div className="cv2-skill-card cv2-anim cv2-anim-d2"><h3 className="cv2-skill-card__title">AI-Augmented Dev</h3><div className="cv2-skill-card__pills"><SkillPill highlighted>Claude Code</SkillPill><SkillPill>OpenAI Codex</SkillPill><SkillPill>Multi-Agent Orchestration</SkillPill><SkillPill>Context Engineering</SkillPill><SkillPill>AI Refactoring &amp; Testing</SkillPill></div></div>
              <div className="cv2-skill-card cv2-anim cv2-anim-d3"><h3 className="cv2-skill-card__title">Performance</h3><div className="cv2-skill-card__pills"><SkillPill highlighted>Core Web Vitals</SkillPill><SkillPill>Lighthouse CI</SkillPill><SkillPill>Code Splitting</SkillPill><SkillPill>Lazy Loading</SkillPill><SkillPill>PWA</SkillPill><SkillPill>Bundle Optimization</SkillPill><SkillPill>Caching Strategies</SkillPill></div></div>
              <div className="cv2-skill-card cv2-anim cv2-anim-d4"><h3 className="cv2-skill-card__title">Build &amp; Testing</h3><div className="cv2-skill-card__pills"><SkillPill icon="webpack" highlighted>Webpack</SkillPill><SkillPill icon="jest">Jest</SkillPill><SkillPill>Cypress (E2E)</SkillPill><SkillPill>Vitest</SkillPill><SkillPill icon="storybook">Storybook</SkillPill><SkillPill>CI/CD</SkillPill><SkillPill icon="jenkins">Jenkins</SkillPill><SkillPill>Azure DevOps</SkillPill></div></div>
              <div className="cv2-skill-card cv2-anim cv2-anim-d5"><h3 className="cv2-skill-card__title">Backend &amp; Cloud</h3><div className="cv2-skill-card__pills"><SkillPill icon="nodejs" highlighted>Node.js</SkillPill><SkillPill>REST APIs</SkillPill><SkillPill icon="graphql">GraphQL (AppSync)</SkillPill><SkillPill icon="amazonwebservices" highlighted>AWS Lambda</SkillPill><SkillPill>API Gateway</SkillPill><SkillPill>EventBridge</SkillPill><SkillPill>S3</SkillPill><SkillPill>Serverless</SkillPill></div></div>
              <div className="cv2-skill-card cv2-anim cv2-anim-d6"><h3 className="cv2-skill-card__title">Architecture &amp; Practices</h3><div className="cv2-skill-card__pills"><SkillPill highlighted>Microfrontends</SkillPill><SkillPill highlighted>Module Federation</SkillPill><SkillPill>Responsive Design</SkillPill><SkillPill>Event-Driven Patterns</SkillPill><SkillPill icon="git">Git</SkillPill><SkillPill>Agile/Scrum</SkillPill><SkillPill>SOLID</SkillPill><SkillPill>TDD</SkillPill><SkillPill>Code Reviews</SkillPill><SkillPill>Technical Mentorship</SkillPill></div></div>
            </div>
          </div>
        </section>

        {/* EDUCATION + LANGUAGES: Two-column */}
        <section className="cv2-bottom" id="education">
          <div className="cv2-container">
            <div className="cv2-bottom__grid">
              <div>
                <h2 className="cv2-section-heading">Education</h2>
                <div className="cv2-edu cv2-anim cv2-anim-d1"><div className="cv2-edu__header"><h3 className="cv2-edu__school">Universidad Iberoamericana</h3><span className="cv2-edu__year">2014</span></div><p className="cv2-edu__degree">B.A. | Interactive Design</p><p className="cv2-edu__detail">Speciality in Software Development, Digital Systems, and UX/UI. Foundation in user-centered design and interaction patterns. Mexico City, MX.</p></div>
                <div className="cv2-edu cv2-anim cv2-anim-d2"><div className="cv2-edu__header"><h3 className="cv2-edu__school">Platzi Master Bootcamp</h3><span className="cv2-edu__year">2021</span></div><p className="cv2-edu__degree">Selective Program (Top 1% LATAM)</p><p className="cv2-edu__detail">Completed 100+ advanced courses in computer science, React, Node.js, AWS, algorithms, and distributed systems. Selected as one of the top 1% of the best students of the year 2019.</p></div>
              </div>
              <div>
                <h2 className="cv2-section-heading">Languages</h2>
                <div className="cv2-lang-list cv2-anim cv2-anim-d1">
                  <div className="cv2-lang"><span className="cv2-lang__name">Spanish</span><div className="cv2-lang__bar"><div className="cv2-lang__fill" style={{ width: '100%' }} /></div><span className="cv2-lang__level">Native</span></div>
                  <div className="cv2-lang"><span className="cv2-lang__name">English</span><div className="cv2-lang__bar"><div className="cv2-lang__fill" style={{ width: '90%' }} /></div><span className="cv2-lang__level">Advanced</span></div>
                  <div className="cv2-lang"><span className="cv2-lang__name">Hebrew</span><div className="cv2-lang__bar"><div className="cv2-lang__fill" style={{ width: '55%' }} /></div><span className="cv2-lang__level">Intermediate</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="cv2-cta">
          <div className="cv2-cta__inner">
            <h2 className="cv2-cta__heading">Get the full resume</h2>
            <p className="cv2-cta__sub">Two pages, all the details, ready for your ATS.</p>
            <a href="/david-behar-cv.pdf" download className="cv2-cta__button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download PDF
            </a>
          </div>
        </section>

        <footer className="cv2-footer"><p>&copy; {new Date().getFullYear()} David Behar. Built with Next.js.</p></footer>
      </div>
    </>
  )
}
