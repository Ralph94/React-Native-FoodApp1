const popularData = [
  {
    
    id: '1',
    logo: require('../images/tti.png'),
    image: require('../images/taco1.png'),
    title: 'Tacos De Asda',
    weight: '9.7 ounces',
    rating: '5.0 ' + '🌟',
    price: '$'+ 8.99,
    sizeName: 'Platter',
    sizeNumber: 3 + ' tacos',
    tortilla: 'flower',
    deliveryTime: 30 + ' minutes',
    ingredients: [
      {
        id: '1',
        name: 'ham',
        image: require('../images/meat.png'),
      },
      {
        id: '2',
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: '3',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: '4',
        name: 'garlic',
        image: require('../images/garlic.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/taco2.png'),
    title: 'Shrimp Tacos',
    weight: '1/4',
    rating: '4.0 ' + '🌟',
    price: '$'+ 5.99,
    sizeName: 'Platter',
    sizeNumber: 3 + ' tacos',
    tortilla: 'corn',
    deliveryTime: 40 + ' minutes',
    ingredients: [
      {
        id: '1',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: '2',
        name: 'garlic',
        image: require('../images/garlic.png'),
      },
    ],
  },
  {
    id: '3',
    image: require('../images/taco3.png'),
    title: 'Chilaquiles Tacos',
    weight: '3 Pounds',
    rating: '5.0 ' + '🌟',
    price: '$'+ 9.99,
    sizeName: 'Platter',
    sizeNumber: 3 + ' tacos',
    tortilla: 'rice',
    deliveryTime: 20 + ' minutes',
    ingredients: [
      {
        id: '1',
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: '2',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
    ],
  },
];

export default popularData;




