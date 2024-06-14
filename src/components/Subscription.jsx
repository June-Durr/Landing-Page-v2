import React, { useEffect } from 'react';
import gsap from 'gsap';

export const Subscription = () => {
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to('.subscription-card', { opacity: 1, duration: 5, stagger: 0 })
          .to('.subscription-card', { opacity: 1/2, duration: 5, stagger: 0 });
    }, []);

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Subscription</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Subscription Plan Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden subscription-card">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Basic</h3>
                            <ul className="text-left mb-6">
                                <li className="mb-2 text-gray-600">Feature 1</li>
                                <li className="mb-2 text-gray-600">Feature 2</li>
                                <li className="mb-2 text-gray-600">Feature 3</li>
                            </ul>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full">Select</button>
                        </div>
                    </div>
                    {/* Subscription Plan Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden subscription-card">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Pro</h3>
                            <ul className="text-left mb-6">
                                <li className="mb-2 text-gray-600">Feature 1</li>
                                <li className="mb-2 text-gray-600">Feature 2</li>
                                <li className="mb-2 text-gray-600">Feature 3</li>
                            </ul>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full">Select</button>
                        </div>
                    </div>
                    {/* Subscription Plan Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden subscription-card">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Premium</h3>
                            <ul className="text-left mb-6">
                                <li className="mb-2 text-gray-600">Feature 1</li>
                                <li className="mb-2 text-gray-600">Feature 2</li>
                                <li className="mb-2 text-gray-600">Feature 3</li>
                            </ul>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full">Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};





// import React from 'react';

// export const Subscription = () => {


//     return (
//         <div className="bg-gray-100 py-16">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Subscribe Now</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {/* Subscription Plan Card */}
//                     <div className="bg-blue-100 rounded-lg shadow-md overflow-hidden text-center subscription-card">
//                         <div className="p-6">
//                             <h3 className="text-xl font-bold mb-2 text-blue-800">Basic</h3>
//                             <p className="text-gray-700 mb-4">$9.99/mo</p>
//                             <ul className="text-left">
//                                 <li className="mb-2 text-blue-600">Feature 1</li>
//                                 <li className="mb-2 text-blue-600">Feature 2</li>
//                                 <li className="mb-2 text-blue-600">Feature 3</li>
//                             </ul>
//                             <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Select</button>
//                         </div>
//                     </div>
//                     {/* Subscription Plan Card */}
//                     <div className="bg-green-100 rounded-lg shadow-md overflow-hidden text-center subscription-card">
//                         <div className="p-6">
//                             <h3 className="text-xl font-bold mb-2 text-green-800">Pro</h3>
//                             <p className="text-gray-700 mb-4">$19.99/mo</p>
//                             <ul className="text-left">
//                                 <li className="mb-2 text-green-600">Feature 1</li>
//                                 <li className="mb-2 text-green-600">Feature 2</li>
//                                 <li className="mb-2 text-green-600">Feature 3</li>
//                             </ul>
//                             <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">Select</button>
//                         </div>
//                     </div>
//                     {/* Subscription Plan Card */}
//                     <div className="bg-yellow-100 rounded-lg shadow-md overflow-hidden text-center subscription-card">
//                         <div className="p-6">
//                             <h3 className="text-xl font-bold mb-2 text-yellow-800">Premium</h3>
//                             <p className="text-gray-700 mb-4">$29.99/mo</p>
//                             <ul className="text-left">
//                                 <li className="mb-2 text-yellow-600">Feature 1</li>
//                                 <li className="mb-2 text-yellow-600">Feature 2</li>
//                                 <li className="mb-2 text-yellow-600">Feature 3</li>
//                             </ul>
//                             <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">Select</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
