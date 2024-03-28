import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Redirect = () => {
  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (path === '/community') {
      router.push(`/about/community`)
    }
  }, [path, router])

  return null
}
export default Redirect
