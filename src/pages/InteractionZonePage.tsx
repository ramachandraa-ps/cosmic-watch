import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const InteractionZone = () => {
  const navigate = useNavigate();  // Add this hook

  const handleQuizStart = () => {
    navigate('/quiz');  // This will navigate to the quiz page
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
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  onClick={() => console.log('Simulation launched')}
                >
                  Launch Simulation
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                onClick={handleQuizStart}
              >
                Start Quiz
              </button>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                onClick={() => console.log('Mission started')}
              >
                Start Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractionZone;