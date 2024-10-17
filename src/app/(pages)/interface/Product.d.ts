export interface Image {
  src: string
  alt: string
}

export interface Product {
  id: string
  subtitle: string
  description: string
  list?: string[]
  image: Image[]
  price: string
  princeTo?: string
}