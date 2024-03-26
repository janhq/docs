import { BsArrowRight } from 'react-icons/bs'

const Feature = () => {
  return (
    <div className="nextra-wrap-container">
      <div className="w-full mx-auto relative py-8 lg:pt-24">
        <div className="flex p-4 lg:px-0 lg:justify-between flex-col lg:flex-row items-end">
          <div className="w-full">
            <h1 className="text-5xl lg:text-7xl !font-normal leading-tight lg:leading-tight mt-2 font-serif">
              Jan redefines <br className="hidden lg:block" /> how we use
              computers
            </h1>
          </div>
          <div className="mt-10 w-full lg:w-1/2 mr-auto lg:text-right">
            <a
              className="mt-6 text-blue-600 dark:text-blue-400 cursor-pointer"
              href="https://jan.ai/features/"
              target="_blank"
            >
              View Our Features <BsArrowRight className="inline-block" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
