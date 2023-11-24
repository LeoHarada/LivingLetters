import React from "react";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import LivingLettersCover from "../assets/LivingLettersCover.png";
import NameDulcie from "../assets/NameDulcie.png";
import GIF from "../assets/LivingLettersSeries.gif";
import Date2023 from "../assets/Date2023.png";

const Home = () => {
    const productData = useSelector((state) => state.product.productList);

    return (
        <div className="p-2 mt-7 md:p-4">
            <div className="flex md:flex-row justify-center items-center pb-2">
                <img src={NameDulcie} className="w-1/5" />
                <img src={GIF} className="w-1/5" />
                <img src={Date2023} className="w-1/5" />
            </div>
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
    );
};

export default Home;
