import React from 'react';
import Header from '../components/Header';

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-space-light/10 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-colors duration-300 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="px-6 py-4 border-b border-gray-700">
    {children}
  </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
    {children}
  </h3>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="px-6 py-4">
    {children}
  </div>
);

const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-200 transform hover:scale-105"
  >
    {children}
  </button>
);

const InteractionZone = () => {
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
          <Card>
            <CardHeader>
              <CardTitle>3D Space Simulation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Explore a detailed 3D simulation of the solar system and interact
                with planets, moons, and other celestial objects. Learn about the
                scale and motion of the planets and gain a deeper understanding of
                our place in the cosmos.
              </p>
              <Button onClick={() => console.log('Simulation launched')}>
                Launch Simulation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Quizzes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Test your knowledge of space science, astronomy, and space
                exploration through a series of engaging and challenging quizzes.
                Compete against other users and earn badges as you progress
                through the levels.
              </p>
              <Button onClick={() => console.log('Quiz started')}>
                Start Quiz
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mission Planner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Plan and execute a simulated space mission, from launch to
                landing. Allocate resources, manage your crew, and make critical
                decisions to ensure a successful journey. Learn about the
                complexities of space exploration.
              </p>
              <Button onClick={() => console.log('Mission started')}>
                Start Mission
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InteractionZone;