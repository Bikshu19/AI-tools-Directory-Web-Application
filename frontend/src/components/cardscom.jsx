import React, { useContext } from 'react';
import { store } from '../store';
import { useNavigate } from 'react-router-dom';

function Cardscom() {
    const { data, category } = useContext(store);
    const navigate = useNavigate();

    return (
        <div>
            <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 ">
                    {data && data.length > 0 ? (
                        data.map((item, index) => (
                            <div key={index} className="lg:w-1/3 md:w-1/2 p-4 "
                                onClick={() => {
                                    navigate('/detail', { state: { item, category } });
                                }}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 hover:border-indigo-500 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg">
                                    <img
                                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                                        src={`/${category}/${item.name}.jpg`}
                                        alt={item.title || "AI Tool"}
                                    />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 capitalize">
                                            {category}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {item.name || "Untitled"}
                                        </h1>
                                        <p className="leading-relaxed mb-3">
                                            {item.purpose || "No description available."}
                                        </p>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {item.pricing || "Untitled"}
                                        </h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                Learn More →
                                            </a>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                👁️ {`${item.user_count}`}
                                            </span>
                                            <span className="text-yellow-400 inline-flex items-center leading-none text-3xl">
                                                {'★'.repeat(item.rating || 0)}{'☆'.repeat(5 - (item.rating || 0))}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full text-gray-400">No data found.</p>
                    )}
                </div>
            </div>
        </section>
        </div>
    );
}
export default Cardscom;