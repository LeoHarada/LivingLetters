import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import Butterfly from "../assets/Butterfly.gif";
import HiGif from "../assets/hi_Gif.gif";

const Contact = () => {
    const serviceID = "service_61i93d8";
    const templateID = "template_1aas5jr";
    const publicKey = "28P63q7oWBplk5FI-";

    const form = useRef();

    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                `${serviceID}`,
                `${templateID}`,
                form.current,
                `${publicKey}`
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSent(true);
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="mt-[7%] text-[#4C4848]">
            <div className="flex flex-col justify-center items-center text-[#4C4848]">
                <img src={HiGif} className="w-[15%] lg:w-[10%]" />
                <p className="flex flex-wrap my-8 px-4 sm:px-[20%] lg:px-[30%] text-[#4C4848] font-bold text-center text-sm sm:text-lg">
                    I'd love to help you, let me know if you have any questions,
                    concerns, or thoughts! I will make sure to get back to you
                    as soon as possible.
                </p>
            </div>
            {/* <div className="absolute scale-x-[-1] top-[9%] left-[-37%] w-[65%] h-[25%] sm:top-[-12%] sm:left-[7%] sm:w-[30%] sm:h-[50%]">
                <img
                    src={Butterfly}
                    className="absolute top-[-85px] sm:top-[0] left-[0] w-[25%] h-[55%] sm:w-[15%] sm:h-[30%]"
                />
            </div> */}
            <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-8 px-[10%] sm:px-[20%] lg:px-[25%] xl:px-[35%]"
            >
                <input
                    type="text"
                    placeholder="name"
                    name="user_name"
                    className="border border-black rounded-3xl text-lg p-5"
                />

                <input
                    type="email"
                    placeholder="email"
                    name="user_email"
                    className="border border-black rounded-3xl text-lg p-5"
                />

                <textarea
                    name="message"
                    placeholder="message"
                    className="border border-black rounded-3xl text-lg p-5 pb-[20%]"
                />
                <input
                    type="submit"
                    value={sent ? "sent!" : "submit"}
                    className="border border-black rounded-3xl text-lg p-5 cursor-pointer font-bold hover:bg-[#e8917f5e] transition duration-700 ease-in-out"
                    disabled={sent}
                />
            </form>
        </div>
    );
};

export default Contact;
