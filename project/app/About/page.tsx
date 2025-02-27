import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About <span className="text-indigo-600">E-Bhutan</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Empowering students to learn better, together.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-justify">
              At <span className="font-semibold text-indigo-600">E-Bhutan</span>, our mission is to create a <span className="font-medium text-gray-800">collaborative platform</span> where students can share study notes, access quality educational resources, and connect with the best tutors and coaching classes. We aim to make learning more <span className="italic text-gray-800">accessible, effective, and enjoyable</span> for everyone.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
            <ul className="mt-4 space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="flex-shrink-0 text-indigo-600">✔️</span>
                <span className="ml-3">
                  A <span className="font-medium text-gray-800">platform for students</span> to share and access study notes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-indigo-600">✔️</span>
                <span className="ml-3">
                  Find the <span className="font-medium text-gray-800">best tuition and coaching classes</span> near you.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-indigo-600">✔️</span>
                <span className="ml-3">
                  Connect with <span className="font-medium text-gray-800">private tutors</span> for personalized learning.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-indigo-600">✔️</span>
                <span className="ml-3">
                  A platform for <span className="font-medium text-gray-800">educational institutions</span> to market themselves.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-justify">
              We envision a world where every student has access to the <span className="font-medium text-gray-800">resources and support</span> they need to succeed academically. By fostering a <span className="italic text-gray-800">community of learners, educators, and institutions</span>, we aim to revolutionize the way education is delivered and experienced.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Join Us</h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-justify">
              Whether you're a <span className="font-medium text-gray-800">student, tutor, or educational institution</span>, e-Bhutan is here to support your journey. Join us today and be a part of a growing community dedicated to making learning better for everyone.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;