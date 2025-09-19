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
      name: "Sugar Cookies",
      category: "Cookies",
      image: "/src/assets/sugarC.JPG",
      description: "Classic sugar cookies with the perfect sweet crunch",
    },
    {
      id: 4,
      name: "Artisan Buns",
      category: "Breads",
      image: "/src/assets/buns.JPG",
      description: "Handcrafted artisan buns, perfect for any meal",
    },
    {
      id: 5,
      name: "Sourdough Bread",
      category: "Breads",
      image: "/src/assets/sour_dough.jpg",
      description:
        "Traditional sourdough with a perfect crust and tangy flavor",
    },
    {
      id: 6,
      name: "Crème Brûlée",
      category: "Desserts",
      image: "/src/assets/cremeB.JPG",
      description:
        "Rich custard topped with a perfectly caramelized sugar crust",
    },
  ];

  return (
    <div
      id="pastry-gallery"
      className="py-20"
      style={{
        background:
          "linear-gradient(to right, var(--mocha-latte), var(--mocha-cream), var(--mocha-foam))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Filter Dropdown */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              fontFamily: "Comic Neue, cursive",
              color: "var(--mocha-text)",
            }}
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
                <div
                  className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "var(--mocha-accent)" }}
                >
                  {item.category}
                </div>
              </div>

              {/* Item Details */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    fontFamily: "Comic Neue, cursive",
                    color: "var(--mocha-text)",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--mocha-text-light)" }}
                >
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
