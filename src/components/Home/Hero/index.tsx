import { ThemeImage } from '@/components/ThemeImage'

const Hero = () => {
  return (
    <div className="nextra-wrap-container">
      <div className="mt-20 text-center">
        <h1 className="text-6xl lg:text-[80px] !font-normal leading-tight lg:leading-tight mt-2 font-serif">
          Rethink the Computer
        </h1>
        <p className="text-xl -mt-1 leading-relaxed text-black/60 dark:text-white/60">
          Turn your computer into an AI machine
        </p>
        <p className="mt-6 text-black/60 dark:text-white/60">
          500K+ Downloads | Free & Open Source
        </p>
        <div className="w-4/5 mx-auto mt-10">
          <ThemeImage
            className="object-cover w-full object-center mx-auto h-full relative"
            source={{
              light: '/assets/images/homepage/app-frame-light.webp',
              dark: '/assets/images/homepage/app-frame-dark.webp',
            }}
            priority
            alt="App screenshots"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
