import { create } from 'zustand'
import { Product } from '../(pages)/interface/Product'

type state = {
  products: Product[],
  searchProducts: string,
  setSearchProducts: (searchProducts: string) => void
  addProduct: (products: Product) => void
  removeProduct: (id: string) => void
}

export const useStore = create<state>((set) => ({
  products: [],
  searchProducts: '',
  setSearchProducts: (searchProducts: string) => set({ searchProducts }),
  addProduct: (product: Product) => set((state) => ({
    products: [...state.products, product]
  })),
  removeProduct: (id: string) => set((state) => ({
    products: state.products.filter((product) => product.id !== id)
  }))
}))