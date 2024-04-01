'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import { useTheme } from 'nextra-theme-docs'
import { useEffect } from 'react'

export const APIReference = () => {
  const { theme } = useTheme()

  useEffect(() => {
    if (theme === 'dark' || theme === 'system') {
      localStorage.setItem('isDark', 'true')
    } else {
      localStorage.setItem('isDark', 'false')
    }
  }, [theme])

  return (
    <>
      <ApiReferenceReact
        configuration={{
          spec: {
            url: 'https://raw.githubusercontent.com/janhq/docs/main/openapi/jan.json',
          },
          theme: 'alternate',
          customCss: '.darklight{display:none!important;}',
        }}
      />
    </>
  )
}

export default APIReference
