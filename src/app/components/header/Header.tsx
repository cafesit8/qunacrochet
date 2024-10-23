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
            <li><a target='_blank' href="https://www.facebook.com/profile.php?id=100066974342612&mibextid=ZbWKwL"><MdOutlineFacebook className='md:text-3xl text-xl hover:scale-125 duration-150' /></a></li>
            <li><a target='_blank' href="https://www.instagram.com/quna.crochet?igsh=djB0enVtbXllZ2E4"><RiInstagramFill className='md:text-3xl text-xl hover:scale-125 duration-150' /></a></li>
            <li><a target='_blank' href="https://wa.me/c/51983214218?fbclid=PAZXh0bgNhZW0CMTEAAaa2m4rbMJM73iYxp59u9Izga3vJBN0mUB7Ssl8k3IUqJwj6_gbvfAV3RRE_aem_AQxRz9jZd7wPNeA2PJQJsOo3X55IYqveDak125Xq_CHdyWMLhd14IlM_MjCNmA6QSUpy07US7KON7M-ntvrVoRTv."><RiWhatsappFill className='md:text-3xl text-xl hover:scale-125 duration-150' /></a></li>
            <li><a target='_blank' href="https://www.tiktok.com/@quna.crochet?_t=8qkGthWXHgz&_r=1 "><RiTiktokFill className='md:text-3xl text-xl hover:scale-125 duration-150' /></a></li>
          </ul>
        </div>
        <div className='w-full flex justify-between items-center p-4 bg-white'>
          <Search openMenu={openMenu} />
            <Link href={'/'}>
              <img className='md:w-64 w-40' src="/logo.webp" alt="logo de qunacrochet" />
            </Link>
          <Cart />
        </div>
        <nav className='max-w-[1000px] mx-auto flex justify-center items-center md:py-4 py-2'>
          <ul className='md:flex hidden gap-10 items-center'>
            <Link className="font-roboto-condensed uppercase text-center" href={'/ramos'}>Ramos</Link>
            <Link className="font-roboto-condensed uppercase text-center" href={'/ramos-premiun'}>Ramos Premiun</Link>
            {DropTownItems.map((item, index) => (
              <DropTow key={index} name={item.name} list={item.list} />
            ))}
            <Link className="font-roboto-condensed uppercase text-center" href={'/personalizados'}>Personalizados</Link>
            <Link className="font-roboto-condensed uppercase text-center" href={'/personajes-famosos'}>Personajes Famosos</Link>
          </ul>
          <span className='md:hidden block font-roboto-condensed'>Bienvenidos a Qunacrochet</span>
        </nav>
      </header>
      <ModalMenu isOpen={isOpen} onOpenChange={openMenu} />
    </>
  )
}
