import { IoMapOutline } from 'react-icons/io5'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import { RiStarSFill } from 'react-icons/ri'
import { useDiscordWidget } from '@/hooks/useDiscordWidget'
import { useData } from 'nextra/data'

const BuiltWithLove = () => {
  const { data: discordWidget } = useDiscordWidget()
  const { stargazers_count } = useData()

  return (
    <div className="nextra-wrap-container mt-10 text-sm">
      <div className="w-full px-4 xl:w-3/4 mx-auto relative py-8">
        <div className="text-center">
          <h1 className="text-5xl !font-normal leading-tight lg:leading-tight mt-2 font-serif">
            Built with love
          </h1>
          <p className="leading-relaxed text-black/60 dark:text-white/60">
            Jan is entirely open-source. We build it transparently, guided by
            the belief <br className="hidden lg:block" /> that AI`s future
            should be open and shared with everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <a
            href="https://github.com/janhq/jan"
            target="_blank"
            className="card-wrapper dark:card-wrapper-dark p-4 inline-flex px-4 py-3 rounded-lg cursor-pointer justify-center items-start space-x-4 min-h-28"
          >
            <span>
              <FaGithub className="text-3xl" />
            </span>
            <div className="flex-col">
              <div className="flex items-center gap-2">
                <h6 className="text-base">Github</h6>
                <div className="text-sm text-black/60 dark:text-white/60 flex items-center space-x-1 py-1 px-2 rounded-md bg-[#E9E9E9] dark:bg-[#484748]">
                  <RiStarSFill className="text-lg text-[#CA8A04]" />
                  <span className="font-semibold">
                    {stargazers_count} stars
                  </span>
                </div>
              </div>
              <p className="text-sm mt-1">
                Jan is entirely open source and free to use.
              </p>
            </div>
          </a>
          <a
            href="https://discord.gg/FTk2MvZwJH"
            target="_blank"
            className="card-wrapper dark:card-wrapper-dark p-4 inline-flex px-4 py-3 rounded-lg cursor-pointer justify-center items-start space-x-4 min-h-28"
          >
            <span>
              <FaDiscord className="text-3xl" />
            </span>
            <div className="flex-col">
              <div className="flex items-center gap-2">
                <h6 className="text-base">Discord</h6>
                <div className="text-sm text-black/60 dark:text-white/60 flex items-center space-x-1 py-1 px-2 rounded-md bg-[#E9E9E9] dark:bg-[#484748]">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="font-semibold">
                    {discordWidget.presence_count} online
                  </span>
                </div>
              </div>
              <p className="text-sm mt-1">
                Join the community to ask questions, get help and learn more.
              </p>
            </div>
          </a>
          <a
            href="https://github.com/orgs/janhq/projects/5/views/16"
            target="_blank"
            className="card-wrapper dark:card-wrapper-dark p-4 inline-flex px-4 py-3 rounded-lg cursor-pointer justify-center items-start space-x-4 min-h-28"
          >
            <span>
              <IoMapOutline className="text-3xl" />
            </span>
            <div className="flex-col">
              <div className="flex items-center gap-2">
                <h6 className="text-base">Roadmap</h6>
              </div>
              <p className="text-sm mt-1">
                {`We build in public. See where we're headed!`}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BuiltWithLove
