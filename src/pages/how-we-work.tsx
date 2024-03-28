import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Redirect = () => {
  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (path === '/how-we-work') {
      router.push(`/about/how-we-work`)
    }
  }, [path, router])

  return null
}
export default Redirect
