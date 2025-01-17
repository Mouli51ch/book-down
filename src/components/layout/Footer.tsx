import React from "react";

function Footer() {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">EventTix</h3>
            <p className="text-sm text-gray-600">Book your favorite events with blockchain technology</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Terms</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Support</a>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-600">
            © {new Date().getFullYear()} EventTix. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
