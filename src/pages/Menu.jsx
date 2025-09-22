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
      image: "/chocoChips.JPG",
      description:
        "Fresh baked chocolate chip cookies with premium chocolate chips",
      price: "$2.50",
    },
    {
      id: 2,
      name: "Lemon Cookies",
      category: "Cookies",
      image: "/Lemon_cooks.jpg",
      description: "Zesty lemon cookies with a perfect tangy sweetness",
      price: "$2.75",
    },
    {
      id: 3,
      name: "Sugar Cookies",
      category: "Cookies",
      image: "/sugarC.JPG",
      description: "Classic sugar cookies with the perfect sweet crunch",
      price: "$2.25",
    },
    {
      id: 4,
      name: "Artisan Buns",
      category: "Breads",
      image: "/buns.JPG",
      description: "Handcrafted artisan buns, perfect for any meal",
      price: "$4.00",
    },
    {
      id: 5,
      name: "Sourdough Bread",
      category: "Breads",
      image: "/sour_dough.jpg",
      description:
        "Traditional sourdough with a perfect crust and tangy flavor",
      price: "$6.50",
    },
    {
      id: 6,
      name: "Crème Brûlée",
      category: "Desserts",
      image: "/cremeB.JPG",
      description:
        "Rich custard topped with a perfectly caramelized sugar crust",
      price: "$6.75",
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
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--mocha-foam)" }}
    >
      {/* Page Title */}
      <div className="container mx-auto px-4 pt-40 pb-8">
        <div className="text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "Comic Neue, cursive",
              color: "var(--mocha-text)",
            }}
          >
            Pastries
          </h1>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-start mb-8">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none border-2 rounded-full px-8 py-4 pr-16 text-xl font-semibold focus:outline-none cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                fontFamily: "Comic Neue, cursive",
                backgroundColor: "var(--mocha-latte)",
                borderColor: "var(--mocha-cream)",
                color: "var(--mocha-text)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--mocha-accent)";
                e.target.style.boxShadow = `0 0 0 2px ${getComputedStyle(
                  document.documentElement
                ).getPropertyValue("--mocha-light")}33`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--mocha-cream)";
                e.target.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
              }}
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
                className="w-6 h-6"
                style={{ color: "var(--mocha-accent)" }}
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
                <div
                  className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "var(--mocha-accent)" }}
                >
                  {item.category}
                </div>
                {/* Price Badge */}
                <div
                  className="absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-bold"
                  style={{ backgroundColor: "var(--mocha-medium)" }}
                >
                  {item.price}
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

        {/* Show message if no items in category */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p
              className="text-2xl"
              style={{
                fontFamily: "Comic Neue, cursive",
                color: "var(--mocha-text-light)",
              }}
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
          className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            fontFamily: "Comic Neue, cursive",
            backgroundColor: "var(--mocha-medium)",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "var(--mocha-dark)")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "var(--mocha-medium)")
          }
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
