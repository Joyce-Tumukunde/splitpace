// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Large 6-room apartment with a beautiful terrace',
    image: House1,
    imageLg: House1Lg,
    Location: 'Kimisagara',
    address: 'KN 20 AVE, Kigali, Rwanda',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2024',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Henriette Uwase',
      phone: '078 123 4567',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      '5i large design apartment with terrace',
    image: House2,
    imageLg: House2Lg,
    Location: 'Gishushu',
    address: 'Kk 205 AVE, Kigali, Rwanda',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2024',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Bosco Niyonkuru',
      phone: '078 123 4567',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      '3-room apartment with a beautiful terrace',
    image: House3,
    imageLg: House3Lg,
    Location: 'Kacyiru',
    address: 'Kk 102 AVE, Kigali, Rwanda',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2024',
    price: '130000',
    agent: {
      image: Agent3,
      name: 'Jean Claude',
      phone: '078 123 4567',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Magnificent duplex in a private villa',
    image: House4,
    imageLg: House4Lg,
    Location: 'Remera',
    address: 'kk 50 AVE, Kigali, Rwanda',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2024',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'kenda Lora',
      phone: '078 123 4567',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      '4-Bedroom Duplex with Private Garden.',
    image: House5,
    imageLg: House5Lg,
    Location: 'Gikondo',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    Location: 'Kibagabaga',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2024',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Teta Aleen',
      phone: '078 123 4567',
    },
  },
  {
    id: 7,
    type: 'Apartment',
    name: 'Apartment 1',
    description:
      'Modern 3-Bedroom Villa with Stylish Kitchen.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    Location: 'Gasabo',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2024',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Laenna Smith',
      phone: '078 123 4567',
    },
  },
  {
    id: 8,
    type: 'Apartment',
    name: 'Apartment 2',
    description:
      'Spacious 5-Bedroom Residence with Outdoor Patio.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    Location: 'Kimironko',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2023',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Linda Smith',
      phone: '078 123 4567',
    },
  },
  {
    id: 9,
    type: 'Apartment',
    name: 'Apartment 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    Location: 'Kicukiro',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2024',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'willy Smith',
      phone: '078 123 4567',
    },
  },
  {
    id: 17,
    type: 'Apartment',
    name: 'Apartment 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    Location: 'Kabeza',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2024',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Aline umutoni',
      phone: '078 123 4567',
    },
  },
];