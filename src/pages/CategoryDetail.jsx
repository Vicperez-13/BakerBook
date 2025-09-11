import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CategoryDetail = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Category data mapping
  const categoryData = {
    breads: {
      title: "Breads",
      description: "Fresh loaves, bagels, and croissants baked daily",
      icon: "🍞",
      color: "bg-amber-100 border-amber-200",
      items: [
        {
          name: "Sourdough Loaves",
          price: "$6.50",
          image: "/src/assets/sour_dough.jpg",
        },
        {
          name: "Everything Bagels",
          price: "$2.25",
          image: "/src/assets/bagels.jpg",
        },
        {
          name: "Butter Croissants",
          price: "$3.75",
          image: "/src/assets/croissants.jpg",
        },
        {
          name: "Whole Wheat Bread",
          price: "$5.50",
          image: "/src/assets/wheat_bread.jpg",
        },
        { name: "Focaccia", price: "$8.00", image: "/src/assets/focaccia.jpg" },
      ],
    },
    pastries: {
      title: "Pastries",
      description: "Delicate Danish, éclairs, and tarts made with precision",
      icon: "🥐",
      color: "bg-yellow-100 border-yellow-200",
      items: [
        {
          name: "Fruit Danish",
          price: "$4.25",
          image: "/src/assets/danish.jpg",
        },
        {
          name: "Chocolate Éclairs",
          price: "$4.75",
          image: "/src/assets/eclairs.jpg",
        },
        {
          name: "Apple Tarts",
          price: "$5.50",
          image: "/src/assets/apple_tarts.jpg",
        },
        {
          name: "Cream Puffs",
          price: "$3.50",
          image: "/src/assets/cream_puffs.jpg",
        },
        {
          name: "Napoleon Cake",
          price: "$6.25",
          image: "/src/assets/napoleon.jpg",
        },
      ],
    },
    "cookies-bars": {
      title: "Cookies & Bars",
      description: "Crispy cookies and chewy bars for every sweet tooth",
      icon: "🍪",
      color: "bg-orange-100 border-orange-200",
      items: [
        {
          name: "Chocolate Chip Cookies",
          price: "$2.50",
          image: "/src/assets/chocoChips.JPG",
        },
        { name: "Brownies", price: "$3.25", image: "/src/assets/brownies.jpg" },
        {
          name: "Snickerdoodles",
          price: "$2.75",
          image: "/src/assets/snickerdoodles.jpg",
        },
        {
          name: "Lemon Bars",
          price: "$3.50",
          image: "/src/assets/Lemon_cooks.jpg",
        },
        {
          name: "Oatmeal Cookies",
          price: "$2.50",
          image: "/src/assets/oatmeal.jpg",
        },
      ],
    },
    "cakes-cupcakes": {
      title: "Cakes & Cupcakes",
      description: "Layered cakes and decorated cupcakes for celebrations",
      icon: "🎂",
      color: "bg-pink-100 border-pink-200",
      items: [
        {
          name: "Chocolate Layer Cake",
          price: "$24.99",
          image: "/src/assets/chocolate_cake.jpg",
        },
        {
          name: "Red Velvet Cupcakes",
          price: "$3.50",
          image: "/src/assets/red_velvet.jpg",
        },
        {
          name: "Carrot Cake",
          price: "$22.99",
          image: "/src/assets/carrot_cake.jpg",
        },
        {
          name: "Vanilla Birthday Cake",
          price: "$26.99",
          image: "/src/assets/birthday_cake.jpg",
        },
        {
          name: "Lemon Cupcakes",
          price: "$3.25",
          image: "/src/assets/lemon_cupcakes.jpg",
        },
      ],
    },
    pies: {
      title: "Pies",
      description: "Fresh fruit and cream pies made with love",
      icon: "🥧",
      color: "bg-green-100 border-green-200",
      items: [
        {
          name: "Apple Pie",
          price: "$18.99",
          image: "/src/assets/apple_pie.jpg",
        },
        {
          name: "Pumpkin Pie",
          price: "$16.99",
          image: "/src/assets/pumpkin_pie.jpg",
        },
        {
          name: "Key Lime Pie",
          price: "$19.99",
          image: "/src/assets/key_lime_pie.jpg",
        },
        {
          name: "Pecan Pie",
          price: "$21.99",
          image: "/src/assets/pecan_pie.jpg",
        },
        {
          name: "Strawberry Cream Pie",
          price: "$17.99",
          image: "/src/assets/strawberry_pie.jpg",
        },
      ],
    },
    muffins: {
      title: "Muffins",
      description: "Soft and fluffy morning treats",
      icon: "🧁",
      color: "bg-blue-100 border-blue-200",
      items: [
        {
          name: "Blueberry Muffins",
          price: "$3.25",
          image: "/src/assets/blueberry_muffins.jpg",
        },
        {
          name: "Banana Nut Muffins",
          price: "$3.50",
          image: "/src/assets/banana_muffins.jpg",
        },
        {
          name: "Chocolate Chip Muffins",
          price: "$3.25",
          image: "/src/assets/choco_muffins.jpg",
        },
        {
          name: "Bran Muffins",
          price: "$2.99",
          image: "/src/assets/bran_muffins.jpg",
        },
        {
          name: "Lemon Poppy Seed",
          price: "$3.25",
          image: "/src/assets/lemon_poppy.jpg",
        },
      ],
    },
    doughnuts: {
      title: "Doughnuts",
      description: "Glazed, filled, and specialty donuts",
      icon: "🍩",
      color: "bg-purple-100 border-purple-200",
      items: [
        {
          name: "Glazed Donuts",
          price: "$2.25",
          image: "/src/assets/glazed_donuts.jpg",
        },
        {
          name: "Jelly-filled",
          price: "$2.75",
          image: "/src/assets/jelly_donuts.jpg",
        },
        {
          name: "Chocolate Frosted",
          price: "$2.50",
          image: "/src/assets/chocolate_donuts.jpg",
        },
        {
          name: "Boston Cream",
          price: "$3.25",
          image: "/src/assets/boston_cream.jpg",
        },
        {
          name: "Old-fashioned",
          price: "$2.25",
          image: "/src/assets/old_fashioned.jpg",
        },
      ],
    },
    biscuits: {
      title: "Biscuits",
      description: "Buttery and flaky biscuits",
      icon: "🥯",
      color: "bg-red-100 border-red-200",
      items: [
        {
          name: "Buttermilk Biscuits",
          price: "$2.50",
          image: "/src/assets/buttermilk_biscuits.jpg",
        },
        {
          name: "Honey Biscuits",
          price: "$2.75",
          image: "/src/assets/honey_biscuits.jpg",
        },
        {
          name: "Cheddar Biscuits",
          price: "$3.25",
          image: "/src/assets/cheddar_biscuits.jpg",
        },
        {
          name: "Sweet Potato Biscuits",
          price: "$2.99",
          image: "/src/assets/sweet_potato_biscuits.jpg",
        },
        {
          name: "Herb Biscuits",
          price: "$2.75",
          image: "/src/assets/herb_biscuits.jpg",
        },
      ],
    },
  };

  const currentCategory = categoryData[category];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Category Not Found
          </h2>
          <button
            onClick={() => navigate("/menu")}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`${currentCategory.color} py-16 border-b-4`}>
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">{currentCategory.icon}</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            {currentCategory.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>
      </div>

      {/* Items Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm">
                    Image: {item.image.split("/").pop()}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Add your image here
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    {item.price}
                  </span>
                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="text-center pb-12 space-x-4">
        <button
          onClick={() => navigate("/menu")}
          className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg
            className="mr-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Menu
        </button>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <svg
            className="mr-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </button>
      </div>
    </div>
  );
};

export default CategoryDetail;
