// import React from "react";
// import lp1 from "../assets/lp1.png"; // Import your image assets
// import lp2 from "../assets/lp2.png";
// import lp3 from "../assets/lp3.png";
// import lp4 from "../assets/lp4.png";

// export const DesignDev = () => {
//   return (
//     <section className="bg-gray-100 py-20">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Design & Development</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md">
//             <img src={lp1} alt="Project 1" className="w-32 h-32 rounded-full mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Project 1</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//           <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md">
//             <img src={lp2} alt="Project 2" className="w-32 h-32 rounded-full mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Project 2</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//           <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md">
//             <img src={lp3} alt="Project 3" className="w-32 h-32 rounded-full mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Project 3</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//           <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md">
//             <img src={lp4} alt="Project 4" className="w-32 h-32 rounded-full mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Project 4</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react'

export const DesignDev = () => {
  return (
    <div class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Design & Dev</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/600x400" alt="Design Image" class="w-full h-64 object-cover" />
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">Design</h3>
                    <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <a href="#" class="text-blue-500 font-medium mt-4 inline-block">Read More</a>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/600x400" alt="Development Image" class="w-full h-64 object-cover" />
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">Development</h3>
                    <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <a href="#" class="text-blue-500 font-medium mt-4 inline-block">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}
