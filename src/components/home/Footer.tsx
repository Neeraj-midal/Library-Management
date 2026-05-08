import { Mail, Phone, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-400" />
              LibraryMS
            </h2>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              A modern digital library management system designed to simplify book tracking,
              student records, and library operations.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              Built for schools, colleges & institutions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">

              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Careers
              </li>

            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-semibold">Features</h3>
            <ul className="mt-4 space-y-3 text-sm">

              <li className="hover:text-white transition cursor-pointer">
                Book Management
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Student Records
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Issue & Return System
              </li>

            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold">Support</h3>

            <ul className="mt-4 space-y-3 text-sm">

              <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <Mail className="w-4 h-4" />
                support@libraryms.com
              </li>

              <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © 2026 LibraryMS. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">

            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white transition cursor-pointer">
              Terms
            </span>

            <span className="hover:text-white transition cursor-pointer">
              Security
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}