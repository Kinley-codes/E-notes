import { notFound } from 'next/navigation';
import { FC } from 'react';

// Sample blog data (replace this with actual database fetching logic)
const blogPosts = [
  {
    id: '1',
    title: 'How E-Bhutan is Revolutionizing Education in Bhutan',
    content:
      'E-Bhutan is transforming education in Bhutan by providing a platform for students and tutors to connect, share resources, and learn together. With features like note-sharing, tutor matching, and interactive sessions, E-Bhutan is making education more accessible and effective for everyone.',
    date: 'October 10, 2023',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Top 5 Benefits of Using E-Bhutan for Students',
    content:
      '1. Access to high-quality study notes. 2. Find the best tutors in your area. 3. Collaborate with peers. 4. Track your learning progress. 5. Affordable and flexible learning options.',
    date: 'October 5, 2023',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
  },
];

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

const BlogPostPage: FC<BlogPostPageProps> = async ({ params }) => {
  const { id } = await params; // Await the params if it's a Promise

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return notFound(); // Show a 404 page if the post is not found
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Blog Post Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Blog Post Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        {/* Blog Post Date */}
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>

        {/* Blog Post Content */}
        <div className="prose prose-lg text-gray-700">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
