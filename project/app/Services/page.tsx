import { MousePointer } from 'lucide-react';
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Our <span className="text-indigo-600">  Services</span>
          </h1>
          <h4 className="mt-4 text-xl text-gray-600">
            Empowering education through collaboration and accessibility.
          </h4>
        </div>

        {/* School Listings Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">For Schools and Institutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: School Listing */}
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
              <h4 className="text-xl font-bold text-gray-900">School Listing</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Get your school listed on e-Bhutan and showcase your achievements, facilities, and admission details to a wide audience of students and parents.
              </p>
            </div>

            {/* Service 2: Highlight Achievements */}
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
              <h4 className="text-xl font-bold text-gray-900">Highlight Achievements</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Showcase your school's accomplishments, awards, and unique programs to stand out from the competition.
              </p>
            </div>
          </div>

          {/* Preview Section for Schools */}
          <div className="mt-12 bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h4 className="text-xl font-bold text-gray-900">How Your School Will Appear</h4>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here's an example of how your school's listing will look on e-Bhutan:
            </p>
            <div className="mt-6 border border-gray-200 rounded-lg p-6">
              <h5 className="text-lg font-bold text-gray-900">Example School</h5>
              <p className="mt-2 text-gray-600">
                <span className="font-medium">Location:</span> Thimphu, Bhutan
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-medium">Achievements:</span> Best School Award 2023, Top in Academics
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-medium">Admission Open:</span> Yes
              </p>
              <div className="mt-4">
                <a
                  href="/Contact"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Get Listed and Contact Us Button */}
          <div className="mt-12 text-center flex items-center justify-center space-x-4">
            <span className="text-lg font-medium text-gray-700">Get Listed</span>
            <span className="text-2xl text-indigo-600 rotate-90"><MousePointer/></span> {/* Curvy arrow */}
            <a
              href="/Contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 -mt-10"
>
              Contact Us
            </a>
          </div>
        </div>
<div className="border-t-2 border-dotted border-gray-400 my-6"></div>
        {/* Tutoring Services Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">For Tutoring Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Coaching Classes */}
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
              <h4 className="text-xl font-bold text-gray-900">Coaching Classes</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                List your coaching classes on e-Bhutan and reach students looking for extra academic support.
              </p>
            </div>

            {/* Service 2: Private Tutors */}
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
              <h4 className="text-xl font-bold text-gray-900">Private Tutors</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Connect with students seeking personalized tutoring. Showcase your expertise and availability.
              </p>
            </div>
          </div>

          {/* Preview Section for Tutoring */}
          <div className="mt-12 bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h4 className="text-xl font-bold text-gray-900">How Your Tutoring Service Will Appear</h4>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Here's an example of how your tutoring service will look on e-Bhutan:
            </p>
            <div className="mt-6 border border-gray-200 rounded-lg p-6">
              <h5 className="text-lg font-bold text-gray-900">Example Tutoring Service</h5>
              <p className="mt-2 text-gray-600">
                <span className="font-medium">Tutor Name:</span> John Doe
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-medium">Subjects:</span> Math, Science, English
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-medium">Availability:</span> Weekdays, 4 PM - 7 PM
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Get Listed and Contact Us Button */}
          <div className="mt-12 text-center flex items-center justify-center space-x-4">
            <span className="text-lg font-medium text-gray-700">Get Listed</span>
            <span className="text-2xl text-indigo-600 rotate-90"><MousePointer/></span> {/* Curvy arrow */}
            <a
              href="/Contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 -mt-10"
>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;