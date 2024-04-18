import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            {/* Footer Section 1 */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">About Us</h2>
              <p>
                ShopEase is an innovative eCommerce platform crafted to provide
                users with a seamless shopping experience
              </p>
            </div>

            {/* Footer Section 2 */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <ul>
                <li>
                  <Link to="/" className="hover:text-gray-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-gray-500">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Footer Section 3 */}
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold mb-2">Subscribe</h2>
              <p>
                Subscribe to our newsletter to receive updates and exclusive
                offers.
              </p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  className="px-4 py-2 w-full rounded-l-md"
                  placeholder="Enter your email"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-700 my-8" />

          {/* Copyright */}
          <div className="flex  items-center justify-center">
            <p>&copy; 2024 Shopease Mern. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
