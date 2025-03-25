"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <div className="bg-black text-white">
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">PortfolioMaker</span>
          <a href="/" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="/about-us" className="text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="/contact-us" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
        <Link
        href="/sign-in">
          <button className="border border-gray-400 text-gray-400 px-4 py-2 rounded hover:bg-gray-800">
            GET STARTED
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
