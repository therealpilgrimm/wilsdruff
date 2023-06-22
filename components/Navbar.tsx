import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const Menu = [
  { name: 'Kurse', description: 'Entdecken Sie was wir unterrichten', href: '/kurse', icon: ChartPieIcon },
  {
    name: 'Standorte',
    description: 'Alle Kursstandorte auf einem Blick',
    href: '/standorte',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Lehrer',
    description: 'Lernen Sie uns kennen',
    href: '/lehrer',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Formulare', description: 'Hier können Sie sich anmelden', href: '/formulare', icon: ArrowPathIcon },
  { name: 'Einblicke', description: "Alles rundum die Musikschule", href: '/einblicke', icon: FingerPrintIcon },
  {
    name: 'Termine',
    description: 'Alle unsere nächsten Veranstaltungen',
    href: '/termine',
    icon: DocumentChartBarIcon,
  },
]

export default function Navbar() {
  return (
    <nav className='flex justify-end bg-none px-16 pt-4 w-screen fixed z-10'>

        <Popover className="relative ">
        <Popover.Button className="inline-flex items-center gap-x-1 text-sm leading-6 text-gray-900 outline-none bg-[#FFEDE8] bg-opacity-100 pl-4 pr-6 py-2">
            <Bars3Icon className="h-9 w-11 pt-1" aria-hidden="true" />
            <span className='text-4xl'>Menü</span>
        </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute right-0 z-[10]  flex w-screen max-w-max  ">
                <div className="w-screen  flex-auto overflow-hidden  bg-red-900 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 max-w-3xl lg:max-w-md">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 p-4 lg:grid-cols-1">
                    {Menu.map((item) => (
                        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-red-950">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div>
                            <a href={item.href} className="font-semibold text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-50">{item.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                    <div className="bg-red-950 px-8 py-6">
                    <div className="flex items-center gap-x-3">
                        <h3 className="text-lg font-semibold leading-6 text-white">Kontakt</h3>
                        
                    </div>
                    <p className="mt-2 text-base leading-6 text-gray-100">
                        tel: 035204 4632 01 <br />
                        mobil: 0172 3780 083
                    </p>
                    </div>
                </div>
                </Popover.Panel>
                </Transition>
        </Popover>
    </nav>
  )
}


/*

import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/20/solid'

const Navbar = () => {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-10 bg-white shadow sm:items-baseline w-full fixed top-0 bg-gradient-to-r from-white to-transparent">
            <div className="mb-2 sm:mb-0">
                <Link className="text-2xl no-underline text-grey-darkest" href="/">Musikschule Wilsdruff</Link>
            </div>
            
            <div className="flex space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <div className='text-xl'>Menü</div>
            </div>

        </nav>

    );
};

export default Navbar;

*/
