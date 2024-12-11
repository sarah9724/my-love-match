import React, { useState } from 'react';
import { Question } from '../index';

interface TestSectionProps {
  questions: Question[];
  onSubmit: (answers: Record<string, string>) => void;
  onBack: () => void;
}

export const TestSection: React.FC<TestSectionProps> = ({
  questions,
  onSubmit,
  onBack
}) => {
  const [currentAnswers, setCurrentAnswers] = useState<Record<string, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (questionId: string, answer: string) => {
    setCurrentAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    onSubmit(currentAnswers);
  };

  const canProceed = currentQuestion < questions.length && 
    currentAnswers[questions[currentQuestion].id];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {questions.length > 0 ? (
          <>
            {/* Progress bar */}
            <div className="mb-6">
              <div className="w-full bg-bg-secondary rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${((currentQuestion + 1) / questions.length) * 100}%` 
                  }}
                />
              </div>
              <div className="text-text-secondary text-sm mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>

            {/* Question display */}
            <div className="mb-8">
              <h2 className="title-sm mb-6 text-text-primary">
                {questions[currentQuestion].text}
              </h2>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <label
                    key={option.value}
                    className={`
                      block p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${currentAnswers[questions[currentQuestion].id] === option.value
                        ? 'border-primary bg-primary bg-opacity-5'
                        : 'border-gray-200 hover:border-primary hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${questions[currentQuestion].id}`}
                        value={option.value}
                        checked={currentAnswers[questions[currentQuestion].id] === option.value}
                        onChange={() => handleAnswer(questions[currentQuestion].id, option.value)}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="ml-3 text-text-primary">
                        {option.label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between">
              <button
                onClick={onBack}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                Back
              </button>
              
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed}
                  className={`
                    px-6 py-2 rounded transition-colors
                    ${canProceed
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestion(prev => prev + 1)}
                  disabled={!canProceed}
                  className={`
                    px-6 py-2 rounded transition-colors
                    ${canProceed
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center text-text-secondary">
            No questions available
          </div>
        )}
      </div>
    </div>
  );
}; 