import React, { useState } from 'react';
import axios from 'axios';

function CompareTools() {
  const categories = [
    'aggregator', 'aicognitive', 'aidetection', 'avatar', 'chat',
    'copy writing', 'documentprocessing', 'educationtuoring', 'finance', 'forfun',
    'gaming', 'generativecode', 'generativevideo', 'generatorai', 'healthcaretools',
    'imageimprovement', 'logo', 'videoediting', 'voicemodulation', 'websitebuilding'
  ];

  const [tools1, setTools1] = useState([]);
  const [tools2, setTools2] = useState([]);
  const [selectedCategory1, setSelectedCategory1] = useState('');
  const [selectedCategory2, setSelectedCategory2] = useState('');
  const [selectedTool1, setSelectedTool1] = useState('');
  const [selectedTool2, setSelectedTool2] = useState('');
  const [toolData, setToolData] = useState([]);

  const fetchTools = (category, setTools) => {
    axios.get(`http://localhost:5000/tools/${category}`)
      .then(res => setTools(res.data))
      .catch(err => console.error(err));
  };

  const handleCompare = () => {
    if (selectedTool1 && selectedTool2 && selectedCategory1 && selectedCategory2) {
      axios.get('http://localhost:5000/compare', {
        params: {
          tool1: selectedTool1,
          tool2: selectedTool2,
          category1: selectedCategory1,
          category2: selectedCategory2
        }
      })
      .then(res => setToolData(res.data))
      .catch(err => console.error(err));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Compare AI Tools</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold mb-2">Select Category for Tool 1</h2>
          <select
            className="border p-2 rounded w-full"
            onChange={(e) => {
              const category = e.target.value;
              setSelectedCategory1(category);
              fetchTools(category, setTools1);
              setSelectedTool1('');
            }}
            value={selectedCategory1}
          >
            <option value="">Select Category</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>

          <h2 className="font-semibold mt-4 mb-2">Select Tool 1</h2>
          <select
            className="border p-2 rounded w-full"
            onChange={(e) => setSelectedTool1(e.target.value)}
            value={selectedTool1}
          >
            <option value="">Select Tool</option>
            {tools1.map((tool, i) => (
              <option key={i} value={tool}>{tool}</option>
            ))}
          </select>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Select Category for Tool 2</h2>
          <select
            className="border p-2 rounded w-full"
            onChange={(e) => {
              const category = e.target.value;
              setSelectedCategory2(category);
              fetchTools(category, setTools2);
              setSelectedTool2('');
            }}
            value={selectedCategory2}
          >
            <option value="">Select Category</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>

          <h2 className="font-semibold mt-4 mb-2">Select Tool 2</h2>
          <select
            className="border p-2 rounded w-full"
            onChange={(e) => setSelectedTool2(e.target.value)}
            value={selectedTool2}
          >
            <option value="">Select Tool</option>
            {tools2.map((tool, i) => (
              <option key={i} value={tool}>{tool}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleCompare}
        disabled={!selectedTool1 || !selectedTool2 || !selectedCategory1 || !selectedCategory2}
        className={`mt-6 px-6 py-2 rounded transition ${
          selectedTool1 && selectedTool2 && selectedCategory1 && selectedCategory2
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-400 text-white cursor-not-allowed'
        }`}
      >
        Compare
      </button>

      <div className="grid grid-cols-2 gap-8 mt-10">
        {toolData.map((tool, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow space-y-3 leading-relaxed">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              {tool.name}
            </h2>
            <p><strong>Website:</strong> <a href={tool.official_website} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{tool.official_website}</a></p>
            <p><strong>Category:</strong> {tool.category}</p>
            <p><strong>Rating:</strong> ⭐ {tool.rating}</p>
            <p><strong>User Count:</strong> {tool.user_count}</p>
            <p><strong>Accuracy:</strong> {tool.accuracy}</p>

            <div>
              <p className="font-semibold mt-2">Why Choose:</p>
              <p className="text-gray-700">{tool.why_choose}</p>
            </div>

            <div>
              <p className="font-semibold">Purpose:</p>
              <p className="text-gray-700">{tool.purpose}</p>
            </div>

            <p><strong>Supports:</strong> {tool.supports?.join(', ')}</p>
            <p><strong>Pricing:</strong> {tool.pricing}</p>

            <div>
              <p className="font-semibold">Pros:</p>
              <ul className="list-disc pl-5 text-gray-700">
                {tool.pros?.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </div>

            <div>
              <p className="font-semibold">Cons:</p>
              <ul className="list-disc pl-5 text-gray-700">
                {tool.cons?.map((c, idx) => <li key={idx}>{c}</li>)}
              </ul>
            </div>

            <div>
              <p className="font-semibold">Comparison Insight:</p>
              <p className="text-gray-700">{tool.how_does_it_compare}</p>
            </div>

            <div>
              <p className="font-semibold">Unique Features:</p>
              <ul className="list-disc pl-5 text-gray-700">
                {tool.unique_features?.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompareTools;
