import React from "react";

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 text-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left: heading + cards */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-2 border-gray-300 p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Lawn Care</h3>
              <p className="text-sm">Mowing, fertilization, aeration, and seasonal maintenance.</p>
            </div>

            <div className="border-2 border-gray-300 p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Hardscaping</h3>
              <p className="text-sm">Patios, walkways, retaining walls, and outdoor living features.</p>
            </div>

            <div className="border-2 border-gray-300 p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Landscaping</h3>
              <p className="text-sm">Native plants, rain gardens, and sustainable solutions.</p>
            </div>
          </div>
        </div>

        {/* Right: CTA card (sticky-ish on large screens) */}
        <aside className="lg:col-span-1">
          <div className="w-full border-2 border-blue-600 p-6 bg-white shadow-sm sticky top-20">
            <h4 className="text-xl font-semibold mb-2">Request a Free Estimate</h4>
            <p className="text-sm mb-4">Call us at <a href="tel:3369383774" className="text-blue-600">336-938-3774</a> or request online.</p>

            <a href="#contact" className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded mb-3">
              Request Estimate
            </a>

            <a href="#services" className="block text-center underline">
              View Full Services
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}