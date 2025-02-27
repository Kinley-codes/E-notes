'use client';
import { Search } from 'lucide-react'; // Import Search icon from Lucide
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ data
  const faqs = [
    {
      question: 'What is E-Bhutan?',
      answer:
        'E-Bhutan is a platform that connects students, tutors, and institutions to make learning more accessible and effective. We provide tools for sharing study notes, accessing educational resources, and finding tutors.',
    },
    {
      question: 'How do I sign up?',
      answer:
        'You can sign up by clicking the "Sign Up" button on the top-right corner of the page. Follow the prompts to create your account.',
    },
    {
      question: 'Is E-Bhutan free to use?',
      answer:
        'Yes, E-Bhutan is free to use for students. However, some premium features or services may require a subscription.',
    },
    {
      question: 'How do I upload notes?',
      answer:
        'To upload notes, go to the "Upload Note" page, fill in the required details, and upload your file. Make sure your notes are well-organized and relevant.',
    },
    {
      question: 'Can I find tutors on E-Bhutan?',
      answer:
        'Yes, E-Bhutan allows you to search for tutors based on subject, location, and availability. You can also view tutor profiles and reviews.',
    },
    {
      question: 'How do I contact support?',
      answer:
        'You can contact our support team by visiting the "Contact Us" page or sending an email to support@e-bhutan.com.',
    },
  ];

  // Filter FAQs based on search query
  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6x justify-center flex items-center m-6">
            F <span className="text-indigo-600">A</span><span className="text-gray-900 ">Q</span>
          </h1>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}