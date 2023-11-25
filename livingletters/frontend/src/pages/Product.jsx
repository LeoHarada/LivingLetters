import React from "react";
import { addCartItem } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import LivingLettersCover from "../assets/LivingLettersCover.png";

const Product = () => {
    const productData = useSelector((state) => state.product.productList);
    const product = productData[0];

    const dispatch = useDispatch();

    const handleAddCartProduct = (e) => {
        dispatch(
            addCartItem({
                _id: product._id,
                name: product.name,
                price: product.price,
                category: product.category,
                image: LivingLettersCover,
            })
        );
    };
    return (
        <div>
            {productData[0]
                ? productData.map((product) => {
                      return (
                          <div className="flex flex-col sm:flex-row items-center sm:items-start mt-20">
                              <img
                                  src={LivingLettersCover}
                                  alt="product image"
                                  className="sm:w-[60%] sm:h-[100%] sm:pl-[10%] sm:pr-[5%] px-5"
                              />
                              <div className="flex flex-col sm:pl-4 px-8 pt-4 sm:pt-8 sm:w-[40%]">
                                  <h3 className="flex flex-wrap font-semibold text-slate-600 capitalize text-3xl lg:text-4xl">
                                      {product.name}
                                  </h3>
                                  <p className="font-bold flex flex-row">
                                      <span className="text-red-500">$</span>
                                      <span>{product.price}</span>
                                  </p>
                                  <button
                                      className="text-[darkolivegreen] uppercase text-sm my-3 mx-[25%] font-bold flex flex-col py-4 items-center border-solid border rounded-sm border-[darkolivegreen] transition hover:bg-[#7c8d5f47] duration-700 ease-in-out"
                                      onClick={handleAddCartProduct}
                                  >
                                      Add to Cart • ${product.price}
                                  </button>
                                  <div>
                                      <button>Description</button>
                                      <div>{product.description}</div>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : null}
        </div>
    );
};

export default Product;
