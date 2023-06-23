import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-50 flex justify-between items-center">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div>
            <div>
              <img src="/logo1.png" alt="Logo" className="h-18 w-18" />
            </div>
            <div className="mt-3">
              <p>
                Lorem lpsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industry&apos;s standard dummy
                a type specimen book.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-xl font-bold">Company</h2>
            <ul>
              <li className="mt-3">About us</li>
              <li className="mt-3">How to work?</li>
              <li className="mt-3">Populer Course</li>
              <li className="mt-3">Service</li>
            </ul>
          </div>
          <div className="mt-3">
            <h2 className="text-xl font-bold">Courses</h2>
            <ul>
              <li className="mt-3">Categories</li>
              <li className="mt-3">Offline Course</li>
              <li className="mt-3">Video Course</li>
            </ul>
          </div>
          <div className="mt-3">
            <h2 className="text-xl font-bold">Support</h2>
            <ul>
              <li className="mt-3">FAQ</li>
              <li className="mt-3">Help Center</li>
              <li className="mt-3">Career</li>
              <li className="mt-3">Privacy</li>
            </ul>
          </div>
          <div className="mt-3">
            <h2 className="text-xl font-bold">Contact Info</h2>
            <ul>
              <li className="mt-3">+0913-705-3875</li>
              <li className="mt-3">ElizabethJ@jourrapide.com</li>
              <li className="mt-3">4808 Skinner Hollow Road Days Creek, OR 97429</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
