"use client";
import { motion } from "framer-motion";

const Header = () => {
    return (
    <motion.div
    initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 px-6 text-center"
        style={{
        background: "white",
        color: "black",
        }}
    >
        <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold">
            Discover Your <span className="text-black">Dream Home</span>
        </h1>
        <p className="text-sm sm:text-base mt-3 text-black">
            Explore a collection of modern and affordable homes tailored to fit your lifestyle.
        </p>
        <div className="space-x-4 mt-6">
            <a
            href="#Projects"
            className="bg-white text-black font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-300 transition"
            >
            View Projects
                </a>
            <a
            href="#Contact"
            className="bg-black text-white font-medium px-6 py-2 rounded-lg shadow-md border border-white hover:bg-gray-800 transition"
            >
            Contact Us
            </a>
        </div>
        </div>
    </motion.div>
    );
};

export default Header;
