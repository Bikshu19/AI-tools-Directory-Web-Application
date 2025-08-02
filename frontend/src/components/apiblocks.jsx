import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimatedSection from '../components/AnimatedSection';

function ApisFeatures() {
  const [apis, setApis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/apis')
      .then((res) => {
        setApis(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          Explore AI APIs <br className="hidden sm:block" /> Categorized for Developers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apis.map((api) => (
            <AnimatedSection key={api._id}>
              <div className="h-full bg-blue-100 p-6 rounded-lg flex items-start">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-4 flex-shrink-0 text-xl font-bold">
                  {api.name.charAt(0)}
                </div>

                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    {api.name}
                  </h2>

                  <p className="leading-relaxed text-base mb-1">
                    <span className="font-semibold">Category:</span> {api.category}
                  </p>
                  <p className="leading-relaxed text-base mb-1">
                    <span className="font-semibold">Provider:</span> {api.provider}
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    {api.description}
                  </p>

                  <a
                    href={api.api_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApisFeatures;
