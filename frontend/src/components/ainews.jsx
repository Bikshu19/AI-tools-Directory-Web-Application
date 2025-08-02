import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import AnimatedSection from './AnimatedSection';

function Ainews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/get-info')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching AI news:', err);
        setError('Failed to load AI news');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#3498db" size={50} />
      </div>
    );
  }

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {articles.map((article, index) => (
            <AnimatedSection key={index}>
              <div className="py-8 flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-gray-900">{article.title}</h2>

                {/* Centered Image */}
                <div className="flex flex-col items-center">
                  <img
                    src={article.image_url}
                    alt="news"
                    className="rounded-lg w-full max-w-md"
                  />
                </div>

                <p><strong>Article ID:</strong> {article.article_id}</p>
                <p><strong>Author:</strong> {article.creator?.join(', ') || 'Unknown'}</p>
                <p><strong>Published On:</strong> {article.pubDate}</p>
                <p><strong>Timezone:</strong> {article.pubDateTZ}</p>
                <p><strong>Description:</strong> {article.description || 'No description available.'}</p>
                <p><strong>Keywords:</strong> {article.keywords?.join(', ') || 'None'}</p>
                <p><strong>Language:</strong> {article.language}</p>
                <p><strong>Country:</strong> {article.country?.join(', ')}</p>
                <p><strong>Category:</strong> {article.category?.join(', ')}</p>
                <p><strong>Source Name:</strong> {article.source_name}</p>
                <p><strong>Source URL:</strong> <a href={article.source_url} target="_blank" className="text-indigo-500 underline">{article.source_url}</a></p>
                <p><strong>Content:</strong> {article.content}</p>
                <p><strong>Video URL:</strong> {article.video_url || 'None'}</p>
                <p><strong>Duplicate:</strong> {article.duplicate ? 'Yes' : 'No'}</p>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  Read Full Article
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ainews;
