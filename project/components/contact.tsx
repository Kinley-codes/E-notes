"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");
    
        const form = event.currentTarget; // Store reference to the form
        const formData = new FormData(form);
        formData.append("access_key", "8851ea60-4ae8-4f86-9ebf-40e4d270a6e2");
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
    
            const data = await response.json();
            console.log("Response Data:", data); // Debugging
    
            if (data.success) {
                toast.success("Form Submitted Successfully"); // ✅ Toast will now work
                setResult("");
    
                if (form) form.reset(); // ✅ Null check before resetting
            } else {
                console.error("Error", data);
                toast.error(data.message);
                setResult("");
            }
        } catch (error) {
            console.error("Submission error", error);
            toast.error("An error occurred. Please try again.");
            setResult("");
        }
    };
    

    return (
    <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
        id="contact"
    >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact <span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready To Make a Move? Let&apos;s Build Your Future Together
        </p>
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
            <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                name="Name"
            />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                name="Email"
            />
            </div>
        </div>
        <div className="my-6 text-left">
            Message
            <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
            ></textarea>
        </div>
        <button className="bg-black text-white py-2 px-12 mb-10 rounded">
            {result ? result : "Send Message"}
        </button>
        </form>
    </motion.div>
    );
};

export default Contact;
