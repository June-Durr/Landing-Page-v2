import React from 'react';

export const RecentWork = () => {
    return (
        <section className="py-12 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Work</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/600x400" alt="Project 1" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                <p className="text-gray-700">Description of Project 1</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/600x400" alt="Project 2" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                <p className="text-gray-700">Description of Project 2</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/600x400" alt="Project 3" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project 3</h3>
                <p className="text-gray-700">Description of Project 3</p>
              </div>
            </div>
          </div>
        </section>
      );
    };

