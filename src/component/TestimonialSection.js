import React from 'react';

const testimonials = [
  {
    name: 'Mohit Kumar',
    stream: 'CSE Stream',
    feedback:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text',
  },
  {
    name: 'Mohit Kumar',
    stream: 'CSE Stream',
    feedback:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text',
  },
  {
    name: 'Mohit Kumar',
    stream: 'CSE Stream',
    feedback:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text',
  },
  {
    name: 'Mohit Kumar',
    stream: 'CSE Stream',
    feedback:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text',
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 text-center bg-white">
      <h2 className="text-2xl font-semibold text-blue-700 mb-8">Student Testimonial</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-6 w-full sm:w-[300px] md:w-[250px] text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-100 text-red-600 font-bold text-xl rounded-full flex items-center justify-center">
                👤
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.stream}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{t.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
