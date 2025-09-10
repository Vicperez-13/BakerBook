import React, { useState } from "react";

const CategoryCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${category.color} rounded-xl border-2 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}
    >
      <div className="text-center mb-4">
        <div className="text-4xl mb-2">{category.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {category.title}
        </h3>
        <p className="text-sm text-gray-600">{category.description}</p>
      </div>

      <div className="space-y-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2 px-4 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-lg text-gray-700 font-medium transition-all duration-200 flex items-center justify-between"
        >
          <span>View Items</span>
          <span
            className={`transform transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {isExpanded && (
          <div className="mt-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-60 rounded-md p-2 text-sm text-gray-700 hover:bg-opacity-80 transition-all duration-150 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 border-opacity-50">
        <button className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-200">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
