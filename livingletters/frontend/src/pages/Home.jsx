import React from "react";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import LivingLettersCover from "../assets/LivingLettersCover.png";
import GIF from "../assets/LivingLettersSeries.gif";
import NameLine from "../assets/NameLine.png";
import DateLine from "../assets/DateLine.png";

const Home = () => {
    const productData = useSelector((state) => state.product.productList);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center">
                <img src={NameLine} className="w-1/4" alt="name line" />
                <img
                    src={GIF}
                    className="w-1/2 max-w-[10rem]"
                    alt="living letters gif"
                />
                <img src={DateLine} className="w-1/4" alt="date line" />
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
