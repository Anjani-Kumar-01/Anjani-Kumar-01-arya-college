import React from "react";
import about from "../image/about.jpg";

function InfoCard({ title, points, color }) {
  return (
    <div className="bg-gray-100 rounded-lg flex shadow relative overflow-hidden">
      {/* Vertical Label */}
      <div
        className={`text-white text-xs font-bold px-2 py-2 ${color} flex items-center justify-center`}
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          minWidth: "32px"
        }}
      >
        {title}
      </div>

      {/* List */}
      <ul className="pl-4 pr-3 py-4 text-sm text-gray-700 space-y-2">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Vision() {
  return (
    <section className="px-4 md:px-16 py-12 bg-white">
      {/* Heading & Intro */}
        {/* Heading & Intro - CENTERED */}
      <div className="mb-10 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Arya College Jaipur</h2>
        <p className="text-gray-700 max-w-2xl text-center">
          Arya College is the Best Engineering College in the entire Rajasthan.
          We don’t just teach students, but we train them to be successful professionals.
          We motivate and orient our students and to take on the corporate world.
        </p>
      </div>


      {/* Grid: Left (Info) | Right (Image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Info Cards */}
        <div className="space-y-6">
          <InfoCard
            title="Our Mission"
            color="bg-blue-700"
            points={[
              "To Create a Progressive Academic Environment for the Students",
              "Help Students Achieve Qualities like Techno-Managerial Skills and become Innovative and Creative Professionals",
              "Develop Individuals who can Contribute in the Development and Progress of the Society, Nation & the World as a whole."
            ]}
          />
          <InfoCard
            title="Our Vision"
            color="bg-indigo-800"
            points={[
              "To Emerge as the Best Educational Institute",
              "Work for Excellence in Imparting Quality Education to the Students",
              "Nurture various Talents as Innovative Professionals in Technical & Managerial field thereby making them Competitive to meet all the Future Challenges of Global Economy."
            ]}
          />
        </div>

        {/* Right: Image with Overlay */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img src={about} alt="Campus" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow text-sm w-48">
            <p className="font-bold text-gray-800">15500+ Students Placed</p>
            <p className="text-red-600 text-xs font-semibold mt-1">Admission Open</p>
            <div className="text-yellow-500 mt-1 text-lg">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
}
