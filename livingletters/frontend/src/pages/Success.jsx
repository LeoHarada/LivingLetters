import React from "react";
import FromDulcie from "../assets/FromDulcie.png";
import SuccessfulOrder from "../assets/SuccessfulOrder.png";

const Success = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <img src={FromDulcie} />
            <img src={SuccessfulOrder} className="mt-10" />
        </div>
    );
};

export default Success;
