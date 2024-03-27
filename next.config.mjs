/** @type {import('next').NextConfig} */

import nextra from 'nextra'
import { remarkCodeHike } from '@code-hike/mdx'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  latex: true,
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: 'dark-plus',
          showCopyButton: true,
          skipLanguages: ['mermaid'],
        },
      ],
    ],
  },
})

const nextConfig = {
  reactStrictMode: true,
  env: {
    GTM_ID: process.env.GTM_ID,
  },
  async redirects() {
    return [
      {
        source: '/community',
        destination: '/about/community',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/about/team',
        permanent: true,
      },
      {
        source: '/features',
        destination: '/product/features',
        permanent: true,
      },
    ]
  },
}

export default withNextra(nextConfig)
