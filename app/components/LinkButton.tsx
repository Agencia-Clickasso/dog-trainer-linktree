import { FC } from 'react'

interface LinkButtonProps {
  title: string
  url: string
}

export const LinkButton: FC<LinkButtonProps> = ({ title, url }) => {
  return (
    <a
      href={url}
      className="flex w-full items-center justify-center rounded-lg bg-white/20 px-4 py-3 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  )
} 