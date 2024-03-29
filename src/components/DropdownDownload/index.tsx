import { useEffect, useState } from 'react'
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
import { IoChevronDownOutline } from 'react-icons/io5'
import { useClickOutside } from '@/hooks/useClickOutside'
import { twMerge } from 'tailwind-merge'

type Props = {
  lastRelease: any
}

type SystemType = {
  name: string
  logo: IconType
  fileFormat: string
  href?: string
}

const systemsTemplate: SystemType[] = [
  {
    name: 'Download for Mac (M1/M2/M3)',
    logo: FaApple,
    fileFormat: '{appname}-mac-arm64-{tag}.dmg',
  },
  {
    name: 'Download for Mac (Intel)',
    logo: FaApple,
    fileFormat: '{appname}-mac-x64-{tag}.dmg',
  },
  {
    name: 'Download for Windows',
    logo: FaWindows,
    fileFormat: '{appname}-win-x64-{tag}.exe',
  },
  {
    name: 'Download for Linux (AppImage)',
    logo: FaLinux,
    fileFormat: '{appname}-linux-x86_64-{tag}.AppImage',
  },
  {
    name: 'Download for Linux (deb)',
    logo: FaLinux,
    fileFormat: '{appname}-linux-amd64-{tag}.deb',
  },
]

const extractAppName = (fileName: string) => {
  const regex = /^(.*?)-(?:mac|win|linux)-(?:arm64|x64|x86_64|amd64)-.*$/
  const match = fileName.match(regex)
  return match ? match[1] : null
}

const DropdownDownload = ({ lastRelease }: Props) => {
  const [systems, setSystems] = useState(systemsTemplate)
  const [defaultSystem, setDefaultSystem] = useState(systems[0])
  const [open, setOpen] = useState(false)

  const changeDefaultSystem = async (systems: SystemType[]) => {
    const userAgent = navigator.userAgent
    if (userAgent.includes('Windows')) {
      // windows user
      setDefaultSystem(systems[2])
    } else if (userAgent.includes('Linux')) {
      // linux user
      setDefaultSystem(systems[3])
    } else if (userAgent.includes('Mac OS')) {
      setDefaultSystem(systems[0])
    } else {
      setDefaultSystem(systems[1])
    }
  }

  useEffect(() => {
    const updateDownloadLinks = async () => {
      try {
        const firstAssetName = lastRelease.assets[0].name
        const appname = extractAppName(firstAssetName)
        if (!appname) {
          console.error(
            'Failed to extract appname from file name:',
            firstAssetName
          )
          changeDefaultSystem(systems)
          return
        }
        const tag = lastRelease.tag_name.startsWith('v')
          ? lastRelease.tag_name.substring(1)
          : lastRelease.tag_name

        const updatedSystems = systems.map((system) => {
          const downloadUrl = system.fileFormat
            .replace('{appname}', appname)
            .replace('{tag}', tag)
          return {
            ...system,
            href: `https://github.com/janhq/jan/releases/download/${lastRelease.tag_name}/${downloadUrl}`,
          }
        })
        setSystems(updatedSystems)
        changeDefaultSystem(updatedSystems)
      } catch (error) {
        console.error('Failed to update download links:', error)
      }
    }

    updateDownloadLinks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [menu, setMenu] = useState<HTMLButtonElement | null>(null)

  const [refDropdownContent, setRefDropdownContent] =
    useState<HTMLDivElement | null>(null)
  useClickOutside(() => setOpen(false), null, [menu, refDropdownContent])

  return (
    <div className="inline-flex flex-shrink-0 justify-center relative">
      <button className="dark:border-r-0 dark:nx-bg-neutral-900 dark:text-white bg-black text-white hover:text-white justify-center dark:border dark:border-neutral-800 flex-shrink-0 pl-4 pr-6 py-4 rounded-l-xl inline-flex items-center">
        <defaultSystem.logo className="h-4 mr-2" />
        {defaultSystem.name}
      </button>
      <button
        className="dark:nx-bg-neutral-900 dark:text-white bg-black text-white hover:text-white justify-center dark:border border-l border-gray-500 dark:border-neutral-800 flex-shrink-0 p-4 px-3 rounded-r-xl"
        onClick={() => setOpen(!open)}
        ref={setMenu}
      >
        <IoChevronDownOutline
          className={twMerge(open && 'rotate-180 transition-all')}
        />
      </button>
      {open && (
        <div
          className="absolute left-0 top-[64px] w-full dark:nx-bg-neutral-900 bg-black z-30 rounded-xl"
          ref={setRefDropdownContent}
        >
          {systems.map((system) => (
            <div key={system.name} className="py-1">
              <a
                href={system.href || ''}
                className="flex px-4 py-3 items-center text-white hover:text-white hover:bg-white/10 dark:hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                <system.logo className="w-3 mr-3 -mt-1 flex-shrink-0" />
                <span className="text-white font-medium">{system.name}</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownDownload
