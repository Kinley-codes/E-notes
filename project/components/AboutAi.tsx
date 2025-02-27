"use client";
import { FileText, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
const AISection = () => {
  return (

    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Empower Your Work with AI
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-12">
          Our platform leverages cutting-edge AI to help you summarize content, generate questions, and get instant answers. Save time, enhance productivity, and unlock new possibilities.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Summarization Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <FileText className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Summarization</h3>
            <p className="text-gray-300">
              Quickly condense long texts into concise summaries. Perfect for students, professionals, and anyone who needs to extract key information efficiently.
            </p>
          </div>

          {/* Question Generation Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Question Generation</h3>
            <p className="text-gray-300">
              Automatically generate insightful questions from any text. Ideal for educators, content creators, and anyone looking to spark discussions.
            </p>
          </div>

          {/* Answer Questions Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Answer Questions</h3>
            <p className="text-gray-300">
              Get instant, accurate answers to your questions. Whether you're researching or just curious, our AI has you covered.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
        <Link href="/openai"> <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
          Try It Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default AISection;