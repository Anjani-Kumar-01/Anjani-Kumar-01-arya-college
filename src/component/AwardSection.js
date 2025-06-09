// AwardsSection.jsx
import React, { useState } from 'react';
import image1 from "../image/studentimg1.png";
import image2 from "../image/studentimg2.png";
import image3 from "../image/studentimg3.png";
import image4 from "../image/studentimg4.png";
import image5 from "../image/studentimg5.png";
import image6 from "../image/studentimg6.png";
import image7 from "../image/studentimg7.png";
import image8 from "../image/studentimg8.png";
import image9 from "../image/studentimg9.png";
import image10 from "../image/studentimg10.png";


const images = [
  image1,
  image4,
  image5,
  image6,
    image2,
     image3,
  image7,
  image8,
  image9,
  image10,

];

const AwardsSection = () => {
  const [activeTab, setActiveTab] = useState('Students Life');

  return (
    <div className="bg-gray-50 p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-blue-700">
          Awards & Recognition Received By Arya College
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          ARYA provides Excellent Infrastructure & propitious Academics for Professional & Technical Growth of all the Students and Faculty Members.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('Awards')}
            className={`px-4 py-2 rounded border ${activeTab === 'Awards' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`}
          >
            Awards
          </button>
          <button
            onClick={() => setActiveTab('Students Life')}
            className={`px-4 py-2 rounded border ${activeTab === 'Students Life' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`}
          >
            Students Life
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-48 object-cover rounded-md shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
