import { format } from 'date-fns'

import { useData } from 'nextra/data'

import Markdown from 'react-markdown'
import { useState } from 'react'
import { useBodyClass } from '@/hooks/useBodyClass'
import { useClickOutside } from '@/hooks/useClickOutside'
import { Cross2Icon } from '@radix-ui/react-icons'
import { twMerge } from 'tailwind-merge'

const Changelog = () => {
  const { releases } = useData()
  const [detailChangelog, setDetailChangelog] = useState<string | null>(null)

  useBodyClass(detailChangelog ? 'overflow-hidden' : 'overflow-y-scroll')
  const refDialogContent = useClickOutside(() => setDetailChangelog(null))

  return (
    <div className="nextra-wrap-container">
      <div className="w-full lg:w-3/4 mx-auto">
        <div className="mt-14">
          <h1 className="text-6xl !fqont-normal leading-tight lg:leading-tight mt-2 font-serif">
            Changelog
          </h1>
          <div className="text-black/60 dark:text-white/60">
            <p className="text-base mt-2 leading-relaxed">
              Latest release updates from the Jan team. Check out our&nbsp;
              <a
                href="https://github.com/orgs/janhq/projects/5/views/16"
                className="text-blue-600 dark:text-blue-400 cursor-pointer"
              >
                Roadmap
              </a>
              &nbsp;{`to see what's next.`}
            </p>
          </div>
        </div>
        <div className="mt-20">
          {releases?.map((changelog: any, i: number) => {
            return (
              <div key={i} className="flex gap-8 items-start">
                <div className="w-3/12 -mt-2">
                  <p className="text-black/60 dark:text-white/60 font-medium">
                    {format(changelog.published_at, 'MMMM do, yyyy')}
                  </p>
                </div>
                <div
                  onClick={() => {
                    setDetailChangelog(changelog.tag_name)
                  }}
                  className="border-l dark:nx-border-neutral-800 w-full cursor-pointer"
                  key={i}
                >
                  <div className="flex gap-8 items-start w-full">
                    <div className="w-2 h-2 relative -left-1 bg-blue-500 rounded-full flex-shrink-0" />
                    <div className="pb-14 w-full -mt-2">
                      <div className="border dark:nx-border-neutral-800 w-full py-4 px-8 dark:bg-white/5 bg-black/5 rounded-lg flex flex-col lg:flex-row justify-between">
                        <div>
                          <h6 className="text-2xl font-bold">
                            {changelog.tag_name}
                          </h6>
                          <p className="mt-2 text-black/60 dark:text-white/60 text-medium">
                            New release Jan App -{' '}
                            {format(changelog.published_at, 'MMMM do, yyyy')}
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="text-sm inline-block p-2 px-4 mt-4 items-center dark:text-black bg-black text-white dark:bg-white h-10 border border-gray-600 rounded-md font-medium"
                        >
                          Release details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <dialog
        open={releases.some((x: any) => x.tag_name === detailChangelog)}
        className={twMerge(
          'fixed bg-black/80 dark:bg-black/40 z-50 w-full top-0 left-0 h-screen py-8 px-4 lg:px-8 backdrop-blur-lg',
          releases.some((x: any) => x.tag_name === detailChangelog) && 'flex'
        )}
      >
        <div
          className="bg-gray-50 dark:nx-bg-neutral-900 max-h-full rounded-lg p-8 w-full lg:w-1/2 m-auto overflow-y-auto relative "
          ref={refDialogContent}
        >
          <Cross2Icon
            className="sticky top-0 cursor-pointer text-black dark:text-white ml-auto"
            onClick={() => setDetailChangelog(null)}
          />
          {releases
            .filter((x: any) => x.tag_name === detailChangelog)
            .map((detail: any, i: number) => {
              return (
                <div key={i}>
                  <h6 className="text-2xl font-bold">{detail.tag_name}</h6>
                  <p className="mt-2 text-black/60 dark:text-white/60 text-medium">
                    New release Jan App -{' '}
                    {format(detail.published_at, 'MMMM do, yyyy')}
                  </p>
                  <Markdown className="changelog-markdown mt-10">
                    {detail.body}
                  </Markdown>
                </div>
              )
            })}
        </div>
      </dialog>
    </div>
  )
}

export default Changelog
