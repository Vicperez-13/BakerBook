import React, { useState } from "react";

const PastryGallery = ({ pastries }) => {
  const [current, setCurrent] = useState(0);
  const total = pastries.length;

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  // Pastry details for each image
  const pastryDetails = [
    {
      name: "Golden Butter Buns",
      description: "Soft, pillowy buns with a perfect golden crust",
      tags: ["Fresh Daily", "Customer Favorite"],
    },
    {
      name: "Chocolate Chip Cookies",
      description: "Crispy edges, chewy center, loaded with premium chocolate",
      tags: ["Made to Order", "Gluten-Free Option"],
    },
    {
      name: "Lemon Delights",
      description: "Zesty lemon cookies with a sweet powdered sugar finish",
      tags: ["Seasonal Special", "Light & Citrusy"],
    },
    {
      name: "Artisan Sourdough",
      description: "Hand-crafted sourdough with a perfect crust and airy crumb",
      tags: ["24hr Ferment", "Organic Flour"],
    },
    {
      name: "Classic Sourdough Loaf",
      description: "Traditional sourdough with authentic tang and texture",
      tags: ["Heritage Recipe", "No Preservatives"],
    },
  ];

  return (
    <div className="relative py-20 px-4 bg-gradient-to-b from-amber-50/30 to-yellow-50/30">
      {/* Enhanced Background Elements */}
      <div className="absolute top-12 left-8 w-32 h-32 bg-amber-200/15 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-32 right-12 w-24 h-24 bg-yellow-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-orange-200/15 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-amber-300/10 rounded-full blur-md animate-pulse"></div>

      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
            Handcrafted Daily Delights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each pastry is lovingly crafted by our skilled bakers using
            time-honored techniques and the finest ingredients.
            <span className="text-amber-600 font-medium">
              {" "}
              Every bite tells a story of passion and dedication.
            </span>
          </p>
        </div>

        {/* Main Gallery Section - Three Column Layout */}
        <div className="relative w-full max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - Previous Images Preview */}
            <div className="hidden lg:block space-y-4">
              <h3 className="text-lg font-semibold text-amber-600 mb-4 text-center">
                Previous Delights
              </h3>
              <div className="space-y-3">
                {[...Array(2)].map((_, idx) => {
                  const prevIndex =
                    current - idx - 1 < 0
                      ? total + (current - idx - 1)
                      : current - idx - 1;
                  return (
                    <div
                      key={`prev-${idx}`}
                      className="relative group cursor-pointer"
                      onClick={() => setCurrent(prevIndex)}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <img
                        src={pastries[prevIndex]}
                        alt={`Previous pastry ${prevIndex + 1}`}
                        className="relative w-full h-24 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg group-hover:bg-black/0 transition-all duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Center - Main Image and Details */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={goPrev}
                className="absolute -left-4 lg:-left-12 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/90 backdrop-blur-sm border-2 border-amber-200 rounded-full hover:bg-white hover:border-amber-400 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                aria-label="Previous"
              >
                <svg
                  className="w-6 h-6 text-amber-600 group-hover:text-amber-700"
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
              </button>

              <button
                onClick={goNext}
                className="absolute -right-4 lg:-right-12 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/90 backdrop-blur-sm border-2 border-amber-200 rounded-full hover:bg-white hover:border-amber-400 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                aria-label="Next"
              >
                <svg
                  className="w-6 h-6 text-amber-600 group-hover:text-amber-700"
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
              </button>

              {/* Main Image Container */}
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-amber-200/30 via-yellow-200/30 to-amber-200/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                  <img
                    src={pastries[current]}
                    alt={pastryDetails[current]?.name}
                    className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
                  />

                  {/* Floating Quality Badge */}
                  <div className="absolute top-6 right-6 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    ✨ Premium Quality
                  </div>
                </div>
              </div>

              {/* Pastry Details Card */}
              <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-200/50">
                <h3 className="text-2xl font-bold text-amber-600 mb-2">
                  {pastryDetails[current]?.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pastryDetails[current]?.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pastryDetails[current]?.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Next Images Preview */}
            <div className="hidden lg:block space-y-4">
              <h3 className="text-lg font-semibold text-amber-600 mb-4 text-center">
                Coming Next
              </h3>
              <div className="space-y-3">
                {[...Array(2)].map((_, idx) => {
                  const nextIndex = (current + idx + 1) % total;
                  return (
                    <div
                      key={`next-${idx}`}
                      className="relative group cursor-pointer"
                      onClick={() => setCurrent(nextIndex)}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <img
                        src={pastries[nextIndex]}
                        alt={`Next pastry ${nextIndex + 1}`}
                        className="relative w-full h-24 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg group-hover:bg-black/0 transition-all duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Enhanced Tabby Cat Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12">
          <span className="text-sm text-gray-500 mr-2">Navigate:</span>
          {pastries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 focus:outline-none bg-transparent border-none p-1 ${
                idx === current ? "scale-125" : "scale-100 hover:scale-110"
              }`}
              aria-label={`View ${pastryDetails[idx]?.name}`}
            >
              <div className="relative">
                {idx === current && (
                  <div className="absolute -inset-2 bg-amber-400/40 rounded-full blur-sm animate-pulse"></div>
                )}
                <img
                  src="/src/assets/tabbyCat.png"
                  alt={pastryDetails[idx]?.name}
                  className={`relative w-10 h-10 rounded-full object-cover transition-all duration-300 ${
                    idx === current
                      ? "border-3 border-amber-500 shadow-xl"
                      : "border-2 border-gray-300 opacity-60 hover:opacity-80 hover:border-amber-300"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Progress and Stats */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-amber-200/50">
            <span className="text-sm font-medium text-gray-600">
              Viewing {current + 1} of {total} delicious treats
            </span>
          </div>
          <div className="bg-amber-100/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-amber-300/50">
            <span className="text-sm font-medium text-amber-700">
              🍯 All baked fresh daily at 6 AM
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/50 to-yellow-400/50 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-amber-200/60">
              <p className="text-lg text-gray-700 mb-4">
                Craving something special? Our talented bakers can create custom
                orders just for you!
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Order Your Favorites 🎂
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastryGallery;
