'use client'
import { useState } from "react"
import { Product } from "../../interface/Product"
import { FaPlus } from "react-icons/fa6";
import { IoMdRemove, IoMdClose } from "react-icons/io";

type ProductItem = {
  product: Product
  updateQuantity: (productId: string, newQuantity: number) => void
  removeProduct: (productId: string) => void
}

export default function ProductItem ({ product, updateQuantity, removeProduct }: ProductItem) {
  const [quantity, setQuantity] = useState(1)
  function lessQuantity () {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(product.id, newQuantity);
    }
  }

  function addQuantity () {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  }

  return (
    <article key={product.id} className={`w-full text-custom-black flex ${product.princeTo ? 'md:flex-row flex-col' : 'flex-row'} items-center md:gap-4 gap-2 py-4`}>
      <div className="flex gap-3 justify-center items-center self-baseline">
        <div className="grid place-content-center">
          <button onClick={() => removeProduct(product.id)} className="bg-green-100 text-green-800 self-start md:text-base text-sm font-semibold font-roboto-condensed p-2 rounded-md">
            <IoMdClose />
          </button>
        </div>
        <img className="md:size-44 size-20" width={200} height={200} src={product.image[0].src} alt={product.image[0].alt} />
        <div className="flex flex-col gap-2 justify-between">
          <h3 className="md:text-2xl text-sm font-playfair font-semibold">{product.subtitle}</h3>
          <p className="text-sm md:block hidden">{product.description}</p>
          <div className="flex gap-3">
            {product.princeTo ? (
              <div className="bg-green-100 text-green-800 self-start md:text-base text-sm font-semibold font-roboto-condensed px-2.5 py-1 rounded-full">
                <span className="md:mr-2">
                  S/ {product.price}
                </span>
                -
                <span className="md:ml-2">
                  S/ {product.princeTo}
                </span>
              </div>
            ) : (
              <div className="bg-green-100 text-green-800 self-start md:text-base text-sm font-semibold font-roboto-condensed me-2 px-2.5 py-1 rounded-full">
                S/ {Number(product.price) * quantity}
              </div>
            )}
            <div className="flex gap-2 items-center">
              <button onClick={lessQuantity} className="bg-green-100 text-green-800 md:text-base text-sm font-semibold font-roboto-condensed p-2 rounded-full">
                <IoMdRemove />
              </button>
              <span className="">
                {quantity}
              </span>
              <button onClick={addQuantity} className="bg-green-100 text-green-800 md:text-base text-sm font-semibold font-roboto-condensed p-2 rounded-full">
                <FaPlus />
              </button>
            </div>
          </div>
          {product.princeTo && <span className="md:block hidden text-xs font-semibold text-green-800">Al tener un rango de precio, se tomará el precio menor de momento, el encargado le dirá exactamente el precio de acuerdo al pesonaje que elija</span>}
        </div>
      </div>
      {product.princeTo && <span className="md:hidden text-xs font-semibold text-green-800">Al tener un rango de precio, se tomará el precio menor de momento, el encargado le dirá exactamente el precio de acuerdo al pesonaje que elija</span>}
    </article>
  )
}
