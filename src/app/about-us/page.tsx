import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | PortfolioMaker",
  description:
    "Learn more about Darsh Tank, Rohit Rathod, and our mission to empower individuals with stunning personal portfolios.",
};

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Empower Your <span className="text-orange-500">PORTFOLIO</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mb-8">
          At PortfolioMaker, we’re on a mission to help individuals showcase
          their talents and achievements with beautifully designed,
          user-friendly portfolios.
        </p>
        <Link href="/sign-in">
          <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black">
            CREATE NOW
          </button>
        </Link>
      </section>

      {/* About Darsh and Rohit Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Meet the Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Darsh Tank</h3>
            <p className="text-gray-400 mb-4">
              Darsh Tank is a B.E. in Computer Science and Engineering with a
              passion for technology and design. Having worked at Platon IT
              Services Private Limited, Darsh brings a strong technical
              foundation to PortfolioMaker. His expertise in software
              development and problem-solving ensures that our platform is
              robust, scalable, and intuitive. Darsh’s vision is to empower
              individuals by providing them with tools to create portfolios that
              truly reflect their unique skills and experiences.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Rohit Rathod</h3>
            <p className="text-gray-400 mb-4">
              Rohit Rathod is a multidisciplinary designer with over 10 years of
              experience, known for turning complex ideas into beautiful,
              user-friendly designs. As the creative force behind
              PortfolioMaker, Rohit ensures that every portfolio created on our
              platform is visually stunning and professionally polished. His
              dedication to design excellence stems from a deep love for
              creating impactful user experiences, making PortfolioMaker the
              go-to solution for anyone looking to stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold mb-12">At our core</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">User-Centric Design</h3>
            <p className="text-gray-400">
              We prioritize the needs of our users, ensuring every portfolio is
              easy to create and visually impressive.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Innovation-Driven</h3>
            <p className="text-gray-400">
              We constantly push the boundaries of technology to provide
              cutting-edge features for portfolio creation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Empowerment for All</h3>
            <p className="text-gray-400">
              Our platform is designed to help everyone—from students to
              professionals—showcase their talents with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Timeline Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold mb-12">Our path of progress</h2>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <div className="border-t border-gray-600 pt-6">
              <p className="text-gray-400 mb-4">
                We’re on a journey to revolutionize how individuals present
                themselves online, with new features and updates rolling out
                regularly.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">JAN 2025</span>
                <span className="text-gray-400">FEB 2025</span>
                <span className="text-gray-400">MAR 2025</span>
              </div>
              <div className="h-2 bg-gray-600 rounded mt-2">
                <div className="h-2 bg-orange-500 w-2/3 rounded"></div>
              </div>
              <p className="text-gray-400 mt-4">
                Launched PortfolioMaker Beta, introduced AI-powered design
                suggestions, and expanded template library.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Latest news</h2>
          <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black">
            VIEW ALL
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-red-500 to-orange-500"></div>
            <div className="p-6">
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
    </div>
  );
}
