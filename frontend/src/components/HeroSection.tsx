import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-4 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-1.5 animate-pulse"></span>
              New arrivals daily
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 animate-fade-in-up">
              <span className="block">Shop the Latest</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Trending Products</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-6 animate-fade-in-up animation-delay-200">
              Discover premium products with fast delivery and exclusive discounts. Elevate your shopping experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 animate-fade-in-up animation-delay-400">
              <Link href="#products" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-center text-sm">
                Shop New Arrivals
              </Link>
              <Link href="#" className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:shadow border border-gray-200 transition-all duration-300 text-center text-sm hover:border-blue-300">
                View Best Sellers
              </Link>
            </div>
            
            
            <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto lg:mx-0 animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-900">10K+</p>
                <p className="text-xs text-gray-600">Products</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-900">24/7</p>
                <p className="text-xs text-gray-600">Support</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-900">Free</p>
                <p className="text-xs text-gray-600">Shipping</p>
              </div>
            </div>
          </div>
          
          
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-3">
              
              <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-2 hover:rotate-0 transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg h-24 flex items-center justify-center mb-3">
                  <div className="bg-white border border-dashed border-blue-200 rounded-lg w-12 h-12 flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">Wireless Headphones</h3>
                <p className="text-gray-500 text-xs mb-2 truncate">Premium Sound</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-sm">$129</span>
                  <div className="flex items-center">
                    <span className="text-xs text-yellow-500 mr-0.5">★</span>
                    <span className="text-xs text-gray-600 font-medium">4.8</span>
                  </div>
                </div>
              </div>
              
              
              <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-xl mt-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg h-24 flex items-center justify-center mb-3">
                  <div className="bg-white border border-dashed border-purple-200 rounded-lg w-12 h-12 flex items-center justify-center">
                    <svg className="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">Smart Watch</h3>
                <p className="text-gray-500 text-xs mb-2 truncate">Health Tracker</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-sm">$199</span>
                  <div className="flex items-center">
                    <span className="text-xs text-yellow-500 mr-0.5">★</span>
                    <span className="text-xs text-gray-600 font-medium">4.9</span>
                  </div>
                </div>
              </div>
              
            
              <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg h-24 flex items-center justify-center mb-3">
                  <div className="bg-white border border-dashed border-green-200 rounded-lg w-12 h-12 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m1.414-8.486a5 5 0 017.072 0" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">Bluetooth Speaker</h3>
                <p className="text-gray-500 text-xs mb-2 truncate">Portable Sound</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-sm">$89</span>
                  <div className="flex items-center">
                    <span className="text-xs text-yellow-500 mr-0.5">★</span>
                    <span className="text-xs text-gray-600 font-medium">4.7</span>
                  </div>
                </div>
              </div>
              
           
              <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:shadow-xl -mt-3">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg h-24 flex items-center justify-center mb-3">
                  <div className="bg-white border border-dashed border-amber-200 rounded-lg w-12 h-12 flex items-center justify-center">
                    <svg className="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18m0 0l-4-4m4 4l4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">Phone Charger</h3>
                <p className="text-gray-500 text-xs mb-2 truncate">Fast Charging</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-sm">$29</span>
                  <div className="flex items-center">
                    <span className="text-xs text-yellow-500 mr-0.5">★</span>
                    <span className="text-xs text-gray-600 font-medium">4.6</span>
                  </div>
                </div>
              </div>
            </div>
            
         
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-200 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
      
    
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
}
