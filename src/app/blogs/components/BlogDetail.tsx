'use client';

import { blogPosts } from '@/utils/constants';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function BlogDetail() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div>Blog not found</div>;

  // Hàm xử lý format content
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      const trimmedParagraph = paragraph.trim();
      if (!trimmedParagraph) return null;
      
      // Xử lý tiêu đề con (số đầu dòng)
      if (/^\d+\./.test(trimmedParagraph)) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            {trimmedParagraph}
          </h3>
        );
      }
      
      return (
        <p key={index} className="mb-4 text-gray-600 leading-relaxed">
          {trimmedParagraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-goGreen-green hover:text-goGreen-dark mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </Link>

        <article className="bg-white rounded-2xl shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <time className="bg-gray-100 px-3 py-1 rounded-full">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.readingTime && (
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  {post.readingTime}
                </span>
              )}
              {post.category && (
                <span className="bg-goGreen-light/20 text-goGreen-dark px-3 py-1 rounded-full">
                  {post.category}
                </span>
              )}
            </div>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-strong:text-gray-800">
            {formatContent(post.content)}
          </div>
        </article>
      </div>
    </div>
  );
}
