import Layout from '../components/misc/layout'
import { NextSeo } from 'next-seo'

const CVPage = () => {
  return (
    <Layout>
      <NextSeo
        title="CV - David Behar Lombrozo"
        description="AI-native full-stack engineer with 10+ years of experience. Specializes in scalable React/TypeScript architecture, CI/CD optimization, and Core Web Vitals."
        canonical="https://behar.io/cv"
      />
      <div className="cv-bento-page">
        <div className="cv-bento-grid">

          {/* Hero Card (2x2) */}
          <div className="cv-card cv-card-hero">
            <div className="cv-card-hero-inner">
              <div className="cv-card-hero-badge">Software Developer</div>
              <h1 className="cv-card-hero-name">David Behar Lombrozo</h1>
              <p className="cv-card-hero-summary">
                AI-native full-stack engineer with 10+ years of experience. Drove Webpack Module Federation migration reducing bundle size by ~70% and page load times by ~35% across 3 React apps serving 500+ users. Specializes in scalable React/TypeScript architecture, CI/CD optimization, and Core Web Vitals.
              </p>
              <div className="cv-card-hero-tags">
                <span className="cv-hero-tag">React</span>
                <span className="cv-hero-tag">TypeScript</span>
                <span className="cv-hero-tag">Node.js</span>
                <span className="cv-hero-tag">AWS</span>
                <span className="cv-hero-tag">AI-Augmented Dev</span>
              </div>
            </div>
          </div>

          {/* Experience: Autodesk (2x1) */}
          <div className="cv-card cv-card-wide">
            <div className="cv-card-exp-header">
              <div>
                <h3 className="cv-card-company">Autodesk</h3>
                <p className="cv-card-role">Full Stack Engineer | Team Lead | Platform</p>
              </div>
              <div className="cv-card-date">Nov 2019 - Present</div>
            </div>
            <ul className="cv-card-bullets">
              <li>Developed 3 large-scale React apps comprising 15+ microfrontends and 7 shared libraries supporting 500+ users across 70+ engineers in 3 time zones</li>
              <li>Directed migration to Webpack Module Federation: ~70% bundle size reduction, ~35% faster page loads, 20+ independently deployable modules</li>
              <li>Built serverless workflows with AWS Lambda, API Gateway, and EventBridge; maintained 75+ Lambda functions across 15+ microservice backends</li>
              <li>Created 5+ internal packages adopted across 5+ teams, cutting onboarding from ~2 months to ~2 weeks</li>
              <li>Led team of 4, reduced build times by 50% and deployment pipelines from 12+ to ~5 per shared component change</li>
            </ul>
          </div>

          {/* Experience: Social Piper (2x1) */}
          <div className="cv-card cv-card-wide">
            <div className="cv-card-exp-header">
              <div>
                <h3 className="cv-card-company">Social Piper</h3>
                <p className="cv-card-role">Senior Front-End Developer</p>
              </div>
              <div className="cv-card-date">Jan 2019 - Nov 2019</div>
            </div>
            <ul className="cv-card-bullets">
              <li>Led Vue to React migration; developed TypeScript component library with Storybook for Desktop and Mobile Web</li>
              <li>Improved Core Web Vitals 30-50% through performance audits, code splitting, and render optimization</li>
              <li>Enhanced accessibility of 30+ collaborative component library adopted by 30+ engineers across 3 apps</li>
            </ul>
          </div>

          {/* Skills Card (2x1) */}
          <div className="cv-card cv-card-wide cv-card-skills">
            <h3 className="cv-card-title">Technical Skills</h3>
            <div className="cv-skills-grid">
              <div className="cv-skill-group">
                <h4 className="cv-skill-category">Core Web</h4>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">TypeScript</span>
                  <span className="cv-skill-tag">JavaScript (ES6+)</span>
                  <span className="cv-skill-tag">React</span>
                  <span className="cv-skill-tag">Redux</span>
                  <span className="cv-skill-tag">HTML5</span>
                  <span className="cv-skill-tag">CSS3</span>
                  <span className="cv-skill-tag">styled-components</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h4 className="cv-skill-category">AI-Augmented Dev</h4>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Claude Code</span>
                  <span className="cv-skill-tag">OpenAI Codex</span>
                  <span className="cv-skill-tag">Multi-agent Orchestration</span>
                  <span className="cv-skill-tag">Context Engineering</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h4 className="cv-skill-category">Performance</h4>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Core Web Vitals</span>
                  <span className="cv-skill-tag">Lighthouse CI</span>
                  <span className="cv-skill-tag">Code Splitting</span>
                  <span className="cv-skill-tag">Lazy Loading</span>
                  <span className="cv-skill-tag">PWA</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h4 className="cv-skill-category">Build & Testing</h4>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Webpack</span>
                  <span className="cv-skill-tag">Jest</span>
                  <span className="cv-skill-tag">Cypress</span>
                  <span className="cv-skill-tag">Vitest</span>
                  <span className="cv-skill-tag">Storybook</span>
                  <span className="cv-skill-tag">CI/CD</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h4 className="cv-skill-category">Backend & Cloud</h4>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Node.js</span>
                  <span className="cv-skill-tag">REST APIs</span>
                  <span className="cv-skill-tag">GraphQL</span>
                  <span className="cv-skill-tag">AWS Lambda</span>
                  <span className="cv-skill-tag">API Gateway</span>
                  <span className="cv-skill-tag">S3</span>
                </div>
              </div>
              <div className="cv-skill-group">
                <h4 className="cv-skill-category">Architecture</h4>
                <div className="cv-skill-tags">
                  <span className="cv-skill-tag">Microfrontends</span>
                  <span className="cv-skill-tag">Module Federation</span>
                  <span className="cv-skill-tag">Event-Driven</span>
                  <span className="cv-skill-tag">Scalable Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience: Qubit Works (2x1) */}
          <div className="cv-card cv-card-wide">
            <div className="cv-card-exp-header">
              <div>
                <h3 className="cv-card-company">Qubit Works</h3>
                <p className="cv-card-role">Head of Operations / Lead Engineer</p>
              </div>
              <div className="cv-card-date">Jan 2015 - Dec 2018</div>
            </div>
            <ul className="cv-card-bullets">
              <li>Managed 20+ client projects across web and mobile, growing team from 2 to 10+ members with Agile practices</li>
              <li>Translated 50+ ambiguous client requirements into MVP-first release plans with cross-functional teams of 3-5</li>
            </ul>
          </div>

          {/* Experience: Farmaldea (2x1) */}
          <div className="cv-card cv-card-wide">
            <div className="cv-card-exp-header">
              <div>
                <h3 className="cv-card-company">Farmaldea</h3>
                <p className="cv-card-role">Head of Technology</p>
              </div>
              <div className="cv-card-date">Jan 2014 - Dec 2016</div>
            </div>
            <ul className="cv-card-bullets">
              <li>Architected a digital pharmacy aggregator with POS capabilities across 500+ pharmacies</li>
              <li>Built REST API integration with GTN for automated order creation and inventory synchronization</li>
            </ul>
          </div>

          {/* Education Card (1x1) */}
          <div className="cv-card">
            <h3 className="cv-card-title">Education</h3>
            <div className="cv-education-item">
              <h4 className="cv-education-school">Universidad Iberoamericana</h4>
              <p className="cv-education-degree">B.A. in Interactive Design</p>
              <p className="cv-education-detail">Software Development, Digital Systems, UX/UI</p>
              <p className="cv-education-year">2014</p>
            </div>
            <div className="cv-education-divider"></div>
            <div className="cv-education-item">
              <h4 className="cv-education-school">Platzi Master Bootcamp</h4>
              <p className="cv-education-degree">Top 1% LATAM</p>
              <p className="cv-education-detail">100+ courses in CS, React, Node.js, AWS, algorithms, distributed systems</p>
              <p className="cv-education-year">2021</p>
            </div>
          </div>

          {/* Languages Card (1x1) */}
          <div className="cv-card">
            <h3 className="cv-card-title">Languages</h3>
            <div className="cv-language-list">
              <div className="cv-language-item">
                <div className="cv-language-header">
                  <span className="cv-language-name">Spanish</span>
                  <span className="cv-language-level">Native</span>
                </div>
                <div className="cv-language-bar">
                  <div className="cv-language-fill" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="cv-language-item">
                <div className="cv-language-header">
                  <span className="cv-language-name">English</span>
                  <span className="cv-language-level">Advanced</span>
                </div>
                <div className="cv-language-bar">
                  <div className="cv-language-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="cv-language-item">
                <div className="cv-language-header">
                  <span className="cv-language-name">Hebrew</span>
                  <span className="cv-language-level">Intermediate</span>
                </div>
                <div className="cv-language-bar">
                  <div className="cv-language-fill" style={{ width: '55%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card (1x1) */}
          <div className="cv-card">
            <h3 className="cv-card-title">Contact</h3>
            <div className="cv-contact-list">
              <a href="https://behar.io" target="_blank" rel="noopener noreferrer" className="cv-contact-link">
                <svg className="cv-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span>behar.io</span>
              </a>
              <a href="mailto:davbelom@gmail.com" className="cv-contact-link">
                <svg className="cv-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>davbelom@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer" className="cv-contact-link">
                <svg className="cv-contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>linkedin.com/in/davidbehar</span>
              </a>
              <a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer" className="cv-contact-link">
                <svg className="cv-contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                <span>github.com/behagoras</span>
              </a>
              <a href="tel:+525516988310" className="cv-contact-link">
                <svg className="cv-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+52 55 1698 8310</span>
              </a>
            </div>
          </div>

          {/* Download Card (1x1) */}
          <div className="cv-card cv-card-download">
            <div className="cv-download-inner">
              <svg className="cv-download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <polyline points="9 15 12 18 15 15"/>
              </svg>
              <h3 className="cv-download-title">Download PDF</h3>
              <p className="cv-download-subtitle">Full resume in PDF format</p>
              <a
                href="/david-behar-cv.pdf"
                download
                className="cv-download-button"
              >
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default CVPage
