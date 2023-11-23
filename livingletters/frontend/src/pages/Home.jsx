import React from "react";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import LivingLettersCover from "../assets/LivingLettersCover.png";

const Home = () => {
    const productData = useSelector((state) => state.product.productList);

    return (
        <div className="p-2 mt-7 md:p-4">
            <div className="">
                <div className="flex gap-5">
                    {productData[0]
                        ? productData.map((product) => {
                              return (
                                  <CardFeature
                                      key={product._id + "homeproducts"}
                                      id={product._id}
                                      name={product.name}
                                      category={product.category}
                                      price={product.price}
                                      image={LivingLettersCover}
                                  />
                              );
                          })
                        : productData.map((product, index) => (
                              <CardFeature
                                  loading="Loading..."
                                  key={index + "cartLoading"}
                              />
                          ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
