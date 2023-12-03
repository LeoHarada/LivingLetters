import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItemNumber = useSelector((state) => state.product.cartItem);

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap sm:py-6 sm:pl-7 sm:pr-6 p-6">
                <div className="block sm:hidden mt-2.5">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center py-2 rounded text-[#174a13c9]"
                    >
                        <svg
                            className={`fill-current h-8 w-8 z-50 ${
                                isOpen ? "hidden" : "absolute"
                            }`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-current h-8 w-8 z-50 text-white ${
                                isOpen ? "absolute" : "hidden"
                            }`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full block flex-grow sm:flex sm:items-center sm:w-auto ${
                        isOpen
                            ? "block bg-[#174a13c9] top-0 left-0 h-[100vh] w-full z-10 text-white pt-[50%] fixed text-2xl"
                            : "hidden"
                    }`}
                >
                    <div className="sm:flex-grow">
                        <nav className="text-[#4C4848] gap-20 font-bold flex justify-center sm:flex-row-reverse flex-col-reverse items-center">
                            <Link
                                className="hover:text-red-500 block lg:inline-block text-white-200"
                                to={"contact"}
                                onClick={closeNavbar}
                            >
                                Contact
                            </Link>
                            <Link
                                className="hover:text-red-500 block lg:inline-block text-white-200"
                                to={"product"}
                                onClick={closeNavbar}
                            >
                                Product
                            </Link>
                            <Link
                                className="hover:text-red-500 block lg:inline-block text-white-200"
                                to={""}
                                onClick={closeNavbar}
                            >
                                Home
                            </Link>
                        </nav>
                    </div>
                </div>
            </nav>
            <div className="text-[2rem] top-6 text-[#174a13c9] fixed right-5 hover:text-red-500">
                <Link to={"/cart"}>
                    <BsCartFill />
                    <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                        {cartItemNumber.length}
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default NavBar;
