'use client'
import { useStore } from "@/app/global/state"
import { useState } from "react";
import Form from './components/Form'
import Products from "./sections/Products";
import NoProducts from "./sections/NoProducts";

export interface ProductItem {
  address: string
  date: string
  name: string
  surname: string
  district: string
  province: string
  number: number
}

export default function CartPage () {
  const productsList = useStore((state) => state.products)
  const [cartItems, setCartItems] = useState(productsList.map(product => ({
    ...product,
    quantity: 1,
  })));

  function calculateTotal () {
    return cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
  }

  const removeProduct = useStore((state) => state.removeProduct)

  function handleRemoveProduct (productId: string) {
    removeProduct(productId);
    setCartItems(cartItems.filter(item => item.id !== productId));
  }

  function updateQuantity (productId: string, newQuantity: number) {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  }


  function sendData (data: ProductItem) {
    const { address, date, name, surname, district, province, number } = data;

    let message = `Hola, Quna.Crochet ✨\n`;
    message += `Deseo comprar ${cartItems.length === 1 ? 'el siguiente producto' : 'los siguientes productos'}:\n\n`;

    cartItems.forEach(product => {
      message += `• ${product.subtitle}:\n   cantidad: ${product.quantity}\n   precio: S/. ${product.princeTo ? Number(product.price) + ' - ' + product.princeTo : Number(product.price) * product.quantity}\n`;
    });

    message += `\nLo deseo para el ${date}\n\n`;
    message += `Mis datos son:\n`;
    message += `- Nombre Completo: ${name} ${surname}\n`;
    message += `- Número: ${number}\n`;
    message += `- Dirección: ${address}\n`;
    message += `- Distrito y provincia: ${district}, ${province}\n`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+51983214218";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(url, "_blank");
  }

  return (
    <div className="w-full [min-height:calc(100vh-320px)] bg-white text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4 flex flex-col gap-10">
        <h1 className="md:text-6xl text-4xl text-center font-playfair">Carrito de Compras</h1>
        <main className="flex md:flex-row flex-col gap-10">
          {cartItems.length > 0 ? (
            <Products productsList={cartItems} updateQuantity={updateQuantity} handleRemoveProduct={handleRemoveProduct} />
          ) : (
            <NoProducts />
          )}
          <aside className="md:w-2/6 w-full">
            <Form productsList={productsList} sendData={sendData} total={calculateTotal()} />
          </aside>
        </main>
      </div>
    </div>
  )
}
