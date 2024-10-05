'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { FaChevronDown } from "react-icons/fa";
import type { DropdownProps } from './interface'
import Link from "next/link";

export default function DropTow ({ name, list }: DropdownProps) {
  return (
    <Dropdown className='bg-primary rounded-none'>
      <DropdownTrigger>
        <div className='text-[17px] uppercase text-center flex gap-2 items-center cursor-pointer font-roboto-condensed'>
          {name} <FaChevronDown className="text-white" />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {list.map((item, index) => (
          <DropdownItem className="uppercase" key={index}>
            <Link href={item.to} className="w-full">{item.name}</Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
