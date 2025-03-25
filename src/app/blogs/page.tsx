'use client';

import { BlogPost, blogPosts } from '@/utils/constants';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import BlogDetail from './components/BlogDetail';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  // Nếu có slug thì hiển thị chi tiết
  if (slug) {
    return <BlogDetail />;
  }

  // Không có slug thì hiển thị danh sách
  if (!blogPosts || blogPosts.length === 0) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">
          Our Latest Insights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post : BlogPost) => (
            <Link 
              href={`/blogs?slug=${post.slug}`} 
              key={post.slug}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-goGreen-green group-hover:text-goGreen-dark transition-colors duration-300">
                  {post.title}
                </h2>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  {post.excerpt}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <div className="w-12 h-12 bg-goGreen-light/10 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-6 h-6 text-goGreen-green transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
