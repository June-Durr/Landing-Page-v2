import React from "react";
import Logo from "../assets/Logo.png";

export const Navigation = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center flex-shrink-0 mr-6" alt="logo">
            <a href="/">
              <img
                className="w-12 h-auto object-cover  "
                src={Logo}
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex items-center" alt="ul-div">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-800 m-4">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-800 m-4">
                  Service
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-800 m-4">
                  Tools
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-800 m-4">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-800 m-4">
                  Faq
                </a>
              </li>
            </ul>
          </div>
          <div alt="blog">
            <a href="/" className="text-gray-500 hover:text-gray-800">
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
