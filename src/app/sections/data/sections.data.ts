type ISection = {
  image: string
  subtitle?: string
  title: string
  link: string
}

export const sections: ISection[] = [{
  image: '/fondo2.webp',
  subtitle: 'Descubre Nuestras',
  title: 'MACETAS',
  link: '/macetas/pequena'
}, {
  image: '/fondo1.webp',
  subtitle: 'Descubre Nuestros',
  title: 'RAMOS',
  link: '/ramos'
}, {
  image: '/fondo3.webp',
  subtitle: 'Descubre Nuestros',
  title: 'ARREGLOS FLORALES',
  link: '/ramos-premiun'
}, {
  image: '/fondo4.webp',
  subtitle: 'Encuentra el',
  title: 'REGALO IDEAL',
  link: '/personalizados'
}]