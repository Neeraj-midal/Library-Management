// import images from "@/data/websiteImages.json";

// export default function Hero(){
//     return(
//         <section className="grid md:grid-cols-2 gap-10">
//             <div>
//                 <h1 className="text-5xl font-bold">Digital Library</h1>
//                 <p className="mt-5 text-slate-600">Smart Managment For Books And Students</p>
//             </div>

//             <img src={images.hero} alt="hero" className="rounded-3xl shadow-xl" />
//         </section>
//     );
// }



import images from "@/data/websiteImages.json";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-24">
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-16 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-blue-200 blur-3xl opacity-40"></div>
        <div className="absolute -bottom-16 -right-16 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-purple-200 blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
            Smart Library System
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Manage Books & Students{" "}
            <span className="text-blue-600">Effortlessly</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            A modern digital library system that simplifies book tracking,
            student records, and borrowing management with speed and clarity.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition w-full sm:w-auto">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition w-full sm:w-auto">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 text-center md:text-left max-w-md mx-auto md:mx-0">
            <div>
              <p className="text-lg sm:text-xl font-bold text-slate-900">10k+</p>
              <p className="text-xs sm:text-sm text-slate-500">Books</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-slate-900">5k+</p>
              <p className="text-xs sm:text-sm text-slate-500">Students</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-slate-900">99%</p>
              <p className="text-xs sm:text-sm text-slate-500">Efficiency</p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-6 md:mt-0">
          
          {/* Glow */}
          <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>

          <img
            src={`https://tse3.mm.bing.net/th/id/OIP.VvYd74xJf-55NBR6EcOzyQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3`}
            alt="Digital Library Dashboard"
            className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}