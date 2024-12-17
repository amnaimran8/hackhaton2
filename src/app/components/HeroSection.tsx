import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 py-16 lg:px-16">
        {/* Left Side: Image */}
        <div className="relative">
          <img
            src="/images/hero-image.jpg" 
            alt=""
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start justify-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Homeware that puts quality and style at the heart of its brand
          </h1>
          <p className="text-gray-600 text-lg">
            With our new collection, view over 400 bespoke pieces from homeware through to furniture today.
          </p>
          <button className="inline-block px-6 py-3 text-white bg-gray-800 hover:bg-gray-700 rounded-md transition">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
