import React, { useState, useRef } from "react";
import { addCartItem } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import LivingLettersCover from "../assets/MainProductCover.jpg";
import Book1 from "../assets/InteriorCoverPhoto.jpg";
import Book2 from "../assets/BackCoverPhoto.jpg";

const Product = () => {
    const productData = useSelector((state) => state.product.productList);
    const product = productData[0];
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [mainPhoto, setMainPhoto] = useState(LivingLettersCover);

    const slideProductRef = useRef();

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const changePhotoHandler = (src) => {
        setMainPhoto(src);
    };

    const dispatch = useDispatch();

    const handleAddCartProduct = (e) => {
        dispatch(
            addCartItem({
                _id: product._id,
                name: product.name,
                price: product.price,
                description: product.description,
                image: LivingLettersCover,
                detail1: product.detail1,
                detail2: product.detail2,
            })
        );
    };
    return (
        <div>
            {productData[0]
                ? productData.map((product) => {
                      return (
                          <div
                              key={product._id}
                              className="flex flex-col sm:flex-row items-center sm:items-start mt-20 px-3 sm:px-[5%] pb-[10%]"
                          >
                              <div
                                  className="flex sm:flex-col gap-3 overflow-scroll scrollbar-none sm:overflow-hidden scroll-smooth transition-all px-[10%] sm:px-0 sm:w-[50px] sm:pt-[4.5%]"
                                  ref={slideProductRef}
                              >
                                  <img
                                      id="1"
                                      src={LivingLettersCover}
                                      onClick={() =>
                                          changePhotoHandler(LivingLettersCover)
                                      }
                                      className="cursor-pointer"
                                      alt="first on products page"
                                  />
                                  <img
                                      id="2"
                                      src={Book1}
                                      onClick={() => changePhotoHandler(Book1)}
                                      className="cursor-pointer"
                                      alt="second on products page"
                                  />
                                  <img
                                      id="3"
                                      src={Book2}
                                      onClick={() => changePhotoHandler(Book2)}
                                      className="cursor-pointer"
                                      alt="second on products page"
                                  />
                              </div>

                              <img
                                  id="main-photo"
                                  src={mainPhoto}
                                  alt="main product"
                                  className="sm:w-[50%] sm:h-[100%] hidden sm:block sm:pl-2"
                              />
                              <div className="flex flex-col sm:pl-[3%] sm:min-w-[35%] pt-4 sm:pt-8 sm:w-[40%]">
                                  <h3 className="flex flex-wrap font-semibold text-[#4C4848] capitalize text-3xl lg:text-4xl">
                                      {product.name}
                                  </h3>
                                  <p className="font-bold flex flex-row text-[#4C4848]">
                                      <span>$</span>
                                      <span>{product.price}</span>
                                  </p>
                                  <button
                                      className="text-[#4C4848] uppercase text-sm my-3 font-bold flex flex-col py-4 px-4 items-center border-solid border rounded-lg border-[#4C4848] transition hover:bg-[#e8917f5e] duration-700 ease-in-out"
                                      onClick={handleAddCartProduct}
                                  >
                                      Add to Cart • ${product.price}
                                  </button>
                                  <hr className="bg-gray my-2"></hr>
                                  <div>
                                      <button
                                          id="dropdownDefaultButton"
                                          data-dropdown-toggle="dropdown"
                                          className="w-full font-bold uppercase py-2.5 text-center inline-flex items-center justify-between text-[#4C4848]"
                                          type="button"
                                          onClick={toggleDropdown}
                                      >
                                          Description
                                          <svg
                                              className={`w-2.5 h-2.5 ms-3 ${
                                                  isDropdownOpen
                                                      ? "-rotate-90"
                                                      : ""
                                              } transition-transform duration-500`}
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 10 6"
                                          >
                                              <path
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="m1 1 4 4 4-4"
                                              />
                                          </svg>
                                      </button>

                                      <div
                                          id="dropdown"
                                          className={`max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
                                              isDropdownOpen ? "max-h-96" : ""
                                          }`}
                                      >
                                          <div className="mb-10 whitespace-pre-line text-[#4C4848]">
                                              {product.description}

                                              <div className="">
                                                  <br></br>
                                                  <p className="">
                                                      {product.detail1}
                                                  </p>
                                                  <p className="">
                                                      {product.detail2}
                                                  </p>
                                              </div>
                                          </div>
                                      </div>

                                      <hr className="my-2"></hr>
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
