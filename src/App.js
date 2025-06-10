import React from "react";
import Header from "./component/Header";

import Features from "./component/features";
import Home from "./component/Home";
import  Vision from "./component/Vision";
import AcademicsSection from "./component/AcadmicSection";
import PlacementsSection from "./component/PlacementSection";
import IndustrialAlliance from "./component/IndustrialAlliance";
import  Logo from "./component/Logo";
import CollegeCard from "./component/CollegeCard";
import AwardsSection from "./component/AwardSection";
import TestimonialSection from "./component/TestimonialSection";
import Footer from "./component/Footer";


export default function AryaCollegeLanding() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Home/>
      <Features />
      <Vision/>
      <AcademicsSection/>
      <PlacementsSection/>
      <IndustrialAlliance/>
      <Logo/>
      <CollegeCard/>
      <AwardsSection/>
      <TestimonialSection/>
      <Footer/>
      {/* <Footer /> */}
    </div>
  );
}

