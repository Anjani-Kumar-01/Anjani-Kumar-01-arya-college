
import React from 'react';
import image1 from '../image/collegepic1.png'; 
import image2 from '../image/collegepic2.png';
import image3 from '../image/collegepic3.png'; 
import image4 from '../image/collegepic4.png'; 

const colleges = [
  {
    name: 'AIETM',
    fullName: 'Arya Institute of Engg. Tech & Mgmt',
    description:
      'A.I.E.T.M, the Arya Institute of Engineering Technology & Management, is one of the most prominent colleges ...',
    image: image1, 
    reapCode: '10',
  },
  {
    name: 'AIET',
    fullName: 'Arya Institute of Engg. & Tech',
    description:
      'Another branch of Arya College is the Arya Institute of Engineering & Technology (A.I.E.T.), the foremost ...',
    image:  image2,
    reapCode: '10',
  },
  {
    name: 'ACERC',
    fullName: 'Arya College of Engg. & Res Centre',
    description:
      'The flagship of Arya college under the Arya group of colleges, the A.C.E.R.C., aims to prepare students ...',
    image:  image3,
    reapCode: '10',
  },
  {
    name: 'ACP',
    fullName: 'Arya College of Pharmacy',
    description:
      'Arya Group of Colleges also has a college for pharmacy, the Arya College of Pharmacy, established in 2004...',
    image:  image4,
    reapCode: '10',
  },
];

const CollegeCard= () => {
  return (
    <div className="min-h-screen bg-white p-6 mb-0">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-800">Arya Group Of Colleges, Jaipur,</h1>
        <p className="text-gray-600">The best under one roof</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {colleges.map((college, index) => (
          <div key={index} className="bg-white border-amber-50 rounded-xl shadow p-4">
            <div className="relative">
              <img src={college.image} alt={college.name} className="rounded-md w-full h-40 object-cover" />
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                REAP Code: {college.reapCode}
              </div>
            </div>
            <h2 className="text-lg font-semibold mt-3 text-red-700">{college.name}</h2>
            <h3 className="text-sm text-gray-700">{college.fullName}</h3>
            <p className="text-sm text-gray-600 mt-2">{college.description}</p>
            <div className="mt-4 flex justify-between">
              <button className="px-3 py-1 bg-blue-600 text-white rounded">View More</button>
              <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeCard;
