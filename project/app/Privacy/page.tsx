'use client';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6x justify-center flex items-center m-6">
            Privacy   <span className="text-indigo-600">  Policy</span>
          </h1>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="text-gray-600">
            At E-Bhutan, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our platform. By accessing or using E-Bhutan, you agree to the terms of this Privacy Policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600">
              We collect information that you provide directly to us, such as your name, email address, and payment details when you register for an account or use our services. We also automatically collect certain information when you use our platform, including your IP address, device information, and browsing behavior.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. We may also use your information to detect and prevent fraud, comply with legal obligations, and enforce our terms and conditions.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-600">
              We do not sell or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our platform, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-600">
              We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal information at any time. You can also object to the processing of your personal information, request restrictions on its use, or request a copy of your data. To exercise these rights, please contact us at the email address provided below.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes by email or through a notice on our platform. Your continued use of E-Bhutan after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            Email: <a href="mailto:ebhutan32@gmail.com" className="text-indigo-600 hover:underline">ebhutan32@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}