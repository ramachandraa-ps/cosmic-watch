import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const InteractionZone = () => {
  const navigate = useNavigate();

  const handleQuizStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-space-dark text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-space-dark to-space-light">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Interactive Space Hub
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Immerse yourself in hands-on space exploration experiences and interactive astronomical discoveries.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto p-6 space-y-6 relative -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 3D Space Simulation Card */}
          <div className="rounded-lg border border-gray-800 hover:border-blue-500 bg-gray-900 text-white shadow-lg transition-all duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">3D Space Simulation</h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-300 mb-6">
                Explore a detailed 3D simulation of the solar system and interact
                with planets, moons, and other celestial objects. Learn about the
                scale and motion of the planets and gain a deeper understanding of
                our place in the cosmos.
              </p>
              <div className="p-6 pt-0">
                <button 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 text-sm font-medium group"
                  onClick={() => console.log('Simulation launched')}
                >
                  Launch Simulation
                  <svg 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Quizzes Card */}
          <div className="rounded-lg border border-gray-800 hover:border-blue-500 bg-gray-900 text-white shadow-lg transition-all duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Interactive Quizzes</h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-300 mb-6">
                Test your knowledge of space science, astronomy, and space
                exploration through a series of engaging and challenging quizzes.
                Compete against other users and earn badges as you progress
                through the levels.
              </p>
              <button 
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 text-sm font-medium group"
                onClick={handleQuizStart}
              >
                Start Quiz
                <svg 
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mission Planner Card */}
          <div className="rounded-lg border border-gray-800 hover:border-blue-500 bg-gray-900 text-white shadow-lg transition-all duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Mission Planner</h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-300 mb-6">
                Plan and execute a simulated space mission, from launch to
                landing. Allocate resources, manage your crew, and make critical
                decisions to ensure a successful journey. Learn about the
                complexities of space exploration.
              </p>
              <button 
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 text-sm font-medium group"
                onClick={() => console.log('Mission started')}
              >
                Start Mission
                <svg 
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractionZone;