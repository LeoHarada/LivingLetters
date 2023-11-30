import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Butterfly from "../assets/Butterfly.gif";

const Contact = () => {
    const serviceID = "service_61i93d8";
    const templateID = "template_1aas5jr";
    const publicKey = "28P63q7oWBplk5FI-";

    const form = useRef();

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
                },
                (error) => {
                    console.log(error.text);
                }
            );
        console.log(emailjs);
    };

    return (
        <div className="mt-10 relative">
            <div className="absolute scale-x-[-1] top-[0%] left-[2%] w-[65%] h-[25%] sm:top-[-29%] sm:left-[26%] sm:w-[30%] sm:h-[50%] z-10">
                <img
                    src={Butterfly}
                    className="absolute top-[-85px] sm:top-[0] left-[0] w-full h-[139%] sm:h-full"
                />
            </div>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-8 px-[20%] sm:px-[35%] "
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
                    value="submit"
                    className="border rounded-3xl bg-[#e8917fc4] text-white text-lg p-5"
                />
            </form>
        </div>
    );
};

export default Contact;
