export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="w-full max-w-7xl bg-white shadow-md rounded-lg grid lg:grid-cols-2">
        {/* Left Section - Text */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design, so our Chelsea boutique becomes the
            hotbed for the London interior design community.
          </p>
          <button className="inline-block bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
            Get in touch
          </button>
        </div>
        <div className="h-64 lg:h-auto">
            <img
              src="/images/feature-image.jpg"
              alt="Signup"
              className="w-full h-full object-cover"
            />
          </div>
      </div>
    </div>
  );
}
