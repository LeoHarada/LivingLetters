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
        <div className="p-4 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 rounded-2xl border border-[#4C4848]">
            <div className="rounded overflow-hidden">
                <img src={image} className="w-[30rem]" alt="products main" />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between">
                    <h3 className="font-semibold text-[#4C4848] capitalize text-lg md:text-xl">
                        {name}
                    </h3>
                    <div
                        className="cursor-pointer text-[#4C4848] hover:text-red-500"
                        onClick={() => dispatch(deleteCartItem(id))}
                    >
                        <AiFillDelete />
                    </div>
                </div>
                <p className="text-[#4C4848] font-semibold mt-2">
                    {description}
                </p>
                <p className="font-bold text-[#4C4848] mt-4 text-xl">
                    <span>$</span>
                    <span>{price}</span>
                </p>
                <div className="flex justify-between mt-1">
                    <div className="flex gap-1 items-center">
                        <button
                            onClick={() => dispatch(increaseQty(id))}
                            className="hover:bg-slate-400 p-[.15rem] border-solid border rounded-md border-[#4C4848] text-[#4C4848]"
                        >
                            <TbPlus />
                        </button>
                        <p className="font-semibold text-[#4C4848]">{qty}</p>
                        <button
                            onClick={() => dispatch(decreaseQty(id))}
                            className="hover:bg-slate-400 p-[.15rem] border-solid border rounded-md border-[#4C4848] text-[#4C4848]"
                        >
                            <TbMinus />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-[#4C4848] text-xl">
                        <p>Total :</p>
                        <p>
                            <span>$</span>
                            {total}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
