import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { store } from '../store';

function Cards() {
    const { setData, setCategory } = useContext(store);
    const navigate = useNavigate();

    const h = [
        { name: "aggregator", info: "Platforms that gather and organize multiple AI tools in one place for easier access and comparison" },
        { name: "aicognitive", info: "AI tools focused on simulating human-like thinking, reasoning, and problem-solving." },
        { name: "aidetection", info: "Tools designed to detect AI-generated content, deepfakes, or fraudulent activities" },
        { name: "avatar", info: "AI tools for creating digital avatars for virtual identities, video content, or chat interactions." },
        { name: "chat", info: "Chatbots and conversational AI designed to simulate natural, human-like conversations." },
        { name: "copy writing", info: "AI tools that help generate creative and professional marketing or website copy." },
        { name: "documentprocessing", info: "Tools that automate reading, analyzing, and extracting data from documents." },
        { name: "educationtuoring", info: "AI platforms offering learning support, tutoring, and educational content." },
        { name: "finance", info: "AI solutions for financial planning, analysis, trading, and automation." },
        { name: "forfun", info: "Entertaining AI tools for games, jokes, memes, or lighthearted experiments." },
        { name: "gaming", info: "AI designed to enhance or create gaming experiences, from game development to AI opponents." },
        { name: "generativecode", info: "AI tools that assist in writing, generating, and optimizing source code." },
        { name: "generativevideo", info: "AI systems that create videos, animations, or synthetic media automatically." },
        { name: "generatorai", info: "General-purpose AI generators for text, images, music, and more." },
        { name: "healthcaretools", info: "AI applications to support diagnostics, health monitoring, and medical research." },
        { name: "imageimprovement", info: "AI tools to enhance, upscale, or restore images for better visual quality." },
        { name: "videoediting", info: "AI-assisted video editing tools for automation, enhancement, or creative effects." },
        { name: "voicemodulation", info: "Tools for altering, cloning, or synthesizing human voices with AI." },
        { name: "websitebuilding", info: "AI tools for building websites and optimizing content for search engines." }
        // ... rest of your categories
    ];

    const handleCardClick = async (categoryName) => {
        try {
            const res = await axios.get(`http://localhost:5000/get-data/${categoryName}`);
            setData(res.data);
            setCategory(categoryName);
            navigate('/cat');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {h.map((item, index) => (
                        <div key={index} className="p-4 md:w-1/3">
                            <div
                                onClick={() => handleCardClick(item.name)}
                                className="group h-full border-2 border-gray-200 hover:border-indigo-500 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        className="h-48 w-full object-cover"
                                        src={`/logo/${item.name}.jpg`}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-lg font-medium text-gray-900 mb-3">
                                        {item.name}
                                    </h2>
                                    <p className="leading-relaxed mb-3">{item.info}</p>
                                    <p className="text-indigo-500">Explore more →</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Cards;

