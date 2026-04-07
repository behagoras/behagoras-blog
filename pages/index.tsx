import Head from 'next/head'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { getAllPosts } from '../lib/api'
import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import {
  Download,
  ArrowRight,
  ChevronDown,
  Bot,
  MessageSquare,
  BrainCircuit,
} from 'lucide-react'

/* Brand icons (not available in lucide-react) */
const LinkedinIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date?: string
}

type Props = {
  recentPosts: BlogPost[]
}

/* ================================================================
   Tech Stack Data
   ================================================================ */
const techStack = [
  {
    title: 'Frontend',
    badges: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Redux', icon: 'redux' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Webpack', icon: 'webpack' },
      { name: 'Storybook', icon: 'storybook' },
      { name: 'Module Federation' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    title: 'Backend & Cloud',
    badges: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'AWS Lambda', icon: 'amazonwebservices' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'REST APIs' },
      { name: 'Serverless' },
      { name: 'EventBridge' },
      { name: 'API Gateway' },
    ],
  },
  {
    title: 'AI & Tooling',
    badges: [
      { name: 'Claude Code' },
      { name: 'Multi-Agent Orchestration' },
      { name: 'Context Engineering' },
      { name: 'Jest', icon: 'jest' },
      { name: 'Cypress' },
      { name: 'CI/CD' },
      { name: 'Git', icon: 'git' },
    ],
  },
]

/* ================================================================
   Featured Work Data
   ================================================================ */
const featuredWork = [
  {
    metric: '~70%',
    metricColor: 'coral' as const,
    accentColor: 'coral' as const,
    title: 'Smaller Bundles',
    description:
      'Split a ~4MB monolith into 20+ micro-frontends with Webpack Module Federation. Initial page loads dropped ~35%. Friday deploys stopped being a source of dread.',
  },
  {
    metric: '50%',
    metricColor: 'teal' as const,
    accentColor: 'teal' as const,
    title: 'Faster Build Pipelines',
    description:
      'Incremental builds, parallelized pipelines, independent MFE releases. Went from 12+ deploys per shared component change down to ~5. The team actually started shipping on Fridays again.',
  },
  {
    metric: '500+',
    metricColor: 'coral' as const,
    accentColor: 'navy' as const,
    title: 'End Users Across 3 Apps',
    description:
      'Built 3 large-scale React apps (water telemetry, CCTV monitoring, asset management) with 15+ microfrontends and 7 shared libraries. 70+ engineers across time zones depend on these daily.',
  },
  {
    metric: '75+',
    metricColor: 'teal' as const,
    accentColor: 'teal' as const,
    title: 'Serverless Functions',
    description:
      'Upload/download workflows, compliance validation, event-driven pipelines. All on AWS Lambda, API Gateway, and EventBridge across 15+ microservice backends. Built an auth SDK that cut integration time in half.',
  },
]

/* ================================================================
   JSON-LD Structured Data
   ================================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'David Behar Lombrozo',
  jobTitle: 'Senior Full-Stack Engineer',
  worksFor: { '@type': 'Organization', name: 'Autodesk' },
  url: 'https://behar.io',
  sameAs: [
    'https://linkedin.com/in/davidbehar',
    'https://github.com/behagoras',
  ],
}

/* ================================================================
   Skill Badge with optional devicon
   ================================================================ */
function SkillBadge({ name, icon }: { name: string; icon?: string }) {
  return (
    <Badge>
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
    </Badge>
  )
}

/* ================================================================
   Homepage
   ================================================================ */
export default function HomePage({ recentPosts }: Props) {
  return (
    <>
      <NextSeo
        title="David Behar | Senior Full-Stack Engineer | Mexico City"
        description="Senior full-stack engineer with 10+ years building React and TypeScript apps at scale. Building platform architecture at Autodesk. Mexico City, open to remote."
        canonical="https://behar.io"
        openGraph={{
          title: 'David Behar | Senior Full-Stack Engineer | Mexico City',
          description:
            'Senior react typescript developer, 10+ years. Building microfrontend and platform architecture at Autodesk. Mexico City, open to remote.',
          url: 'https://behar.io',
          type: 'website',
        }}
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="homepage">
        <a
          href="#home-main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--coral)]"
        >
          Skip to main content
        </a>

        {/* ============================================================
            1. HERO
            ============================================================ */}
        <section className="home-hero" aria-label="Introduction">
          <div className="home-hero__inner">
            <p className="home-hero__eyebrow">Senior Full-Stack Engineer &middot; Mexico City</p>
            <h1 className="home-hero__name">I build the platform<br />so your team can build the product.</h1>
            <p className="home-hero__hook">
              I'm <strong>David Behar</strong>, a senior full-stack engineer with
              10+ years of building the platforms other developers ship on.
              React apps, microfrontends, serverless backends, CI/CD pipelines.
              I still get excited about a clean deploy. Lately I'm building
              AI agents because one career at a time felt too easy.
            </p>

            <div className="home-hero__actions">
              <Button asChild size="lg">
                <Link href="/cv">
                  View Full CV
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:text-white">
                <a href="/david-behar-cv.pdf" download>
                  <Download className="mr-1 h-4 w-4" aria-hidden="true" />
                  Download PDF
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white/60 hover:text-white hover:bg-white/5">
                <a
                  href="https://linkedin.com/in/davidbehar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon size={16} className="mr-1" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="home-hero__scroll-hint" aria-hidden="true">
            <span>Scroll</span>
            <ChevronDown size={18} />
          </div>
        </section>

        <main id="home-main-content">
          {/* ============================================================
              2. KEY METRICS STRIP
              ============================================================ */}
          <section className="home-metrics" aria-label="Key achievements">
            <ul className="home-metrics__inner" role="list">
              <li className="home-metric-card home-animate home-animate-delay-1">
                <span className="home-metric-card__number home-metric-card__number--coral">
                  ~70%
                </span>
                <span className="home-metric-card__label">Bundle Reduction</span>
              </li>
              <li className="home-metric-card home-animate home-animate-delay-2">
                <span className="home-metric-card__number home-metric-card__number--teal">
                  500+
                </span>
                <span className="home-metric-card__label">End Users</span>
              </li>
              <li className="home-metric-card home-animate home-animate-delay-3">
                <span className="home-metric-card__number home-metric-card__number--coral">
                  15+
                </span>
                <span className="home-metric-card__label">Microfrontends</span>
              </li>
              <li className="home-metric-card home-animate home-animate-delay-4">
                <span className="home-metric-card__number home-metric-card__number--teal">
                  50%
                </span>
                <span className="home-metric-card__label">Faster Builds</span>
              </li>
            </ul>
          </section>

          {/* ============================================================
              3. ABOUT
              ============================================================ */}
          <section className="home-about" aria-label="About me">
            <div className="home-about__inner">
              <h2 className="home-section-heading home-animate">What I Actually Do</h2>
              <div className="home-about__text home-animate home-animate-delay-1">
                <p>
                  At <strong>Autodesk</strong>, I build the platform that other
                  engineering teams ship on top of. React microfrontends, serverless
                  backends, shared auth SDKs, telemetry packages. When something I ship
                  breaks, <strong>70+ engineers across 3 time zones</strong> let me know
                  in English, Spanish, and a wall of Slack pings.
                </p>
                <p>
                  I broke a <strong>~4MB monolithic bundle into 20+ micro-frontends</strong>{' '}
                  using Webpack Module Federation, which cut initial page loads by ~35%.
                  I own <strong>75+ Lambda functions</strong> across 15+ microservice
                  backends. I built 5+ internal libraries that brought developer
                  onboarding down from roughly 2 months to about 2 weeks.
                </p>
                <p>
                  Before Autodesk, I ran an agency called <strong>Qubit Works</strong>,
                  growing the team from 2 to 10+ engineers and delivering 20+ client
                  projects. That's where I learned the hardest part of engineering:
                  turning "I want something like Uber but for pharmacies" into an
                  actual spec.
                </p>
              </div>
            </div>
          </section>

          <div className="home-about" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div style={{ maxWidth: 720, margin: '0 auto' }}>
              <Separator />
            </div>
          </div>

          {/* ============================================================
              4. TECH STACK
              ============================================================ */}
          <section className="home-tech" aria-label="Technical skills">
            <div className="home-tech__inner">
              <h2 className="home-section-heading home-animate">What I Work With</h2>
              <div className="home-tech__grid">
                {techStack.map((group, i) => (
                  <div
                    key={group.title}
                    className={`home-tech-group home-animate home-animate-delay-${i + 1}`}
                  >
                    <h3 className="home-tech-group__title">{group.title}</h3>
                    <ul className="home-tech-group__badges" role="list">
                      {group.badges.map((badge) => (
                        <li key={badge.name} className="inline">
                          <SkillBadge name={badge.name} icon={badge.icon} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================
              5. FEATURED WORK
              ============================================================ */}
          <section className="home-work" aria-label="Featured work">
            <div className="home-work__inner">
              <h2 className="home-section-heading home-animate">Things I've Shipped</h2>
              <div className="home-work__grid">
                {featuredWork.map((item, i) => (
                  <Card
                    key={item.title}
                    className={`home-work-card home-animate home-animate-delay-${i + 1}`}
                  >
                    <div
                      className={`home-work-card__accent home-work-card__accent--${item.accentColor}`}
                      aria-hidden="true"
                    />
                    <CardHeader>
                      <div
                        className={`home-work-card__metric home-work-card__metric--${item.metricColor}`}
                        aria-hidden="true"
                      >
                        {item.metric}
                      </div>
                      <CardTitle>
                        <span className="sr-only">{item.metric} </span>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center home-animate home-animate-delay-5">
                <Button asChild variant="outline">
                  <Link href="/cv">
                    See full experience on my CV
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ============================================================
              6. CURRENTLY BUILDING
              ============================================================ */}
          <section className="home-currently" aria-label="Current projects">
            <div className="home-currently__inner">
              <h2 className="home-section-heading home-animate">Currently Building</h2>
              <div className="home-currently__grid">
                <article className="home-currently-card home-animate home-animate-delay-1">
                  <span className="home-currently-card__icon" aria-hidden="true">
                    <Bot size={32} strokeWidth={1.5} color="#e8604c" />
                  </span>
                  <h3 className="home-currently-card__title">AI Agent Workflows</h3>
                  <p className="home-currently-card__text">
                    Multi-agent systems for code generation, automated review, and test
                    scaffolding. I use Claude Code every day and I'm wiring up autonomous
                    pipelines that handle the repetitive work so engineers can focus on
                    the problems worth solving.
                  </p>
                </article>
                <article className="home-currently-card home-animate home-animate-delay-2">
                  <span className="home-currently-card__icon" aria-hidden="true">
                    <MessageSquare size={32} strokeWidth={1.5} color="#2a9d8f" />
                  </span>
                  <h3 className="home-currently-card__title">WhatsApp Sales Bots</h3>
                  <p className="home-currently-card__text">
                    Conversational agents that qualify leads and handle follow-up for B2B
                    companies over WhatsApp. In Latin America, WhatsApp is the enterprise
                    communication channel, so that's where the bots live.
                  </p>
                </article>
                <article className="home-currently-card home-animate home-animate-delay-3">
                  <span className="home-currently-card__icon" aria-hidden="true">
                    <BrainCircuit size={32} strokeWidth={1.5} color="#e8604c" />
                  </span>
                  <h3 className="home-currently-card__title">Knowledge Pipelines</h3>
                  <p className="home-currently-card__text">
                    Taking messy inputs (documentation, Slack threads, meeting recordings)
                    and structuring them into searchable, queryable knowledge bases. Tribal
                    knowledge is a liability when it only lives in someone's head.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ============================================================
              7. BLOG POSTS
              ============================================================ */}
          <section className="home-blog" aria-label="Recent blog posts">
            <div className="home-blog__inner">
              <div className="home-blog__header">
                <h2 className="home-section-heading home-animate" style={{ marginBottom: 0 }}>
                  From the Blog
                </h2>
                <Link href="/posts/1" className="home-blog__link home-animate home-animate-delay-1">
                  All posts <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>

              {recentPosts.length > 0 ? (
                <div className="home-work__grid">
                  {recentPosts.map((post, i) => (
                    <Card
                      key={post.slug}
                      className={`home-animate home-animate-delay-${i + 1}`}
                    >
                      <CardHeader>
                        <CardTitle className="text-base">
                          <Link
                            href={`/${post.slug}`}
                            className="hover:text-[var(--coral)] transition-colors"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        {post.date && (
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </time>
                          </p>
                        )}
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          {post.excerpt.length > 140
                            ? post.excerpt.slice(0, 140) + '...'
                            : post.excerpt}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-[var(--text-muted)] mb-4">
                    Check out my blog for thoughts on engineering, architecture, and AI.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/posts/1">
                      Browse all posts
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* ============================================================
              8. CONTACT CTA
              ============================================================ */}
          <section className="home-cta" aria-label="Contact">
            <div className="home-cta__inner">
              <h2 className="home-cta__heading">Let's Talk</h2>
              <p className="home-cta__text">
                Based in Mexico City, open to remote. Happy to talk architecture,
                microfrontend strategy, AI-augmented dev workflows, or which board game
                to bring to your next game night. Fair warning: I will let you win
                so you invite me back.
              </p>
              <div className="home-cta__links">
                <a
                  href="https://linkedin.com/in/davidbehar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-cta__link"
                  aria-label="Open LinkedIn profile (opens in new tab)"
                >
                  <LinkedinIcon size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/behagoras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-cta__link home-cta__link--ghost"
                  aria-label="Open GitHub profile (opens in new tab)"
                >
                  <GithubIcon size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

/* ================================================================
   Static Props - Fetch recent blog posts
   ================================================================ */
export async function getStaticProps() {
  let allPosts: BlogPost[] = []

  try {
    const posts = await getAllPosts(['title', 'slug', 'excerpt', 'date'])
    allPosts = (posts as any[])
      .filter((post) => post.slug && post.slug.startsWith('posts/'))
      .sort((a, b) => (a.date > b.date ? -1 : 1))
      .slice(0, 4)
      .map((post) => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt || '',
        date: post.date || undefined,
      }))
  } catch {
    // Blog posts may not exist; that's fine
  }

  return {
    props: {
      recentPosts: allPosts,
    },
  }
}
