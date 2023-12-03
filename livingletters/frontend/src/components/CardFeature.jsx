import React from "react";
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const CardFeature = ({
    image,
    name,
    price,
    description,
    detail1,
    detail2,
    loading,
    id,
}) => {
    const dispatch = useDispatch();
    const handleAddCartProduct = (e) => {
        dispatch(
            addCartItem({
                _id: id,
                name: name,
                price: price,
                image: image,
                description: description,
                detail1: detail1,
                detail2: detail2,
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
                                className="max-w-[100%]"
                                alt="card main"
                            />
                        </div>

                        <h3 className="font-semibold text-[#4C4848] capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
                            {name}
                        </h3>
                        <p className="font-bold text-[#4C4848]">
                            <span>$</span>
                            <span>{price}</span>
                        </p>
                    </div>
                    <button
                        className="text-[#4C4848] uppercase text-lg font-bold flex flex-col py-4 px-8 mt-3 m-auto items-center border-solid border rounded-lg border-[#4C4848] transition hover:bg-[#7c8d5f47] duration-700 ease-in-out"
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
