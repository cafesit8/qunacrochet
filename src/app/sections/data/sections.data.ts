type ISection = {
  image: string
  subtitle?: string
  title: string
  link: string
}

export const sections: ISection[] = [{
  image: '/fondo2.jpg',
  subtitle: 'Descubre Nuestras',
  title: 'MACETAS',
  link: '/macetas/pequena'
}, {
  image: '/fondo1.jpg',
  subtitle: 'Descubre Nuestros',
  title: 'RAMOS',
  link: '/ramos'
}, {
  image: '/fondo3.jpg',
  subtitle: 'Descubre Nuestros',
  title: 'ARREGLOS FLORALES',
  link: '/ramos-premiun'
}, {
  image: '/fondo4.jpg',
  subtitle: 'Encuentra el',
  title: 'REGALO IDEAL',
  link: '/personalizados'
}]