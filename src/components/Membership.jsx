import React from 'react';

export const Membership = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Membership</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Membership Plan Card */}
                    <div className="bg-blue-100 rounded-lg shadow-md overflow-hidden text-center membership-card">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4 text-blue-800">Basic</h3>
                            <ul className="text-left mb-6">
                                <li className="mb-2">Feature 1</li>
                                <li className="mb-2">Feature 2</li>
                                <li className="mb-2">Feature 3</li>
                            </ul>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full">Select</button>
                        </div>
                    </div>
                    {/* Membership Plan Card */}
                    <div className="bg-green-100 rounded-lg shadow-md overflow-hidden text-center membership-card">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4 text-green-800">Pro</h3>
                            <ul className="text-left mb-6">
                                <li className="mb-2">Feature 1</li>
                                <li className="mb-2">Feature 2</li>
                                <li className="mb-2">Feature 3</li>
                            </ul>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 w-full">Select</button>
                        </div>
                    </div>
                    {/* Membership Plan Card */}
                    <div className="bg-yellow-100 rounded-lg shadow-md overflow-hidden text-center membership-card">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4 text-yellow-800">Premium</h3>
                            <ul className="text-left mb-6">
                                <li className="mb-2">Feature 1</li>
                                <li className="mb-2">Feature 2</li>
                                <li className="mb-2">Feature 3</li>
                            </ul>
                            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 w-full">Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
