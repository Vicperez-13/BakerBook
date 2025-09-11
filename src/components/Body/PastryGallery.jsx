import React, { useState } from "react";

const PastryGallery = ({ pastries }) => {
  const [current, setCurrent] = useState(0);
  const total = pastries.length;

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="w-screen bg-yellow-100 border-t-2 border-b-2 border-yellow-200 py-12 my-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Goodies</h2>
        <div className="relative w-full max-w-5xl h-[44rem] flex items-center justify-center">
          {/* Cloud left arrow */}
          <button
            onClick={goPrev}
            className="absolute left-0 z-10 p-2 bg-transparent border-none hover:scale-125 hover:-rotate-12 transition-all duration-300 ease-in-out hover:drop-shadow-lg"
            aria-label="Previous"
          >
            <svg
              width="60"
              height="60"
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
          <div className="mx-auto flex items-center justify-center h-[40rem] w-[40rem] rounded-[20%] relative">
            <img
              src={pastries[current]}
              alt={`Pastry ${current + 1}`}
              className="object-cover w-[36rem] h-[36rem] rounded-[20%] shadow-2xl relative z-10 border-2 hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(255, 182, 193, 0.3), 0 1.5rem 3rem 0 rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>
          {/* Cloud right arrow */}
          <button
            onClick={goNext}
            className="absolute right-0 z-10 p-2 bg-transparent border-none hover:scale-125 hover:rotate-12 transition-all duration-300 ease-in-out hover:drop-shadow-lg"
            aria-label="Next"
          >
            <svg
              width="60"
              height="60"
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
        {/* Dots indicator */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {pastries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white shadow focus:outline-none flex items-center justify-center bg-transparent ${
                idx === current ? "scale-125" : ""
              }`}
              aria-label={`Go to image ${idx + 1}`}
              style={{
                background: "none",
                boxShadow: idx === current ? "0 0 8px 2px #a78bfa" : undefined,
              }}
            >
              {/* Cloud dot SVG */}
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="9"
                  cy="9"
                  rx="7"
                  ry="5"
                  fill={idx === current ? "#a78bfa" : "#e0e7ff"}
                />
                <ellipse
                  cx="4"
                  cy="7"
                  rx="3"
                  ry="2"
                  fill={idx === current ? "#a78bfa" : "#e0e7ff"}
                />
                <ellipse
                  cx="14"
                  cy="7"
                  rx="3"
                  ry="2"
                  fill={idx === current ? "#a78bfa" : "#e0e7ff"}
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastryGallery;
