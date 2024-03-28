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
  transpilePackages: ['@scalar'],
  async redirects(){
    return [
      {
        source: '/docs/troubleshooting/failed-to-fetch',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/guides/troubleshooting/gpu-not-used',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/guides/troubleshooting',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/docs/troubleshooting/stuck-on-broken-build',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/docs/troubleshooting/somethings-amiss',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/docs/troubleshooting/how-to-get-error-logs',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/docs/troubleshooting/permission-denied',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/docs/troubleshooting/unexpected-token',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/docs/troubleshooting/undefined-issue',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/getting-started/troubleshooting',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/docs/troubleshooting/gpu-not-used',
        destination: '/docs/troubleshooting',
        permanent: true,
      },
      {
        source: '/guides/integrations/openrouter',
        destination: '/docs/integrations/openrouter',
        permanent: true,
      },
      {
        source: '/docs/integrations',
        destination: '/docs/integrations/',
        permanent: true,
      },
      {
        source: '/guides/integrations/continue',
        destination: '/docs/integrations/vscode',
        permanent: true,
      },
      {
        source: '/docs/extension-capabilities',
        destination: '/docs/extensions',
        permanent: true,
      },
      {
        source: '/guides/using-extensions',
        destination: '/docs/extensions',
        permanent: true,
      },
      {
        source: '/docs/extension-guides',
        destination: '/docs/extensions',
        permanent: true,
      },
      {
        source: '/features/extensions',
        destination: '/docs/extensions',
        permanent: true,
      },

      {
        source: '/integrations/tensorrt',
        destination: '/docs/engines-local/tensorrt',
        permanent: true,
      },
      {
        source: '/guides/using-models/integrate-with-remote-server',
        destination: '/docs/engines-remote/remote-server-integration/',
        permanent: true,
      },
      {
        source: '/guides/using-models/customize-engine-settings',
        destination: '/docs/engines-local/llamacpp/',
        permanent: true,
      },
      {
        source: '/guides/troubleshooting/gpu-not-used',
        destination: '/docs/engines-local/ollama/',
        permanent: true,
      },
      {
        source: '/developers/plugins/azure-openai',
        destination: '/docs/engines-remote/openai/',
        permanent: true,
      },

      {
        source: '/api',
        destination: '/api-reference',
        permanent: true,
      },
      {
        source: '/api/overview',
        destination: '/api-reference/',
        permanent: true,
      },
      {
        source: '/docs/api-reference/assistants',
        destination: '/api-reference#tag/assistants/get/assistants/',
        permanent: true,
      },
      {
        source: '/docs/api-reference/models/list',
        destination: '/api-reference#tag/models/get/models',
        permanent: true,
      },
      {
        source: '/docs/api-reference/threads',
        destination: '/api-reference#tag/chat/post/chat/completions/',
        permanent: true,
      },
      {
        source: '/docs/api-reference/messages',
        // destination: '/api-reference#tag/messages/get/threads/{thread_id}/messages/{message_id}',
        destination: '/api-reference#tag/messages',
        permanent: true,
      },
      {
        source: '/docs/api-reference/models',
        destination: '/api-reference#tag/models/get/models/',
        permanent: true,
      },

      {
        source: '/chat',
        destination: '/docs/threads/',
        permanent: true,
      },
      {
        source: '/guides/chatting/manage-history',
        destination: '/docs/threads/',
        permanent: true,
      },
      {
        source: '/guides/chatting/start-thread',
        destination: '/docs/threads/',
        permanent: true,
      },

      
      {
        source: '/guides/using-server',
        destination: '/docs/local-api/',
        permanent: true,
      },
      {
        source: '/guides/using-server/server',
        destination: '/docs/local-api#step-2-start-and-use-the-built-in-api-server',
        permanent: true,
      },
      {
        source: '/docs/local-api',
        destination: '/docs/local-api/',
        permanent: true,
      },
      {
        source: '/guides/server',
        destination: '/docs/local-api/',
        permanent: true,
      },

      {
        source: '/docs/get-started',
        destination: '/docs',
        permanent: true,
      },
      {
        source: '/guides/how-jan-works',
        destination: '/docs/quickstart',
        permanent: true,
      },
    ]
  }
}

export default withNextra(nextConfig)
