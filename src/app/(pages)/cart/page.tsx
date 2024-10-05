'use client'
import { useStore } from "@/app/global/state"
import ProductItem from "./components/Product";
import { useState } from "react";
import Form from './components/Form'

export interface Product {
  address: string
  date: string
  name: string
  surname: string
}

export default function CartPage () {
  const productsList = useStore((state) => state.products)
  const removeProduct = useStore((state) => state.removeProduct)
  const [cartItems, setCartItems] = useState(productsList.map(product => ({
    ...product,
    quantity: 1,
  })));

  function handleRemoveProduct (productId: string) {
    removeProduct(productId);
    setCartItems(cartItems.filter(item => item.id !== productId));
  }

  function updateQuantity (productId: string, newQuantity: number) {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  }

  function calculateTotal () {
    return cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
  }

  function sendData (data: Product) {
    const { address, date, name, surname } = data
    let message = `Hola, le escribe ${name} ${surname}, quisiera que por favor, me envíen a esta dirección ${address} con esta fecha ${date}, siendo un total de S/${calculateTotal()} por los siguientes productos:\n\n`;
    cartItems.forEach(product => {
      message += `• ${product.subtitle}:\n   cantidad: ${product.quantity}\n   precio: S/. ${Number(product.price) * product.quantity}\n`;
    });
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+51994986182";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(url, "_blank");
  }

  return (
    <div className="w-full [min-height:calc(100vh-315px)] bg-white text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4 flex flex-col gap-10">
        <h1 className="md:text-6xl text-4xl text-center font-playfair">Carrito de Compras</h1>
        <main className="flex md:flex-row flex-col gap-10">
          <section className="md:w-4/6 w-full flex flex-col">
            {productsList.map((product) => (
              <ProductItem key={product.id} product={product} updateQuantity={updateQuantity} removeProduct={handleRemoveProduct} />
            ))}
          </section>
          <aside className="md:w-2/6 w-full">
            <Form sendData={sendData} total={calculateTotal()} />
          </aside>
        </main>
      </div>
    </div>
  )
}
