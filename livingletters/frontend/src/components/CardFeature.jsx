import React from "react";
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const CardFeature = ({ image, name, price, category, loading, id }) => {
    const dispatch = useDispatch();
    const handleAddCartProduct = (e) => {
        dispatch(
            addCartItem({
                _id: id,
                name: name,
                price: price,
                category: category,
                image: image,
            })
        );
    };
    return (
        <div className="w-full mb-4 py-5 px-4 flex flex-col">
            {image ? (
                <>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src={image}
                                className="sm:max-w-[60%] max-w-[100%]"
                            />
                        </div>
                        <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
                            {name}
                        </h3>
                        <p className="font-bold">
                            <span className="text-red-500">$</span>
                            <span>{price}</span>
                        </p>
                    </div>
                    <button
                        className="text-[darkolivegreen] uppercase text-sm font-bold flex flex-col py-2 px-2 mt-3 m-auto items-center border-solid border rounded-sm border-[darkolivegreen] transition hover:bg-[#7c8d5f47] duration-700 ease-in-out"
                        onClick={handleAddCartProduct}
                    >
                        Add to Cart
                    </button>
                </>
            ) : (
                <div className="min-h-[150px] flex justify-center items-center">
                    <p>{loading}</p>
                </div>
            )}
        </div>
    );
};

export default CardFeature;
