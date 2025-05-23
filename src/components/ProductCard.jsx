import { useState } from 'react'
export const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0])
  const [imageLoaded, setImageLoaded] = useState(false)

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - Math.ceil(rating)

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400 text-sm">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-300 text-sm">★</span>
        ))}
      </div>
    )
  }

  const colorMap = {
    Black: 'bg-gray-900',
    White: 'bg-white border border-gray-300',
    Blue: 'bg-blue-600',
    Red: 'bg-red-600',
    Green: 'bg-green-600',
    Pink: 'bg-pink-500',
    Purple: 'bg-purple-600',
    Brown: 'bg-yellow-800'
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 w-[400px] h-[400px]">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {/* Product Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.badge}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{discountPercentage}%
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200"
          style={{ right: discountPercentage > 0 ? '3.5rem' : '0.75rem' }}
        >
          <svg 
            className={`w-4 h-4 transition-colors duration-200 ${
              isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'
            }`} 
            fill={isWishlisted ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Product Image */}
        <div className="relative h-48 bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=No+Image'
              setImageLoaded(true)
            }}
          />
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-gray-800 px-3 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Quick View
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Brand & Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            {product.brand}
          </span>
          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
          {product.name}
        </h3>

        {/* Rating & Reviews */}
        <div className="flex items-center mb-3">
          {renderStars(product.rating)}
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviewCount} reviews)
          </span>
        </div>

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-600">Colors:</span>
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-5 h-5 rounded-full ${colorMap[color] || 'bg-gray-400'} ${
                    selectedColor === color ? 'ring-2 ring-blue-500 ring-offset-1' : ''
                  } transition-all duration-200 hover:scale-110`}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Stock Status & Shipping Info */}
        <div className="mb-4">
          <div className="flex items-center space-x-4 text-xs">
            <span className={`flex items-center ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              <span className={`w-2 h-2 rounded-full mr-1 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            {product.freeShipping && (
              <span className="text-blue-600 flex items-center">
                🚚 Free Shipping
              </span>
            )}
            {product.fastDelivery && (
              <span className="text-purple-600 flex items-center">
                ⚡ Fast Delivery
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button 
            className={`flex-1 py-2.5 px-4 rounded-lg font-medium transition-all duration-200 ${
              product.inStock 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <button className="px-3 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}