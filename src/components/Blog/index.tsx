import { useData } from 'nextra/data'
import { twMerge } from 'tailwind-merge'

import { usePathname, useSearchParams } from 'next/navigation'

import Link from 'next/link'
import { Cards } from 'nextra/components'

const Blog = () => {
  const blogPost = useData()
  const categories: string[] = blogPost
    .map((x: BlogPostsThumbnail) => x.categories)
    .flat(1)

  const searchParams = useSearchParams()
  const search = searchParams?.get('category')

  console.log(categories)

  return (
    <div className="nextra-wrap-container">
      <div className="w-full mx-auto">
        <div className="mt-14">
          <h1 className="text-6xl !fqont-normal leading-tight lg:leading-tight mt-2 font-serif">
            Blog
          </h1>
          <div className="text-black/60 dark:text-white/60">
            <p className="text-base mt-2 leading-relaxed">
              The latest updates from Langfuse. See updates.
              <a
                href="https://github.com/orgs/janhq/projects/5/views/16"
                className="text-blue-600 dark:text-blue-400 cursor-pointer"
              >
                Changelog
              </a>
              &nbsp;for more product
            </p>
          </div>
        </div>

        <Cards num={2} className="mt-10">
          {blogPost
            .filter((post: BlogPostsThumbnail) => {
              if (search) {
                return post.categories?.includes(String(search))
              } else {
                return post
              }
            })
            .map((post: BlogPostsThumbnail, i: number) => {
              return (
                <Link
                  href={String(post.url)}
                  key={i}
                  className="nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200 nx-text-current nx-no-underline dark:nx-shadow-none hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100 active:nx-shadow-sm active:nx-shadow-gray-200 nx-transition-all nx-duration-200 hover:nx-border-gray-300 nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900"
                >
                  <div className="p-4">
                    <h6 className="text-lg line-clamp-1">{post.title}</h6>
                    <p className="text-sm mt-2 mb-4 text-gray-400 line-clamp-2 leading-normal">
                      {post.description}
                    </p>
                    <p className="text-xs">{post.date}</p>
                  </div>
                </Link>
              )
            })}
        </Cards>
      </div>
    </div>
  )
}

export default Blog
