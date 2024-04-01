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
  transpilePackages: ['@scalar', 'react-tweet'],
  // Example Redirect @TODO: arista and irvan will be work on this after Hien move deployment not using static or next export
  async redirects() {
    return [
      {
        source: '/team',
        destination: '/about/teams',
        permanent: true,
      },
    ]
  },
}

export default withNextra(nextConfig)
