// import React from "react";

// const testimonials = [
//   {
//     name: "Aarav Mehta",
//     role: "Software Engineer",
//     image:
//       "https://randomuser.me/api/portraits/men/75.jpg",
//     quote:
//       "This platform completely changed the way I approach job applications. Everything is so smooth and professional.",
//   },
//   {
//     name: "Priya Sharma",
//     role: "UI/UX Designer",
//     image:
//       "https://randomuser.me/api/portraits/women/65.jpg",
//     quote:
//       "As a designer, I love the clean and intuitive interface. It's elegant and just works!",
//   },
//   {
//     name: "Rohan Desai",
//     role: "HR Manager",
//     image:
//       "https://randomuser.me/api/portraits/men/63.jpg",
//     quote:
//       "We hired some amazing talent using this platform. It’s reliable and very easy to manage.",
//   },
//   {
//     name: "Sneha Patil",
//     role: "Marketing Head",
//     image:
//       "https://randomuser.me/api/portraits/women/70.jpg",
//     quote:
//       "Great experience! The platform helped me connect with talented individuals quickly and easily.",
//   },
// ];

// const Testimonial = () => {
//   return (
//     <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
//       <h2 className="text-4xl font-bold text-center mb-10">What Our Users Say</h2>
//       <div className="flex overflow-x-auto space-x-6 pb-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-6 lg:space-x-0">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-80 lg:w-full bg-slate-700 p-6 rounded-2xl shadow-lg"
//           >
//             <div className="flex items-center mb-4">
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-14 h-14 rounded-full object-cover border-2 border-white"
//               />
//               <div className="ml-4">
//                 <h3 className="text-lg font-semibold">{testimonial.name}</h3>
//                 <p className="text-sm text-slate-300">{testimonial.role}</p>
//               </div>
//             </div>
//             <p className="text-slate-100 italic">“{testimonial.quote}”</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonial;


import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Software Engineer at TechCorp',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote:
      'After months of searching, I found my dream job in just two weeks using JobPortal. The process was simple and the support was incredible!',
  },
  {
    name: 'Michael Chen',
    position: 'Product Manager at InnovateTech',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote:
      "JobPortal's interface is intuitive and I was able to find relevant jobs quickly. I'm now working at my ideal company thanks to this platform.",
  },
  {
    name: 'Jessica Lee',
    position: 'UX Designer at CreativeDesigns',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote:
      'As a designer, finding a company that values creativity was important. JobPortal connected me with companies that were the perfect cultural fit.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from people who found their dream jobs through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  className="h-14 w-14 lg:h-16 lg:w-16 rounded-full object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  src={t.image}
                  alt={t.name}
                />
                <div className="ml-4 lg:ml-6">
                  <h4 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{t.name}</h4>
                  <p className="text-sm lg:text-base text-gray-500 mt-1">{t.position}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
