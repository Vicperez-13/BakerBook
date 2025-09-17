import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  // Define complete menu items with your actual bakery items
  const menuItems = [
    {
      id: 1,
      name: "Chocolate Chip Cookies",
      category: "Cookies",
      image: "/src/assets/chocoChips.JPG",
      description:
        "Fresh baked chocolate chip cookies with premium chocolate chips",
      price: "$2.50",
    },
    {
      id: 2,
      name: "Lemon Cookies",
      category: "Cookies",
      image: "/src/assets/Lemon_cooks.jpg",
      description: "Zesty lemon cookies with a perfect tangy sweetness",
      price: "$2.75",
    },
    {
      id: 3,
      name: "Artisan Buns",
      category: "Breads",
      image: "/src/assets/buns.JPG",
      description: "Handcrafted artisan buns, perfect for any meal",
      price: "$4.00",
    },
    {
      id: 4,
      name: "Sourdough Bread",
      category: "Breads",
      image: "/src/assets/sour_dough.jpg",
      description:
        "Traditional sourdough with a perfect crust and tangy flavor",
      price: "$6.50",
    },
    {
      id: 5,
      name: "Fresh Sourdough Slice",
      category: "Breads",
      image: "/src/assets/sour_dough-knife.jpg",
      description: "Freshly sliced sourdough bread, ready to enjoy",
      price: "$1.50",
    },
    {
      id: 6,
      name: "Blueberry Muffins",
      category: "Muffins",
      image: "/src/assets/muffin .png",
      description: "Fluffy muffins bursting with fresh blueberries",
      price: "$3.25",
    },
    // Additional menu items to fill out the menu
    {
      id: 7,
      name: "Banana Nut Muffins",
      category: "Muffins",
      image: "/src/assets/muffin .png",
      description: "Moist banana muffins with crunchy walnuts",
      price: "$3.25",
    },
    {
      id: 8,
      name: "Chocolate Croissants",
      category: "Pastries",
      image: "/src/assets/buns.JPG",
      description: "Buttery croissants filled with rich chocolate",
      price: "$4.50",
    },
    {
      id: 9,
      name: "Cinnamon Rolls",
      category: "Pastries",
      image: "/src/assets/buns.JPG",
      description: "Warm cinnamon rolls with cream cheese glaze",
      price: "$4.75",
    },
    {
      id: 10,
      name: "Apple Pie",
      category: "Pies",
      image: "/src/assets/buns.JPG",
      description: "Classic apple pie with flaky crust and cinnamon spice",
      price: "$18.00",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "Comic Neue, cursive" }}
          >
            Our Complete Menu
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Explore our delicious selection of freshly baked goods, made daily
            with love and the finest ingredients
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-amber-50 border-2 border-amber-300 rounded-full px-8 py-4 pr-16 text-xl font-semibold text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: "Comic Neue, cursive" }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "All" ? "Show All Items" : category}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Item Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.price}
                </div>
              </div>

              {/* Item Details */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-stone-800 mb-3"
                  style={{ fontFamily: "Comic Neue, cursive" }}
                >
                  {item.name}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no items in category */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p
              className="text-2xl text-stone-600"
              style={{ fontFamily: "Comic Neue, cursive" }}
            >
              No items found in this category. Check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Back to Home Button */}
      <div className="text-center pb-12">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center px-8 py-4 bg-stone-600 hover:bg-stone-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ fontFamily: "Comic Neue, cursive" }}
        >
          <svg
            className="mr-3 w-5 h-5"
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
