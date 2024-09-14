'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { FaChevronDown } from "react-icons/fa";
import type { DropdownProps } from './interface'

export default function DropTow ({ name, list }: DropdownProps) {
  return (
    <Dropdown className='bg-custom-black rounded-none'>
      <DropdownTrigger>
        <div className='text-[17px] flex gap-2 items-center cursor-pointer font-roboto-condensed'>
          {name} <FaChevronDown className="text-white" />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {list.map((item, index) => (
          <DropdownItem className="uppercase" href={item.to} key={index}>
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
