import "./App.css";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
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
                <NavBar />
                <main className="min-h-[calc(100vh)]">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default App;
