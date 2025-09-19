const Services = () => {
  return (
    <section className="bg-gray-100 text-black py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service One */}
          <div className="border-2 border-gray-300 p-6 bg-white">
            <h3 className="text-xl font-bold mb-4">Lawn Care</h3>
            <p className="text-gray-700">
              Professional mowing, fertilization, aeration, and pest control to keep your lawn healthy and beautiful year-round.
            </p>
          </div>
          
          {/* Service Two */}
          <div className="border-2 border-gray-300 p-6 bg-white">
            <h3 className="text-xl font-bold mb-4">Hardscaping</h3>
            <p className="text-gray-700">
              Custom patios, walkways, retaining walls, and fire pits that transform your outdoor space.
            </p>
          </div>
          
          {/* Service Three */}
          <div className="border-2 border-gray-300 p-6 bg-white">
            <h3 className="text-xl font-bold mb-4">Eco-Friendly Landscaping</h3>
            <p className="text-gray-700">
              Sustainable landscaping solutions with native plants, rain gardens, and eco-friendly practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;