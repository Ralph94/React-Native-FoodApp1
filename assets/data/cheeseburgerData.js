const cheeseburgerData = [
  {
    id: '1',
    image: require('../images/cheeseburger1.png'),
    title: 'Hamburger',
    weight: '1 pound',
    rating: '5.0 ' + '🌟',
    price: 12.95,
    sizeName: '14',
    sizeNumber: '1 serving',
    Bun: 'Pretzal',
    deliveryTime: 20 + ' minutes',
    ingredients: [
      {
        id: '1',
        name: 'ham',
        image: require('../images/ham.png'),
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
    image: require('../images/cheeseburger2.png'),
    title: 'Veggy Burger',
    weight: '120 grams',
    rating: '4.0 ' + '🌟',
    price: 5.99,
    sizeName: 'Small',
    sizeNumber: 10,
    Bun: 'Sesame seed',
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
    image: require('../images/cheeseburger3.png'),
    title: 'Cheeseburger',
    weight: '110 grams',
    rating: '5.0 ' + '🌟',
    price: '$' + 9.99,
    sizeName: 'Large',
    sizeNumber: 6 +' ounces',
    Bun: 'Brioche',
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

export default cheeseburgerData;




