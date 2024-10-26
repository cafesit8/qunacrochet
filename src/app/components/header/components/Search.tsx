'use client'
import { CiSearch } from "react-icons/ci";
import { Input } from '@nextui-org/input'
import { FaGripLines } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useStore } from "@/app/global/state";
import { useRouter } from "next/navigation";

interface searchForm {
  search: string
}

export default function Search ({ openMenu }: { openMenu: () => void }) {
  const { register, handleSubmit } = useForm<searchForm>()
  const setSearchProduct = useStore((state) => state.setSearchProducts)
  const navigate = useRouter()

  function search (data: searchForm) {
    setSearchProduct(data.search)
    navigate.push('/busqueda')
  }

  return (
    <div className='flex-1'>
      <form onSubmit={handleSubmit(search)}>
        <Input
          size='sm'
          {...register('search')}
          placeholder='Buscar...'
          className='w-60 md:block hidden'
          endContent={
            <CiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          } />
      </form>
      <FaGripLines onClick={openMenu} className="text-custom-black text-xl md:hidden block" />
    </div>
  )
}
