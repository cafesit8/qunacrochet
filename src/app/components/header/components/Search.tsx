import { CiSearch } from "react-icons/ci";
import { Input } from '@nextui-org/input'
import { FaGripLines } from "react-icons/fa6";

export default function Search ({ openMenu }: { openMenu: () => void }) {
  return (
    <div className='flex-1'>
      <Input
        size='sm'
        placeholder='Buscar...'
        className='w-60 md:block hidden'
        endContent={
          <CiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        } />
      <FaGripLines onClick={openMenu} className="text-custom-black text-xl md:hidden block" />
    </div>
  )
}
