import { create } from 'zustand'
import { Product } from '../(pages)/interface/Product'

type state = {
  products: Product[],
  addProduct: (products: Product) => void
  removeProduct: (id: string) => void
}

export const useStore = create<state>((set) => ({
  products: [],
  addProduct: (product: Product) => set((state) => ({
    products: [...state.products, product]
  })),
  removeProduct: (id: string) => set((state) => ({
    products: state.products.filter((product) => product.id !== id)
  }))
}))