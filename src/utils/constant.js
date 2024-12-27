
  export const dropdownData = [
    {
      title: "Dairy, Bread & Eggs",
      items: [
        "Milk",
        "Milk Drinks",
        "Curd & Yogurt",
        "Eggs",
        "Bread",
        "Buns & Bakery",
        "Butter & More",
        "Cheese",
        "Paneer & Tofu",
        "Cream & Whitener",
        "Condensed Milk",
        "Vegan Drinks",
      ],
    },
    {
      title: "Snacks & Munchies",
      items: [
        "Chips & Crisps",
        "Nachos",
        "Popcorn",
        "Bhujia & Mixtures",
        "Namkeen Snacks",
        "Healthy Snacks",
        "Cakes & Rolls",
        "Energy Bars",
        "Papad & Fryums",
        "Rusks & Wafers",
      ],
    },
    {
      title: "Fruits & Vegetables",
      items: [
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Fresh Fruits",
        "Organic Fruits & Vegetables",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Flower Bouquets, Bunches",
      ],
    },
    {
      title: "Cold Drinks & Juices" ,
      items: [
        "Soft Drinks",
        "Fruit Juices",
        "Coldpress",
        "Energy Drinks",
        "Water & Ice Cubes",
        "Soda & Mixers",
        "Concentrates & Syrups",
        "Detox & Energy Drinks",
        "Juice Collection",
      ],
    },
  ];

  export const products = [
    {
      id: 1,
      name: "Haldiram's Sev Bhujia",
      category: "Snack & Munchies",
      image: require("../images/category-baby-care.jpg"), 
      price: 18,
      originalPrice: 24,
      rating: 4.5,
      sale: true,
      discount: 'sale',
    },
    {
      id: 2,
      name: "NutriChoice Digestive",
      category: "Bakery & Biscuits",
      image: require("../images/category-atta-rice-dal.jpg"),
      price: 24,
      originalPrice: 30,
      rating: 4.0,
      sale: true,
      discount: 14,
    },
    {
        id: 3,
        name: "Cadbury 5 Star Chocolate",
        category: "Bakery & Biscuits",
        image: require("../images/category-bakery-biscuits.jpg"),
        price: 32,
        originalPrice: 35,
        rating: 5.0,
        sale: false,
        discount: 0,

    },
    {
        id: 4,
        name: "Onion Flavour Potato",
        category: "Snack & Munchies",
        image: require("../images/category-chicken-meat-fish.jpg"),
        price: 3,
        originalPrice: 5,
        rating: 3.5,
        sale: true,
        discount: 'hot',

    },

    {
        id: 5,
        name: "Salted Instant Popcorn",
        category: "Instant Food",
        image: require("../images/category-cleaning-essentials.jpg"),
        price: 13,
        originalPrice: 18,
        rating: 4.5,
        sale: false,
        discount: 0,

    },

    {
        id: 6,
        name: "Blueberry Greek Yogurt",
        category: "Dairy, Bread & Eggs",
        image: require("../images/category-dairy-bread-eggs.jpg"),
        price: 18,
        originalPrice: 24,
        rating: 4.5,
        sale: true,
        discount: 'sale',

    },
    {
        id: 7,
        name: "Britannia Cheese Slices",
        category: "Dairy, Bread & Eggs",
        image: require("../images/category-instant-food.jpg"),
        price: 24,
        originalPrice: '',
        rating: 5.0,
        sale: false,
        discount: 0,

    },
    {
        id: 8,
        name: "Kellogg's Original Cereals",
        category: "Instant Food",
        image: require("../images/category-pet-care.jpg"),
        price: 32,
        originalPrice: 35,
        rating: 4,
        sale: false,
        discount: 0,

    },
    {
        id: 9,
        name: "Slurrp Millet Chocolate",
        category: "Snack & Munchies",
        image: require("../images/category-snack-munchies.jpg"),
        price: 3,
        originalPrice: 5,
        rating: 4.5,
        sale: false,
        discount: 0,

    },
    {
        id: 10,
        name: "Amul Butter - 500 g",
        category: "Dairy, Bread & Eggs",
        image: require("../images/category-tea-coffee-drinks.jpg"),
        price: 13,
        originalPrice: 18,
        rating: 3.5,
        sale: false,
        discount: 0,

    },
  ];
 


  export const allProducts = [
    {
      id: 1,
      title: 'Pampers New Medium - 2 Diaper Pants, 2 pcs',
      rating: 4.2,
      reviews: 34,
      mainPrice: 25,
      originalPrice: 50,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
    {
      id: 2,
      title: 'Huggies Newborn Diaper - 4 pcs',
      rating: 4.5,
      reviews: 120,
      mainPrice: 30,
      originalPrice: 60,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
    {
      id: 3,
      title: 'Huggies Newborn Diaper - 4 pcs',
      rating: 4.5,
      reviews: 120,
      mainPrice: 30,
      originalPrice: 60,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
    {
      id: 4,
      title: 'Huggies Newborn Diaper - 4 pcs',
      rating: 4.5,
      reviews: 120,
      mainPrice: 30,
      originalPrice: 60,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
    {
      id: 5,
      title: 'Huggies Newborn Diaper - 4 pcs',
      rating: 4.5,
      reviews: 120,
      mainPrice: 30,
      originalPrice: 60,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
    {
      id: 6,
      title: 'Huggies Newborn Diaper - 4 pcs',
      rating: 4.5,
      reviews: 120,
      mainPrice: 30,
      originalPrice: 60,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
    {
      id: 7,
      title: 'Huggies Newborn Diaper - 4 pcs',
      rating: 4.5,
      reviews: 120,
      mainPrice: 30,
      originalPrice: 60,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
    {
      id: 8,
      title: 'Huggies Newborn Diaper - 4 pcs',
      rating: 4.5,
      reviews: 120,
      mainPrice: 30,
      originalPrice: 60,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
    {
      id: 9,
      title: 'Huggies Newborn Diaper - 4 pcs',
      rating: 4.5,
      reviews: 120,
      mainPrice: 30,
      originalPrice: 60,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
    {
      id: 10,
      title: 'Huggies Newborn Diaper - 4 pcs',
      rating: 4.5,
      reviews: 120,
      mainPrice: 30,
      originalPrice: 60,
      discount: '50% Off',
      images: [
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
        require('../images/category-baby-care.jpg'),
      ],
    },
  ];
// constant.js
export const filterData = {
  categories: [
    { title: 'Electronics', items: ['Laptop', 'Mobile', 'Headphone', 'Camera'] },
    { title: 'Clothing', items: ['T-shirt', 'Jeans', 'Jacket', 'Shoes'] },
    { title: 'Furniture', items: ['Sofa', 'Table', 'Chair', 'Bed'] },
  ],
  stores: ['Snack & Munchies', 'DealShare', 'Dmart', 'Blinkit', 'BigBasket', 'StoreFront', 'Spencers', 'OnlineGrocery'],
  ratings: [
    { value: 5, stars: 5 },
    { value: 4, stars: 4 },
    { value: 3, stars: 3 },
    { value: 2, stars: 2 },
    { value: 1, stars: 1 },
  ],
  priceRange: {
    min: 0,
    max: 1000,
  },
};




// constant.js
export const searchData = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];
// constants.js
export const wishlistData = [
  {
    id: 1,
    name: "Tall Easy Tote-2",
    price: 110.00,
    image: "https://via.placeholder.com/60", // Placeholder image
  },
  // Add more products here if needed
];
// constants.js
export const paginationData = {
  totalPages: 12, // Total number of pages
};








// servicesData.js
export const servicesData = [
  {
    category: "Dairy, Bread & Eggs",
    items: [
      "Butter",
      "Milk Drinks",
      "Curd & Yogurt",
      "Eggs",
      "Buns & Bakery",
      "Cheese",
      "Condensed Milk",
      "Dairy Products",
    ],
  },
  {
    category: "Breakfast & Instant Food",
    items: [
      "Breakfast Cereal",
      "Noodles, Pasta & Soup",
      "Frozen Veg Snacks",
      "Frozen Non-Veg Snacks",
      "Vermicelli",
      "Instant Mixes",
      "Batter",
      "Fruit and Juices",
    ],
  },
  {
    category: "Cold Drinks & Juices",
    items: [
      "Soft Drinks",
      "Fruit Juices",
      "Coldpress",
      "Water & Ice Cubes",
      "Soda & Mixers",
      "Health Drinks",
      "Herbal Drinks",
      "Milk Drinks",
    ],
  },
];

export const menuData = {
  departments: [
    { name: "Dairy, Bread & Eggs", path: "/Shop" },
    { name: "Snacks & Munchies", path: "/Shop" },
    { name: "Fruits & Vegetables", path: "/Shop" },
    { name: "Cold Drinks & Juices", path: "/Shop" },
    { name: "Breakfast & Instant Food", path: "/Shop" },
    { name: "Bakery & Biscuits", path: "/Shop" },
    { name: "Chicken, Meat & Fish", path: "/Shop" },
  ],
  about: [
    { name: "Blog", path: "/Blog" },
    { name: "Blog Category", path: "/BlogCategory" },
    { name: "About us", path: "/AboutUs" },
    { name: "Contact", path: "/Contact" },
  ],
  shop: [
    { name: "Shop", path: "/Shop" },
    { name: "Shop Wishlist", path: "/ShopWishList" },
    { name: "Shop Cart", path: "/ShopCart" },
    { name: "Shop Checkout", path: "/ShopCheckOut" },
  ],
  stores: [
    { name: "Store List", path: "/StoreList" },
    { name: "Single Store", path: "/SingleShop" },
  ],
 account :[
  { name: "Sign in", path: "/MyAccountSignIn" },
  { name: "Signup", path: "/MyAccountSignUp" },
  { name: "Forgot Password", path: "/ForgotPassword" },
  { name: "Orders", path: "/MyAccountOrder" },
  { name: "Settings", path: "/MyAccountSetting" },
  { name: "Address", path: "/MyAccountAddress" },
  { name: "Payment Method", path: "/MyAcconutPaymentMethod" },
  { name: "Notification", path: "/MyAcconutNotification" },

 ]
};
