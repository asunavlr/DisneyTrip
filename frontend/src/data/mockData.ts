
export interface Accommodation {
  id: string;
  name: string;
  type: string;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  price: number;
  location: string;
  amenities: string[];
  description: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  image: string;
  gallery: string[];
  category: string;
  price: number;
  transmission: string;
  passengers: number;
  luggage: number;
  features: string[];
  description: string;
}

export interface Ticket {
  id: string;
  park: string;
  type: string;
  image: string;
  gallery: string[];
  price: number;
  duration: string;
  description: string;
  features: string[];
}

export interface Package {
  id: string;
  name: string;
  image: string;
  gallery: string[];
  duration: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  accommodationId: string;
  carId: string;
  ticketIds: string[];
  highlights: string[];
  description: string;
  detailedDescription: string;
}

export const accommodations: Accommodation[] = [
  {
    id: "acc1",
    name: "Casa 3 quartos - Windsor Hills",
    type: "Casa Completa",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.9,
    reviews: 324,
    price: 450,
    location: "Windsor Hills Resort - 5 min da Disney",
    amenities: ["Piscina Privada", "Wi-Fi", "Cozinha Completa", "Estacionamento", "TV Smart", "Ar Condicionado"],
    description: "Casa luxuosa com tema Disney, perfeita para famílias. Piscina aquecida e decoração temática encantadora.",
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 8
  },
  {
    id: "acc2",
    name: "Casa 4 quartos - Champions Gate",
    type: "Casa Familiar",
    image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.7,
    reviews: 198,
    price: 520,
    location: "Champions Gate Resort - 10 min da Disney",
    amenities: ["Piscina", "Wi-Fi", "Cozinha", "Jogos", "TV Smart", "Churrasqueira"],
    description: "Casa espaçosa com área de entretenimento e piscina. Ideal para grupos grandes e famílias.",
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 10
  },
  {
    id: "acc3",
    name: "Casa 5 quartos - Encore Resort",
    type: "Casa Premium",
    image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    rating: 4.8,
    reviews: 156,
    price: 680,
    location: "Encore Resort - Resort de luxo",
    amenities: ["Wi-Fi", "Cozinha", "Varanda", "TV Smart", "Academia", "Piscina do condomínio"],
    description: "Casa premium em resort de luxo com todas as comodidades para uma estadia inesquecível.",
    bedrooms: 5,
    bathrooms: 4,
    maxGuests: 12
  }
];

export const cars: Car[] = [
  {
    id: "car1",
    brand: "Nissan",
    model: "Kicks",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "SUV",
    price: 89,
    transmission: "Automático",
    passengers: 5,
    luggage: 3,
    features: ["GPS Integrado", "Bluetooth", "Ar Condicionado", "Porta-copos", "USB"],
    description: "SUV compacto e econômico, perfeito para famílias pequenas explorarem Orlando com conforto e segurança."
  },
  {
    id: "car2",
    brand: "Toyota",
    model: "Corolla",
    image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "Sedan",
    price: 65,
    transmission: "Automático",
    passengers: 5,
    luggage: 3,
    features: ["GPS", "Bluetooth", "Ar Condicionado", "Câmera de ré"],
    description: "Sedan confiável e econômico, ideal para casais ou famílias pequenas que valorizam conforto e economia."
  },
  {
    id: "car3",
    brand: "Jeep",
    model: "Compass",
    image: "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "SUV",
    price: 95,
    transmission: "Automático",
    passengers: 7,
    luggage: 5,
    features: ["GPS", "Bluetooth", "Ar Condicionado", "Tração 4x4", "Teto Solar"],
    description: "SUV robusto e espaçoso, perfeito para famílias grandes que querem explorar Orlando com estilo e aventura."
  }
];

export const tickets: Ticket[] = [
  {
    id: "ticket1",
    park: "Magic Kingdom",
    type: "4 dias",
    image: "https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: 420,
    duration: "4 dias",
    description: "Acesso completo aos parques Disney por 4 dias consecutivos com todas as atrações incluídas.",
    features: ["FastPass incluído", "Acesso a todas as atrações", "Shows e paradas", "Park Hopper"]
  },
  {
    id: "ticket2",
    park: "Disney Parks",
    type: "5 dias",
    image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: 510,
    duration: "5 dias",
    description: "Explore todos os parques Disney por 5 dias com acesso ilimitado e benefícios premium.",
    features: ["Todos os parques", "Park Hopper Premium", "FastPass+", "Reservas de restaurantes"]
  },
  {
    id: "ticket3",
    park: "Disney World",
    type: "7 dias",
    image: "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    price: 690,
    duration: "7 dias",
    description: "A experiência Disney mais completa com 7 dias de acesso ilimitado a todos os parques e atrações.",
    features: ["Acesso completo", "Park Hopper Plus", "Parques aquáticos", "Experiências VIP"]
  }
];

export const packages: Package[] = [
  {
    id: "pkg1",
    name: "Disney Magic House",
    image: "https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    duration: "4 dias / 3 noites",
    originalPrice: 19800,
    discountPrice: 19800,
    discount: 0,
    accommodationId: "acc1",
    carId: "car1",
    ticketIds: ["ticket1"],
    highlights: ["Casa 3 quartos Windsor Hills", "SUV Nissan Kicks", "Ingressos 4 dias parques"],
    description: "Pacote econômico perfeito para famílias que querem viver a magia Disney.",
    detailedDescription: "O pacote Disney Magic House oferece uma experiência completa e acessível para sua família. Inclui hospedagem em uma encantadora casa de 3 quartos no Windsor Hills Resort, um SUV Nissan Kicks para suas aventuras, e ingressos para 4 dias nos parques Disney. Perfeito para famílias de até 8 pessoas que querem criar memórias mágicas sem comprometer o orçamento."
  },
  {
    id: "pkg2",
    name: "Disney Family Villa",
    image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    duration: "5 dias / 4 noites",
    originalPrice: 23400,
    discountPrice: 23400,
    discount: 0,
    accommodationId: "acc2",
    carId: "car2",
    ticketIds: ["ticket2"],
    highlights: ["Casa 4 quartos Champions Gate", "Sedan Toyota Corolla", "Ingressos 5 dias parques"],
    description: "Pacote ideal para famílias que buscam conforto e praticidade.",
    detailedDescription: "O Disney Family Villa é o equilíbrio perfeito entre conforto e valor. Desfrute de uma espaçosa casa de 4 quartos no Champions Gate Resort, um confiável sedan Toyota Corolla, e 5 dias completos de diversão nos parques Disney. Este pacote é ideal para famílias que valorizam espaço, comodidade e uma experiência Disney completa."
  },
  {
    id: "pkg3",
    name: "Disney Premium Stay",
    image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    duration: "7 dias / 6 noites",
    originalPrice: 31200,
    discountPrice: 31200,
    discount: 0,
    accommodationId: "acc3",
    carId: "car3",
    ticketIds: ["ticket3"],
    highlights: ["Casa 5 quartos Encore Resort", "SUV Jeep Compass", "Ingressos 7 dias parques"],
    description: "A experiência Disney mais luxuosa e completa para grupos grandes.",
    detailedDescription: "O Disney Premium Stay é nossa oferta mais exclusiva. Hospede-se em uma magnífica casa de 5 quartos no luxuoso Encore Resort, explore Orlando com um robusto SUV Jeep Compass, e desfrute de 7 dias completos de magia nos parques Disney. Este pacote premium é perfeito para grupos grandes e famílias que desejam a experiência Disney mais completa e luxuosa possível."
  }
];
