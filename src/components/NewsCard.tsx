import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { NewsArticle } from '../utils/types';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, featured = false }) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formattedDate = formatDate(article.publishedAt);
  
  // Use placeholder image if urlToImage is null
  const imageUrl = article.urlToImage || 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  if (featured) {
    return (
      <div className="news-card overflow-hidden h-full flex flex-col">
        <div className="relative">
          <img 
            src={imageUrl}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">
              {article.source.name}
            </span>
            <h3 className="text-white text-xl font-bold">{article.title}</h3>
            <div className="flex items-center text-gray-200 text-sm mt-2">
              <Calendar size={16} className="mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
        <div className="p-6 flex-grow bg-white">
          <p className="text-gray-600 mb-4">
            {article.description || 'Read the full article for more information...'}
          </p>
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Read Full Article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="news-card h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
          {article.source.name}
        </span>
      </div>
      <div className="p-5 flex-grow">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar size={16} className="mr-1" />
          <span>{formattedDate}</span>
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.description || 'Read the full article for more information...'}
        </p>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary font-medium hover:underline mt-auto"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;