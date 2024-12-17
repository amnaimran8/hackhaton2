export default function SignUpPage() {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Full Page Container */}
        <div className="w-full max-w-6xl bg-white rounded-md shadow-lg overflow-hidden grid lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="h-64 lg:h-auto">
            <img
              src="/images/email-image.jpg"
              alt="Signup"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Right Side - Form */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              Join the club and get the benefits
            </h2>
            <p className="text-gray-600 mb-6">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop-up stores, and more.
            </p>
  
            {/* Email Form */}
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="you@email.com"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Sign up
              </button>
            </form>
  
            {/* Radio Button Section */}
            <div className="mt-6">
              <h4 className="text-gray-700 mb-2 font-medium">What are you most interested in?</h4>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="interest" className="mr-2" />
                  Exclusive offers
                </label>
                <label className="flex items-center">
                  <input type="radio" name="interest" className="mr-2" />
                  Free events
                </label>
                <label className="flex items-center">
                  <input type="radio" name="interest" className="mr-2" />
                  Large discounts
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // export default SignUpPage;
  