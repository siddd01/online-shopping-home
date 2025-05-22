import { useState } from 'react'

const SideBar = ({ isOpen = true, onToggle }) => {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedRating, setSelectedRating] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [inStock, setInStock] = useState(false)
  const [onSale, setOnSale] = useState(false)

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange]
    newRange[index] = parseInt(value) || 0
    setPriceRange(newRange)
  }

  const handleRatingChange = (rating) => {
    setSelectedRating(rating === selectedRating ? 0 : rating)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const clearAllFilters = () => {
    setPriceRange([0, 1000])
    setSelectedRating(0)
    setSelectedCategories([])
    setSelectedBrands([])
    setInStock(false)
    setOnSale(false)
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (selectedCategories.length > 0) count += selectedCategories.length
    if (selectedBrands.length > 0) count += selectedBrands.length
    if (selectedRating > 0) count += 1
    if (priceRange[0] > 0 || priceRange[1] < 1000) count += 1
    if (inStock) count += 1
    if (onSale) count += 1
    return count
  }

  const categories = [
    { name: 'Electronics', icon: '📱', count: 245 },
    { name: 'Fashion', icon: '👕', count: 189 },
    { name: 'Home & Garden', icon: '🏠', count: 156 },
    { name: 'Sports', icon: '⚽', count: 98 },
    { name: 'Books', icon: '📚', count: 87 },
    { name: 'Beauty', icon: '💄', count: 134 }
  ]

  const brands = [
    { name: 'Apple', count: 45 },
    { name: 'Samsung', count: 38 },
    { name: 'Nike', count: 67 },
    { name: 'Adidas', count: 52 },
    { name: 'Sony', count: 29 },
    { name: 'LG', count: 23 }
  ]

  const priceRanges = [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $250', min: 100, max: 250 },
    { label: '$250 - $500', min: 250, max: 500 },
    { label: 'Over $500', min: 500, max: 1000 }
  ]

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed top-6 left-6 z-50 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gray-50 transition-all duration-200"
          aria-label="Open filters"
        >
          <div className="relative">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {getActiveFiltersCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {getActiveFiltersCount()}
              </span>
            )}
          </div>
        </button>
      )}

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static top-0 left-0 z-40 w-80 bg-white h-screen border-r border-gray-200 shadow-xl lg:shadow-none
        transform transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:-translate-x-full lg:w-0 lg:border-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-gray-800">Filters</h2>
              {getActiveFiltersCount() > 0 && (
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                  {getActiveFiltersCount()} active
                </span>
              )}
            </div>
            <button
              onClick={onToggle}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              aria-label="Close filters"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-8">
              
              {/* Quick Filters */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Filters</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">In Stock Only</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={inStock}
                      onChange={(e) => setInStock(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                  
                  <label className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">🔥</span>
                      <span className="text-gray-700">On Sale</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={onSale}
                      onChange={(e) => setOnSale(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <label key={category.name} className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => handleCategoryChange(category.name)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                        />
                        <span className="mr-2">{category.icon}</span>
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h3>
                
                {/* Custom Price Inputs */}
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex-1">
                      <input
                        type="number"
                        min="0"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(0, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Min"
                      />
                    </div>
                    <span className="text-gray-400">—</span>
                    <div className="flex-1">
                      <input
                        type="number"
                        min="0"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(1, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                  
                  {/* Visual Range Bar */}
                  <div className="relative mb-4">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-200"
                        style={{
                          marginLeft: `${(priceRange[0] / 1000) * 100}%`,
                          width: `${((priceRange[1] - priceRange[0]) / 1000) * 100}%`
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$1000+</span>
                    </div>
                  </div>
                </div>

                {/* Quick Price Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange([range.min, range.max])}
                      className={`px-3 py-2 text-xs border rounded-lg transition-all duration-200 ${
                        priceRange[0] === range.min && priceRange[1] === range.max
                          ? 'bg-blue-50 border-blue-300 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Brands</h3>
                <div className="space-y-1">
                  {brands.map((brand) => (
                    <label key={brand.name} className="flex items-center justify-between cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand.name)}
                          onChange={() => handleBrandChange(brand.name)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                        />
                        <span className="text-gray-700">{brand.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {brand.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Customer Rating */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="rating"
                        checked={selectedRating === rating}
                        onChange={() => handleRatingChange(rating)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-3"
                      />
                      <div className="flex items-center">
                        {renderStars(rating)}
                        <span className="ml-2 text-gray-700 text-sm">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex space-x-3">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium transition-colors duration-200"
              >
                Clear All
              </button>
              <button
                onClick={() => {
                  // Apply filters logic here
                  console.log('Applying filters:', {
                    categories: selectedCategories,
                    brands: selectedBrands,
                    priceRange,
                    rating: selectedRating,
                    inStock,
                    onSale
                  })
                }}
                className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar