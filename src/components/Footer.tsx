import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white">
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">TRY PORTFOLIOMAKER</h3>
            <Link
              href="#"
              className="block text-gray-400 hover:text-white mb-2"
            >
              Web
            </Link>
            <Link
              href="#"
              className="block text-gray-400 hover:text-white mb-2"
            >
              iOS
            </Link>
            <Link href="#" className="block text-gray-400 hover:text-white">
              Android
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">PRODUCTS</h3>
            <Link
              href="#"
              className="block text-gray-400 hover:text-white mb-2"
            >
              PortfolioMaker
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-400 hover:text-white"
            >
              Try Templates
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">COMPANY</h3>
            <Link
              href="/"
              className="block text-gray-400 hover:text-white mb-2"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block text-gray-400 hover:text-white mb-2"
            >
              About Us
            </Link>
            {/* <Link
              href="#"
              className="block text-gray-400 hover:text-white mb-2"
            >
              Careers
            </Link> */}
            <Link href="/contact-us" className="block text-gray-400 hover:text-white">
              Contact Us
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">RESOURCES</h3>
            <Link
              href="#"
              className="block text-gray-400 hover:text-white mb-2"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="block text-gray-400 hover:text-white mb-2"
            >
              Support
            </Link>
            <Link href="#" className="block text-gray-400 hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
