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
  const { source, className, alt, width, height, priority } = props

  return (
    <>
      <Image
        src={source.light}
        className={twMerge('block dark:hidden', className)}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
      <Image
        src={source.dark}
        className={twMerge('hidden dark:block', className)}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </>
  )
}
