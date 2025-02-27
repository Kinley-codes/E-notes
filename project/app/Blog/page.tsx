'use client';

import Link from 'next/link';

export default function BlogPage() {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: 'How E-Bhutan is Revolutionizing Education in Bhutan',
      description:
        'Discover how E-Bhutan is transforming the way students and tutors connect, share resources, and learn together in Bhutan.',
      date: 'October 10, 2023',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Top 5 Benefits of Using E-Bhutan for Students',
      description:
        'Learn about the key benefits of using E-Bhutan, from accessing study notes to finding the best tutors in your area.',
      date: 'October 5, 2023',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'How to Upload Notes on E-Bhutan: A Step-by-Step Guide',
      description:
        'Follow this simple guide to upload your study notes on E-Bhutan and contribute to the learning community.',
      date: 'September 28, 2023',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Why Tutors Love E-Bhutan: A Platform for Growth',
      description:
        'Find out why tutors are choosing E-Bhutan to connect with students and grow their teaching careers.',
      date: 'September 20, 2023',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6x justify-center flex items-center m-6">
            E <span className="text-indigo-600">-Bhutan</span><span className="text-gray-900 ">-Blog</span>
          </h1>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link
                  href={`/Blog/${post.id}`} // Dynamic route for the blog post
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}