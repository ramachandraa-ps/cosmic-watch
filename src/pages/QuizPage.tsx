import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

// Types
type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type Quiz = {
  id: number;
  name: string;
  description?: string;
  questions: QuizQuestion[];
  level: number;
};

// UI Components (reused from your existing components)
const Card = ({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={`bg-space-light/10 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-colors duration-300 ${className}`}
  >
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

const Button = ({ children, onClick, className = '' }: { children: React.ReactNode; onClick: () => void; className?: string }) => (
  <button 
    onClick={onClick}
    className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-200 transform hover:scale-105 ${className}`}
  >
    {children}
  </button>
);

// Static Quiz Data
const quizzes: Quiz[] = [
  {
    id: 1,
    name: 'Solar System Basics',
    level: 1,
    description: 'Test your knowledge of the basics of our solar system.',
    questions: [
      {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Jupiter', 'Saturn', 'Venus'],
        correctAnswer: 'Jupiter',
      },
      {
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Mars', 'Mercury', 'Jupiter', 'Neptune'],
        correctAnswer: 'Mars',
      },
      {
        question: 'What is the name of Earth\'s natural satellite?',
        options: ['Sun', 'Moon', 'Mars', 'Venus'],
        correctAnswer: 'Moon',
      },
    ],
  },
  {
    id: 2,
    name: 'Planetary Exploration',
    level: 2,
    description: 'Explore advanced concepts about planets and space missions.',
    questions: [
      {
        question: 'Which spacecraft landed on Mars in 2021?',
        options: ['Perseverance', 'Curiosity', 'InSight', 'Opportunity'],
        correctAnswer: 'Perseverance',
      },
      {
        question: 'Which planet has the most moons in our solar system?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        correctAnswer: 'Saturn',
      },
      {
        question: 'What is the Great Red Spot on Jupiter?',
        options: ['A volcano', 'A storm', 'A crater', 'An ocean'],
        correctAnswer: 'A storm',
      },
    ],
  },
  {
    id: 3,
    name: 'Deep Space Phenomena',
    level: 3,
    description: 'Challenge yourself with advanced questions about space phenomena.',
    questions: [
      {
        question: 'What is a black hole?',
        options: [
          'A hole in space',
          'A region where gravity prevents everything from escaping',
          'A dead star',
          'A type of galaxy'
        ],
        correctAnswer: 'A region where gravity prevents everything from escaping',
      },
      {
        question: 'What is the name of the nearest galaxy to the Milky Way?',
        options: ['Andromeda', 'Triangulum', 'Centaurus A', 'Sombrero'],
        correctAnswer: 'Andromeda',
      },
      {
        question: 'What is dark matter?',
        options: [
          'Invisible matter that reflects no light',
          'Matter that exists in black holes',
          'A hypothetical form of matter that interacts through gravity',
          'Dead stars'
        ],
        correctAnswer: 'A hypothetical form of matter that interacts through gravity',
      },
    ],
  },
];

// Quiz Result Component
const QuizResult: React.FC<{
  quiz: Quiz;
  userAnswers: (string | null)[];
  score: number;
  onRetry: () => void;
  onBackToQuizzes: () => void;
}> = ({ quiz, userAnswers, score, onRetry, onBackToQuizzes }) => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardHeader>
      <CardTitle>Quiz Results</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="mb-6">
        <h4 className="text-xl mb-4">Your Score: {score} out of {quiz.questions.length}</h4>
        <div className="h-4 bg-gray-700 rounded-full">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            style={{ width: `${(score / quiz.questions.length) * 100}%` }}
          />
        </div>
      </div>
      
      <div className="space-y-6">
        {quiz.questions.map((question, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <p className="font-medium mb-2">{question.question}</p>
            <p className="text-green-500">Correct Answer: {question.correctAnswer}</p>
            <p className={`${userAnswers[index] === question.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
              Your Answer: {userAnswers[index] || 'Not answered'}
            </p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end space-x-4 mt-6">
        <Button onClick={onRetry}>Retry Quiz</Button>
        <Button onClick={onBackToQuizzes}>Back to Quizzes</Button>
      </div>
    </CardContent>
  </Card>
);

// Quiz Content Component
const QuizContent: React.FC<{
  quiz: Quiz;
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  onAnswerChange: (questionIndex: number, answer: string) => void;
  onNextQuestion: () => void;
  onFinishQuiz: () => void;
}> = ({
  quiz,
  currentQuestionIndex,
  userAnswers,
  onAnswerChange,
  onNextQuestion,
  onFinishQuiz,
}) => {
  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{currentQuestion.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="h-2 bg-gray-700 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </p>
        </div>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <div 
              key={index}
              className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                userAnswers[currentQuestionIndex] === option
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
              onClick={() => onAnswerChange(currentQuestionIndex, option)}
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={userAnswers[currentQuestionIndex] === option}
                  onChange={() => onAnswerChange(currentQuestionIndex, option)}
                  className="mr-3"
                />
                {option}
              </label>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          {currentQuestionIndex < quiz.questions.length - 1 ? (
            <Button 
              onClick={onNextQuestion}
              className={!userAnswers[currentQuestionIndex] ? 'opacity-50 cursor-not-allowed' : ''}
            >
              Next Question
            </Button>
          ) : (
            <Button 
              onClick={onFinishQuiz}
              className={!userAnswers[currentQuestionIndex] ? 'opacity-50 cursor-not-allowed' : ''}
            >
              Finish Quiz
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Main Quiz Page Component
const QuizPage: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizSelect = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setUserAnswers(new Array(quiz.questions.length).fill(null));
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setScore(0);
  };

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  };

  const handleNextQuestion = () => {
    if (userAnswers[currentQuestionIndex]) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const calculateScore = (quiz: Quiz, userAnswers: (string | null)[]) => {
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleFinishQuiz = () => {
    if (selectedQuiz && userAnswers[currentQuestionIndex]) {
      const finalScore = calculateScore(selectedQuiz, userAnswers);
      setScore(finalScore);
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    if (selectedQuiz) {
      setUserAnswers(new Array(selectedQuiz.questions.length).fill(null));
      setCurrentQuestionIndex(0);
      setShowResults(false);
      setScore(0);
    }
  };

  const handleBackToQuizzes = () => {
    setSelectedQuiz(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-space-dark text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-space-dark to-space-light">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Space Quizzes
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Test your knowledge about space, planets, and the universe.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6 space-y-6 relative -mt-20">
        {!selectedQuiz ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} onClick={() => handleQuizSelect(quiz)}>
                <CardHeader>
                  <CardTitle>{quiz.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      Level {quiz.level}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {quiz.description}
                  </p>
                  <p className="text-gray-400 mb-6">
                    {quiz.questions.length} questions
                  </p>
                  <Button onClick={() => handleQuizSelect(quiz)}>
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : showResults ? (
          <QuizResult
            quiz={selectedQuiz}
            userAnswers={userAnswers}
            score={score}
            onRetry={handleRetry}
            onBackToQuizzes={handleBackToQuizzes}
          />
        ) : (
          <QuizContent
            quiz={selectedQuiz}
            currentQuestionIndex={currentQuestionIndex}
            userAnswers={userAnswers}
            onAnswerChange={handleAnswerChange}
            onNextQuestion={handleNextQuestion}
            onFinishQuiz={handleFinishQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default QuizPage;