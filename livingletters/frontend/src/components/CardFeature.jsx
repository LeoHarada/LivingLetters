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
                        className="bg-[darkolivegreen] text-white font-bold py-2 mt-3 px-2 flex items-center m-auto rounded hover:bg-white hover:text-[darkolivegreen]"
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
