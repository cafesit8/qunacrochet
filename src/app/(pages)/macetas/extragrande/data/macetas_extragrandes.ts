import type{ Product } from "@/app/(pages)/interface/Product";

export const macetas_extragrandes: Product[] = [{
  id: crypto.randomUUID(),
  subtitle: 'Maceta con siete rosas realistas a crochet',
  description: 'De los diseños más grandes y hermosos de macetas. Ideal para un centro de mesa, salas u otro lugar en el que se desee decorar con unas rosas eternas 🌹. Cada rosa está compuesta por nueve pétalos. Además, las flores cuentan con estructura alambrada en tallo y hojas ✨. Todo el diseño mide 30 centímetros de alto x 30 centímetros de ancho, aproximadamente 🧶. *Puede personalizar el color de las rosas y de la maceta.',
  price: '459.00',
  image: [{
    src: '/macetas/extragrande/7rosas/1.webp',
    alt: 'maceta extragrande de qunacrochet'
  }, {
    src: '/macetas/extragrande/7rosas/2.webp',
    alt: 'maceta extragrande de qunacrochet'
  }]
}, {
  id: crypto.randomUUID(),
  subtitle: 'Maceta con once flores y cuatro abejitas a crochet',
  description: 'Bellísima maceta, una de las más grandes, ideal para un centro de mesa, salas u otro lugar en el que se desee decorar con diversas flores eternas 💐. Las flores cuentan con estructura alambrada en tallo y hojas ✨. Todo el diseño mide 30 centímetros de alto x 30 centímetros de ancho, aproximadamente 🧶',
  list: ['1 girasol', '1 rosa (color a elección)', '1 lirio (color a elección)', '5 tulipanes (colores a elección)', '2 margaritas', '1 lavanda', '4 abejitas'],
  price: '399.00',
  image: [{
    src: '/macetas/extragrande/11flores/1.webp',
    alt: 'maceta extragrande de qunacrochet'
  }, {
    src: '/macetas/extragrande/11flores/2.webp',
    alt: 'maceta extragrande de qunacrochet'
  }]
}]