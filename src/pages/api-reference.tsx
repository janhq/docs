'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import { NextSeo } from 'next-seo'

const APIReference = () => {
  return (
    <>
      <NextSeo title="API Refrence | Customizable Intelligence, LLM" />
      <ApiReferenceReact
        configuration={{
          spec: {
            url: 'https://raw.githubusercontent.com/janhq/docs/main/openapi/jan.json',
          },
          theme: 'alternate',
          darkMode: false,
        }}
      />
    </>
  )
}

export default APIReference
