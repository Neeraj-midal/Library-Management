// import { BookOpen, Users, Bell, Shield } from "lucide-react";

// export default function Features() {
//   const data = [
//     {
//       title: "Book Management",
//       desc: "Track issue and return",
//       icon: BookOpen,
//     },
//     {
//       title: "Students",
//       desc: "Manage admissions",
//       icon: Users,
//     },
//     {
//       title: "Alerts",
//       desc: "Auto reminder",
//       icon: Bell,
//     },
//     {
//       title: "Secure",
//       desc: "Role based access",
//       icon: Shield,
//     },
//   ];

//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-slate-800">
//             Features
//           </h2>
//           <p className="mt-4 text-slate-500">
//             Everything you need to manage your library efficiently
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14">
//           {data.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 text-center"
//               >
//                 {/* Icon */}
//                 <div className="flex justify-center mb-4">
//                   <div className="bg-blue-100 p-4 rounded-full">
//                     <Icon className="w-8 h-8 text-blue-600" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-lg font-semibold text-slate-800">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-500 mt-2 text-sm">
//                   {item.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }









import { BookOpen, Users, Bell, Shield } from "lucide-react";

export default function Features() {
  const data = [
    {
      title: "Book Management",
      desc: "Track issue and return books efficiently",
      icon: BookOpen,
    },
    {
      title: "Students",
      desc: "Manage admissions and student records easily",
      icon: Users,
    },
    {
      title: "Smart Alerts",
      desc: "Auto reminders for due dates and returns",
      icon: Bell,
    },
    {
      title: "Secure System",
      desc: "Role-based access with full security control",
      icon: Shield,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Powerful Features
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500">
            Everything you need to manage your library efficiently, all in one place.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="p-4 rounded-2xl bg-blue-50 group-hover:bg-blue-100 transition">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}