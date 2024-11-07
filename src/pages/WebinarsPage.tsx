import React from 'react';
import Header from '../components/Header';

const WebinarsPage = () => {
  const webinars = [
    {
      id: 'web1',
      title: 'Mars Colonization: Challenges & Solutions',
      date: '2024-11-15T18:00:00Z',
      speaker: 'Dr. Sarah Johnson',
      duration: '60',
      description: 'Explore the technical and societal challenges of establishing permanent human settlements on Mars.'
    },
    {
      id: 'web2',
      title: 'Black Holes: Understanding the Unknown',
      date: '2024-11-20T17:30:00Z',
      speaker: 'Prof. Michael Chang',
      duration: '45',
      description: 'Dive into the mysteries of black holes and the latest discoveries in this field.'
    },
    {
      id: 'web3',
      title: 'Exoplanets: Finding Earth 2.0',
      date: '2024-11-25T19:00:00Z',
      speaker: 'Dr. Emma Martinez',
      duration: '75',
      description: 'Learn about the search for habitable planets beyond our solar system.'
    },
    {
      id: 'web4',
      title: 'Space Tourism: The Next Frontier',
      date: '2024-12-01T16:00:00Z',
      speaker: 'Capt. James Wilson',
      duration: '60',
      description: 'Discover the future of commercial space travel and its impact on space exploration.'
    },
    {
      id: 'web5',
      title: 'Asteroid Mining: Resources in Space',
      date: '2024-12-05T18:30:00Z',
      speaker: 'Dr. Robert Chen',
      duration: '90',
      description: 'Explore the potential of asteroid mining and its economic implications.'
    },
    {
      id: 'web6',
      title: 'The Search for Extraterrestrial Intelligence',
      date: '2024-12-10T17:00:00Z',
      speaker: 'Dr. Lisa Anderson',
      duration: '60',
      description: 'Understanding SETI projects and the possibility of alien civilizations.'
    },
    {
      id: 'web7',
      title: 'Space Debris: Cleaning Up Earth\'s Orbit',
      date: '2024-12-15T19:30:00Z',
      speaker: 'Prof. David Kumar',
      duration: '45',
      description: 'Addressing the growing challenge of orbital debris and potential solutions.'
    },
    {
      id: 'web8',
      title: 'The Future of Space Propulsion',
      date: '2024-12-20T18:00:00Z',
      speaker: 'Dr. Maria Rodriguez',
      duration: '75',
      description: 'Examining next-generation propulsion technologies for deep space exploration.'
    },
    {
      id: 'web9',
      title: 'Living in Space: Long-term Effects',
      date: '2024-12-25T16:30:00Z',
      speaker: 'Dr. Thomas Wright',
      duration: '60',
      description: 'Understanding the physiological and psychological impacts of extended space missions.'
    },
    {
      id: 'web10',
      title: 'The James Webb Space Telescope: New Discoveries',
      date: '2024-12-30T17:30:00Z',
      speaker: 'Dr. Amanda Lewis',
      duration: '90',
      description: 'Exploring the latest findings from the most powerful space telescope ever built.'
    }
  ];

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
            Space Webinars
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join our expert-led sessions exploring the frontiers of space science and exploration
          </p>
        </div>
      </section>

      {/* Webinars Grid */}
      <div className="max-w-7xl mx-auto p-6 space-y-6 relative -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webinars.map((webinar) => (
            <div 
              key={webinar.id}
              className="rounded-lg border border-gray-800 hover:border-blue-500 bg-gray-900 text-white shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">{webinar.title}</h3>
                <p className="text-gray-300 mb-4">{webinar.description}</p>
                <div className="text-sm text-gray-300 space-y-2">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formatDate(webinar.date)}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {webinar.speaker}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {webinar.duration} minutes
                  </p>
                </div>
                <button 
                  className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 text-sm font-medium"
                  onClick={() => console.log(`Register for webinar: ${webinar.id}`)}
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebinarsPage;