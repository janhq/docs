import { ThemeImage } from '@/components/ThemeImage'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

const features = [
  {
    title: 'Run local AI or connect to remote APIs',
    description:
      'Choose between running AI models locally for privacy, like Llama or Mistral, or connect to remote APIs, like ChatGPT or Claude.',
  },
  {
    title: 'Browse and download models',
    description: `With Jan's Hub, instantly download popular AI models or import your own to expand your toolkit without hassle.`,
  },
  {
    title: 'Use Jan in your natural workflows',
    description: `Jan works with your workflow, ready to assist at a moment's notice without interrupting your work.`,
  },
  {
    title: 'Customize and add features with Extensions',
    description: `Tailor Jan exactly to your needs with Extensions, making your experience truly your own.`,
  },
]

const Feature = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <>
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
                href="/features/"
                target="_blank"
              >
                View Our Features <BsArrowRight className="inline-block" />
              </a>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col items-start gap-10 xl:gap-14 mt-10">
            <div className="w-full lg:w-2/5 px-4 lg:p-0">
              {features.map((feature, i) => {
                const isActive = activeFeature === i
                return (
                  <div
                    key={i}
                    className="mb-4 dark:bg-[#1F1F1F] bg-[#F5F5F5] p-6 rounded-xl cursor-pointer"
                    onClick={() => setActiveFeature(i)}
                  >
                    <div
                      className={twMerge(
                        'flex items-center gap-4',
                        isActive && 'items-start'
                      )}
                    >
                      <h1 className="dark:text-[#4C4C4C] text-[#C4C4C4] text-[32px] font-bold">
                        0{i + 1}
                      </h1>
                      <div>
                        <h6 className="text-xl font-bold">{feature.title}</h6>
                        <p
                          className={twMerge(
                            'mt-1 text-sm leading-relaxed text-black/60 dark:text-white/60 hidden',
                            isActive && 'block'
                          )}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="relative w-full rounded-l-3xl overflow-hidden block">
              {activeFeature === 0 && (
                <ThemeImage
                  alt="App screenshots"
                  width={800}
                  height={800}
                  className="w-full"
                  source={{
                    light: '/assets/images/homepage/features01.webp',
                    dark: '/assets/images/homepage/features01dark.webp',
                  }}
                />
              )}
              {activeFeature === 1 && (
                <ThemeImage
                  alt="App screenshots"
                  width={800}
                  height={800}
                  className="w-full"
                  source={{
                    light: '/assets/images/homepage/features02.webp',
                    dark: '/assets/images/homepage/features02dark.webp',
                  }}
                />
              )}
              {activeFeature === 2 && (
                <ThemeImage
                  alt="App screenshots"
                  width={800}
                  height={800}
                  className="w-full"
                  source={{
                    light: '/assets/images/homepage/features03.webp',
                    dark: '/assets/images/homepage/features03dark.webp',
                  }}
                />
              )}
              {activeFeature === 3 && (
                <ThemeImage
                  alt="App screenshots"
                  width={800}
                  height={800}
                  className="w-full"
                  source={{
                    light: '/assets/images/homepage/features04.webp',
                    dark: '/assets/images/homepage/features04dark.webp',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature
