import React from 'react';
import { useNavigate } from 'react-router-dom';

const InteractionZone: React.FC = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="bg-space-dark text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Interactive Learning Zone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-space-light/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Space Quiz</h3>
            <p className="text-gray-300 mb-6">
              Test your knowledge about space, planets, and the universe with our interactive quiz.
            </p>
            <button
              onClick={handleStartQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                       text-white font-medium py-2 px-6 rounded-md transition-all duration-200 
                       transform hover:scale-105"
            >
              Start Quiz
            </button>
          </div>
          {/* Add other interactive components here */}
        </div>
      </div>
    </div>
  );
};

export default InteractionZone;