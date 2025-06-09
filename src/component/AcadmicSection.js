import React from "react";
import { GraduationCap, School, Hospital, FileText } from "lucide-react";

const Card = ({ icon: Icon, title, filled }) => (
  <div
    className={`p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center transition transform hover:scale-105 cursor-pointer
      ${filled ? "bg-white text-black" : "border border-white text-white"}`}
  >
    <div className={`rounded-full p-3 mb-3 ${filled ? "bg-red-600 text-white" : "bg-white text-red-600"}`}>
      <Icon size={24} />
    </div>
    <p className="font-semibold text-sm leading-tight">{title}</p>
  </div>
);

export default function AcademicsSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 text-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Box */}
        <div className="bg-white text-black rounded-xl p-10 shadow-lg max-w-xl mx-auto">
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-4 font-medium">
            Academics
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Successfully Complete Your Degree At Arya College
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Arya College is the Best Engineering College in the entire Rajasthan. We don’t just teach students, but we train them to be successful professionals. We motivate and orient our students and to take on the corporate world.
          </p>
        </div>

        {/* Right Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card icon={GraduationCap} title="Under Graduation" filled />
          <Card icon={School} title="Post Graduation" />
          <Card icon={Hospital} title="Pharma and Medical" />
          <Card icon={FileText} title="Online Admission Procedure" filled />
        </div>
      </div>
    </section>
  );
}

