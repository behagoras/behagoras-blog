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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="cv-magazine flex flex-col min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-200">
        <Header />

        {/* HERO */}
        <section className="cv-hero">
          <div className="cv-hero-inner">
            <div>
              <h1 className="cv-hero-name">
                David<br />Behar<br />Lombrozo
              </h1>
              <p className="cv-hero-title">Software Developer</p>
              <p className="cv-hero-summary">
                AI-native full-stack engineer with 10+ years of experience.
                Drove Webpack Module Federation migration reducing bundle size
                by ~70% and page load times by ~35% across 3 React apps serving
                500+ users. Specializes in scalable React/TypeScript
                architecture, CI/CD optimization, and Core Web Vitals.
              </p>
            </div>
            <div className="cv-hero-contact">
              <div>Mexico City, MX</div>
              <div>+52 55 1698 8310</div>
              <div><a href="mailto:davbelom@gmail.com">davbelom@gmail.com</a></div>
              <div><a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer">linkedin.com/in/davidbehar</a></div>
              <div><a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer">github.com/behagoras</a></div>
            </div>
          </div>
        </section>

        {/* METRICS BAND */}
        <section className="cv-metrics-band">
          <div className="cv-metrics-inner">
            <div className="cv-metric">
              <div className="cv-metric-number">~70%</div>
              <div className="cv-metric-label">Bundle Size Reduction</div>
            </div>
            <div className="cv-metric">
              <div className="cv-metric-number">500+</div>
              <div className="cv-metric-label">Users Served</div>
            </div>
            <div className="cv-metric">
              <div className="cv-metric-number">15+</div>
              <div className="cv-metric-label">Microfrontends</div>
            </div>
            <div className="cv-metric">
              <div className="cv-metric-number">75+</div>
              <div className="cv-metric-label">Lambda Functions</div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <div className="cv-content">
          <section className="cv-section">
            <div className="cv-section-header">
              <div className="cv-section-label">Career</div>
              <h2 className="cv-section-title">Relevant Experience</h2>
            </div>

            <div className="cv-experience-entry">
              <div className="cv-exp-sidebar">
                <h3 className="cv-exp-company">Autodesk</h3>
                <div className="cv-exp-role">Full Stack Engineer | Team Lead | Platform</div>
                <div className="cv-exp-meta">Nov 2019 &ndash; Present &middot; Mexico City, MX</div>
              </div>
              <div className="cv-exp-main">
                <ul>
                  <li>Developed and maintained 3 large-scale React applications comprising 15+ microfrontends and 7 shared libraries (real-time water telemetry, CCTV, asset management, pipe analytics) supporting 500+ users, establishing front-end architecture patterns utilized by 70+ engineers across 3 time zones.</li>
                  <li>Directed migration to Webpack Module Federation, decomposing a ~4MB monolithic bundle into 20+ independently deployable modules with on-demand route-based loading. Diminished initial bundle size by ~70% and improved page load times by ~35%.</li>
                  <li>Built end-to-end serverless upload/download workflows with compliance validation steps using AWS Lambda, API Gateway, and EventBridge, while maintaining 75+ Lambda functions across 15+ microservice backends.</li>
                  <li>Created 5+ internal packages (auth SDKs, telemetry modules, common UI components) adopted across 5+ teams, shortening developer onboarding from ~2 months to ~2 weeks and reducing AWS authentication setup time by 50%.</li>
                  <li>Led and mentored a team of 4 engineers, ran architecture and code reviews, and instituted CI/CD improvements (incremental builds, pipeline parallelization, independent MFE releases) that reduced build times by 50% and cut deployment pipelines from 12+ to ~5 per shared component change.</li>
                  <li>Adopted Claude Code as a daily engineering tool for AI-augmented architecture design, code generation, refactoring, and testing, using multi-agent orchestration across the platform&apos;s microfrontend ecosystem.</li>
                </ul>
              </div>
            </div>

            <div className="cv-pull-quote-alt">
              <div className="cv-pull-quote-stat">~35%</div>
              <div className="cv-pull-quote-text">
                Faster page load times after migrating from a monolithic ~4MB bundle to 20+ independently deployable modules with route-based loading.
              </div>
            </div>

            <div className="cv-experience-entry">
              <div className="cv-exp-sidebar">
                <h3 className="cv-exp-company">Social Piper</h3>
                <div className="cv-exp-role">Senior Front-End Developer</div>
                <div className="cv-exp-meta">Jan 2019 &ndash; Nov 2019 &middot; Mexico City, MX</div>
              </div>
              <div className="cv-exp-main">
                <ul>
                  <li>Led Vue-to-React migration and developed a TypeScript component library with Storybook supporting Desktop and Mobile Web; integrated frontend with backend APIs to cut feature delivery time by 25%.</li>
                  <li>Improved Core Web Vitals 30-50% through performance audits, code splitting, image optimization, and render optimization strategies.</li>
                  <li>Enhanced accessibility of a 30+ collaborative component library (Storybook) with semantic HTML and ARIA attributes, adopted by at least 30+ engineers across 3 apps and 15+ microfrontends.</li>
                </ul>
              </div>
            </div>

            <div className="cv-experience-entry">
              <div className="cv-exp-sidebar">
                <h3 className="cv-exp-company">Qubit Works</h3>
                <div className="cv-exp-role">Head of Operations / Lead Engineer</div>
                <div className="cv-exp-meta">Jan 2015 &ndash; Dec 2018 &middot; Mexico City, MX</div>
              </div>
              <div className="cv-exp-main">
                <ul>
                  <li>Managed 20+ client projects across web and mobile platforms, architecting React frontends, Node.js backends, and e-commerce solutions while growing the engineering team from 2 to 10+ members and establishing Agile practices, code review culture, and technical training programs.</li>
                  <li>Translated 50+ ambiguous client requirements into MVP-first release plans with incremental iterations, delivering projects with cross-functional teams of 3-5 and improving delivery consistency across the agency.</li>
                </ul>
              </div>
            </div>

            <div className="cv-experience-entry">
              <div className="cv-exp-sidebar">
                <h3 className="cv-exp-company">Farmaldea</h3>
                <div className="cv-exp-role">Head of Technology</div>
                <div className="cv-exp-meta">Jan 2014 &ndash; Dec 2016 &middot; Mexico City, MX</div>
              </div>
              <div className="cv-exp-main">
                <ul>
                  <li>Architected from scratch a digital pharmacy aggregator with point-of-sale capabilities, enabling users to search and purchase medications across 500+ pharmacies through a unified platform.</li>
                  <li>Built a REST API integration with GTN&apos;s appointment platform, enabling automated order creation from their scheduling system and periodic inventory synchronization across the pharmacy network.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* FULL-WIDTH PULL QUOTE BAND */}
        <section className="cv-pull-quote">
          <div className="cv-pull-quote-inner">
            <div className="cv-pull-quote-stat">50%</div>
            <div>
              <div className="cv-pull-quote-text">
                Reduction in build times through CI/CD improvements including incremental builds, pipeline parallelization, and independent microfrontend releases.
              </div>
              <div className="cv-pull-quote-source">Autodesk Platform Team</div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <div className="cv-content">
          <section className="cv-section">
            <div className="cv-section-header">
              <div className="cv-section-label">Expertise</div>
              <h2 className="cv-section-title">Technical Skills</h2>
            </div>
            <div className="cv-skills-grid">
              <div className="cv-skill-category">
                <div className="cv-skill-category-name">Core Web Technologies</div>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">TypeScript</span>
                  <span className="cv-skill-tag">JavaScript (ES6+)</span>
                  <span className="cv-skill-tag">React</span>
                  <span className="cv-skill-tag">Redux</span>
                  <span className="cv-skill-tag">HTML5</span>
                  <span className="cv-skill-tag">CSS3</span>
                  <span className="cv-skill-tag">styled-components</span>
                  <span className="cv-skill-tag">State Management</span>
                </div>
              </div>
              <div className="cv-skill-category">
                <div className="cv-skill-category-name">AI-Augmented Development</div>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Claude Code</span>
                  <span className="cv-skill-tag">OpenAI Codex</span>
                  <span className="cv-skill-tag">Open Claw Automations</span>
                  <span className="cv-skill-tag">AI-assisted Refactoring</span>
                  <span className="cv-skill-tag">Context Engineering</span>
                  <span className="cv-skill-tag">Multi-agent Orchestration</span>
                </div>
              </div>
              <div className="cv-skill-category">
                <div className="cv-skill-category-name">Performance</div>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Core Web Vitals</span>
                  <span className="cv-skill-tag">Lighthouse CI</span>
                  <span className="cv-skill-tag">Code Splitting</span>
                  <span className="cv-skill-tag">Lazy Loading</span>
                  <span className="cv-skill-tag">PWA</span>
                  <span className="cv-skill-tag">Bundle Optimization</span>
                  <span className="cv-skill-tag">Caching Strategies</span>
                </div>
              </div>
              <div className="cv-skill-category">
                <div className="cv-skill-category-name">Build &amp; Testing</div>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Webpack</span>
                  <span className="cv-skill-tag">Jest</span>
                  <span className="cv-skill-tag">Cypress (E2E)</span>
                  <span className="cv-skill-tag">Vitest</span>
                  <span className="cv-skill-tag">Storybook</span>
                  <span className="cv-skill-tag">CI/CD</span>
                  <span className="cv-skill-tag">Jenkins</span>
                  <span className="cv-skill-tag">Azure DevOps</span>
                </div>
              </div>
              <div className="cv-skill-category">
                <div className="cv-skill-category-name">Backend &amp; Cloud</div>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Node.js</span>
                  <span className="cv-skill-tag">REST APIs</span>
                  <span className="cv-skill-tag">GraphQL (AppSync)</span>
                  <span className="cv-skill-tag">AWS Lambda</span>
                  <span className="cv-skill-tag">API Gateway</span>
                  <span className="cv-skill-tag">EventBridge</span>
                  <span className="cv-skill-tag">S3</span>
                  <span className="cv-skill-tag">Serverless</span>
                </div>
              </div>
              <div className="cv-skill-category">
                <div className="cv-skill-category-name">Architecture &amp; Practices</div>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Microfrontends</span>
                  <span className="cv-skill-tag">Module Federation</span>
                  <span className="cv-skill-tag">Event-Driven</span>
                  <span className="cv-skill-tag">Agile/Scrum</span>
                  <span className="cv-skill-tag">TDD</span>
                  <span className="cv-skill-tag">SOLID</span>
                  <span className="cv-skill-tag">Code Reviews</span>
                  <span className="cv-skill-tag">Technical Mentorship</span>
                </div>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="cv-section">
            <div className="cv-section-header">
              <div className="cv-section-label">Background</div>
              <h2 className="cv-section-title">Education</h2>
            </div>
            <div className="cv-edu-grid">
              <div className="cv-edu-entry">
                <div className="cv-edu-year">2014</div>
                <div className="cv-edu-school">Universidad Iberoamericana</div>
                <div className="cv-edu-degree">B.A. in Interactive Design</div>
                <div className="cv-edu-desc">Speciality in Software Development, Digital Systems, and UX/UI. Foundation in user-centered design and interaction patterns. Mexico City, MX.</div>
              </div>
              <div className="cv-edu-entry">
                <div className="cv-edu-year">2021</div>
                <div className="cv-edu-school">Platzi Master Bootcamp</div>
                <div className="cv-edu-degree">Selective Program (Top 1% LATAM)</div>
                <div className="cv-edu-desc">Completed 100+ advanced courses in computer science, React, Node.js, AWS, algorithms, and distributed systems. Selected as one of the top 1% of the best students of 2019.</div>
              </div>
            </div>
          </section>

          {/* LANGUAGES */}
          <section className="cv-section">
            <div className="cv-section-header">
              <div className="cv-section-label">Communication</div>
              <h2 className="cv-section-title">Languages</h2>
            </div>
            <div className="cv-languages">
              <div className="cv-lang">
                <div className="cv-lang-name">Spanish</div>
                <div className="cv-lang-level">Native</div>
              </div>
              <div className="cv-lang">
                <div className="cv-lang-name">English</div>
                <div className="cv-lang-level">Advanced</div>
              </div>
              <div className="cv-lang">
                <div className="cv-lang-name">Hebrew</div>
                <div className="cv-lang-level">Intermediate</div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA BAND */}
        <section className="cv-cta-band">
          <div className="cv-cta-band-inner">
            <span className="cv-cta-text">Get the full resume</span>
            <a href="/david-behar-cv.pdf" download="David Behar Lombrozo - CV.pdf" className="cv-cta-button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download PDF
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
