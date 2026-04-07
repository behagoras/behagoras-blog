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
  Mail,
  ArrowRight,
  ChevronDown,
  Bot,
  MessageSquare,
  BrainCircuit,
} from 'lucide-react'

/* Brand icons (not available in lucide-react) */
const LinkedinIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
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
    title: 'Bundle Size Reduction',
    description:
      'Directed migration to Webpack Module Federation, decomposing a ~4MB monolithic bundle into 20+ independently deployable modules with on-demand route-based loading.',
  },
  {
    metric: '50%',
    metricColor: 'teal' as const,
    accentColor: 'teal' as const,
    title: 'Faster Build Times',
    description:
      'Led CI/CD improvements through incremental builds, pipeline parallelization, and independent microfrontend releases across a multi-team engineering org.',
  },
  {
    metric: '500+',
    metricColor: 'coral' as const,
    accentColor: 'navy' as const,
    title: 'Users Across 3 React Apps',
    description:
      'Built and maintained 3 large-scale React applications with 15+ microfrontends and 7 shared libraries for water telemetry, CCTV, and asset management.',
  },
  {
    metric: '75+',
    metricColor: 'teal' as const,
    accentColor: 'teal' as const,
    title: 'Lambda Functions',
    description:
      'Built serverless upload/download workflows with AWS Lambda, API Gateway, and EventBridge across 15+ microservice backends.',
  },
]

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
        title="David Behar | Senior Full-Stack Engineer"
        description="AI-native full-stack engineer with 10+ years of experience. React, TypeScript, Node.js, AWS. Building scalable microfrontend architectures at Autodesk."
        canonical="https://behar.io"
        openGraph={{
          title: 'David Behar | Senior Full-Stack Engineer',
          description:
            'AI-native full-stack engineer with 10+ years of experience building scalable web applications.',
          url: 'https://behar.io',
          type: 'website',
        }}
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="homepage">
        {/* ============================================================
            1. HERO
            ============================================================ */}
        <section className="home-hero">
          <div className="home-hero__inner">
            <p className="home-hero__eyebrow">Senior Full-Stack Engineer</p>
            <h1 className="home-hero__name">David Behar</h1>
            <p className="home-hero__hook">
              I build <strong>scalable React architectures</strong> and
              {' '}<strong>serverless backends</strong> at Autodesk. 10+ years
              turning complex systems into products that ship faster and perform better.
            </p>

            <div className="home-hero__actions">
              <Button asChild size="lg">
                <Link href="/cv">
                  View Full CV
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:text-white">
                <a href="/david-behar-cv.pdf" download>
                  <Download className="mr-1 h-4 w-4" />
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

          <div className="home-hero__scroll-hint">
            <span>Scroll</span>
            <ChevronDown size={18} />
          </div>
        </section>

        {/* ============================================================
            2. KEY METRICS STRIP
            ============================================================ */}
        <section className="home-metrics">
          <div className="home-metrics__inner">
            <div className="home-metric-card home-animate home-animate-delay-1">
              <span className="home-metric-card__number home-metric-card__number--coral">
                ~70%
              </span>
              <span className="home-metric-card__label">Bundle Size Reduction</span>
            </div>
            <div className="home-metric-card home-animate home-animate-delay-2">
              <span className="home-metric-card__number home-metric-card__number--teal">
                500+
              </span>
              <span className="home-metric-card__label">Users Served</span>
            </div>
            <div className="home-metric-card home-animate home-animate-delay-3">
              <span className="home-metric-card__number home-metric-card__number--coral">
                15+
              </span>
              <span className="home-metric-card__label">Microfrontends</span>
            </div>
            <div className="home-metric-card home-animate home-animate-delay-4">
              <span className="home-metric-card__number home-metric-card__number--teal">
                50%
              </span>
              <span className="home-metric-card__label">Faster Builds</span>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. ABOUT
            ============================================================ */}
        <section className="home-about">
          <div className="home-about__inner">
            <h2 className="home-section-heading home-animate">About</h2>
            <div className="home-about__text home-animate home-animate-delay-1">
              <p>
                I'm a full-stack engineer based in Mexico City with over a decade of
                experience building web applications, APIs, and the infrastructure around
                them. I thrive at the intersection of architecture and delivery, turning
                complex requirements into clean, scalable systems.
              </p>
              <p>
                At <strong>Autodesk</strong>, I lead a platform team building React
                microfrontends, serverless backends, and shared libraries used by{' '}
                <strong>70+ engineers across 3 time zones</strong>. Before that I ran
                frontend teams at Social Piper, built e-commerce platforms, and grew an
                agency from 2 to 10+ engineers.
              </p>
              <p>
                I use <strong>Claude Code</strong> and multi-agent orchestration daily
                to accelerate design, implementation, refactoring, and testing across the
                full stack. I believe AI-augmented engineering is not a shortcut; it is
                a multiplier for disciplined engineering.
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
        <section className="home-tech">
          <div className="home-tech__inner">
            <h2 className="home-section-heading home-animate">What I Work With</h2>
            <div className="home-tech__grid">
              {techStack.map((group, i) => (
                <div
                  key={group.title}
                  className={`home-tech-group home-animate home-animate-delay-${i + 1}`}
                >
                  <h3 className="home-tech-group__title">{group.title}</h3>
                  <div className="home-tech-group__badges">
                    {group.badges.map((badge) => (
                      <SkillBadge key={badge.name} name={badge.name} icon={badge.icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            5. FEATURED WORK
            ============================================================ */}
        <section className="home-work">
          <div className="home-work__inner">
            <h2 className="home-section-heading home-animate">Featured Work</h2>
            <div className="home-work__grid">
              {featuredWork.map((item, i) => (
                <Card
                  key={item.title}
                  className={`home-work-card home-animate home-animate-delay-${i + 1}`}
                >
                  <div
                    className={`home-work-card__accent home-work-card__accent--${item.accentColor}`}
                  />
                  <CardHeader>
                    <div
                      className={`home-work-card__metric home-work-card__metric--${item.metricColor}`}
                    >
                      {item.metric}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
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
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. CURRENTLY
            ============================================================ */}
        <section className="home-currently">
          <div className="home-currently__inner">
            <h2 className="home-section-heading home-animate">Currently Building</h2>
            <div className="home-currently__grid">
              <div className="home-currently-card home-animate home-animate-delay-1">
                <span className="home-currently-card__icon">
                  <Bot size={32} strokeWidth={1.5} color="#e8604c" />
                </span>
                <h3 className="home-currently-card__title">Autonomous Agents</h3>
                <p className="home-currently-card__text">
                  Exploring multi-agent orchestration patterns for code generation,
                  review, and automated testing workflows.
                </p>
              </div>
              <div className="home-currently-card home-animate home-animate-delay-2">
                <span className="home-currently-card__icon">
                  <MessageSquare size={32} strokeWidth={1.5} color="#2a9d8f" />
                </span>
                <h3 className="home-currently-card__title">WhatsApp B2B Bots</h3>
                <p className="home-currently-card__text">
                  Building conversational sales agents for B2B companies that automate
                  lead qualification and follow-up.
                </p>
              </div>
              <div className="home-currently-card home-animate home-animate-delay-3">
                <span className="home-currently-card__icon">
                  <BrainCircuit size={32} strokeWidth={1.5} color="#e8604c" />
                </span>
                <h3 className="home-currently-card__title">Knowledge Pipelines</h3>
                <p className="home-currently-card__text">
                  Pipelines that turn messy unstructured content into structured,
                  searchable knowledge bases for teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. BLOG POSTS
            ============================================================ */}
        <section className="home-blog">
          <div className="home-blog__inner">
            <div className="home-blog__header">
              <h2 className="home-section-heading home-animate" style={{ marginBottom: 0 }}>
                From the Blog
              </h2>
              <Link href="/posts/1" className="home-blog__link home-animate home-animate-delay-1">
                All posts <ArrowRight size={14} />
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
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
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
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            8. CONTACT CTA
            ============================================================ */}
        <section className="home-cta">
          <div className="home-cta__inner">
            <h2 className="home-cta__heading">Let's Connect</h2>
            <p className="home-cta__text">
              I'm open to remote opportunities and always happy to chat about
              architecture, microfrontends, or AI-augmented engineering.
            </p>
            <div className="home-cta__links">
              <a
                href="mailto:davbelom@gmail.com"
                className="home-cta__link"
              >
                <Mail size={18} />
                davbelom@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/davidbehar"
                target="_blank"
                rel="noopener noreferrer"
                className="home-cta__link home-cta__link--ghost"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/behagoras"
                target="_blank"
                rel="noopener noreferrer"
                className="home-cta__link home-cta__link--ghost"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
            </div>
          </div>
        </section>
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
