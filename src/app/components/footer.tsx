// src/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-[#2B2640] text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu */}
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul>
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>
  
          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul>
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>
  
          {/* Our Company */}
          <div>
            <h4 className="font-bold mb-4">Our company</h4>
            <ul>
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>
  
          {/* Mailing List */}
          <div>
            <h4 className="font-bold mb-4">Join our mailing list</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 p-2 text-black rounded-l-md"
              />
              <button className="bg-white text-black px-4 rounded-r-md">Sign up</button>
            </div>
          </div>
        </div>
  
        {/* Social Links */}
        <div className="container mx-auto mt-8 px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4">
        
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Skype">
              <i className="fab fa-skype"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  