import ThemeImage from '@/components/ThemeImage'
import { useState } from 'react'
// import { BsArrowRight } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

const features = [
  {
    title: 'Local',
    description:
      'Run AI models like Llama or Mistral directly on your device for enhanced privacy. No need for an internet connection- keep all your data and processing locally.',
  },
  {
    title: 'Remote API',
    description: `Connect to remote APIs, like ChatGPT, Gemini, or Claude. Access AI capabilities without needing advanced hardware, with all processing handled in the cloud.`,
  },
  {
    title: '100% offline',
    description: `Conversations, preferences, and model usage stay on your computer. It's secure, exportable, and can be deleted at any time.`,
  },
  {
    title: 'Cross Platform',
    description: `Jan is optimized for any device, from PCs to multi-GPU clusters. It's fast on NVIDIA GPUs and Apple M-series, supporting Apple Intel, Linux Debian, and Windows x64.`,
  },
  {
    title: 'Extensions',
    description: `Customize Jan with Extensions to meet your specific needs, enhancing your AI experience to be uniquely yours.`,
  },
]

const Feature = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <>
      <div className="nextra-wrap-container">
        <div className="w-full mx-auto relative py-8 lg:pt-24">
          <div className="flex p-4 lg:px-0 lg:justify-between flex-col lg:flex-row items-center">
            <div className="w-full text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl !font-normal leading-tight lg:leading-tight mt-2 font-serif">
                Features
              </h1>
            </div>
            <div className="w-full lg:w-1/2 mr-auto text-center mt-4 lg:mt-0 lg:text-right">
              {/* Temporary hidden since doesn't have docs for feature */}
              {/* <a
                className="text-blue-600 dark:text-blue-400 cursor-pointer"
                href="/features/"
                target="_blank"
              >
                View Our Features <BsArrowRight className="inline-block" />
              </a> */}
            </div>
          </div>

          <div className="flex lg:flex-row flex-col items-start gap-10 xl:gap-14 mt-10">
            <div className="w-full lg:w-2/5 px-4 lg:p-0">
              {features.map((feature, i) => {
                const isActive = activeFeature === i
                return (
                  <div
                    key={i}
                    className={twMerge(
                      'mb-4 p-6 rounded-xl cursor-pointer',
                      isActive && 'dark:bg-[#1F1F1F] bg-[#F5F5F5]'
                    )}
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
                            'mt-1 leading-relaxed text-black/60 dark:text-white/60 hidden',
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

            <div className="relative w-full overflow-hidden block">
              {activeFeature === 0 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full"
                  priority
                  source={{
                    light: '/assets/images/homepage/features01.webp',
                    dark: '/assets/images/homepage/features01dark.webp',
                  }}
                />
              )}
              {activeFeature === 1 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full"
                  priority
                  source={{
                    light: '/assets/images/homepage/features02.webp',
                    dark: '/assets/images/homepage/features02dark.webp',
                  }}
                />
              )}
              {activeFeature === 2 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full"
                  priority
                  source={{
                    light: '/assets/images/homepage/features03.webp',
                    dark: '/assets/images/homepage/features03dark.webp',
                  }}
                />
              )}
              {activeFeature === 3 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full"
                  priority
                  source={{
                    light: '/assets/images/homepage/features04.webp',
                    dark: '/assets/images/homepage/features04dark.webp',
                  }}
                />
              )}
              {activeFeature === 4 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full"
                  priority
                  source={{
                    light: '/assets/images/homepage/features05.webp',
                    dark: '/assets/images/homepage/features05dark.webp',
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
