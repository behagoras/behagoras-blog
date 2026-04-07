import Head from 'next/head'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const TerminalPrompt = ({ command }: { command: string }) => (
  <div className="flex flex-wrap">
    <span style={{ color: '#7ee787' }}>david@behar.io</span>
    <span style={{ color: '#8b949e' }}>:</span>
    <span style={{ color: '#79c0ff' }}>~</span>
    <span style={{ color: '#8b949e' }}>$ </span>
    <span style={{ color: '#e3b341' }}>{command}</span>
  </div>
)

const SectionDivider = () => (
  <div className="select-none my-5 overflow-hidden text-xs sm:text-sm" style={{ color: '#484f58' }}>
    <span style={{ color: '#6e7681' }}>#</span>{' '}
    <span className="hidden sm:inline">{'='.repeat(68)}</span>
    <span className="sm:hidden">{'='.repeat(40)}</span>
  </div>
)

const SkillCategory = ({ name, items }: { name: string; items: string }) => (
  <div className="mb-2">
    <span className="font-bold" style={{ color: '#56d4dd' }}>{name}</span>
    <div className="pl-4" style={{ color: '#c9d1d9' }}>{items}</div>
  </div>
)

const ExperienceEntry = ({
  hash,
  company,
  role,
  location,
  date,
  bullets,
}: {
  hash: string
  company: string
  role: string
  location: string
  date: string
  bullets: string[]
}) => (
  <div className="mb-8">
    <div style={{ color: '#e3b341' }} className="break-all">
      commit {hash}
    </div>
    <div style={{ color: '#c9d1d9' }}>
      Company:{' '}
      <span className="font-bold" style={{ color: '#56d4dd' }}>{company}</span>
      <span style={{ color: '#6e7681' }}>{' // '}{location}</span>
    </div>
    <div style={{ color: '#c9d1d9' }}>
      Role:{'    '}
      <span style={{ color: '#7ee787' }}>{role}</span>
    </div>
    <div style={{ color: '#c9d1d9' }}>
      Date:{'    '}
      <span style={{ color: '#6e7681' }}>{date}</span>
    </div>
    <div className="mt-2 pl-4" style={{ borderLeft: '2px solid #30363d' }}>
      {bullets.map((bullet, i) => (
        <div key={i} className="mb-1.5 leading-relaxed" style={{ color: '#c9d1d9' }}>
          <span style={{ color: '#6e7681' }}>-</span> {bullet}
        </div>
      ))}
    </div>
  </div>
)

export default function CVPage() {
  return (
    <>
      <NextSeo
        title="CV - David Behar Lombrozo"
        description="Software Developer with 10+ years of experience. Full-stack, React/TypeScript, AI-augmented engineering."
        canonical="https://behar.io/cv"
        openGraph={{
          title: 'CV - David Behar Lombrozo',
          description: 'Software Developer with 10+ years of experience.',
          url: 'https://behar.io/cv',
        }}
      />
      <Head>
        <style>{`
          body {
            background: #0d1117 !important;
            color: #c9d1d9 !important;
          }
        `}</style>
      </Head>

      <div
        className="min-h-screen p-2 sm:p-4 md:p-8"
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          fontSize: '13px',
          lineHeight: '1.7',
          background: '#0d1117',
          color: '#c9d1d9',
        }}
      >
        <div className="max-w-4xl mx-auto mb-4">
          <Link href="/" className="text-xs transition-colors" style={{ color: '#6e7681' }}>
            {'<'}- back to behar.io
          </Link>
        </div>

        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl" style={{ border: '1px solid #30363d' }}>
          <div className="flex items-center px-4 py-2.5 gap-2" style={{ background: '#161b22' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <div className="flex-1 text-center text-xs" style={{ color: '#6e7681' }}>
              david-behar-cv -- bash -- 80x42
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 overflow-x-hidden" style={{ background: '#0d1117' }}>

            <div className="text-xs mb-6" style={{ color: '#484f58' }}>
              Last login: Mon Apr  7 09:00:00 2026 on ttys000
            </div>

            <TerminalPrompt command="whoami --verbose" />
            <div className="mt-3 mb-1">
              <pre className="leading-tight overflow-x-auto" style={{ fontSize: '10px', color: '#7ee787' }}>{`  ____             _     _   ____       _
 |  _ \\  __ ___   (_) __| | | __ )  ___| |__   __ _ _ __
 | | | |/ _\` \\ \\ / / / _\` | |  _ \\ / _ \\ '_ \\ / _\` | '__|
 | |_| | (_| |\\ V /| | (_| | | |_) |  __/ | | | (_| | |
 |____/ \\__,_| \\_/ |_|\\__,_| |____/ \\___|_| |_|\\__,_|_|`}</pre>
            </div>
            <div className="mt-3 space-y-0.5">
              <div><span style={{ color: '#56d4dd' }}>Name:</span>{' '}<span style={{ color: '#e6edf3' }}>David Behar Lombrozo</span></div>
              <div><span style={{ color: '#56d4dd' }}>Role:</span>{' '}<span style={{ color: '#e6edf3' }}>Software Developer</span></div>
              <div><span style={{ color: '#56d4dd' }}>Location:</span>{' '}<span style={{ color: '#e6edf3' }}>Mexico City, MX</span></div>
              <div><span style={{ color: '#56d4dd' }}>Phone:</span>{' '}<span style={{ color: '#e6edf3' }}>+52 55 1698 8310</span></div>
              <div><span style={{ color: '#56d4dd' }}>Email:</span>{' '}<a href="mailto:davbelom@gmail.com" style={{ color: '#79c0ff' }}>davbelom@gmail.com</a></div>
              <div><span style={{ color: '#56d4dd' }}>LinkedIn:</span>{' '}<a href="https://linkedin.com/in/davidbehar" target="_blank" rel="noopener noreferrer" style={{ color: '#79c0ff' }}>linkedin.com/in/davidbehar</a></div>
              <div><span style={{ color: '#56d4dd' }}>GitHub:</span>{' '}<a href="https://github.com/behagoras" target="_blank" rel="noopener noreferrer" style={{ color: '#79c0ff' }}>github.com/behagoras</a></div>
            </div>

            <SectionDivider />

            <TerminalPrompt command="cat summary.txt" />
            <div className="mt-3 mb-1 pl-2" style={{ borderLeft: '2px solid rgba(126, 231, 135, 0.3)' }}>
              <p style={{ color: '#c9d1d9' }} className="leading-relaxed">
                AI-native full-stack engineer with 10+ years of experience. Drove Webpack Module
                Federation migration reducing bundle size by ~70% and page load times by ~35%
                across 3 React apps serving 500+ users. Specializes in scalable React/TypeScript
                architecture, CI/CD optimization, and Core Web Vitals. Adopts AI-augmented
                engineering as a daily practice, using Claude Code and multi-agent orchestration
                to accelerate design, implementation, refactoring, and testing across the full stack.
              </p>
            </div>

            <SectionDivider />

            <TerminalPrompt command="skills --list --format=table" />
            <div className="mt-3 mb-1">
              <div className="text-xs mb-3" style={{ color: '#484f58' }}>
                {'// installed packages (skills v10.0.0)'}
              </div>
              <SkillCategory name="Core Web Technologies" items="TypeScript, JavaScript (ES6+), React, Redux, HTML5, CSS3, CSS-in-JS (styled-components), HTTP, State management, DOM" />
              <SkillCategory name="AI-Augmented Dev" items="Claude Code, OpenAI Codex, Open Claw Automations, AI-assisted refactoring & testing, Context engineering, Multi-agent orchestration" />
              <SkillCategory name="Performance" items="Core Web Vitals optimization, Lighthouse CI, code splitting, API integration, lazy loading, PWA, bundle optimization, caching strategies" />
              <SkillCategory name="Build & Testing" items="Webpack, Jest, Cypress (E2E), Vitest, Storybook, CI/CD, Jenkins, Azure DevOps" />
              <SkillCategory name="Backend & Cloud" items="Node.js, API design, REST APIs, GraphQL (AppSync), AWS (Lambda, API Gateway, EventBridge, S3, Serverless Framework)" />
              <SkillCategory name="Architecture" items="Microfrontends (Webpack Module Federation), Developer Experience (DX), Responsive Design, Scalable systems, Web Architecture, Event-Driven Patterns" />
              <SkillCategory name="Practices" items="Git, Agile/Scrum, OOP, SOLID Principles, TDD, Code reviews, Technical Mentorship" />
            </div>

            <SectionDivider />

            <TerminalPrompt command="git log --experience --reverse" />
            <div className="mt-3 mb-1">
              <ExperienceEntry hash="a1b2c3d" company="Autodesk" role="Full Stack Engineer | Team Lead | Platform" location="Mexico City, MX" date="Nov 2019 - Present" bullets={['Developed and maintained 3 large-scale React applications comprising 15+ microfrontends and 7 shared libraries (real-time water telemetry, CCTV, asset management, pipe analytics) supporting 500+ users, establishing front-end architecture patterns and reusable platform foundations utilized by 70+ engineers across 3 time zones.','Directed migration to Webpack Module Federation, decomposing a ~4MB monolithic bundle into 20+ independently deployable modules (~15 MFEs, 3 shell apps, 7 collective libraries) with on-demand route-based loading. Diminished initial bundle size by ~70% and improved page load times by ~35%.',"Built end-to-end serverless upload/download workflows with compliance validation steps using AWS Lambda, API Gateway, and EventBridge, while maintaining 75+ Lambda functions across 15+ microservice backends serving the platform's microfrontend ecosystem.",'Created 5+ internal packages (auth SDKs, telemetry modules, common UI components) adopted across 5+ teams, shortening developer onboarding from ~2 months to ~2 weeks and reducing AWS authentication setup time by 50% while preserving security standards.','Led and mentored a team of 4 engineers, ran architecture and code reviews, and instituted CI/CD improvements (incremental builds, pipeline parallelization, independent MFE releases) that reduced build times by 50% and cut deployment pipelines from 12+ to ~5 per shared component change.',"Adopted Claude Code as a daily engineering tool for AI-augmented architecture design, code generation, refactoring, and testing, using multi-agent orchestration across the platform's microfrontend ecosystem."]} />
              <ExperienceEntry hash="e4f5a6b" company="Social Piper" role="Senior Front-End Developer" location="Mexico City, MX" date="Jan 2019 - Nov 2019" bullets={['Led Vue to React migration and developed a TypeScript component library with Storybook supporting Desktop and Mobile Web; integrated frontend with backend APIs to cut feature delivery time by 25%.','Improved Core Web Vitals 30-50% through performance audits, code splitting, image optimization, and render optimization strategies.','Enhanced accessibility of a 30+ collaborative component library (Storybook) with semantic HTML and ARIA attributes, adopted by at least 30+ engineers across 3 apps and 15+ microfrontends.']} />
              <ExperienceEntry hash="c7d8e9f" company="Qubit Works" role="Head of Operations / Lead Engineer" location="Mexico City, MX" date="Jan 2015 - Dec 2018" bullets={['Managed 20+ client projects across web and mobile platforms, architecting React frontends, Node.js backends, and e-commerce solutions while growing the engineering team from 2 to 10+ members and establishing Agile practices, code review culture, and technical training programs.','Translated 50+ ambiguous client requirements into MVP-first release plans with incremental iterations, delivering projects with cross-functional teams of 3-5 (design and engineering) and improving delivery consistency across the agency.']} />
              <ExperienceEntry hash="0a1b2c3" company="Farmaldea" role="Head of Technology" location="Mexico City, MX" date="Jan 2014 - Dec 2016" bullets={['Architected from scratch a digital pharmacy aggregator with point-of-sale capabilities, enabling users to search and purchase medications across 500+ pharmacies through a unified platform.',"Built a REST API integration with GTN's appointment platform, enabling automated order creation from their scheduling system and periodic inventory synchronization across the pharmacy network."]} />
            </div>

            <SectionDivider />

            <TerminalPrompt command="cat /etc/education.conf" />
            <div className="mt-3 mb-1 pl-2">
              <div className="mb-5">
                <div className="font-bold" style={{ color: '#56d4dd' }}>Universidad Iberoamericana</div>
                <div style={{ color: '#c9d1d9' }}>B.A. | Interactive Design{' '}<span style={{ color: '#6e7681' }}>// Mexico City, MX // 2014</span></div>
                <div className="text-xs mt-1 leading-relaxed" style={{ color: '#6e7681' }}>Speciality in Software Development, Digital Systems, and UX/UI. Foundation in user-centered design and interaction patterns.</div>
              </div>
              <div className="mb-2">
                <div className="font-bold" style={{ color: '#56d4dd' }}>Platzi Master Bootcamp</div>
                <div style={{ color: '#c9d1d9' }}>Selective Program (Top 1% LATAM){' '}<span style={{ color: '#6e7681' }}>// 2021</span></div>
                <div className="text-xs mt-1 leading-relaxed" style={{ color: '#6e7681' }}>Completed 100+ advanced courses in computer science, React, Node.js, AWS, algorithms, and distributed systems. Selected as one of the top 1% of the best students of the year 2019.</div>
              </div>
            </div>

            <SectionDivider />

            <TerminalPrompt command="locale --list" />
            <div className="mt-3 mb-1 pl-2">
              <div className="flex gap-6 flex-wrap">
                <span><span style={{ color: '#7ee787' }}>Spanish</span>{' '}<span style={{ color: '#6e7681' }}>(Native)</span></span>
                <span><span style={{ color: '#7ee787' }}>English</span>{' '}<span style={{ color: '#6e7681' }}>(Advanced)</span></span>
                <span><span style={{ color: '#7ee787' }}>Hebrew</span>{' '}<span style={{ color: '#6e7681' }}>(Intermediate)</span></span>
              </div>
            </div>

            <SectionDivider />

            <TerminalPrompt command="download --format=pdf" />
            <div className="mt-3 mb-1">
              <a href="/david-behar-cv.pdf" download className="inline-block px-5 py-2.5 rounded text-sm transition-colors" style={{ border: '1px solid #7ee787', color: '#7ee787', background: 'transparent' }} onMouseOver={(e) => { (e.target as HTMLElement).style.background = 'rgba(126, 231, 135, 0.1)' }} onMouseOut={(e) => { (e.target as HTMLElement).style.background = 'transparent' }}>
                {'> Downloading david-behar-cv.pdf ... [Click to Save]'}
              </a>
            </div>

            <div className="mt-8">
              <TerminalPrompt command="" />
              <span className="terminal-cursor" />
            </div>

          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-6 text-center text-xs" style={{ color: '#484f58' }}>
          <Link href="/" className="transition-colors hover:underline" style={{ color: '#484f58' }}>behar.io</Link>
          {' / '}cv
        </div>

        <style jsx global>{`
          .terminal-cursor {
            display: inline-block;
            width: 8px;
            height: 16px;
            background: #7ee787;
            margin-left: 2px;
            vertical-align: text-bottom;
            animation: terminal-blink 1s step-end infinite;
          }
          @keyframes terminal-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    </>
  )
}
