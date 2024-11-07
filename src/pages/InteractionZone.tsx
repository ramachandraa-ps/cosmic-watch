import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import PlanetWeightCalculator from './PlanetWeightCalculator';

const InteractionZone = () => {
  const navigate = useNavigate();

  const handleQuizStart = () => {
    navigate('/quiz');
  };

  const upcomingWebinar = {
    id: 'web1',
    title: 'Mars Colonization: Challenges & Solutions',
    date: '2024-11-15T18:00:00Z',
    speaker: 'Dr. Sarah Johnson',
    duration: '60'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-space-dark text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-space-dark to-space-light">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Space Discovery Hub
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore the wonders of space through interactive tools, engaging webinars, and challenging quizzes. Your gateway to understanding the cosmos.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto p-6 space-y-6 relative -mt-20">
        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Webinars Card */}
          <div className="rounded-lg border border-gray-800 hover:border-blue-500 bg-gray-900 text-white shadow-lg transition-all duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Upcoming Webinars</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-4">
                <div className="border-b border-gray-800 pb-4">
                  <h4 className="text-blue-400 font-medium mb-2">{upcomingWebinar.title}</h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {formatDate(upcomingWebinar.date)}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {upcomingWebinar.speaker}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {upcomingWebinar.duration} minutes
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button 
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 text-sm font-medium group"
                  onClick={() => navigate('/webinars')}
                >
                  View All Webinars
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
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Space Quiz Challenge</h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-300 mb-6">
                Embark on an educational journey through space with our interactive quizzes. 
                From planetary science to deep space phenomena, test your knowledge and earn 
                cosmic achievements as you explore the universe.
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

          {/* Planet Weight Calculator Card */}
          <PlanetWeightCalculator />
        </div>

        {/* Second Row - Centered Alias Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1"></div>
          {/* Astronaut Alias Card */}
          <div className="rounded-lg border border-gray-800 hover:border-blue-500 bg-gray-900 text-white shadow-lg transition-all duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Astronaut Alias</h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-300 mb-6">
                Discover your unique space identity! Generate a cosmic astronaut name
                based on your personal details. Perfect for young space enthusiasts
                and future astronauts. Each name comes with a special mission profile
                and rank!
              </p>
              <button 
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 text-sm font-medium group"
                onClick={() => navigate('/astronaut-alias')}
              >
                Generate Name
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
          <div className="md:col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default InteractionZone;