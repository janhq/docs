import DropdownDownload from '@/components/DropdownDownload'
import { useData } from 'nextra/data'

const CTADownload = () => {
  const { lastRelease } = useData()

  return (
    <div className="w-full xl:w-10/12 mx-auto relative py-8">
      <div className="nextra-wrap-container">
        <div className="flex p-4 lg:justify-between flex-col lg:flex-row">
          <div className="w-full">
            <h1 className="text-5xl lg:text-7xl !font-normal leading-tight lg:leading-tight mt-2 font-serif">
              Change how <br className="hidden lg:block" /> you use computers
            </h1>
          </div>
          <div className="lg:mt-10 w-full lg:w-1/2 mx-auto lg:mr-auto lg:text-right">
            <div className="my-4">
              <DropdownDownload lastRelease={lastRelease} />
            </div>
            <p className="mt-6 text-zinc-text-black/60 dark:text-white/60">
              500K+ Downloads | Free & Open Source
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTADownload
