import Link from 'next/link'

interface LinkButtonProps {
  title: string
  url: string
}

export function LinkButton({ title, url }: LinkButtonProps) {
  return (
    <Link
      href={url}
      className="block w-full rounded-lg bg-white bg-opacity-20 px-4 py-3 text-center font-medium text-white backdrop-blur-sm transition-all hover:bg-opacity-30 hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </Link>
  )
}

