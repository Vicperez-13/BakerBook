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
            className="relative bg-stone-50/95 rounded-full p-3 shadow-md border border-stone-300 group-hover:border-stone-400 transition-all duration-500 group-hover:scale-105 cursor-pointer"
            onClick={onClick}
          >
            {/* Navigation Cat */}
            <img
              src="/src/assets/tabbyCat.png"
              alt="Navigate to next section"
              className="w-8 h-8 object-cover rounded-full group-hover:rotate-12 transition-transform duration-300"
            />

            {/* Movement Indicator Dots */}
            <div className="absolute -top-1 -right-1 flex space-x-0.5">
              <div
                className="w-1 h-1 bg-stone-500 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-1 h-1 bg-stone-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 h-1 bg-stone-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Dynamic Section Label */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <div className="bg-stone-50/95 px-3 py-1.5 rounded-full shadow-md border border-stone-300 transition-all duration-300">
              <p className="text-xs font-medium text-stone-600 flex items-center">
                <span className="mr-1.5">{emoji}</span>
                {label}
                <svg
                  className="ml-1.5 w-3 h-3 animate-bounce"
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
      color: "bg-stone-100/80 border-stone-300",
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
      color: "bg-stone-50/80 border-stone-200",
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
      color: "bg-stone-100/70 border-stone-400",
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
      color: "bg-stone-100/60 border-stone-400",
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
      color: "bg-stone-50/70 border-stone-300",
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
      color: "bg-slate-100/60 border-slate-400",
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
      color: "bg-stone-200/50 border-stone-400",
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
      color: "bg-stone-50/60 border-stone-400",
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
    <>
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Hero Section with Images and Quote */}
        <div className="hero-section relative rounded-2xl p-8 mb-12 min-h-[520px] overflow-hidden">
          {/* Ava Image - Right Side */}
          <div className="absolute top-12 right-12 z-10">
            <img
              src="/src/assets/ava.png"
              alt="Ava"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
              style={{
                borderRadius: "2rem",
                border: "4px solid rgba(245, 245, 244, 0.8)",
              }}
            />
          </div>

          {/* Quote Section - Centered and balanced */}
          <div className="flex items-center justify-start min-h-[460px] pl-8 md:pl-16 pr-8 md:pr-16">
            <div className="max-w-lg md:max-w-xl">
              <blockquote className="text-xl md:text-2xl font-serif italic text-stone-700 leading-relaxed mb-6">
                "Baking is love made visible. Every pastry tells a story, every
                bread carries warmth, and every sweet treat brings joy to those
                we cherish."
              </blockquote>
              <div className="text-left mb-8">
                <p className="text-xl font-semibold text-stone-600">- Ava</p>
                <p className="text-base text-stone-600">Head Baker & Owner</p>
              </div>

              {/* Action Buttons - Under the quote */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center px-8 py-4 text-white hover:text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(120, 93, 75, 0.85), rgba(101, 78, 65, 0.9))",
                  }}
                >
                  <span>Explore Our Menu</span>
                  <svg
                    className="ml-3 w-5 h-5"
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

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-white hover:text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(82, 101, 84, 0.85), rgba(75, 95, 77, 0.9))",
                  }}
                >
                  <span>About Ava</span>
                  <svg
                    className="ml-3 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigator: After Hero - Leads to Gallery */}
        <NavigatorComponent
          isVisible={visibleNavigators.afterHero}
          label="Discover Our Pastries"
          onClick={() => {
            const gallery = document.querySelector("#pastry-gallery");
            gallery?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      {/* Pastry Gallery Slideshow - Full Width */}
      <div id="pastry-gallery">
        <PastryGallery pastries={pastryImages} />
      </div>

      <div className="container mx-auto px-4">
        {/* Navigator: After Gallery - Leads to Contact */}
        <NavigatorComponent
          isVisible={visibleNavigators.afterGallery}
          label="Get In Touch"
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
          arrowDirection="up"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    </>
  );
};

export default Body;
