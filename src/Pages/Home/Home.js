
import React, { useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 flex justify-between items-center py-3">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img
                src="https://public.readdy.ai/ai/img_res/17c0e53c5d21373e7f6b5a826360d249.jpg"
                alt="Victoria Logo"
                className="h-10"
              />
              <div className="ml-2">
                <div className="text-xl font-serif text-amber-600 font-semibold">
                Dilachew 
                </div>
                <div className="text-xs text-amber-500">GUEST HOUSE</div>
              </div>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-amber-800 font-medium hover:text-amber-600 whitespace-nowrap"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 whitespace-nowrap"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 whitespace-nowrap"
            >
              ROOMS
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 whitespace-nowrap"
            >
              RECREATION
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 whitespace-nowrap"
            >
              RESERVATION
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-amber-600 whitespace-nowrap"
            >
              CONTACT
            </a>
          </nav>
          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center text-right">
              <div className="mr-2">
                <div className="text-amber-600 text-sm font-medium">
                  Call Now
                </div>
                <div className="text-amber-600 font-bold">+25197609283</div>
                <div className="text-xs text-gray-500">
                  dilacchew.net
                </div>
              </div>
              <div className="bg-red-700 rounded-full p-2">
                <i className="fas fa-phone text-white"></i>
              </div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-amber-800 font-medium hover:text-amber-600"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-amber-600"
              >
                ABOUT
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-amber-600"
              >
                ROOMS
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-amber-600"
              >
                RECREATION
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-amber-600"
              >
                RESERVATION
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-amber-600"
              >
                CONTACT
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <div className="bg-red-700 rounded-full p-2 mr-2">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <div className="text-amber-600 text-sm font-medium">
                    Call Now
                  </div>
                  <div className="text-amber-600 font-bold">
                    +251976609283
                  </div>
                  <div className="text-xs text-gray-500">
                    dilacchew.net
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="relative h-screen pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://public.readdy.ai/ai/img_res/c9c408966056fbf049c86915329eedb7.jpg"
            alt="Victoria Guest House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-xl md:text-2xl font-medium tracking-wider mb-2">
            BEST LOCATION
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">IN TOWN</h1>
          <a
            href="#"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded cursor-pointer !rounded-button whitespace-nowrap"
          >
            MORE DETAIL
          </a>
        </div>
      </section>
      {/* Feature Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {/* Luxury Living Rooms */}
        <div className="relative h-80 group cursor-pointer">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://public.readdy.ai/ai/img_res/aa4e97f93c2f90bf72955234883dea21.jpg"
              alt="Luxury Living Rooms"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-orange-500 bg-opacity-70 group-hover:bg-opacity-80 transition-all duration-300"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h3 className="text-lg font-medium mb-1">LUXURY</h3>
            <h2 className="text-2xl font-bold">LIVING ROOMS</h2>
          </div>
        </div>
        {/* Family Room */}
        <div className="relative h-80 group cursor-pointer">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://public.readdy.ai/ai/img_res/e9107edad2ce726eb45dc5c222f0d202.jpg"
              alt="Family Room"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-teal-500 bg-opacity-70 group-hover:bg-opacity-80 transition-all duration-300"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h3 className="text-lg font-medium mb-1">FAMILY ROOM</h3>
            <h2 className="text-2xl font-bold">AVAILABLE</h2>
          </div>
        </div>
        {/* Comfortable Bedroom */}
        <div className="relative h-80 group cursor-pointer">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://public.readdy.ai/ai/img_res/434a671707ca853d43eaaa8c3af27cd0.jpg"
              alt="Comfortable Bedroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-purple-600 bg-opacity-70 group-hover:bg-opacity-80 transition-all duration-300"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h3 className="text-lg font-medium mb-1">COMFORTABLE</h3>
            <h2 className="text-2xl font-bold">BEDROOM</h2>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome to Dilachew Guest House
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Experience luxury and comfort in the heart of the city. Our guest
              house offers premium accommodations with exceptional service to
              make your stay memorable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://public.readdy.ai/ai/img_res/26afd3696b13d92e820f6c002a7d3405.jpg"
                alt="Victoria Guest House"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Home Away From Home
              </h3>
              <p className="text-gray-600 mb-6">
              Dilachew Guest House combines traditional hospitality with
                modern amenities to create a unique experience for our guests.
                Located in the most convenient part of town, we offer easy
                access to major attractions, business centers, and
                transportation hubs.
              </p>
              <p className="text-gray-600 mb-8">
                Our rooms are designed with your comfort in mind, featuring
                premium furnishings, high-quality linens, and all the
                conveniences you expect from a luxury accommodation.
              </p>
              <a
                href="#"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded cursor-pointer !rounded-button whitespace-nowrap"
              >
                DISCOVER MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Take a virtual tour of our guest house and discover the
              exceptional services we offer to make your stay comfortable and
              memorable.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Victoria Guesthouse Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">
                Experience the warmth and luxury of Victoria Guest House through
                our video tour. See our beautiful rooms, common areas, and the
                exceptional amenities we offer to all our guests.
              </p>
              <a
                href="#"
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded cursor-pointer !rounded-button whitespace-nowrap"
              >
                EXPLORE OUR SERVICES
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Rooms */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Featured Rooms
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Choose from our selection of carefully designed rooms and suites
              that cater to your every need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Room 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/ed7cae797b4c57b5b232645466544faf.jpg"
                  alt="Standard Room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  From 99/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Standard Room
                </h3>
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">
                    4.5 (28 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Comfortable room with all essential amenities, perfect for the
                  solo traveler or business professional.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Free WiFi
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Breakfast
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Air Conditioning
                  </span>
                </div>
                <a
                  href="#"
                  className="block text-center bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded cursor-pointer !rounded-button whitespace-nowrap"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
            {/* Room 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/0be2b0a085e8fa9f63a7b741cae1f8fb.jpg"
                  alt="Deluxe Room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  From 149/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Deluxe Room
                </h3>
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">
                    5.0 (42 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Spacious room with premium amenities and city views, ideal for
                  couples or business travelers seeking extra comfort.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Free WiFi
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Breakfast
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Mini Bar
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    City View
                  </span>
                </div>
                <a
                  href="#"
                  className="block text-center bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded cursor-pointer !rounded-button whitespace-nowrap"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
            {/* Room 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://public.readdy.ai/ai/img_res/b9487b18589f4291eb2a5df2e79e8a3c.jpg"
                  alt="Family Suite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  From 1000 birr night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Family Suite
                </h3>
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">
                    4.9 (36 reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Spacious suite with separate living area and bedroom, perfect
                  for families or extended stays.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Free WiFi
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Breakfast
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Kitchen
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    Living Room
                  </span>
                </div>
                <a
                  href="#"
                  className="block text-center bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded cursor-pointer !rounded-button whitespace-nowrap"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded transition-colors cursor-pointer !rounded-button whitespace-nowrap"
            >
              VIEW ALL ROOMS
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://public.readdy.ai/ai/img_res/28b70e59adb43c3cdff55ea0420c7913.jpg"
                  alt="Victoria Logo"
                  className="h-10"
                />
                <div className="ml-2">
                  <div className="text-xl font-serif text-amber-400 font-semibold">
                  Dilachew 
                  </div>
                  <div className="text-xs text-amber-300">GUEST HOUSE</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Experience luxury and comfort in the heart of the city. Our
                guest house offers premium accommodations with exceptional
                service.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Recreation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Reservation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-amber-400"></i>
                  <span className="text-gray-400">
                  45WG+VXV, Tacho Sodo, Ethiopia
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-3 text-amber-400"></i>
                  <span className="text-gray-400">+25976609283</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3 text-amber-400"></i>
                  <span className="text-gray-400">
                    info@dilachwew.net
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock mt-1 mr-3 text-amber-400"></i>
                  <span className="text-gray-400">24/7 Customer Support</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter to receive updates and special
                offers.
              </p>
              <form className="mb-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="px-4 py-2 w-full text-gray-800 border-none focus:outline-none rounded-l"
                  />
                  <button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">We Accept:</span>
                <i className="fab fa-cc-visa text-gray-300"></i>
                <i className="fab fa-cc-mastercard text-gray-300"></i>
                <i className="fab fa-cc-paypal text-gray-300"></i>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} Dilachew Guest House. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
