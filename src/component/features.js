import React from "react";
import featurepic1 from "../image/featurespic1.png";
import featurepic2 from "../image/featurespic2.png"; 
import featurepic3 from "../image/featurespic3.png"; 
import featurepic4 from "../image/featurespic4.png"; 
import featurepic5 from "../image/featurespic5.png"; 
import featurepic6 from "../image/featurespic6.png"; 

const badges = [
  {
    icon: featurepic1,
    title: "22 Years Of Success",
    bg: "bg-red-600 text-white",
  },
  {
    icon: featurepic2,
    title: "Ranked 'A' By RTU",
  },
  {
    icon: featurepic3,
    title: "Naac Accredited",
  },
  {
    icon: featurepic4,
    title: "NBA Accredited (CSE Branch)",
  },
  {
    icon: featurepic5,
    title: "RTU CoE In Air (Robotics), PCB",
  },
  {
    icon: featurepic6,
    title: "32 Awards Won",
  },
];

export default function Features() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 md:px-20 py-8">
      {badges.map((badge, i) => (
        <div
          key={i}
          className={`flex items-center justify-center text-center p-4 rounded shadow ${
            badge.bg || "bg-white"
          }`}
        >
          <div>
            {badge.icon && (
              <img src={badge.icon} alt="badge" className="mx-auto mb-2 w-10 h-10" />
            )}
            <p className="text-sm font-semibold">{badge.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
