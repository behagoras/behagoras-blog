import { DefaultSeoProps } from "next-seo";

const description = "Senior Full-Stack Engineer in Mexico City. 10+ years building React/TypeScript apps, serverless backends, and microfrontend architectures at Autodesk."
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s | David Behar",
  defaultTitle: "David Behar | Senior Full-Stack Engineer | Mexico City",
  description,

  canonical: 'https://behar.io',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://behar.io',
    siteName: 'David Behar',
    title: 'David Behar | Senior Full-Stack Engineer | Mexico City',
    description,
  },
  twitter: {
    cardType: 'summary',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon/favicon.ico"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    },
  ]
};

export default config;
