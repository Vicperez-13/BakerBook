import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import PastryGallery from "./PastryGallery";

const Body = () => {
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
    },
    {
      id: "cakes-cupcakes",
      title: "Cakes & Cupcakes",
      description: "Layered cakes and cupcakes",
      items: [
        "Chocolate Layer Cake",
        "Red Velvet Cupcakes",
        "Carrot Cake",
        "Vanilla Birthday Cake",
        "Lemon Cupcakes",
      ],
      icon: "🎂",
      color: "bg-pink-100 border-pink-200",
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
    },
  ];

  // Local pastry images from assets (use string paths for Vite)
  const pastryImages = [
    "/src/assets/buns.JPG",
    "/src/assets/chocoChips.JPG",
    "/src/assets/Lemon_cooks.jpg",
    "/src/assets/sour_dough-knife.jpg",
    "/src/assets/sour_dough.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Baked Goods
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our wide selection of freshly baked goods, made daily with
          the finest ingredients
        </p>
      </div>

      {/* Simplified Category Overview */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 mb-12 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {categories.map((category) => (
            <div key={category.id} className="text-center group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {category.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-700 group-hover:text-amber-600 transition-colors">
                {category.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            From fresh breads and pastries to decadent cakes and cookies -
            explore our full menu of daily-baked goods
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>View Full Menu</span>
            <svg
              className="ml-2 w-5 h-5"
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
          </Link>
        </div>
      </div>

      {/* Pastry Gallery Slideshow */}
      <PastryGallery pastries={pastryImages} />
    </div>
  );
};

export default Body;
