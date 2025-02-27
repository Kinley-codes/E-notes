'use client';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6x justify-center flex items-center m-6">
            Terms <span className="text-indigo-600">  &  </span><span className="text-gray-900 ">  Conditions</span>
          </h1>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="text-gray-600">
            Welcome to E-Bhutan! These terms and conditions outline the rules and regulations for the use of our platform. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use E-Bhutan if you do not agree to all of the terms and conditions stated on this page.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Intellectual Property Rights
            </h2>
            <p className="text-gray-600">
              Unless otherwise stated, E-Bhutan and/or its licensors own the intellectual property rights for all material on the platform. All intellectual property rights are reserved. You may view and/or print pages for your own personal use subject to restrictions set in these terms and conditions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. User Responsibilities
            </h2>
            <p className="text-gray-600">
              You must not use this platform in any way that causes, or may cause, damage to the platform or impairment of the availability or accessibility of E-Bhutan. You must not use this platform to copy, store, host, transmit, send, use, publish, or distribute any material which consists of (or is linked to) any spyware, computer virus, or other malicious software.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              In no event shall E-Bhutan, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this platform, whether such liability is under contract, tort, or otherwise. E-Bhutan, including its officers, directors, and employees, shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this platform.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Changes to Terms
            </h2>
            <p className="text-gray-600">
              E-Bhutan reserves the right to revise these terms and conditions at any time as it sees fit. By using this platform, you are expected to review these terms and conditions regularly to ensure you understand all terms and conditions governing the use of this platform.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Governing Law
            </h2>
            <p className="text-gray-600">
              These terms and conditions are governed by and construed in accordance with the laws of Bhutan. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Bhutan.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about these terms and conditions, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            Email: <a href="mailto:ebhutan32@gmail.com" className="text-indigo-600 hover:underline">ebhutan32@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}