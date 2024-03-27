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
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    GTM_ID: process.env.GTM_ID,
  },
}

export default withNextra(nextConfig)
