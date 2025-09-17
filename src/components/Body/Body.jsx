import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import SpecialsSection from "./MenuSection";
import ContactSection from "./ContactSection";
import {
  useInitialAnimation,
  useScrollAnimation,
} from "../../hooks/useScrollAnimation";

const Body = () => {
  const [visibleNavigators, setVisibleNavigators] = useState({
    afterHero: false,
    afterGallery: false,
    beforeContact: false,
  });

  // Animation states for hero section
  const imageVisible = useInitialAnimation(300);
  const quoteVisible = useInitialAnimation(500);
  const authorVisible = useInitialAnimation(700);
  const buttonsVisible = useInitialAnimation(900);

  // Scroll animations for main sections
  const [galleryRef, galleryVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.3 });

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
        <div className="hero-section relative rounded-2xl px-6 pt-32 pb-16 mb-12 min-h-[85vh] overflow-hidden">
          {/* Main Content - Side by Side Layout */}
          <div className="flex items-center justify-between min-h-[75vh] gap-2">
            {/* Quote Section - Left Side */}
            <div className="flex-1 max-w-2xl">
              <blockquote
                className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed mb-6 transition-all duration-700 ${
                  quoteVisible
                    ? "animate-slide-in-left"
                    : "animation-hidden-left"
                }`}
                style={{ color: "var(--mocha-text)" }}
              >
                "Baking is love made visible. Every pastry tells a story, every
                bread carries warmth, and every sweet treat brings joy to those
                we cherish."
              </blockquote>
              <div
                className={`text-left mb-8 transition-all duration-700 ${
                  authorVisible ? "animate-fade-in" : "animation-hidden"
                }`}
              >
                <p
                  className="text-xl sm:text-2xl md:text-3xl font-semibold"
                  style={{ color: "var(--mocha-text-light)" }}
                >
                  - Ava
                </p>
                <p
                  className="text-sm sm:text-base md:text-lg"
                  style={{ color: "var(--mocha-text-light)" }}
                >
                  Head Baker & Owner
                </p>
              </div>

              {/* Action Buttons - Under the quote */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                  buttonsVisible ? "animate-slide-up" : "animation-hidden"
                }`}
              >
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-white hover:text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--mocha-medium), var(--mocha-dark))",
                  }}
                >
                  <span>Explore Our Menu</span>
                  <svg
                    className="ml-2 sm:ml-3 md:ml-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-white hover:text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--mocha-light), var(--mocha-accent))",
                  }}
                >
                  <span>About Ava</span>
                  <svg
                    className="ml-2 sm:ml-3 md:ml-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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

            {/* Ava Image - Right Side */}
            <div
              className={`flex-shrink-0 transition-all duration-700 ${
                imageVisible ? "animate-scale-in" : "animation-hidden-scale"
              }`}
            >
              <div className="text-center">
                <img
                  src="/src/assets/ava.png"
                  alt="Ava"
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 mb-6"
                  style={{
                    borderRadius: "2rem",
                    border: "4px solid rgba(245, 245, 244, 0.8)",
                  }}
                />
                {/* Simple playful quote with nice font */}
                <div className="space-y-1">
                  <p
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                    style={{
                      fontFamily: "Comic Neue, cursive",
                      color: "var(--mocha-accent)",
                    }}
                  >
                    Don't stop now—
                  </p>
                  <p
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold italic"
                    style={{
                      fontFamily: "Comic Neue, cursive",
                      color: "var(--mocha-light)",
                    }}
                  >
                    this dough's got layers
                  </p>
                </div>
                {/* Simple bouncing down arrow */}
                <div className="mt-8 flex justify-center">
                  <div className="animate-bounce-down">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12"
                      style={{ color: "var(--mocha-accent)" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      ></path>
                    </svg>
                  </div>
                </div>
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
      <div
        id="pastry-gallery"
        ref={galleryRef}
        className={`transition-all duration-1000 ${
          galleryVisible ? "animate-fade-in" : "animation-hidden"
        }`}
      >
        <SpecialsSection />
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
        <div
          ref={contactRef}
          className={`transition-all duration-1000 ${
            contactVisible ? "animate-slide-up" : "animation-hidden"
          }`}
        >
          <ContactSection />
        </div>

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
