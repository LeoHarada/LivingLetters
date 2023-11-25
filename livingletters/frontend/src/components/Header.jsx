import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
    const cartItemNumber = useSelector((state) => state.product.cartItem);

    return (
        <header className="w-full h-23 px-4 z-50">
            <div className="flex items-center h-full justify-between pt-4 flex-row-reverse">
                <div className="absolute -left-0 -right-0">
                    <nav className="gap-6 text-base font-bold flex justify-center flex-row-reverse">
                        <Link className="hover:text-red-500" to={"contact"}>
                            Contact
                        </Link>
                        <Link className="hover:text-red-500" to={"about"}>
                            About
                        </Link>
                        <Link className="hover:text-red-500" to={"product"}>
                            Product
                        </Link>
                        <Link className="hover:text-red-500" to={""}>
                            Home
                        </Link>
                    </nav>
                </div>
                <div className="text-2xl text-slate-600 relative hover:text-red-500">
                    <Link to={"/cart"}>
                        <BsCartFill />
                        <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                            {cartItemNumber.length}
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
