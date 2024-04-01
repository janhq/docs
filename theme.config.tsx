import React, { Fragment } from 'react'
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs'
import LogoMark from '@/components/LogoMark'
import FooterMenu from '@/components/FooterMenu'
import { useRouter } from 'next/router'
import JSONLD from '@/components/JSONLD'

const defaultUrl = 'https://jan.ai'
const defaultImage = 'https://jan.ai/assets/images/general/og-image.png'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Jan',
  'url': `${defaultUrl}`,
  'logo': `${defaultImage}`,
}

const config: DocsThemeConfig = {
  logo: (
    <span className="flex gap-x-8 items-center">
      <div className="flex">
        <LogoMark />
        <span className="ml-2 text-lg font-semibold">Jan</span>
      </div>
    </span>
  ),
  docsRepositoryBase: 'https://github.com/janhq/docs',
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Customizable Intelligence, LLM',
        canonical: defaultUrl,
        twitter: {
          cardType: 'summary_large_image',
          site: '@janframework',
        },
        openGraph: {
          type: 'website',
          url: defaultUrl,
          images: [
            {
              url: `${defaultImage}`,
              width: 800,
              height: 600,
              alt: 'Jan-OGImage',
            },
          ],
        },
      }
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  toc: {
    backToTop: true,
  },
  head: function useHead() {
    const { title, frontMatter } = useConfig()
    const titleTemplate = 'Jan' + ' - ' + (frontMatter?.title || title)

    return (
      <Fragment>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        {/* Dynamic meta title, description and keyword */}
        <title>{titleTemplate}</title>
        <meta name="og:title" content={titleTemplate} />
        <meta
          name="description"
          content={
            frontMatter?.description ||
            `Run LLMs like Mistral or Llama2 locally and offline on your computer, or connect to remote AI APIs like OpenAI’s GPT-4 or Groq.`
          }
        />
        <meta
          name="og:description"
          content={
            frontMatter?.description ||
            `Run LLMs like Mistral or Llama2 locally and offline on your computer, or connect to remote AI APIs like OpenAI’s GPT-4 or Groq.`
          }
        />
        <meta
          name="keywords"
          content={
            frontMatter?.keywords?.map((keyword: string) => keyword) || [
              'Jan',
              'Customizable Intelligence, LLM',
              'local AI',
              'privacy focus',
              'free and open source',
              'private and offline',
              'conversational AI',
              'no-subscription fee',
              'large language models',
              'build in public',
              'remote team',
              'how we work',
            ]
          }
        />
        <JSONLD data={structuredData} />
      </Fragment>
    )
  },
  footer: {
    text: <FooterMenu />,
  },
  nextThemes: {
    defaultTheme: 'system',
  },
}

export default config
