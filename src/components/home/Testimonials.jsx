// import reviews from "@/data/testimonials.json";

// export default function Testimonials() {
//   return (
//     <section className="relative py-16 sm:py-24 bg-white overflow-hidden">

//       {/* subtle background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 bg-blue-100 blur-3xl opacity-40 rounded-full"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto">
//           <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">
//             Testimonials
//           </p>

//           <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
//             Trusted by Students
//           </h2>

//           <p className="mt-3 text-slate-500 text-sm sm:text-base">
//             Real feedback from students who use the library system daily for managing books and learning resources.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {reviews.map((item, i) => (
//             <div
//               key={i}
//               className="group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
//             >

//               {/* Quote mark decoration */}
//               <div className="absolute top-4 right-4 text-5xl text-slate-100 font-serif">
//                 “
//               </div>

//               {/* User */}
//               <div className="flex items-center gap-4">

//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-26 h-26 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-blue-200 transition"
//                 />

//                 <div>
//                   <h3 className="font-semibold text-slate-900">
//                     {item.name}
//                   </h3>

//                   <p className="text-xs text-slate-500">
//                     {item.course}
//                   </p>
//                 </div>
//               </div>

//               {/* Review */}
//               <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
//                 {item.review}
//               </p>

//               {/* Footer */}
//               <div className="mt-6 flex items-center justify-between">

//                 {/* rating */}
//                 <div className="flex text-yellow-400 text-sm">
//                   ★ ★ ★ ★ ★
//                 </div>

//                 {/* verified badge */}
//                 <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
//                   Verified Student
//                 </span>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }













"use client";

import reviews from "@/data/testimonials.json";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">

      {/* Background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 bg-blue-100 blur-3xl opacity-40 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by Students
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base">
            Real feedback from students who use the library system daily for managing books and learning resources.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full">

                  {/* Quote mark */}
                  <div className="absolute top-4 right-4 text-5xl text-slate-100 font-serif">
                    “
                  </div>

                  {/* User */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-blue-200 transition"
                    />

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.name}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {item.course}
                      </p>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.review}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between">

                    {/* Rating */}
                    <div className="flex text-yellow-400 text-sm">
                      ★ ★ ★ ★ ★
                    </div>

                    {/* Badge */}
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
                      Verified Student
                    </span>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}