import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cardscom from '../components/cardscom';
import Navbar from '../components/Navbar';

function Viewdetailpage() {
    const location = useLocation();
    const { item, category } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [item]);

    if (!item) {
        return <div className="text-center text-gray-500 p-10">No data available.</div>;
    }

    return (
        <div>
            <Navbar/>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img
                            className="object-contain object-center rounded"
                            alt="AI Tool"
                            src={`/${category}/${item.name}.jpg`}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl mb-4 font-medium text-gray-900 text-5xl">
                            {item.name}
                        </h1>
                        <p className="mb-2 font-medium text-indigo-500 text-2xl">
                            Category: {item.category} | Accuracy: {item.accuracy}
                        </p>
                        <p className="mb-4 leading-relaxed text-gray-700"><strong className=' text-indigo-500 text-sm'>Purpose:</strong>{item.purpose}</p>
                        <p className="mb-4 leading-relaxed"><strong className=' text-indigo-500 text-xl'>Why To Choose:</strong>{item.why_choose}</p>

                        <div className="mb-4">
                            <h2 className="font-semibold text-gray-800 mb-2">Supports:</h2>
                            <p>{item.supports?.join(', ')}</p>
                        </div>

                        <div className="mb-4">
                            <h2 className="font-semibold text-gray-800 mb-2">Unique Features:</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                {item.unique_features?.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h2 className="font-semibold text-gray-800 mb-2">Pros:</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                {item.pros?.map((pro, idx) => (
                                    <li key={idx}>{pro}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h2 className="font-semibold text-gray-800 mb-2">Cons:</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                {item.cons?.map((con, idx) => (
                                    <li key={idx}>{con}</li>
                                ))}
                            </ul>
                        </div>

                        <p className="mb-4">
                            <strong>Pricing:</strong> {item.pricing} &nbsp; | &nbsp;
                            <strong>Users:</strong> {item.user_count} &nbsp; | &nbsp;
                            <br/>
                            <center>
                            <strong>Rating:</strong> ⭐ {item.rating}
                            </center>
                        </p>
                        <p className="mb-4 text-gray-700">{item.how_does_it_compare}</p>
                        <div className="flex justify-center">
                            <a
                                href={item.official_website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                Visit Official Website
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Cardscom />
        </div>
    );
}

export default Viewdetailpage;
