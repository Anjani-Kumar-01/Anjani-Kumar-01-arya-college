import React from "react";
import image1 from "../image/image2.png"; 
import image2 from "../image/image3.png"; 
import image3 from "../image/image4.png";
import image4 from "../image/image5.png"; 
import image5 from "../image/image6.png"; 
import image6 from "../image/image7.png"; 
import image7 from "../image/image8.png";


const allianceLogos = [
image1, image2, image3, image4, image5, image6, image7
];

export default function Logo() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-800">Industrial Alliance</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {allianceLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white shadow rounded p-4 w-32 h-32 flex items-center justify-center"
          >
            <img src={logo} alt={`Alliance Logo ${index + 1}`} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
