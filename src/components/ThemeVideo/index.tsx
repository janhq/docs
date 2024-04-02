import Image, { ImageProps } from 'next/image'
import { twMerge } from 'tailwind-merge'

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  source: {
    light: string
    dark: string
  }
  className?: string
  alt: string
  width: number
  height: number
  priority?: boolean
}

export const ThemeImage = (props: Props) => {
  const { source, className, width, height } = props

  return (
    <>
      <video
        width={width}
        height={height}
        controls
        autoPlay
        className={twMerge('block dark:hidden', className)}
      >
        <source src={source.light} type="video/mp4" />
      </video>

      <video
        width={width}
        height={height}
        controls
        autoPlay
        className={twMerge('hidden dark:block', className)}
      >
        <source src={source.dark} type="video/mp4" />
      </video>
    </>
  )
}
