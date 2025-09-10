import React from "react";
import CategoryCard from "./CategoryCard";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Body;
