import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Splash Screen */}
      {showSplash ? (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#141e30] to-[#243b55]">
          <h1 className="text-5xl font-extrabold text-white">
            <span className="text-white">POLY</span>
            <span className="text-cyan-400">LINGUA</span>
          </h1>
        </div>
      ) : (
        <>
          {/* Navbar */}
          <nav className="bg-black p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              PolyLingua
            </h1>
            <ul className="flex space-x-6 text-white text-sm">
              <li className="hover:text-blue-400 cursor-pointer">Home</li>
              <li className="hover:text-blue-400 cursor-pointer">Courses</li>
              <li className="hover:text-blue-400 cursor-pointer">About</li>
            </ul>
          </nav>

          {/* Hero Section */}
          <div className="text-center mt-16 px-4">
            <h2 className="text-4xl font-bold mb-2">Learn Any Language</h2>
            <p className="text-gray-300 mb-8">
              Explore AI tools, real-time translation, and interactive lessons.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-black border border-purple-500 p-6 rounded-lg shadow-md hover:scale-105 transition">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">AI Translation</h3>
                <p className="text-gray-400 text-sm">
                  Real-time translations powered by AI for global languages.
                </p>
              </div>
              <div className="bg-black border border-purple-500 p-6 rounded-lg shadow-md hover:scale-105 transition">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Interactive Courses</h3>
                <p className="text-gray-400 text-sm">
                  Structured lessons, quizzes, and speaking practice.
                </p>
              </div>
              <div className="bg-black border border-purple-500 p-6 rounded-lg shadow-md hover:scale-105 transition">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Cultural Insights</h3>
                <p className="text-gray-400 text-sm">
                  Learn etiquette, values, and cultural tips for each language.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-20 text-center py-4 text-gray-500 text-sm">
            © 2025 PolyLingua. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}

export default App;




