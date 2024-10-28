import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Calendar, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Beach Wedding Destinations for 2024',
    excerpt: 'Discover the most stunning coastal locations for your dream beach wedding...',
    image: 'https://images.unsplash.com/photo-1544124065-c3d56c0f0508?auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Destinations'
  },
  {
    id: 2,
    title: 'How to Plan a Destination Wedding: Complete Guide',
    excerpt: 'Everything you need to know about planning your perfect destination wedding...',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    author: 'Michael Brown',
    date: '2024-03-10',
    readTime: '8 min read',
    category: 'Planning'
  },
  {
    id: 3,
    title: 'Budget-Friendly Destination Wedding Tips',
    excerpt: 'Learn how to have your dream destination wedding without breaking the bank...',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    author: 'Emma Wilson',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Budget'
  }
];

export function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Wedding Planning Blog - DestinationWed"
        description="Expert advice, tips, and inspiration for planning your destination wedding."
      />
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Wedding Planning Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-rose-600 mb-2">
                    <span className="px-2 py-1 bg-rose-50 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition duration-300">
              Load More Posts
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}