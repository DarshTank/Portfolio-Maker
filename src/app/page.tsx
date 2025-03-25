import { Metadata } from "next";
import Link from "next/link";

// No "use client" directive needed here
export const metadata: Metadata = {
  title: "PortfolioMaker | Create Stunning Portfolios",
  description:
    "PortfolioMaker helps you create stunning, professional portfolios in minutes. Designed by Darsh Tank and Rohit Rathod to empower your personal brand.",
};

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      {/* <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">PortfolioMaker</span>
          <Link href="/features" className="text-gray-400 hover:text-white">
            FEATURES
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white">
            ABOUT
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            CONTACT
          </Link>
        </div>
        <button className="border border-gray-400 text-gray-400 px-4 py-2 rounded hover:bg-gray-800">
          GET STARTED
        </button>
      </nav> */}

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-yellow-500/20 opacity-50"></div>
        <h1 className="text-8xl md:text-9xl font-bold mb-6 text-gray-300 opacity-20 absolute top-20">
          PORTFOLIO MAKER
        </h1>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Create Your <span className="text-orange-500">Portfolio</span> Today
          </h2>
          <div className="relative max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Start Building..."
              className="w-full p-4 rounded-full bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-black px-4 py-2 rounded-full hover:bg-orange-600">
              Go
            </button>
          </div>
          <p className="text-gray-400 max-w-2xl">
            We’re thrilled to introduce PortfolioMaker, a platform designed by
            Darsh Tank and Rohit Rathod to help you create stunning portfolios
            with ease.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold mb-12">Portfolios for Everyone</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">PortfolioMaker Free</h3>
            <p className="text-gray-400 mb-4">
              Create your portfolio with our free templates. Available on web,
              iOS, and Android. Start showcasing your work today.
            </p>
            <Link
              href="/portfolio"
              className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black inline-block"
            >
              TRY TEMPLATE
            </Link>
          </div>
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">PortfolioMaker Pro</h3>
            <p className="text-gray-400 mb-4">
              Unlock advanced features like custom domains, premium templates,
              and analytics to supercharge your portfolio.
            </p>
            <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black">
              BUILD NOW
            </button>
          </div>
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Developer Tools</h3>
            <p className="text-gray-400 mb-4">
              Learn how to integrate PortfolioMaker into your projects with our
              developer guides and APIs.
            </p>
            <Link href="#">
              <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black">
                LEARN
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Empower Your <span className="text-orange-500">Brand</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          At PortfolioMaker, we’re dedicated to helping individuals showcase
          their talents and achievements with beautifully designed,
          user-friendly portfolios.
        </p>
      </section>

      {/* Subscription Section */}
      <section className="py-16 px-6 text-center">
        <div className="flex justify-center items-center mb-6">
          <span className="text-2xl font-bold text-orange-500">
            SuperPortfolio
          </span>
        </div>
        <p className="text-gray-400 mb-6">
          Do more with PortfolioMaker. Unlock a SuperPortfolio subscription on
          portfoliomaker.com.
        </p>
        <Link
        href="/sign-up">
          <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded hover:bg-orange-500 hover:text-black">
            SIGN UP NOW
          </button>
        </Link>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Latest News</h2>
          <Link href="#" className="text-orange-500 hover:underline">
            EXPLORE MORE
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-red-500 to-orange-500"></div>
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-2">FEBRUARY 10, 2025</p>
              <h3 className="text-xl font-semibold mb-2">
                PortfolioMaker Beta Launch
              </h3>
              <p className="text-gray-400 mb-4">
                Darsh and Rohit announce the beta launch of PortfolioMaker,
                offering free access to early users.
              </p>
              <Link href="#" className="text-orange-500 hover:underline">
                READ
              </Link>
            </div>
          </div>
          <div className="bg-gray-800 rounded overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-2">MARCH 15, 2025</p>
              <h3 className="text-xl font-semibold mb-2">AI Design Features</h3>
              <p className="text-gray-400 mb-4">
                New AI-powered design suggestions help users create portfolios
                effortlessly.
              </p>
              <Link href="#" className="text-orange-500 hover:underline">
                READ
              </Link>
            </div>
          </div>
          <div className="bg-gray-800 rounded overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-2">MARCH 20, 2025</p>
              <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
              <p className="text-gray-400 mb-4">
                PortfolioMaker now supports multiple languages, reaching users
                worldwide.
              </p>
              <Link href="#" className="text-orange-500 hover:underline">
                READ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
