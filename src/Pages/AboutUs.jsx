import { motion } from "framer-motion";
import { products } from "../components/product";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image or illustration */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-shopping-bags-in-circle-for-online-store-png-image_5345116.jpg" 
            alt=""
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
          <p className="text-gray-600 text-lg">
            We are a passionate team dedicated to creating meaningful digital experiences. With a focus on innovation, collaboration, and user-centric design, we help businesses grow and thrive in the digital age.
          </p>
          <p className="text-gray-600 text-lg">
            From web development to product strategy, we blend creativity with technology to deliver impactful results.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
              <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Collection Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{products.length}</div>
              <div className="text-sm text-gray-600">Total Products</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">
                {products.reduce((sum, p) => sum + p.reviewCount, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-600">
                {(products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)}★
              </div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">
                {products.filter(p => p.inStock).length}
              </div>
              <div className="text-sm text-gray-600">In Stock</div>
            </div>
          </div>
        </div>
    </section>
  );
}
