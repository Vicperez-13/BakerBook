import React, { useState } from "react";

const PastryGallery = ({ pastries }) => {
  const [current, setCurrent] = useState(0);
  const total = pastries.length;

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="relative py-20 px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative"></div>
        {/* Main Gallery Section - Three Column Layout */}
        <div className="relative w-full max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - Previous Images Preview */}
            <div className="hidden lg:block space-y-4">
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
                className="absolute -left-4 lg:-left-12 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-stone-50/95 border-2 border-stone-300 rounded-full hover:bg-stone-50 hover:border-stone-400 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                aria-label="Previous"
              >
                <svg
                  className="w-6 h-6 text-stone-600 group-hover:text-stone-700"
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
                className="absolute -right-4 lg:-right-12 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-stone-50/95 border-2 border-stone-300 rounded-full hover:bg-stone-50 hover:border-stone-400 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                aria-label="Next"
              >
                <svg
                  className="w-6 h-6 text-stone-600 group-hover:text-stone-700"
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
                <div className="relative bg-stone-50/90 rounded-2xl p-4 shadow-lg">
                  <img
                    src={pastries[current]}
                    alt={`Pastry ${current + 1}`}
                    className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Next Images Preview */}
            <div className="hidden lg:block space-y-4">
              <div className="space-y-3">
                {[...Array(2)].map((_, idx) => {
                  const nextIndex = (current + idx + 1) % total;
                  return (
                    <div
                      key={`next-${idx}`}
                      className="relative group cursor-pointer"
                      onClick={() => setCurrent(nextIndex)}
                    >
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
              aria-label={`View pastry ${idx + 1}`}
            >
              <div className="relative">
                <img
                  src="/src/assets/tabbyCat.png"
                  alt={`Pastry ${idx + 1}`}
                  className={`relative w-8 h-8 rounded-full object-cover transition-all duration-300 ${
                    idx === current
                      ? "border-2 border-stone-500 shadow-md"
                      : "border border-gray-300 opacity-60 hover:opacity-80 hover:border-stone-400"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Progress and Stats */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="bg-stone-50/80 px-4 py-2 rounded-full shadow-md border border-stone-300">
            <span className="text-sm font-medium text-stone-600">
              Viewing {current + 1} of {total} delicious treats
            </span>
          </div>
          <div className="bg-stone-100/80 px-4 py-2 rounded-full shadow-md border border-stone-400">
            <span className="text-sm font-medium text-stone-600">
              🍯 All baked fresh daily at 6 AM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastryGallery;
