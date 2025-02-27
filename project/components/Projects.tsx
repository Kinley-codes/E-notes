"use client";
import { motion } from "framer-motion";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, MousePointer } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { projectsData } from "../E-Bhutan/assets/assets";

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [cardsToShow, setCardsToShow] = useState<number>(1);

    // Debounced Resize Handler
    useEffect(() => {
        const updateCardsToShow = () => {
            const newCardsToShow = window.innerWidth >= 1024 ? projectsData.length : 1;
            if (newCardsToShow !== cardsToShow) {
                setCardsToShow(newCardsToShow);
            }
        };

        const handleResize = () => {
            requestAnimationFrame(updateCardsToShow);
        };

        updateCardsToShow(); // Initial call
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [cardsToShow]);

    // Optimized Next & Prev Handlers
    const nextProject = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, []);

    const prevProject = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
            id="Projects"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Popular{" "}
                <span className="underline underline-offset-4 decoration-1 font-light">
                    Tutors
                </span>
            </h1>
            <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
                "Find the Perfect Tutor for your Learning Needs"
            </p>

            {/* Slider Buttons */}
            <div className="flex justify-end items-center mb-8">
                <button
                    onClick={prevProject}
                    className="p-3 bg-transparent rounded hover:scale-105 transform transition-transform duration-300"
                    aria-label="Previous Project"
                >
                    <ArrowLeftCircleIcon />
                </button>
                <button
                    onClick={nextProject}
                    className="p-3 bg-transparent rounded hover:scale-105 transform transition-transform duration-300"
                    aria-label="Next Project"
                >
                    <ArrowRightCircleIcon />
                </button>
            </div>

            {/* Project Slider Container */}
            <div className="overflow-hidden">
                <div
                    className="flex gap-8 transition-transform duration-500 ease-in-out will-change-transform"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                    }}
                >
                    {projectsData.map((project, index) => (
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                            <img
                                src={project.image.src}
                                alt={project.Name}
                                className="w-full h-auto mb-14 hover:scale-105 transform transition-transform duration-300"
                            />
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {project.Name}
                                    </h2>
                                    <p className="text-gray-500 text-sm">
                                        {project.School}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center flex items-center justify-center space-x-4">
                <span className="text-lg font-medium text-gray-700">Get Listed</span>
                <span className="text-2xl text-indigo-600 rotate-90">
                    <MousePointer />
                </span>
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 -mt-10"
                >
                    Contact Us
                </a>
            </div>
        </motion.div>
    );
};

export default Projects;
