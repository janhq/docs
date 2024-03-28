import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Redirect = () => {
  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (path === '/guides/troubleshooting/gpu-not-used') {
      router.push(`/docs/troubleshooting`)
    }
  }, [path, router])

  return null
}
export default Redirect
