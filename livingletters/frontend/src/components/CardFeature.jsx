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
        <div className="w-full mb-4 min-w-[200px] max-w-[200px] bg-white drop-shadow-lg hover:shadow-lg cursor-pointer py-5 px-4 flex flex-col">
            {image ? (
                <>
                    <div>
                        <div className="h-28 flex flex-col justify-center items-center">
                            <img src={image} className="h-full" />
                        </div>
                        <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
                            {name}
                        </h3>
                        <p className="text-slate-500 font-medium">{category}</p>
                        <p className="font-bold">
                            <span className="text-red-500">$</span>
                            <span>{price}</span>
                        </p>
                    </div>
                    <button
                        className="bg-red-500 text-white font-bold py-1 mt-2 rounded hover:bg-white hover:text-red-500 w-full"
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
