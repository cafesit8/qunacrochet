import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@nextui-org/badge";
import { useStore } from "@/app/global/state";
import Link from "next/link";

export default function Cart () {
  const productsCard = useStore((state) => state.products)
  return (
    <div className='flex-1 flex justify-end'>
      <Link href={'/cart'}>
        <Badge color="primary" content={productsCard.length} isInvisible={false} shape="circle">
          <FaShoppingCart className='text-custom-black text-3xl' />
        </Badge>
      </Link>
    </div>
  )
}
