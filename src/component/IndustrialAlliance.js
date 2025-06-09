import React from "react";
import logo from "../image/allinceimg.png"; 

const allianceItems = [
  {
    text: "Arya College has a definite purpose and represents the inter-firm cooperative agreements aiming to achieve a competitive advantage for the partners.",
    bg: "bg-gradient-to-r from-red-600 to-blue-800",
    textColor: "text-white",
    image:logo,
  },
  {
    text: "Arya College also highlights the primary advantage for the academic community, industry, research funding, and practical learning opportunities for students.",
    bg: "bg-white",
    textColor: "text-gray-800",
      image:logo,
  },
  {
    text: "It's a design or approach, and the primary motive is to create success factors among students.",
    bg: "bg-white",
    textColor: "text-gray-800",
      image:logo,
  },
  {
    text: "It extracts valuable lessons to help others utilize the strategic alliance between Arya college and its industries.",
    bg: "bg-white",
    textColor: "text-gray-800",
      image:logo,
  }
];

export default function IndustrialAlliance() {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-blue-800">Industrial Alliance</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600">
          Arya College Jaipur has a definite purpose and represents inter-firm cooperative agreements aiming to achieve a competitive advantage for the partners. Arya College Jaipur also highlights the primary advantage for the academic community, industry, research funding, and practical learning opportunities for students.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allianceItems.map((item, idx) => (
          <div
            key={idx}
            className={`${item.bg} ${item.textColor} p-6 rounded shadow`}
          >
            <div className="flex items-start gap-4">
              <img src={item.image} alt="Logo" className="w-10 h-10" />
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
