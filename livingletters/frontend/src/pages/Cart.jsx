import React from "react";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const productCartItem = useSelector((state) => state.product.cartItem);

    const totalPrice = productCartItem.reduce(
        (acc, curr) => acc + parseInt(curr.total),
        0
    );
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
                <h2 className="text-lg md:-text-2xl font-bold text-slate-600 mt-5">
                    Your Cart Items
                </h2>
                {productCartItem[0] ? (
                    <div className="my-4 flex gap-3 flex-col md:flex-row justify-center">
                        {/* display cart items */}
                        <div className="w-full max-w-3xl ">
                            {productCartItem.map((product) => {
                                return (
                                    <CartProduct
                                        key={product._id}
                                        id={product._id}
                                        name={product.name}
                                        image={product.image}
                                        category={product.category}
                                        qty={product.qty}
                                        total={product.total}
                                        price={product.price}
                                    />
                                );
                            })}
                        </div>

                        {/* total cart items */}
                        <div className="w-full max-w-sm ml-auto">
                            <h2 className="bg-blue-500 text-white p-2 text-lg font-bold">
                                Summary
                            </h2>
                            <div className="flex w-full py-2 text-lg border-b">
                                <p>Total Quantity :</p>
                                <p className="ml-auto w-32 font-bold">
                                    {totalQty}
                                </p>
                            </div>
                            <div className="flex w-full py-2 text-lg border-b">
                                <p>Total Price</p>
                                <p className="ml-auto w-32 font-bold">
                                    <span className="text-red-500">$</span>
                                    {totalPrice}
                                </p>
                            </div>
                            <button
                                className="bg-red-500 text-lg font-bold py-2 text-white rounded-md px-2 flex items-center m-auto mt-3"
                                onClick={handlePayment}
                            >
                                Payment
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col w-full justify-center items-center">
                            <p className="text-slate-500 text-3xl font-bold mt-5">
                                Cart is empty!
                            </p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
