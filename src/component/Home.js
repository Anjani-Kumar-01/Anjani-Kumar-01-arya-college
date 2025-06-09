import React from "react";
import banner from "../image/banner.png";
import { RxDownload } from "react-icons/rx";

export default function Home() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="max-w-lg">
        <div className="flex space-x-4 items-center mb-4">
          <span className="bg-red-500 text-white px-3 py-1 text-sm rounded">Admission Open 2023</span>
          <span className="text-sm text-gray-700">Pay Online</span>
        </div>
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Arya College</h2>
        <p className="text-gray-600 mb-6">
          We don’t just teach students, but we train them to be successful professionals. We motivate and orient our students and to take on the corporate world.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 flex flex-row gap-4">Brochure <RxDownload /></button>
          <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded hover:bg-blue-50">Read More</button>
        </div>
      </div>
      <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src={banner}
            alt="Arya College Campus"
            className="rounded-3xl w-full max-w-md"
            onClick={() => window.open("https://youtu.be/p2hqg0LtVN4?si=LxP_PP0UYp9bk5hi")}
          />
          {/* <p className="mt-2 text-sm text-center text-gray-500">🧭 360° Virtual Tour</p> */}
        </div>
      </div>
    </section>
  );
}
