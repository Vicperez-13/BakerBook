import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import PastryGallery from "./PastryGallery";
import ContactSection from "./ContactSection";

const Body = () => {
  const [visibleNavigators, setVisibleNavigators] = useState({
    afterHero: false,
    afterGallery: false,
    beforeContact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if we should show the navigator after hero section
      const heroSection = document.querySelector(".hero-section");
      const gallerySection = document.querySelector("#pastry-gallery");
      const contactSection = document.querySelector("#contact-section");

      if (heroSection && gallerySection && contactSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const galleryTop = gallerySection.offsetTop;
        const galleryBottom =
          gallerySection.offsetTop + gallerySection.offsetHeight;
        const contactTop = contactSection.offsetTop;

        setVisibleNavigators({
          afterHero:
            scrollY > heroBottom - windowHeight && scrollY < galleryTop + 100,
          afterGallery:
            scrollY > galleryBottom - windowHeight / 2 &&
            scrollY < contactTop - 100,
          beforeContact: scrollY > contactTop - 200,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavigatorComponent = ({
    isVisible,
    label,
    emoji,
    onClick,
    arrowDirection = "down",
  }) => {
    if (!isVisible) return null;

    return (
      <div className="relative py-8 flex justify-center">
        <div className="relative z-20 group animate-fade-in">
          {/* Interactive Cat Container */}
          <div
            className="relative bg-white/95 rounded-full p-4 shadow-lg border-2 border-amber-200 group-hover:border-amber-400 transition-all duration-500 group-hover:scale-105 cursor-pointer"
            onClick={onClick}
          >
            {/* Navigation Cat */}
            <img
              src="/src/assets/tabbyCat.png"
              alt="Navigate to next section"
              className="w-12 h-12 object-cover rounded-full group-hover:rotate-12 transition-transform duration-300"
            />

            {/* Movement Indicator Dots */}
            <div className="absolute -top-2 -right-1 flex space-x-1">
              <div
                className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Dynamic Section Label */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <div className="bg-white/90 px-4 py-2 rounded-full shadow-md border border-amber-200 transition-all duration-300">
              <p className="text-sm font-medium text-amber-700 flex items-center">
                <span className="mr-2">{emoji}</span>
                {label}
                <svg
                  className="ml-2 w-4 h-4 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      arrowDirection === "up"
                        ? "M5 10l7-7m0 0l7 7m-7-7v18"
                        : "M19 14l-7 7m0 0l-7-7m7 7V3"
                    }
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
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
    <div className="container mx-auto px-4 py-8 pt-32">
      {/* Hero Section with Images and Quote */}
      <div className="hero-section relative bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 mb-12 shadow-lg min-h-[500px] overflow-hidden">
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

      {/* Navigator: After Hero - Leads to Gallery */}
      <NavigatorComponent
        isVisible={visibleNavigators.afterHero}
        label="Discover Our Pastries"
        emoji="🍯"
        onClick={() => {
          const gallery = document.querySelector("#pastry-gallery");
          gallery?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Pastry Gallery Slideshow */}
      <div id="pastry-gallery">
        <PastryGallery pastries={pastryImages} />
      </div>

      {/* Navigator: After Gallery - Leads to Contact */}
      <NavigatorComponent
        isVisible={visibleNavigators.afterGallery}
        label="Get In Touch"
        emoji="💬"
        onClick={() => {
          const contact = document.querySelector("#contact-section");
          contact?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Contact Section */}
      <ContactSection />

      {/* Navigator: At Bottom - Back to Top */}
      <NavigatorComponent
        isVisible={true}
        label="Back to Top"
        emoji="⬆️"
        arrowDirection="up"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default Body;
