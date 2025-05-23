import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"

const Navbar = () => {
    const {user, setUser} = useContext(AppContext)
    const navigate=useNavigate()
    const [dropDown,setDropDown]=useState(false)

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <nav className="h-20 bg-white shadow-lg border-b border-gray-200">
            <div className="max-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-around h-full">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img 
                            className="h-12 w-12 rounded-full object-cover" 
                            src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-shopping-bags-in-circle-for-online-store-png-image_5345116.jpg" 
                            alt="Store Logo" 
                        />
                        <span className="ml-3 text-2xl font-bold text-gray-800">ShopHub</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a onClick={()=>navigate("/" )} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                            Home
                        </a>
                        <a  onClick={()=>navigate("/TopSelling" )} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                            Top Selling
                        </a>
                        <a  onClick={()=>navigate("/AllProducts" )} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                            AllProducts
                        </a>
                        <a  onClick={()=>navigate("/AboutUs" )} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                            About Us
                        </a>
                    </div>
                  

                    {/* User Section */}
                    <div className="flex items-center ml-10">
                        <div className="flex space-x-8">
                             <img className="h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1hNhxfP_hC-rq3ZchlNzgo1DiIWrmrWBHg&s" alt="" />
                              <img className="h-10 w-10" src="https://www.svgrepo.com/show/54280/favorite.svg" alt="" />
                        </div>

                        
                        {user ? (
                            <div className="flex items-center space-x-4 ml-12 ">
                                <div className="flex items-center space-x-2">
                                    <img onClick={()=>dropDown(!setDropDown)}
                                        className="h-10 w-10 rounded-full object-cover border-2 border-gray-200" 
                                        src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg" 
                                        alt="User Avatar" 
                                    />
                                    <span className="hidden sm:block text-gray-700 font-medium">Welcome!</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                                    Login
                                </button>
                                <span className="text-gray-400">|</span>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                                    Sign Up
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-blue-600 p-2">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (you can add state to toggle this) */}
            <div className="md:hidden border-t border-gray-200 bg-white">
                <div className="px-4 py-3 space-y-3">
                    <p onClick={()=>navigate("/" )} className="block text-gray-700 hover:text-blue-600 font-medium">Home</p>
                    <p  onClick={()=>navigate("/TopSelling" )} className="block text-gray-700 hover:text-blue-600 font-medium">Top Selling</p>
                    <p onClick={()=>navigate("/AllProducts" )}  className="block text-gray-700 hover:text-blue-600 font-medium">AllProducts</p>
                    <p  onClick={()=>navigate("/AboutUs" )} className="block text-gray-700 hover:text-blue-600 font-medium">About Us</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar