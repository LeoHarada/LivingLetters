import React from "react";
import FromDulcie from "../assets/FromDulcie.png";
import CancelledOrder from "../assets/CancelledOrder.png";

const Cancel = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <img src={FromDulcie} />
            <img src={CancelledOrder} className="mt-10" />
        </div>
    );
};

export default Cancel;
