import React, { useState } from "react";

const PastryGallery = ({ pastries }) => {
  const [current, setCurrent] = useState(0);
  const total = pastries.length;

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 mb-12 shadow-lg">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Goodies</h2>
        <div className="relative w-full max-w-3xl h-[32rem] flex items-center justify-center">
          {/* Cloud left arrow */}
          <button
            onClick={goPrev}
            className="absolute left-8 z-10 p-2 bg-transparent border-none hover:scale-125 hover:-rotate-12 transition-all duration-300 ease-in-out hover:drop-shadow-lg"
            aria-label="Previous"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="30" cy="35" rx="22" ry="15" fill="#fff" />
              <ellipse cx="18" cy="30" rx="10" ry="8" fill="#fff" />
              <ellipse cx="42" cy="30" rx="10" ry="8" fill="#fff" />
              <path
                d="M32 35 L22 30 L32 25"
                stroke="#a78bfa"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
          {/* Cloudy gallery container */}
          <div className="mx-auto flex items-center justify-center h-[28rem] w-[28rem] rounded-[20%] relative">
            <img
              src={pastries[current]}
              alt={`Pastry ${current + 1}`}
              className="object-cover w-[24rem] h-[24rem] rounded-[20%] shadow-2xl relative z-10 border-2 hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(255, 182, 193, 0.3), 0 1.5rem 3rem 0 rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>
          {/* Cloud right arrow */}
          <button
            onClick={goNext}
            className="absolute right-8 z-10 p-2 bg-transparent border-none hover:scale-125 hover:rotate-12 transition-all duration-300 ease-in-out hover:drop-shadow-lg"
            aria-label="Next"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="30" cy="35" rx="22" ry="15" fill="#fff" />
              <ellipse cx="18" cy="30" rx="10" ry="8" fill="#fff" />
              <ellipse cx="42" cy="30" rx="10" ry="8" fill="#fff" />
              <path
                d="M28 25 L38 30 L28 35"
                stroke="#a78bfa"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
        {/* Tabby Cat Indicators */}
        <div className="flex justify-center items-center gap-3 -mt-2">
          {pastries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 focus:outline-none bg-transparent border-none p-0 ${
                idx === current ? "scale-125" : "scale-100 hover:scale-110"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            >
              {/* Tabby Cat Indicator */}
              <img
                src="/src/assets/tabbyCat.png"
                alt={`Indicator ${idx + 1}`}
                className={`w-6 h-6 rounded-full object-cover shadow-md transition-all duration-300 ${
                  idx === current
                    ? "border-2 border-amber-500 shadow-lg shadow-amber-200"
                    : "border-2 border-gray-300 opacity-60 hover:opacity-80"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastryGallery;
