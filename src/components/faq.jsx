import React from 'react';

export const FAQ = () => {
    return (
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="accordion">
              {/* Question 1 */}
              <div className="accordion-item border-b border-gray-300">
                <input type="checkbox" id="faq1" className="accordion-toggle" />
                <label htmlFor="faq1" className="accordion-title cursor-pointer flex justify-between items-center py-4 px-6 bg-blue-100 rounded-lg shadow-lg">
                  <span className="text-lg font-medium text-blue-800">What services do you offer?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
                <div className="accordion-content px-6 pb-6">
                  <p className="text-gray-800">We offer a wide range of services including:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li className="text-gray-700">Web Design</li>
                    <li className="text-gray-700">Graphic Design</li>
                    <li className="text-gray-700">Branding</li>
                    <li className="text-gray-700">Digital Marketing</li>
                    <li className="text-gray-700">SEO Optimization</li>
                  </ul>
                </div>
              </div>
              {/* Question 2 */}
              <div className="accordion-item border-b border-gray-300">
                <input type="checkbox" id="faq2" className="accordion-toggle" />
                <label htmlFor="faq2" className="accordion-title cursor-pointer flex justify-between items-center py-4 px-6 bg-green-100 rounded-lg shadow-lg">
                  <span className="text-lg font-medium text-green-800">Can I request a custom project?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
                <div className="accordion-content px-6 pb-6">
                  <p className="text-gray-800">Yes, we welcome custom project requests! Please contact us with your requirements, and we'll be happy to discuss your project.</p>
                </div>
              </div>
              {/* Question 3 */}
              <div className="accordion-item">
                <input type="checkbox" id="faq3" className="accordion-toggle" />
                <label htmlFor="faq3" className="accordion-title cursor-pointer flex justify-between items-center py-4 px-6 bg-yellow-100 rounded-lg shadow-lg">
                  <span className="text-lg font-medium text-yellow-800">How long does it take to complete a project?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                      fill="currentColor"
                    />
                  </svg>
                </label>
                <div className="accordion-content px-6 pb-6">
                  <p className="text-gray-800">Project timelines can vary depending on the scope and complexity of the project. We'll provide you with an estimated timeline after discussing your requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };