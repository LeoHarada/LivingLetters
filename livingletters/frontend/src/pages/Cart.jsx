import React from "react";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import EmptyCart from "../assets/EmptyCard.png";
import FromDulcie from "../assets/FromDulcie.png";

const Cart = () => {
    const productCartItem = useSelector((state) => state.product.cartItem);

    const totalPrice = productCartItem
        .reduce((acc, curr) => acc + parseFloat(curr.total), 0)
        .toFixed(2);

    const totalQty = productCartItem.reduce(
        (acc, curr) => acc + parseInt(curr.qty),
        0
    );

    const handlePayment = async () => {
        const stripePromise = await loadStripe(
            `${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`
        );
        const res = await fetch(
            `${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(productCartItem),
            }
        );
        if (res.statusCode === 500) return;
        const data = await res.json();
        toast("Redirect to payment gateway.");
        stripePromise.redirectToCheckout({ sessionId: data });
    };

    return (
        <>
            <div className="p-2 md:p-4">
                {productCartItem[0] ? (
                    <div className="my-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
                        <div className="lg:max-w-[60%] ">
                            {productCartItem.map((product) => {
                                return (
                                    <CartProduct
                                        key={product._id}
                                        id={product._id}
                                        name={product.name}
                                        image={product.image}
                                        description={product.description}
                                        qty={product.qty}
                                        total={product.total}
                                        price={product.price}
                                    />
                                );
                            })}
                        </div>

                        {/* total cart items */}
                        <div className="w-full max-w-sm text-[#4C4848] font-bold mt-4 lg:mt-0 lg:ml-12">
                            <h2 className="text-lg">Summary</h2>
                            <div className="flex w-full py-2 text-lg">
                                <p>Total Quantity:</p>
                                <p className="ml-auto w-32">{totalQty}</p>
                            </div>
                            <div className="flex w-full py-2 text-lg">
                                <p>Total Price:</p>
                                <p className="ml-auto w-32">
                                    <span>$</span>
                                    {totalPrice}
                                </p>
                            </div>
                            <button
                                className="uppercase text-lg font-bold flex flex-col py-4 px-12 mt-3 m-auto items-center border-solid border rounded-lg border-[#4C4848] transition hover:bg-[#7c8d5f47] duration-700 ease-in-out"
                                onClick={handlePayment}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col justify-center items-center mt-20">
                            <img src={FromDulcie} alt="from Dulcie message" />
                            <img
                                src={EmptyCart}
                                className="mt-10"
                                alt="empty cart"
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
