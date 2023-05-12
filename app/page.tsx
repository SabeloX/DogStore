import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Organisations } from '@/components/organisations'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export type OrganisationType = {
  name: string;
  description: string;
  amount: number;
}

const organisations: OrganisationType[] = [
  {
    name: "Software Revolution",
    description: "An organisation that teaches the youth how to code and build software.",
    amount: 200
  },
  {
    name: "Software Revolution",
    description: "An organisation that teaches the youth how to code and build software.",
    amount: 200
  },
  {
    name: "Software Revolution",
    description: "An organisation that teaches the youth how to code and build software.",
    amount: 200
  },
  {
    name: "Software Revolution",
    description: "An organisation that teaches the youth how to code and build software.",
    amount: 200
  }
]

export default function Home() {
  return (
    <main
      className="
        flex
        min-h-screen
        flex-col
        items-center
        p-14
        gap-6
      "
    >
      <h1 className='text-xl'>Philanthropic Payment System</h1>
      <p className='text-sm'>Make donations to your favourite organisation</p>
      <Organisations
        organisations={organisations}
      />
      </main>
  )
}
