import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We are committed to delivering high-quality solutions tailored to your needs. Our mission is to empower growth through innovative technology.
          </p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Get Newsletter</h3>
          <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
}
