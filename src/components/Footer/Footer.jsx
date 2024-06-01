import React from 'react';

const Footer = () => {
    return (
            <footer className="bg-gray-800 text-white p-8 mt-3 rounded">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                  <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h5 className="text-xl font-bold mb-4">Company</h5>
                    <ul>
                      <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                      <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                      <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h5 className="text-xl font-bold mb-4">Support</h5>
                    <ul>
                      <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                      <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
                      <li className="mb-2"><a href="#" className="hover:underline">Returns</a></li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h5 className="text-xl font-bold mb-4">Follow Us</h5>
                    <ul className="flex space-x-4">
                      <li><a href="#" className="hover:underline">Facebook</a></li>
                      <li><a href="#" className="hover:underline">Twitter</a></li>
                      <li><a href="#" className="hover:underline">Instagram</a></li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h5 className="text-xl font-bold mb-4">Newsletter</h5>
                    <form>
                      <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 mb-4 text-gray-800" />
                      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">Subscribe</button>
                    </form>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <p>&copy; 2024 My E-commerce Site. All rights reserved.</p>
                </div>
              </div>
            </footer>
          );
        }
        

export default Footer;