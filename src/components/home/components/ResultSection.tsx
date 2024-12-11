import React from 'react';
import { TestResult } from '../index';

interface ResultSectionProps {
  result: TestResult;
  onRestart: () => void;
}

export const ResultSection: React.FC<ResultSectionProps> = ({
  result,
  onRestart
}) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="title-md mb-4">评估结果</h2>
          <p className="text-text-secondary">
            基于您的答案，我们为您生成了个性化的评估报告
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 得分展示 */}
          <div className="bg-primary bg-opacity-5 p-8 text-center">
            <div className="relative inline-block">
              <svg className="w-32 h-32">
                <circle
                  className="text-gray-200"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="58"
                  cx="64"
                  cy="64"
                />
                <circle
                  className="text-primary"
                  strokeWidth="8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="58"
                  cx="64"
                  cy="64"
                  strokeDasharray={`${2 * Math.PI * 58}`}
                  strokeDashoffset={`${2 * Math.PI * 58 * (1 - result.score / 100)}`}
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-4xl font-bold text-primary">
                  {result.score}
                </div>
                <div className="text-sm text-text-secondary">总分</div>
              </div>
            </div>
          </div>

          {/* 详细内容 */}
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                评估类别：{result.category}
              </h3>
              <p className="text-text-secondary">
                {result.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">发展建议</h3>
              <div className="space-y-4">
                {result.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
                      {index + 1}
                    </div>
                    <p className="ml-4 text-text-secondary">
                      {rec}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onRestart}
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            重新测评
          </button>
        </div>
      </div>
    </div>
  );
}; 