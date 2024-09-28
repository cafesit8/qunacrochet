export interface Image {
  src: string
  alt: string
}

export interface Product {
  subtitle: string
  description: string
  list?: string[]
  image: Image[]
  price: string
}