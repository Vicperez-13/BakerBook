import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "breads",
      title: "Breads",
      description: "Fresh loaves, bagels, and croissants",
      items: [
        "Sourdough Loaves",
        "Everything Bagels",
        "Butter Croissants",
        "Whole Wheat Bread",
        "Focaccia",
      ],
      icon: "🍞",
      color: "bg-amber-100 border-amber-200",
      route: "/menu/breads",
    },
    {
      id: "cakes-cupcakes",
      title: "Cakes & Cupcakes",
      description: "Layered cakes and decorated cupcakes",
      items: [
        "Chocolate Layer Cake",
        "Red Velvet Cupcakes",
        "Carrot Cake",
        "Vanilla Birthday Cake",
        "Lemon Cupcakes",
      ],
      icon: "🎂",
      color: "bg-pink-100 border-pink-200",
      route: "/menu/cakes-cupcakes",
    },
    {
      id: "cookies-bars",
      title: "Cookies & Bars",
      description: "Crispy cookies and chewy bars",
      items: [
        "Chocolate Chip Cookies",
        "Brownies",
        "Snickerdoodles",
        "Lemon Bars",
        "Oatmeal Cookies",
      ],
      icon: "🍪",
      color: "bg-orange-100 border-orange-200",
      route: "/menu/cookies-bars",
    },
    {
      id: "pastries",
      title: "Pastries",
      description: "Danish, éclairs, and tarts",
      items: [
        "Fruit Danish",
        "Chocolate Éclairs",
        "Apple Tarts",
        "Cream Puffs",
        "Napoleon Cake",
      ],
      icon: "🥐",
      color: "bg-yellow-100 border-yellow-200",
      route: "/menu/pastries",
    },
    {
      id: "pies",
      title: "Pies",
      description: "Fresh fruit and cream pies",
      items: [
        "Apple Pie",
        "Pumpkin Pie",
        "Key Lime Pie",
        "Pecan Pie",
        "Strawberry Cream Pie",
      ],
      icon: "🥧",
      color: "bg-green-100 border-green-200",
      route: "/menu/pies",
    },
    {
      id: "muffins",
      title: "Muffins",
      description: "Soft and fluffy morning treats",
      items: [
        "Blueberry Muffins",
        "Banana Nut Muffins",
        "Chocolate Chip Muffins",
        "Bran Muffins",
        "Lemon Poppy Seed",
      ],
      icon: "🧁",
      color: "bg-blue-100 border-blue-200",
      route: "/menu/muffins",
    },
    {
      id: "doughnuts",
      title: "Doughnuts",
      description: "Glazed, filled, and specialty donuts",
      items: [
        "Glazed Donuts",
        "Jelly-filled",
        "Chocolate Frosted",
        "Boston Cream",
        "Old-fashioned",
      ],
      icon: "🍩",
      color: "bg-purple-100 border-purple-200",
      route: "/menu/doughnuts",
    },
    {
      id: "biscuits",
      title: "Biscuits",
      description: "Buttery and flaky biscuits",
      items: [
        "Buttermilk Biscuits",
        "Honey Biscuits",
        "Cheddar Biscuits",
        "Sweet Potato Biscuits",
        "Herb Biscuits",
      ],
      icon: "🥯",
      color: "bg-red-100 border-red-200",
      route: "/menu/biscuits",
    },
  ];

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Explore our delicious selection of freshly baked goods, made daily
            with love and the finest ingredients
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.route)}
              className={`${category.color} rounded-xl border-2 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>

              <div className="space-y-2 mb-4">
                {category.items.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-60 rounded-md p-2 text-sm text-gray-700"
                  >
                    {item}
                  </div>
                ))}
                {category.items.length > 3 && (
                  <div className="text-center text-sm text-gray-500 font-medium">
                    +{category.items.length - 3} more items...
                  </div>
                )}
              </div>

              <div className="text-center">
                <div className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                  <span>View Category</span>
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center pb-12">
        <button
          onClick={() => navigate("/")}
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
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Menu;
