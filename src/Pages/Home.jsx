import { useState } from "react"
import SideBar from "../components/SideBar"

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex relative">
        {/* Sidebar */}
        <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

        {/* Main Content */}
        <div className={`flex-1 p-6 transition-all duration-300 ${!isSidebarOpen ? 'lg:ml-0' : 'lg:ml-0'}`}>
          {/* Header Section */}
          <div className="mb-8 p-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Discover Amazing Products
            </h1>
            <p className="text-gray-600">
              Find exactly what you're looking for from thousands of products
            </p>
          </div>

          {/* Search Section */}
          <div className="mb-8">
            <div className="max-w-2xl">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search for products, brands, categories..."
                  className="w-full pl-5 pr-14 py-4 text-lg border-2 border-gray-300 rounded-l-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-r-xl border-2 border-blue-600 transition-colors duration-200 flex items-center justify-center">
                  <img
                    src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                    alt="Search"
                    className="h-6 w-6 filter brightness-0 invert"
                  />
                </button>
              </div>
              
              {/* Search Suggestions */}
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500">Popular searches:</span>
                <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-700 transition-colors duration-200">
                  Electronics
                </button>
                <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-700 transition-colors duration-200">
                  Fashion
                </button>
                <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-700 transition-colors duration-200">
                  Home & Garden
                </button>
                <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-700 transition-colors duration-200">
                  Sports
                </button>
              </div>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Featured Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Electronics</h3>
                <p className="text-gray-600 text-sm">Latest gadgets and tech</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👕</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Fashion</h3>
                <p className="text-gray-600 text-sm">Trendy clothes & accessories</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Home & Living</h3>
                <p className="text-gray-600 text-sm">Furniture & home decor</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚽</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Sports</h3>
                <p className="text-gray-600 text-sm">Equipment & activewear</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-left">
                <h3 className="font-semibold mb-2">🔥 Today's Deals</h3>
                <p className="text-blue-100 text-sm">Up to 70% off on selected items</p>
              </button>
              
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 text-left">
                <h3 className="font-semibold mb-2">⭐ Top Rated</h3>
                <p className="text-purple-100 text-sm">Customer favorite products</p>
              </button>
              
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 text-left">
                <h3 className="font-semibold mb-2">🚚 Free Shipping</h3>
                <p className="text-green-100 text-sm">No delivery charges</p>
              </button>
            </div>
          </div>

          {/* Recently Viewed or Recommendations */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Recommended for You
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 text-center py-8">
                Start browsing to see personalized recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home