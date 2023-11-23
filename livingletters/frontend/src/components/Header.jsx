import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import logo from "../assets/LivingLettersSeries.gif";

const Header = () => {
    const cartItemNumber = useSelector((state) => state.product.cartItem);

    return (
        <header className="fixed shadow-md w-full h-23 px-2 md:px-4 z-50 bg-white">
            {/* desktop */}

            <div className="flex mt-1 items-center h-full justify-between">
                {/* <Link to={""}>
                    <div className="h-20">
                        <img src={logo} className="h-full" />
                    </div>
                </Link> */}

                <div className="flex items-center gap-4 md:gap-7">
                    <nav className="gap-4 md:gap-6 text-base font-bold md:text-lg hidden md:flex">
                        <Link className="hover:text-red-500" to={""}>
                            Home
                        </Link>
                        <Link className="hover:text-red-500" to={"products"}>
                            Products
                        </Link>
                        <Link className="hover:text-red-500" to={"about"}>
                            About
                        </Link>
                        <Link className="hover:text-red-500" to={"contact"}>
                            Contact
                        </Link>
                    </nav>
                    <div className="text-2xl text-slate-600 relative hover:text-red-500">
                        <Link to={"/cart"}>
                            <BsCartFill />
                            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                                {cartItemNumber.length}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* mobile */}
        </header>
    );
};

export default Header;
