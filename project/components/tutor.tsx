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
            Discover Your <span className="text-black">Dream Tutor</span>
        </h1>
        <br/>
        <p className="text-gray-600 leading-relaxed text-justify max-w-2xl mx-auto text-lg">
  Find the perfect tutor to guide you on your learning journey. Whether you need help in <span className="font-medium text-gray-800">academics</span>, <span className="font-medium text-gray-800">coding</span>, or <span className="font-medium text-gray-800">personal development</span>, our expert tutors are here to provide <span className="italic text-gray-800">personalized support</span> tailored to your needs. With <span className="font-semibold text-indigo-600">flexible scheduling</span>, <span className="font-semibold text-indigo-600">interactive sessions</span>, and a focus on <span className="underline">real understanding</span>, we make learning <span className="font-bold text-indigo-600">enjoyable</span> and <span className="font-bold text-indigo-600">effective</span>. Start today and unlock your full potential with the right tutor by your side.
</p>
        <div className="space-x-4 mt-6">
            <a
            href="#Projects"
            className="bg-white text-black font-medium px-6 py-2 rounded-lg shadow-md
            hover:scale-105 hover:shadow-2xl transform transition-300 ease-in-out"
            >
            Find Tutors
                </a>
                <a
    href="#contact"
    className="bg-black text-white font-medium px-4 py-2 sm:px-6 sm:py-2 rounded-lg shadow-md border border-white hover:scale-105 hover:shadow-2xl transform transition-all duration-300 ease-in-out text-sm sm:text-base"
>
    Contact Us
</a>
        </div>
        </div>
    </motion.div>
    );
};

export default Header;
