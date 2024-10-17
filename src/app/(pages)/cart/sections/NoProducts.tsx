import { BsCartXFill } from "react-icons/bs";

export default function NoProducts () {
  return (
    <section className="grid place-content-center md:w-4/6 w-full">
      <div className="flex flex-col justify-center items-center gap-3">
        <BsCartXFill className="md:text-9xl text-8xl text-custom-black" />
        <p className="md:text-3xl text-lg text-center font-playfair text-custom-black">No hay productos en el carrito</p>
      </div>
    </section>
  )
}
