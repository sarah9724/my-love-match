import React from 'react';

interface WelcomeSectionProps {
  onStart: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onStart }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="title-lg text-text-primary mb-6">
          Welcome to the Assessment
        </h1>
        
        <p className="text-base text-text-secondary mb-8">
          Take our comprehensive assessment to evaluate your skills and get personalized recommendations.
        </p>

        <button
          onClick={onStart}
          className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Start Assessment
        </button>
      </div>
    </div>
  );
}; 