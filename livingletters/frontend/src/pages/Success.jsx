import React from "react";
import SuccessfulOrder from "../assets/SuccessfulOrder.png";

const Success = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img
                src={SuccessfulOrder}
                className="mt-10"
                alt="successfull page"
            />
        </div>
    );
};

export default Success;
