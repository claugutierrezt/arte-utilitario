const products = [
  {
    id: '1',
    name: 'Sidra',
    price: 180,
    category: 'viajes',
    img: '/img/sidra.png',
    stock: 10,
    description: 'Una escena cotidiana convertida en una pieza de arte utilitario.'
  },
  {
    id: '2',
    name: 'La Regenta',
    price: 190,
    category: 'viajes',
    img: '/img/La regenta.png',
    stock: 8,
    description: 'Ilustración inspirada en arquitectura, historia y recorridos urbanos.'
  },
  {
    id: '3',
    name: 'Concierto',
    price: 175,
    category: 'musicos',
    img: '/img/concierto.png',
    stock: 6,
    description: 'Un instante musical capturado para acompañar tus reuniones.'
  },
  {
    id: '4',
    name: 'Músicos',
    price: 185,
    category: 'musicos',
    img: '/img/músicos.png',
    stock: 7,
    description: 'Música de calle, personajes y momentos convertidos en ilustración.'
  },
  {
    id: '5',
    name: 'Taberna',
    price: 200,
    category: 'momentos',
    img: '/img/taberna.png',
    stock: 9,
    description: 'Detalles de una barra y objetos cotidianos vistos desde la ilustración.'
  }, 
  {
    id: '6',
    name: 'Aceitunas',
    price: 180,
    category: 'momentos',
    img: '/img/aceitunas.png',
    stock: 5,
    description: 'Color, mercado y escenas cotidianas para llevarlas a la mesa.'
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}