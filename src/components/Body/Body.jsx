import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import PastryGallery from "./PastryGallery";
import ContactSection from "./ContactSection";

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
      {/* Hero Section with Images and Quote */}
      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 mb-12 shadow-lg min-h-[500px] overflow-hidden">
        {/* Ava Image - Right Side */}
        <div className="absolute top-4 right-4 z-10">
          <img
            src="/src/assets/ava.png"
            alt="Ava"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Quote Section - Middle Left, positioned lower */}
        <div className="flex items-end justify-start min-h-[400px] pl-4 md:pl-8 pb-16">
          <div className="max-w-lg">
            <blockquote className="text-lg md:text-xl font-serif italic text-gray-700 leading-relaxed mb-6">
              "Baking is love made visible. Every pastry tells a story, every
              bread carries warmth, and every sweet treat brings joy to those we
              cherish."
            </blockquote>
            <div className="text-right">
              <p className="text-lg font-semibold text-amber-600">- Ava</p>
              <p className="text-sm text-gray-500">Head Baker & Owner</p>
            </div>
          </div>
        </div>

        {/* Call to Action Button - Bottom Right */}
        <div className="absolute bottom-4 right-4 z-10">
          <Link
            to="/menu"
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Explore Our Menu</span>
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

      {/* Quote Section Indicator */}
      <div className="relative flex justify-center py-4">
        <div className="group">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 animate-pulse">
            <img
              src="/src/assets/tabbyCat.png"
              alt="Quote section indicator"
              className="w-6 h-6 object-cover rounded-full group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Enhanced Flow Indicator */}
      <div className="relative flex flex-col items-center justify-center py-6">
        {/* Flowing Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent blur-xl"></div>

        {/* Animated Connection Line */}
        <div className="absolute w-1 h-full bg-gradient-to-b from-amber-300/50 via-amber-400 to-amber-300/50 animate-pulse"></div>

        {/* Interactive Tabby Cat Hub */}
        <div
          className="relative z-10 group cursor-pointer"
          onClick={() => {
            const gallery = document.querySelector("#pastry-gallery");
            gallery?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {/* Pulsing Ring Around Cat */}
          <div className="absolute inset-0 rounded-full bg-amber-300/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-pulse"></div>

          {/* Cat Container */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 animate-bounce">
            <img
              src="/src/assets/tabbyCat.png"
              alt="Continue to pastries"
              className="w-16 h-16 object-cover rounded-full group-hover:rotate-12 transition-transform duration-300"
            />
          </div>

          {/* Floating Text */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <p className="text-xs font-medium text-amber-700 bg-white/70 px-3 py-1 rounded-full shadow-sm animate-pulse">
              🍯 See our goodies below
            </p>
          </div>
        </div>

        {/* Animated Flow Particles */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div
            className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div
            className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>

      {/* Pastry Gallery Slideshow */}
      <div id="pastry-gallery">
        <PastryGallery pastries={pastryImages} />
      </div>

      {/* Gallery Section Indicator */}
      <div className="relative flex justify-center py-8">
        <div className="group">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 animate-bounce">
            <img
              src="/src/assets/tabbyCat.png"
              alt="Gallery section indicator"
              className="w-6 h-6 object-cover rounded-full group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
          {/* Small text under gallery indicator */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <p className="text-xs font-medium text-amber-700 bg-white/70 px-2 py-1 rounded-full shadow-sm">
              🍰 End of Gallery
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Body;
