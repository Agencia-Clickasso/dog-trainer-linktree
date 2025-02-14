import Image from 'next/image'
import { LinkButton } from './components/LinkButton'
import { FaPaw } from 'react-icons/fa'

const links = [
  { title: 'Site Oficial', url: 'https://www.felixpet.com.br' },
  { title: 'Instagram Oficial', url: 'https://www.instagram.com/felix_adestramento' },
  { title: 'Blog', url: 'https://blog.felixpet.com.br' },
  { title: 'Consultoria', url: 'https://wa.me/5511993285473?text=Ol%C3%A1%20Felix%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consultoria.' },
  { title: 'Contato Whatsapp', url: 'https://wa.me/5511993285473?text=Ol%C3%A1%20Felix%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20adestramento.' },
  { title: 'Cursos Online', url: 'https://cursos.felixpet.com.br' },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#3DADD1] to-[#45C4A4] p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Image
            src="/images/logo.jpg"
            alt="Felix Adestramento Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
          <h1 className="mt-4 text-3xl font-bold text-white">Felix Adestramento</h1>
          <p className="text-lg text-white">Cultura Canina Saudável</p>
        </div>
        <div className="space-y-3">
          {links.map((link, index) => (
            <LinkButton key={index} title={link.title} url={link.url} />
          ))}
        </div>
        <div className="flex justify-center space-x-2 text-white">
          <FaPaw className="animate-bounce" />
          <FaPaw className="animate-bounce [animation-delay:0.2s]" />
          <FaPaw className="animate-bounce [animation-delay:0.4s]" />
        </div>
      </div>
    </main>
  )
}

