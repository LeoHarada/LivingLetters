import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setDataProduct } from "./redux/productSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const res = await fetch(
                `${process.env.REACT_APP_SERVER_DOMAIN}/product`
            );
            const resData = await res.json();
            dispatch(setDataProduct(resData));
        })();
    });

    return (
        <>
            <Toaster />
            <div>
                <Header />
                <main className="pt-10 min-h-[calc(100vh)]">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default App;
