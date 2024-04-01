'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import { useTheme } from 'nextra-theme-docs'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

export const APIReference = () => {
  const { theme } = useTheme()

  useIsomorphicLayoutEffect(() => {
    if (theme === 'dark' || theme === 'system') {
      localStorage.setItem('isDark', 'true')
    } else {
      localStorage.setItem('isDark', 'false')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
