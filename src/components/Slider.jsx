import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import lp1 from "../assets/lp1.png";
import lp2 from "../assets/lp2.png";
import lp3 from "../assets/lp3.png";
import lp4 from "../assets/lp4.png";

export const Slider = () => {
  const imagesRef = useRef(null);

  useEffect(() => {
    const images = imagesRef.current.querySelectorAll('.slider-image');
    const imageWidth = images[0].offsetWidth;
    const totalWidth = images.length * imageWidth;

    gsap.set(images, { x: totalWidth }); // Initial position off-screen to the right

    gsap.to(images, {
      x: -totalWidth, // Move to the left to reveal the images
      duration: 20, // Adjust duration as needed
      ease: "none",
      repeat: -1, // Repeat the animation infinitely
      yoyo: true, // Reverse the animation to create a seamless loop
    });
  }, []);

  return (
    <section>
      <article className="flex flex-col items-center">
        <div className="m-4 overflow-hidden">
          <ul className="flex space-x-4 mb-8" ref={imagesRef}>
            <li>
              <img src={lp1} alt="" className="slider-image rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp2} alt="" className="slider-image rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp3} alt="" className="slider-image rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp4} alt="" className="slider-image rounded-lg shadow-md" />
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <img src={lp1} alt="" className="slider-image rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp2} alt="" className="slider-image rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp3} alt="" className="slider-image rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp4} alt="" className="slider-image rounded-lg shadow-md" />
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};





// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import lp1 from "../assets/lp1.png";
// import lp2 from "../assets/lp2.png";
// import lp3 from "../assets/lp3.png";
// import lp4 from "../assets/lp4.png";

// export const Slider = () => {
//   useEffect(() => {
//     const animateImages = () => {
//       gsap.to(".slider-image", {
//         x: "-=500",
//         duration: 5,
//         ease: "power2.inOut",
//         onComplete: function () {
//           gsap.set(".slider-image", { x: 0 });
//           animateImages();
//         },
//       });
//     };

//     animateImages();
//   }, []);

//   return (
//     <section>
//       <article className="flex flex-col items-center">
//         <div className="m-4">
//           <ul className="flex space-x-4 mb-8">
//             <li>
//               <img src={lp1} alt="" className="slider-image rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp2} alt="" className="slider-image rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp3} alt="" className="slider-image rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp4} alt="" className="slider-image rounded-lg shadow-md" />
//             </li>
//           </ul>
//           <ul className="flex space-x-4">
//             <li>
//               <img src={lp1} alt="" className="slider-image rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp2} alt="" className="slider-image rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp3} alt="" className="slider-image rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp4} alt="" className="slider-image rounded-lg shadow-md" />
//             </li>
//           </ul>
//         </div>
//       </article>
//     </section>
//   );
// };


// import lp1 from "../assets/lp1.png";
// import lp2 from "../assets/lp2.png";
// import lp3 from "../assets/lp3.png";
// import lp4 from "../assets/lp4.png";

// export const Slider = () => {
//   return (
//     <section>
//       <article className="flex flex-col items-center">
//         <div className="m-4">
//           <ul className="flex space-x-4 mb-8">
//             <li>
//               <img src={lp1} alt="" className="rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp2} alt="" className="rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp3} alt="" className="rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp4} alt="" className="rounded-lg shadow-md" />
//             </li>
//           </ul>
//           <ul className="flex space-x-4">
//             <li>
//               <img src={lp1} alt="" className="rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp2} alt="" className="rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp3} alt="" className="rounded-lg shadow-md" />
//             </li>
//             <li>
//               <img src={lp4} alt="" className="rounded-lg shadow-md" />
//             </li>
//           </ul>
//         </div>
//       </article>
//     </section>
//   );
// };
