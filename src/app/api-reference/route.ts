import { ApiReference } from '@scalar/nextjs-api-reference'
import type { ReferenceConfiguration } from '@scalar/api-reference'

import content from './spec.json'

const config: ReferenceConfiguration = {
  theme: 'alternate',
  layout: 'modern',
  spec: {
    content,
  },
}

export const GET = ApiReference(config)
