'use client'
import { useState } from 'react';
import Link from 'next/link'
//font source
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/roboto-condensed';

//icons
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill, RiTiktokFill } from "react-icons/ri";

//components
import DropTow from './components/DropTow'
import Search from './components/Search';
import Cart from './components/Cart';

//data
import { DropTownItems } from './data/DropTown'
import ModalMenu from '../modal/Modal';

export default function Header () {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className="w-full h-auto bg-primary text-white font-playfair">
        <div className='w-full h-auto bg-[#9c9c9c] flex items-center justify-center gap-4 text-center py-3'>
          <span className='font-roboto-condensed md:text-lg text-sm'>ENCUÉNTRANOS EN</span>
          <ul className='flex gap-3'>
            <li><a target='_blank' href="_"><MdOutlineFacebook className='md:text-3xl text-xl hover:scale-125 duration-150' /></a></li>
            <li><a target='_blank' href="_"><RiInstagramFill className='md:text-3xl text-xl hover:scale-125 duration-150' /></a></li>
            <li><a target='_blank' href="_"><RiWhatsappFill className='md:text-3xl text-xl hover:scale-125 duration-150' /></a></li>
            <li><a target='_blank' href="_"><RiTiktokFill className='md:text-3xl text-xl hover:scale-125 duration-150' /></a></li>
          </ul>
        </div>
        <div className='w-full flex justify-between items-center py-2 px-4 bg-white'>
          <Search openMenu={openMenu} />
            <img className='md:size-32 size-24 aspect-square' width={200} height={200} src="/logo.jpg" alt="logo de qunacrochet" />
          <Cart />
        </div>
        <nav className='max-w-[1000px] mx-auto flex justify-center items-center md:py-4 py-2'>
          <ul className='md:flex hidden gap-10 items-center'>
            <Link className="font-roboto-condensed uppercase text-center" href={'/ramos'}>Ramos</Link>
            {DropTownItems.map((item, index) => (
              <DropTow key={index} name={item.name} list={item.list} />
            ))}
            <Link className="font-roboto-condensed uppercase text-center" href={'/arreglos-florales'}>Personalizados</Link>
            <Link className="font-roboto-condensed uppercase text-center" href={'/arreglos-florales'}>Personajes Famosos</Link>
            <Link className="font-roboto-condensed uppercase text-center" href={'/arreglos-florales'}>Conócenos</Link>
          </ul>
          <span className='md:hidden block font-roboto-condensed'>Bienvenidos a Qunacrochet</span>
        </nav>
      </header>
      <ModalMenu isOpen={isOpen} onOpenChange={openMenu} />
    </>
  )
}
