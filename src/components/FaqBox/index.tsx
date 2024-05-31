import React, { PropsWithChildren } from 'react'

type Props = {
  title: string
  isOpen?: boolean
} & PropsWithChildren

const FAQBox = ({ title, children, isOpen = true }: Props) => {
  return (
    <details
      open={isOpen}
      className="last-of-type:mb-0 rounded-lg bg-neutral-50 dark:bg-neutral-800 p-2 mt-4"
    >
      <summary>
        <strong className="text-lg ml-2">{title}</strong>
      </summary>
      <div className="nx-p-2">{children}</div>
    </details>
  )
}

export default FAQBox
