import React, { useState } from "react";

const SpecialsSection = () => {
  // Define special items with categories
  const specialItems = [
    {
      id: 1,
      name: "Chocolate Chip Cookies",
      category: "Cookies",
      image: "/src/assets/chocoChips.JPG",
      description: "Fresh baked chocolate chip cookies with premium chocolate",
    },
    {
      id: 2,
      name: "Lemon Cookies",
      category: "Cookies",
      image: "/src/assets/Lemon_cooks.jpg",
      description: "Zesty lemon cookies with a perfect tangy sweetness",
    },
    {
      id: 3,
      name: "Artisan Buns",
      category: "Breads",
      image: "/src/assets/buns.JPG",
      description: "Handcrafted artisan buns, perfect for any meal",
    },
    {
      id: 4,
      name: "Sourdough Bread",
      category: "Breads",
      image: "/src/assets/sour_dough.jpg",
      description:
        "Traditional sourdough with a perfect crust and tangy flavor",
    },
    {
      id: 5,
      name: "Fresh Sourdough Slice",
      category: "Breads",
      image: "/src/assets/sour_dough-knife.jpg",
      description: "Freshly sliced sourdough bread, ready to enjoy",
    },
    {
      id: 6,
      name: "Blueberry Muffins",
      category: "Muffins",
      image: "/src/assets/muffin .png",
      description: "Fluffy muffins bursting with fresh blueberries",
    },
  ];

  return (
    <div
      id="pastry-gallery"
      className="py-20"
      style={{
        background:
          "linear-gradient(to right, rgba(82, 101, 84, 0.15), rgba(107, 142, 123, 0.12), rgba(75, 95, 77, 0.15))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Filter Dropdown */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-800 mb-6"
            style={{ fontFamily: "Comic Neue, cursive" }}
          >
            This Month's Specials
          </h2>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Item Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
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
      </div>
    </div>
  );
};

export default SpecialsSection;
