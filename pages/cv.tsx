import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Header from '../components/misc/header'
import Footer from '../components/misc/footer'

export default function CVPage() {
  return (
    <>
      <NextSeo
        title="CV"
        description="David Behar Lombrozo - AI-native full-stack engineer with 10+ years of experience. React, TypeScript, AWS, microfrontends, and AI-augmented development."
        canonical="https://behar.io/cv"
        openGraph={{
          title: 'David Behar Lombrozo - CV',
          description:
            'AI-native full-stack engineer with 10+ years of experience building scalable web apps.',
          url: 'https://behar.io/cv',
          type: 'profile',
        }}
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Sora:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="cv-glass">
        {/* Background layers */}
        <div className="cv-glass__bg" aria-hidden="true" />
        <div className="cv-glass__noise" aria-hidden="true" />
        <div className="cv-glass__orb cv-glass__orb--1" aria-hidden="true" />
        <div className="cv-glass__orb cv-glass__orb--2" aria-hidden="true" />
        <div className="cv-glass__orb cv-glass__orb--3" aria-hidden="true" />

        {/* Content */}
        <div className="cv-glass__content">
          <Header />

          {/* =========== HERO =========== */}
          <section className="cv-glass__hero">
            <div className="cv-glass__inner">
              <div className="cv-glass__hero-grid">
                <div className="cv-glass__reveal cv-glass__reveal--d1">
                  <h1 className="cv-glass__name">
                    David
                    <br />
                    Behar
                    <br />
                    Lombrozo
                  </h1>
                  <p className="cv-glass__title">Software Developer</p>
                  <p className="cv-glass__summary">
                    AI-native full-stack engineer with 10+ years of experience.
                    Drove Webpack Module Federation migration reducing bundle
                    size by ~70% and page load times by ~35% across 3 React apps
                    serving 500+ users. Specializes in scalable
                    React/TypeScript architecture, CI/CD optimization, and Core
                    Web Vitals.
                  </p>
                </div>
                <div className="cv-glass__reveal cv-glass__reveal--d2">
                  <div className="cv-glass__contact cv-glass-card">
                    <div className="cv-glass__contact-item">
                      Mexico City, MX
                    </div>
                    <div className="cv-glass__contact-item">
                      +52 55 1698 8310
                    </div>
                    <div className="cv-glass__contact-item">
                      <a href="mailto:davbelom@gmail.com">
                        davbelom@gmail.com
                      </a>
                    </div>
                    <div className="cv-glass__contact-item">
                      <a
                        href="https://linkedin.com/in/davidbehar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/davidbehar
                      </a>
                    </div>
                    <div className="cv-glass__contact-item">
                      <a
                        href="https://github.com/behagoras"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/behagoras
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========== METRICS =========== */}
          <section className="cv-glass__metrics cv-glass__reveal cv-glass__reveal--d3">
            <div className="cv-glass__inner">
              <div className="cv-glass__metrics-grid">
                <div className="cv-glass__metric cv-glass-card">
                  <div className="cv-glass__metric-number">~70%</div>
                  <div className="cv-glass__metric-label">
                    Bundle Size Reduction
                  </div>
                </div>
                <div className="cv-glass__metric cv-glass-card">
                  <div className="cv-glass__metric-number">500+</div>
                  <div className="cv-glass__metric-label">Users Served</div>
                </div>
                <div className="cv-glass__metric cv-glass-card">
                  <div className="cv-glass__metric-number">15+</div>
                  <div className="cv-glass__metric-label">Microfrontends</div>
                </div>
                <div className="cv-glass__metric cv-glass-card">
                  <div className="cv-glass__metric-number">75+</div>
                  <div className="cv-glass__metric-label">
                    Lambda Functions
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========== EXPERIENCE =========== */}
          <div className="cv-glass__inner">
            <section className="cv-glass__section cv-glass__reveal cv-glass__reveal--d4">
              <div className="cv-glass__section-header">
                <div className="cv-glass__section-label">Career</div>
                <h2 className="cv-glass__section-title">
                  Relevant Experience
                </h2>
              </div>

              <div className="cv-glass__exp-stack">
                {/* Autodesk */}
                <div className="cv-glass__exp-card cv-glass-card cv-glass__exp-card--autodesk">
                  <div className="cv-glass__exp-header">
                    <div>
                      <h3 className="cv-glass__exp-company">Autodesk</h3>
                      <div className="cv-glass__exp-role">
                        Full Stack Engineer | Team Lead | Platform
                      </div>
                    </div>
                    <div className="cv-glass__exp-meta">
                      Nov 2019 &ndash; Present &middot; Mexico City, MX
                    </div>
                  </div>
                  <ul className="cv-glass__exp-bullets">
                    <li>
                      Developed and maintained 3 large-scale React applications
                      comprising 15+ microfrontends and 7 shared libraries
                      (real-time water telemetry, CCTV, asset management, pipe
                      analytics) supporting 500+ users, establishing front-end
                      architecture patterns utilized by 70+ engineers across 3
                      time zones.
                    </li>
                    <li>
                      Directed migration to Webpack Module Federation,
                      decomposing a ~4MB monolithic bundle into 20+
                      independently deployable modules with on-demand
                      route-based loading. Diminished initial bundle size by
                      ~70% and improved page load times by ~35%.
                    </li>
                    <li>
                      Built end-to-end serverless upload/download workflows
                      with compliance validation steps using AWS Lambda, API
                      Gateway, and EventBridge, while maintaining 75+ Lambda
                      functions across 15+ microservice backends.
                    </li>
                    <li>
                      Created 5+ internal packages (auth SDKs, telemetry
                      modules, common UI components) adopted across 5+ teams,
                      shortening developer onboarding from ~2 months to ~2
                      weeks and reducing AWS authentication setup time by 50%.
                    </li>
                    <li>
                      Led and mentored a team of 4 engineers, ran architecture
                      and code reviews, and instituted CI/CD improvements
                      (incremental builds, pipeline parallelization,
                      independent MFE releases) that reduced build times by
                      50% and cut deployment pipelines from 12+ to ~5 per
                      shared component change.
                    </li>
                    <li>
                      Adopted Claude Code as a daily engineering tool for
                      AI-augmented architecture design, code generation,
                      refactoring, and testing, using multi-agent
                      orchestration across the platform&apos;s microfrontend
                      ecosystem.
                    </li>
                  </ul>
                </div>

                {/* Inline pull quote */}
                <div className="cv-glass__inline-quote">
                  <div className="cv-glass__inline-quote-stat">~35%</div>
                  <div className="cv-glass__inline-quote-text">
                    Faster page load times after migrating from a monolithic
                    ~4MB bundle to 20+ independently deployable modules with
                    route-based loading.
                  </div>
                </div>

                {/* Social Piper */}
                <div className="cv-glass__exp-card cv-glass-card cv-glass__exp-card--social-piper">
                  <div className="cv-glass__exp-header">
                    <div>
                      <h3 className="cv-glass__exp-company">Social Piper</h3>
                      <div className="cv-glass__exp-role">
                        Senior Front-End Developer
                      </div>
                    </div>
                    <div className="cv-glass__exp-meta">
                      Jan 2019 &ndash; Nov 2019 &middot; Mexico City, MX
                    </div>
                  </div>
                  <ul className="cv-glass__exp-bullets">
                    <li>
                      Led Vue-to-React migration and developed a TypeScript
                      component library with Storybook supporting Desktop and
                      Mobile Web; integrated frontend with backend APIs to cut
                      feature delivery time by 25%.
                    </li>
                    <li>
                      Improved Core Web Vitals 30-50% through performance
                      audits, code splitting, image optimization, and render
                      optimization strategies.
                    </li>
                    <li>
                      Enhanced accessibility of a 30+ collaborative component
                      library (Storybook) with semantic HTML and ARIA
                      attributes, adopted by at least 30+ engineers across 3
                      apps and 15+ microfrontends.
                    </li>
                  </ul>
                </div>

                {/* Qubit Works */}
                <div className="cv-glass__exp-card cv-glass-card cv-glass__exp-card--qubit">
                  <div className="cv-glass__exp-header">
                    <div>
                      <h3 className="cv-glass__exp-company">Qubit Works</h3>
                      <div className="cv-glass__exp-role">
                        Head of Operations / Lead Engineer
                      </div>
                    </div>
                    <div className="cv-glass__exp-meta">
                      Jan 2015 &ndash; Dec 2018 &middot; Mexico City, MX
                    </div>
                  </div>
                  <ul className="cv-glass__exp-bullets">
                    <li>
                      Managed 20+ client projects across web and mobile
                      platforms, architecting React frontends, Node.js
                      backends, and e-commerce solutions while growing the
                      engineering team from 2 to 10+ members and establishing
                      Agile practices, code review culture, and technical
                      training programs.
                    </li>
                    <li>
                      Translated 50+ ambiguous client requirements into
                      MVP-first release plans with incremental iterations,
                      delivering projects with cross-functional teams of 3-5
                      and improving delivery consistency across the agency.
                    </li>
                  </ul>
                </div>

                {/* Farmaldea */}
                <div className="cv-glass__exp-card cv-glass-card cv-glass__exp-card--farmaldea">
                  <div className="cv-glass__exp-header">
                    <div>
                      <h3 className="cv-glass__exp-company">Farmaldea</h3>
                      <div className="cv-glass__exp-role">
                        Head of Technology
                      </div>
                    </div>
                    <div className="cv-glass__exp-meta">
                      Jan 2014 &ndash; Dec 2016 &middot; Mexico City, MX
                    </div>
                  </div>
                  <ul className="cv-glass__exp-bullets">
                    <li>
                      Architected from scratch a digital pharmacy aggregator
                      with point-of-sale capabilities, enabling users to
                      search and purchase medications across 500+ pharmacies
                      through a unified platform.
                    </li>
                    <li>
                      Built a REST API integration with GTN&apos;s appointment
                      platform, enabling automated order creation from their
                      scheduling system and periodic inventory synchronization
                      across the pharmacy network.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* =========== FULL-WIDTH PULL QUOTE =========== */}
          <div className="cv-glass__pullquote cv-glass__reveal cv-glass__reveal--d5">
            <div className="cv-glass__inner">
              <div className="cv-glass__pullquote-card cv-glass-card">
                <div className="cv-glass__pullquote-stat">50%</div>
                <div className="cv-glass__pullquote-body">
                  <div className="cv-glass__pullquote-text">
                    Reduction in build times through CI/CD improvements
                    including incremental builds, pipeline parallelization, and
                    independent microfrontend releases.
                  </div>
                  <div className="cv-glass__pullquote-source">
                    Autodesk Platform Team
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========== SKILLS =========== */}
          <div className="cv-glass__inner">
            <section className="cv-glass__section cv-glass__reveal cv-glass__reveal--d6">
              <div className="cv-glass__section-header">
                <div className="cv-glass__section-label">Expertise</div>
                <h2 className="cv-glass__section-title">Technical Skills</h2>
              </div>

              <div className="cv-glass__skills-grid">
                <div className="cv-glass__skill-group cv-glass-card">
                  <div className="cv-glass__skill-group-name">
                    Core Web Technologies
                  </div>
                  <div className="cv-glass__skill-tags">
                    <span className="cv-glass__skill-pill">TypeScript</span>
                    <span className="cv-glass__skill-pill">
                      JavaScript (ES6+)
                    </span>
                    <span className="cv-glass__skill-pill">React</span>
                    <span className="cv-glass__skill-pill">Redux</span>
                    <span className="cv-glass__skill-pill">HTML5</span>
                    <span className="cv-glass__skill-pill">CSS3</span>
                    <span className="cv-glass__skill-pill">
                      styled-components
                    </span>
                    <span className="cv-glass__skill-pill">
                      State Management
                    </span>
                  </div>
                </div>

                <div className="cv-glass__skill-group cv-glass-card">
                  <div className="cv-glass__skill-group-name">
                    AI-Augmented Development
                  </div>
                  <div className="cv-glass__skill-tags">
                    <span className="cv-glass__skill-pill">Claude Code</span>
                    <span className="cv-glass__skill-pill">OpenAI Codex</span>
                    <span className="cv-glass__skill-pill">
                      Open Claw Automations
                    </span>
                    <span className="cv-glass__skill-pill">
                      AI-assisted Refactoring
                    </span>
                    <span className="cv-glass__skill-pill">
                      Context Engineering
                    </span>
                    <span className="cv-glass__skill-pill">
                      Multi-agent Orchestration
                    </span>
                  </div>
                </div>

                <div className="cv-glass__skill-group cv-glass-card">
                  <div className="cv-glass__skill-group-name">Performance</div>
                  <div className="cv-glass__skill-tags">
                    <span className="cv-glass__skill-pill">
                      Core Web Vitals
                    </span>
                    <span className="cv-glass__skill-pill">Lighthouse CI</span>
                    <span className="cv-glass__skill-pill">
                      Code Splitting
                    </span>
                    <span className="cv-glass__skill-pill">Lazy Loading</span>
                    <span className="cv-glass__skill-pill">PWA</span>
                    <span className="cv-glass__skill-pill">
                      Bundle Optimization
                    </span>
                    <span className="cv-glass__skill-pill">
                      Caching Strategies
                    </span>
                  </div>
                </div>

                <div className="cv-glass__skill-group cv-glass-card">
                  <div className="cv-glass__skill-group-name">
                    Build & Testing
                  </div>
                  <div className="cv-glass__skill-tags">
                    <span className="cv-glass__skill-pill">Webpack</span>
                    <span className="cv-glass__skill-pill">Jest</span>
                    <span className="cv-glass__skill-pill">Cypress (E2E)</span>
                    <span className="cv-glass__skill-pill">Vitest</span>
                    <span className="cv-glass__skill-pill">Storybook</span>
                    <span className="cv-glass__skill-pill">CI/CD</span>
                    <span className="cv-glass__skill-pill">Jenkins</span>
                    <span className="cv-glass__skill-pill">Azure DevOps</span>
                  </div>
                </div>

                <div className="cv-glass__skill-group cv-glass-card">
                  <div className="cv-glass__skill-group-name">
                    Backend & Cloud
                  </div>
                  <div className="cv-glass__skill-tags">
                    <span className="cv-glass__skill-pill">Node.js</span>
                    <span className="cv-glass__skill-pill">REST APIs</span>
                    <span className="cv-glass__skill-pill">
                      GraphQL (AppSync)
                    </span>
                    <span className="cv-glass__skill-pill">AWS Lambda</span>
                    <span className="cv-glass__skill-pill">API Gateway</span>
                    <span className="cv-glass__skill-pill">EventBridge</span>
                    <span className="cv-glass__skill-pill">S3</span>
                    <span className="cv-glass__skill-pill">Serverless</span>
                  </div>
                </div>

                <div className="cv-glass__skill-group cv-glass-card">
                  <div className="cv-glass__skill-group-name">
                    Architecture & Practices
                  </div>
                  <div className="cv-glass__skill-tags">
                    <span className="cv-glass__skill-pill">
                      Microfrontends
                    </span>
                    <span className="cv-glass__skill-pill">
                      Module Federation
                    </span>
                    <span className="cv-glass__skill-pill">Event-Driven</span>
                    <span className="cv-glass__skill-pill">Agile/Scrum</span>
                    <span className="cv-glass__skill-pill">TDD</span>
                    <span className="cv-glass__skill-pill">SOLID</span>
                    <span className="cv-glass__skill-pill">Code Reviews</span>
                    <span className="cv-glass__skill-pill">
                      Technical Mentorship
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* =========== EDUCATION =========== */}
            <section className="cv-glass__section cv-glass__reveal cv-glass__reveal--d7">
              <div className="cv-glass__section-header">
                <div className="cv-glass__section-label">Background</div>
                <h2 className="cv-glass__section-title">Education</h2>
              </div>

              <div className="cv-glass__edu-grid">
                <div className="cv-glass__edu-card cv-glass-card">
                  <div className="cv-glass__edu-year">2014</div>
                  <div className="cv-glass__edu-school">
                    Universidad Iberoamericana
                  </div>
                  <div className="cv-glass__edu-degree">
                    B.A. in Interactive Design
                  </div>
                  <div className="cv-glass__edu-desc">
                    Speciality in Software Development, Digital Systems, and
                    UX/UI. Foundation in user-centered design and interaction
                    patterns. Mexico City, MX.
                  </div>
                </div>
                <div className="cv-glass__edu-card cv-glass-card">
                  <div className="cv-glass__edu-year">2021</div>
                  <div className="cv-glass__edu-school">
                    Platzi Master Bootcamp
                  </div>
                  <div className="cv-glass__edu-degree">
                    Selective Program (Top 1% LATAM)
                  </div>
                  <div className="cv-glass__edu-desc">
                    Completed 100+ advanced courses in computer science, React,
                    Node.js, AWS, algorithms, and distributed systems. Selected
                    as one of the top 1% of the best students of 2019.
                  </div>
                </div>
              </div>
            </section>

            {/* =========== LANGUAGES =========== */}
            <section className="cv-glass__section cv-glass__reveal cv-glass__reveal--d7">
              <div className="cv-glass__section-header">
                <div className="cv-glass__section-label">Communication</div>
                <h2 className="cv-glass__section-title">Languages</h2>
              </div>

              <div className="cv-glass__languages">
                <div className="cv-glass__lang cv-glass-card">
                  <div className="cv-glass__lang-name">Spanish</div>
                  <div className="cv-glass__lang-level">Native</div>
                </div>
                <div className="cv-glass__lang cv-glass-card">
                  <div className="cv-glass__lang-name">English</div>
                  <div className="cv-glass__lang-level">Advanced</div>
                </div>
                <div className="cv-glass__lang cv-glass-card">
                  <div className="cv-glass__lang-name">Hebrew</div>
                  <div className="cv-glass__lang-level">Intermediate</div>
                </div>
              </div>
            </section>
          </div>

          {/* =========== DOWNLOAD CTA =========== */}
          <div className="cv-glass__cta cv-glass__reveal cv-glass__reveal--d8">
            <div className="cv-glass__inner">
              <div className="cv-glass__cta-card cv-glass-card">
                <span className="cv-glass__cta-text">Get the full resume</span>
                <a
                  href="/david-behar-cv.pdf"
                  download="David Behar Lombrozo - CV.pdf"
                  className="cv-glass__cta-btn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="cv-glass__footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
