'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'

const APIReference = () => {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: 'https://raw.githubusercontent.com/janhq/docs/main/openapi/jan.json',
        },
        theme: 'alternate',
      }}
    />
  )
}

export default APIReference
