import React from "react";
import image1 from "../image/recurementpic1.png"; 
import image2 from "../image/recurementpic2.png"; 
import image3 from "../image/recurementpic3.png"; 
import image4 from "../image/recurementpic4.png"; 
const placementsData = [
  {
    year: "2021–2022",
    offers: "750+ Placement Offers",
    image: image1 ,
    pdf: "/pdfs/2021-2022.pdf",
    highlight: true
  },
  {
    year: "2020–2021",
    offers: "550+ Placement Offers",
    image:image2,
    pdf: "/pdfs/2020-2021.pdf"
  },
  {
    year: "2019–2020",
    offers: "820+ Placement Offers",
    image: image3,
    pdf: "/pdfs/2019-2020.pdf"
  },
  {
    year: "2018–2019",
    offers: "820+ Placement Offers",
    image: image4,
    pdf: "/pdfs/2018-2019.pdf"
  }
];

export default function PlacementsSection() {
  return (
    <section className="py-20 px-4 bg-[url('/images/grid-bg.png')] bg-cover">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800">Recruitment In Arya College</h2>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow hover:bg-blue-700 transition">
            Highest Package
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
            Top Recruiters
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
            Award & Achievement
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
            Student Placed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {placementsData.map((placement, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={placement.image}
              alt={`${placement.year} Placement`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3
                className={`text-base font-semibold ${
                  placement.highlight ? "text-red-600" : "text-gray-800"
                }`}
              >
                {placement.year} Placements
              </h3>
              <p className="text-sm text-gray-600 mt-1 mb-3">{placement.offers}</p>
              <a
                href={placement.pdf}
                download
                className={`inline-block w-full py-2 rounded-md text-white text-sm font-medium ${
                  placement.highlight ? "bg-red-500 hover:bg-red-600" : "bg-gray-400 hover:bg-gray-900"
                } transition`}
              >
                ↓ Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
