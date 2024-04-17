import React from "react";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="h-16 shadow-md bg-white fixed w-full z-40">
        <div className="h-full container mx-auto flex items-center px-4 justify-between">
          <div>
            <Link to={"/"}>
              <h1 className="text-blue-500 font-bold text-xl">
                Shop-<span className="text-red-600">Ease</span>
              </h1>
            </Link>
          </div>

          <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
            <input
              type="text"
              placeholder="search product here..."
              className="w-full outline-none"
            />
            <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
              <GrSearch />
            </div>
          </div>

          <div className="flex items-center gap-7">
            <div className="relative flex justify-center">
              <div className="text-3xl cursor-pointer relative flex justify-center">
                {/* <img src="" className="w-10 h-10 rounded-full" alt="" /> */}
                <FaRegUserCircle />
              </div>
            </div>

            <div className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>

              <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm"></p>
              </div>
            </div>
            <Link
              to={"/login"}
              className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
