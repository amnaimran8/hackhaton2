import Link from "next/link";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

const TopNav = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* First Line: Search, Logo, Cart, and Login */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center border-b">
        {/* Left: Search Icon */}
        <div>
          <FiSearch size={20} className="text-gray-600 cursor-pointer" />
        </div>

        {/* Center: Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Avion</Link>
        </div>

        {/* Right: Cart and Login Icons */}
        <div className="flex items-center gap-6">
          <Link href="/cart" className="text-gray-600 hover:text-gray-800">
            <FiShoppingCart size={20} />
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-800">
            <FiUser size={20} />
          </Link>
        </div>
      </div>

      {/* Second Line: Main Navigation */}
      <div className="flex justify-center py-2 border-b text-sm">
        <nav className="flex gap-6 text-gray-600">
          <Link href="/" className="hover:text-black">
            About
          </Link>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/" className="hover:text-black">
            Contact
          </Link>
          <Link href="/" className="hover:text-black">
            Products
          </Link>
          <Link href="/" className="hover:text-black">
            Cart
          </Link>
        </nav>
      </div>

      {/* Third Line: Category Links */}
      <div className="flex justify-center py-2 text-sm">
        <nav className="flex gap-6 text-gray-600">
          <Link href="#" className="hover:text-black">
            Plant pots
          </Link>
          <Link href="#" className="hover:text-black">
            Ceramics
          </Link>
          <Link href="#" className="hover:text-black">
            Tables
          </Link>
          <Link href="#" className="hover:text-black">
            Chairs
          </Link>
          <Link href="#" className="hover:text-black">
            Crockery
          </Link>
          <Link href="#" className="hover:text-black">
            Tableware
          </Link>
          <Link href="#" className="hover:text-black">
            Cutlery
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default TopNav;
