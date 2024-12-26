import React from "react";

function Box({ title, text, imageUrl, buttonText, buttonLink }) {
    return (
        <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="card h-full bg-white shadow-lg rounded-lg">
                    <img src={imageUrl} className="card-img-top h-48 object-cover rounded-t-lg" alt="Card Image" />
                    <div className="card-body p-4 ">
                        <h5 className="card-title text-lg font-semibold">{title}</h5>
                        <p className="card-text text-gray-600 mt-2">{text}</p>
                         <a
                            href={buttonLink}
                            className="btn btn-primary mt-4 block text-center bg-blue-500 text-white font-semibold  rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-lg"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="card h-full bg-white shadow-lg rounded-lg">
                    <img src={imageUrl} className="card-img-top h-48 object-cover rounded-t-lg" alt="Card Image" />
                    <div className="card-body p-4 ">
                        <h5 className="card-title text-lg font-semibold">{title}</h5>
                        <p className="card-text text-gray-600 mt-2">{text}</p>
                         <a
                            href={buttonLink}
                            className="btn btn-primary mt-4 block text-center bg-blue-500 text-white font-semibold  rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-lg"
                        >
                            Read More
                        </a>        
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="card h-full bg-white shadow-lg rounded-lg">
                    <img src={imageUrl} className="card-img-top h-48 object-cover rounded-t-lg" alt="Card Image" />
                    <div className="card-body p-4 ">
                        <h5 className="card-title text-lg font-semibold">{title}</h5>
                        <p className="card-text text-gray-600 mt-2">{text}</p>
                        <a
                            href={buttonLink}
                            className="btn btn-primary mt-4 block text-center bg-blue-500 text-white font-semibold  rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-lg"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="card h-full bg-white shadow-lg rounded-lg">
                    <img src={imageUrl} className="card-img-top h-48 object-cover rounded-t-lg" alt="Card Image" />
                    <div className="card-body p-4 ">
                        <h5 className="card-title text-lg font-semibold">{title}</h5>
                        <p className="card-text text-gray-600 mt-2">{text}</p>
                         <a
                            href={buttonLink}
                            className="btn btn-primary mt-4 block text-center bg-blue-500 text-white font-semibold  rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-lg"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            {/* Repeat similar blocks for additional cards */}
            {/* Example: */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="card h-full bg-white shadow-lg rounded-lg">
                    <img src={imageUrl} className="card-img-top h-48 object-cover rounded-t-lg" alt="Card Image" />
                    <div className="card-body p-4">
                        <h5 className="card-title text-lg font-semibold">{title}</h5>
                        <p className="card-text text-gray-600 mt-2">{text}</p>
                        <a
                            href={buttonLink}
                            className="btn btn-primary mt-4 block text-center bg-blue-500 text-white font-semibold  rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-lg"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="card h-full bg-white shadow-lg rounded-lg">
                    <img src={imageUrl} className="card-img-top h-48 object-cover rounded-t-lg" alt="Card Image" />
                    <div className="card-body p-4">
                        <h5 className="card-title text-lg font-semibold">{title}</h5>
                        <p className="card-text text-gray-600 mt-2">{text}</p>
                        <a
                            href={buttonLink}
                            className="btn btn-primary mt-4 block text-center bg-blue-500 text-white font-semibold  rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-lg"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="card h-full bg-white shadow-lg rounded-lg">
                    <img src={imageUrl} className="card-img-top h-48 object-cover rounded-t-lg" alt="Card Image" />
                    <div className="card-body p-4">
                        <h5 className="card-title text-lg font-semibold">{title}</h5>
                        <p className="card-text text-gray-600 mt-2">{text}</p>
                        <a
                            href={buttonLink}
                            className="btn btn-primary mt-4 block text-center bg-blue-500 text-white font-semibold  rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-lg"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="card h-full bg-white shadow-lg rounded-lg">
                    <img src={imageUrl} className="card-img-top h-48 object-cover rounded-t-lg" alt="Card Image" />
                    <div className="card-body p-4">
                        <h5 className="card-title text-lg font-semibold">{title}</h5>
                        <p className="card-text text-gray-600 mt-2">{text}</p>
                        <a
                            href={buttonLink}
                            className="btn btn-primary mt-4 block text-center bg-blue-500 text-white font-semibold  rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-lg"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="card h-full bg-white shadow-lg rounded-lg">
                    <img src={imageUrl} className="card-img-top h-48 object-cover rounded-t-lg" alt="Card Image" />
                    <div className="card-body p-4">
                        <h5 className="card-title text-lg font-semibold">{title}</h5>
                        <p className="card-text text-gray-600 mt-2">{text}</p>
                        <a
                            href={buttonLink}
                            className="btn btn-primary mt-4 block text-center bg-blue-500 text-white font-semibold  rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 shadow-lg"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Box;
