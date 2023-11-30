import React from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
    deleteCartItem,
    increaseQty,
    decreaseQty,
} from "../redux/productSlice";

const CartProduct = ({
    id,
    name,
    image,
    description,
    detail1,
    detail2,
    qty,
    total,
    price,
}) => {
    const dispatch = useDispatch();

    return (
        <div className="bg-[darkolivegreen] p-2 flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded border border-slate-300">
            <div className="rounded overflow-hidden">
                <img
                    src={image}
                    className="h-28 w-40 object-cover"
                    alt="products main"
                />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between">
                    <h3 className="font-semibold text-white capitalize text-lg md:text-xl">
                        {name}
                    </h3>
                    <div
                        className="cursor-pointer text-white hover:text-red-500"
                        onClick={() => dispatch(deleteCartItem(id))}
                    >
                        <AiFillDelete />
                    </div>
                </div>
                <p className="text-white font-medium">{description}</p>
                <p className="text-white font-medium">{detail1}</p>
                <p className="text-white font-medium">{detail2}</p>
                <p className="font-bold text-white">
                    <span className="text-red-500">$</span>
                    <span>{price}</span>
                </p>
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <button
                            onClick={() => dispatch(increaseQty(id))}
                            className="bg-white py-1 mt-2 rounded hover:bg-slate-400 p-1"
                        >
                            <TbPlus />
                        </button>
                        <p className="font-semibold p-1 text-white">{qty}</p>
                        <button
                            onClick={() => dispatch(decreaseQty(id))}
                            className="bg-white py-1 mt-2 rounded hover:bg-slate-400 p-1"
                        >
                            <TbMinus />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-white">
                        <p>Total :</p>
                        <p>
                            <span className="text-red-500">$</span>
                            {total}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
