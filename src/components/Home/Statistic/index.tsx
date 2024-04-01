import { ThemeImage } from '@/components/ThemeImage'

const Statistic = () => {
  return (
    <div className="lg:w-4/5 w-full px-4 mx-auto py-10 lg:py-20">
      <div className="nextra-wrap-container">
        <div className="w-full lg:w-3/4 mx-auto pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold">13</h1>
              <p className="font-medium text-black/60 dark:text-white/60">
                Core team
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold">39+</h1>
              <p className="font-medium text-black/60 dark:text-white/60">
                Contributors
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold">2416+</h1>
              <p className="font-medium text-black/60 dark:text-white/60">
                Pull Requests
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold">600K+</h1>
              <p className="font-medium text-black/60 dark:text-white/60">
                Downloads
              </p>
            </div>
          </div>
        </div>
        <ThemeImage
          className="w-full mx-auto h-auto"
          alt="App screenshots"
          width={800}
          height={800}
          source={{
            light: '/assets/images/homepage/mapbase-light.webp',
            dark: '/assets/images/homepage/mapbase-dark.webp',
          }}
        />
      </div>
    </div>
  )
}

export default Statistic
