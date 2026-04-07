import Layout from '../components/misc/layout'
import { NextSeo } from 'next-seo'

/* ------------------------------------------------------------------ */
/*  CV Page - Research-optimized for recruiter conversion              */
/*  Design: Stripe-docs warmth, 6-second scan hierarchy,              */
/*  progressive disclosure, quantified achievements above the fold    */
/* ------------------------------------------------------------------ */

const CV = () => {
  return (
    <>
      <NextSeo
        title="CV"
        description="David Behar Lombrozo - AI-native Full-Stack Engineer with 10+ years of experience. React, TypeScript, Node.js, AWS, Microfrontends."
        canonical="https://behar.io/cv"
        openGraph={{
          title: 'CV | David Behar',
          description: 'AI-native Full-Stack Engineer with 10+ years of experience. React, TypeScript, Node.js, AWS, Microfrontends.',
          url: 'https://behar.io/cv',
          type: 'profile',
        }}
      />
      <Layout>
        <div className="cv-page">
          {/* ---- HERO: Above the fold, 5-second pitch ---- */}
          <section className="cv-hero">
            <div className="cv-hero__inner">
              <h1 className="cv-hero__name">David Behar Lombrozo</h1>
              <p className="cv-hero__title">Full-Stack Engineer &amp; Team Lead</p>
              <p className="cv-hero__subtitle">
                AI-native engineer with 10+ years of experience building scalable React/TypeScript platforms,
                leading teams, and driving measurable performance gains across enterprise applications.
              </p>

              {/* Key metrics - the hook */}
              <div className="cv-metrics">
                <div className="cv-metric">
                  <span className="cv-metric__number">~70%</span>
                  <span className="cv-metric__label">Bundle size reduction</span>
                </div>
                <div className="cv-metric">
                  <span className="cv-metric__number">~35%</span>
                  <span className="cv-metric__label">Faster page loads</span>
                </div>
                <div className="cv-metric">
                  <span className="cv-metric__number">500+</span>
                  <span className="cv-metric__label">Users served</span>
                </div>
                <div className="cv-metric">
                  <span className="cv-metric__number">70+</span>
                  <span className="cv-metric__label">Engineers on platform</span>
                </div>
              </div>

              {/* Contact bar */}
              <div className="cv-contact">
                <span>Mexico City, MX</span>
                <span className="cv-contact__sep" aria-hidden="true">|</span>
                <a href="mailto:davbelom@gmail.com">davbelom@gmail.com</a>
                <span className="cv-contact__sep" aria-hidden="true">|</span>
                <a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className="cv-contact__sep" aria-hidden="true">|</span>
                <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

              {/* Download CTA */}
              <a href="/david-behar-cv.pdf" download className="cv-download">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 1v10M8 11L4 7M8 11l4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download PDF
              </a>
            </div>
          </section>

          {/* ---- EXPERIENCE ---- */}
          <section className="cv-section">
            <h2 className="cv-section__heading">Experience</h2>

            {/* Autodesk */}
            <article className="cv-job">
              <div className="cv-job__header">
                <div>
                  <h3 className="cv-job__company">Autodesk</h3>
                  <p className="cv-job__role">Full Stack Engineer | Team Lead | Platform</p>
                </div>
                <div className="cv-job__meta">
                  <span className="cv-job__location">Mexico City, MX</span>
                  <span className="cv-job__dates">Nov 2019 - Present</span>
                </div>
              </div>
              <ul className="cv-job__highlights">
                <li>
                  Developed and maintained <strong>3 large-scale React apps</strong> comprising 15+ microfrontends
                  and 7 shared libraries (real-time water telemetry, CCTV, asset management, pipe analytics)
                  supporting <strong>500+ users</strong>, establishing front-end architecture patterns utilized by
                  <strong> 70+ engineers across 3 time zones</strong>.
                </li>
                <li>
                  Directed migration to <strong>Webpack Module Federation</strong>, decomposing a ~4MB monolithic
                  bundle into 20+ independently deployable modules (~15 MFEs, 3 shell apps, 7 collective libraries)
                  with on-demand route-based loading. Reduced initial bundle size by <strong>~70%</strong> and improved
                  page load times by <strong>~35%</strong>.
                </li>
              </ul>
              <details className="cv-details">
                <summary>More details</summary>
                <ul className="cv-job__highlights">
                  <li>
                    Built end-to-end serverless upload/download workflows with compliance validation using
                    <strong> AWS Lambda, API Gateway, and EventBridge</strong>, while maintaining 75+ Lambda functions
                    across 15+ microservice backends.
                  </li>
                  <li>
                    Created <strong>5+ internal packages</strong> (auth SDKs, telemetry modules, common UI components)
                    adopted across 5+ teams, shortening developer onboarding from ~2 months to ~2 weeks and reducing
                    AWS authentication setup time by <strong>50%</strong>.
                  </li>
                  <li>
                    Led and mentored a team of <strong>4 engineers</strong>, ran architecture and code reviews, and
                    instituted CI/CD improvements (incremental builds, pipeline parallelization, independent MFE releases)
                    that reduced build times by <strong>50%</strong> and cut deployment pipelines from 12+ to ~5 per
                    shared component change.
                  </li>
                  <li>
                    Adopted <strong>Claude Code</strong> as a daily engineering tool for AI-augmented architecture design,
                    code generation, refactoring, and testing, using multi-agent orchestration across the platform&apos;s
                    microfrontend ecosystem.
                  </li>
                </ul>
              </details>
            </article>

            {/* Social Piper */}
            <article className="cv-job">
              <div className="cv-job__header">
                <div>
                  <h3 className="cv-job__company">Social Piper</h3>
                  <p className="cv-job__role">Senior Front-End Developer</p>
                </div>
                <div className="cv-job__meta">
                  <span className="cv-job__location">Mexico City, MX</span>
                  <span className="cv-job__dates">Jan 2019 - Nov 2019</span>
                </div>
              </div>
              <ul className="cv-job__highlights">
                <li>
                  Led <strong>Vue to React migration</strong> and developed a TypeScript component library with
                  Storybook supporting Desktop and Mobile Web; integrated frontend with backend APIs to cut
                  feature delivery time by <strong>25%</strong>.
                </li>
                <li>
                  Improved <strong>Core Web Vitals 30-50%</strong> through performance audits, code splitting,
                  image optimization, and render optimization strategies.
                </li>
              </ul>
              <details className="cv-details">
                <summary>More details</summary>
                <ul className="cv-job__highlights">
                  <li>
                    Enhanced accessibility of a <strong>30+ collaborative component library</strong> (Storybook) with
                    semantic HTML and ARIA attributes, adopted by 30+ engineers across 3 apps and 15+ microfrontends.
                  </li>
                </ul>
              </details>
            </article>

            {/* Qubit Works */}
            <article className="cv-job">
              <div className="cv-job__header">
                <div>
                  <h3 className="cv-job__company">Qubit Works</h3>
                  <p className="cv-job__role">Head of Operations / Lead Engineer</p>
                </div>
                <div className="cv-job__meta">
                  <span className="cv-job__location">Mexico City, MX</span>
                  <span className="cv-job__dates">Jan 2015 - Dec 2018</span>
                </div>
              </div>
              <ul className="cv-job__highlights">
                <li>
                  Managed <strong>20+ client projects</strong> across web and mobile platforms, architecting React
                  frontends, Node.js backends, and e-commerce solutions while growing the engineering team from
                  2 to <strong>10+ members</strong> and establishing Agile practices and code review culture.
                </li>
                <li>
                  Translated <strong>50+ ambiguous client requirements</strong> into MVP-first release plans with
                  incremental iterations, delivering projects with cross-functional teams of 3-5.
                </li>
              </ul>
            </article>

            {/* Farmaldea */}
            <article className="cv-job">
              <div className="cv-job__header">
                <div>
                  <h3 className="cv-job__company">Farmaldea</h3>
                  <p className="cv-job__role">Head of Technology</p>
                </div>
                <div className="cv-job__meta">
                  <span className="cv-job__location">Mexico City, MX</span>
                  <span className="cv-job__dates">Jan 2014 - Dec 2016</span>
                </div>
              </div>
              <ul className="cv-job__highlights">
                <li>
                  Architected from scratch a <strong>digital pharmacy aggregator</strong> with point-of-sale capabilities,
                  enabling users to search and purchase medications across <strong>500+ pharmacies</strong> through a
                  unified platform.
                </li>
                <li>
                  Built a REST API integration with GTN&apos;s appointment platform, enabling automated order creation
                  and periodic inventory synchronization across the pharmacy network.
                </li>
              </ul>
            </article>
          </section>

          {/* ---- SKILLS ---- */}
          <section className="cv-section">
            <h2 className="cv-section__heading">Technical Skills</h2>
            <div className="cv-skills">
              <div className="cv-skill-group">
                <h3 className="cv-skill-group__title">Core Web</h3>
                <div className="cv-skill-tags">
                  <span>TypeScript</span>
                  <span>JavaScript (ES6+)</span>
                  <span>React</span>
                  <span>Redux</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>CSS-in-JS</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h3 className="cv-skill-group__title">AI-Augmented Dev</h3>
                <div className="cv-skill-tags">
                  <span>Claude Code</span>
                  <span>OpenAI Codex</span>
                  <span>Multi-agent orchestration</span>
                  <span>Context engineering</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h3 className="cv-skill-group__title">Performance</h3>
                <div className="cv-skill-tags">
                  <span>Core Web Vitals</span>
                  <span>Lighthouse CI</span>
                  <span>Code splitting</span>
                  <span>Lazy loading</span>
                  <span>PWA</span>
                  <span>Bundle optimization</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h3 className="cv-skill-group__title">Build & Testing</h3>
                <div className="cv-skill-tags">
                  <span>Webpack</span>
                  <span>Jest</span>
                  <span>Cypress</span>
                  <span>Vitest</span>
                  <span>Storybook</span>
                  <span>CI/CD</span>
                  <span>Jenkins</span>
                  <span>Azure DevOps</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h3 className="cv-skill-group__title">Backend & Cloud</h3>
                <div className="cv-skill-tags">
                  <span>Node.js</span>
                  <span>REST APIs</span>
                  <span>GraphQL (AppSync)</span>
                  <span>AWS Lambda</span>
                  <span>API Gateway</span>
                  <span>EventBridge</span>
                  <span>S3</span>
                  <span>Serverless</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h3 className="cv-skill-group__title">Architecture</h3>
                <div className="cv-skill-tags">
                  <span>Microfrontends</span>
                  <span>Module Federation</span>
                  <span>Responsive Design</span>
                  <span>Event-Driven Patterns</span>
                  <span>DX</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h3 className="cv-skill-group__title">Practices</h3>
                <div className="cv-skill-tags">
                  <span>Git</span>
                  <span>Agile/Scrum</span>
                  <span>OOP</span>
                  <span>SOLID</span>
                  <span>TDD</span>
                  <span>Code reviews</span>
                  <span>Technical Mentorship</span>
                </div>
              </div>
            </div>
          </section>

          {/* ---- EDUCATION ---- */}
          <section className="cv-section">
            <h2 className="cv-section__heading">Education</h2>

            <article className="cv-edu">
              <div className="cv-edu__header">
                <div>
                  <h3 className="cv-edu__school">Universidad Iberoamericana</h3>
                  <p className="cv-edu__degree">B.A. | Interactive Design</p>
                </div>
                <span className="cv-edu__year">2014</span>
              </div>
              <p className="cv-edu__detail">
                Speciality in Software Development, Digital Systems, and UX/UI. Foundation in user-centered
                design and interaction patterns. Mexico City, MX.
              </p>
            </article>

            <article className="cv-edu">
              <div className="cv-edu__header">
                <div>
                  <h3 className="cv-edu__school">Platzi Master Bootcamp</h3>
                  <p className="cv-edu__degree">Selective Program (Top 1% LATAM)</p>
                </div>
                <span className="cv-edu__year">2021</span>
              </div>
              <p className="cv-edu__detail">
                Completed 100+ advanced courses in computer science, React, Node.js, AWS, algorithms, and
                distributed systems. Selected as one of the top 1% of students of the year 2019.
              </p>
            </article>
          </section>

          {/* ---- LANGUAGES ---- */}
          <section className="cv-section cv-section--last">
            <h2 className="cv-section__heading">Languages</h2>
            <div className="cv-languages">
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
          </section>

          {/* Bottom download CTA */}
          <div className="cv-bottom-cta">
            <a href="/david-behar-cv.pdf" download className="cv-download">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 1v10M8 11L4 7M8 11l4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CV
