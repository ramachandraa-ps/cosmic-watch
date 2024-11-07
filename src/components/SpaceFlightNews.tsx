import React, { useState, useEffect } from 'react';

interface SpaceNewsArticle {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
}

const SpaceFlightNews = () => {
  const [news, setNews] = useState<SpaceNewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles?limit=6');
        const data = await response.json();
        setNews(data.results);
      } catch (error) {
        console.error('Error fetching space news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Latest Space News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <div 
              key={article.id} 
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-colors duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-48">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/api/placeholder/400/300';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-16"/>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 hover:text-blue-400">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {article.summary.length > 150
                    ? `${article.summary.substring(0, 150)}...`
                    : article.summary}
                </p>
                
                {/* Footer Section */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 text-sm font-medium"
                  >
                    Read More
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceFlightNews;