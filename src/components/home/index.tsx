import React, { useState } from 'react';
import { WelcomeSection } from './components/WelcomeSection';
import { TestSection } from './components/TestSection';
import { ResultSection } from './components/ResultSection';

export interface TestResult {
  // Will be expanded based on requirements
  score: number;
  category: string;
  description: string;
  recommendations: string[];
}

export interface Question {
  id: string;
  text: string;
  options: { value: string; label: string }[];
}

const sampleQuestions: Question[] = [
  {
    id: 'q1',
    text: 'What is your primary goal for taking this assessment?',
    options: [
      { value: 'skill', label: 'Improve my technical skills' },
      { value: 'career', label: 'Advance my career' },
      { value: 'project', label: 'Complete a specific project' },
      { value: 'knowledge', label: 'Expand my knowledge' }
    ]
  },
  {
    id: 'q2',
    text: 'How would you rate your current experience level?',
    options: [
      { value: 'beginner', label: 'Beginner - Just starting out' },
      { value: 'intermediate', label: 'Intermediate - Some experience' },
      { value: 'advanced', label: 'Advanced - Significant experience' },
      { value: 'expert', label: 'Expert - Professional level' }
    ]
  },
  {
    id: 'q3',
    text: 'Which area interests you the most?',
    options: [
      { value: 'frontend', label: 'Frontend Development' },
      { value: 'backend', label: 'Backend Development' },
      { value: 'fullstack', label: 'Full Stack Development' },
      { value: 'devops', label: 'DevOps' }
    ]
  }
];

interface CategoryResult {
  category: string;
  description: string;
  recommendations: string[];
}

const categoryResults: Record<string, CategoryResult> = {
  beginner: {
    category: '入门级',
    description: '你正处于学习的起步阶段，这是一个充满可能性的开始。',
    recommendations: [
      '建立扎实的编程基础知识',
      '从小项目开始积累实践经验',
      '加入学习社区获取帮助和指导',
      '制定合理的学习计划和目标'
    ]
  },
  intermediate: {
    category: '进阶级',
    description: '你已经具备了不错的基础，正在向更专业的水平迈进。',
    recommendations: [
      '深入学习高级编程概念',
      '尝试参与开源项目',
      '扩展技术栈的广度和深度',
      '注重代码质量和最佳实践'
    ]
  },
  advanced: {
    category: '高级',
    description: '你展现出了专业的技术能力，可以处理复杂的开发任务。',
    recommendations: [
      '专注于架构设计能力',
      '提升技术团队管理能力',
      '分享经验帮助他人成长',
      '持续关注技术前沿动态'
    ]
  }
};

export const HomePage: React.FC = () => {
  const [step, setStep] = useState<'welcome' | 'testing' | 'result'>('welcome');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<TestResult | undefined>();

  const handleStart = () => {
    setStep('testing');
    setAnswers({});
    setResult(undefined);
  };

  const calculateResult = (testAnswers: Record<string, string>): TestResult => {
    // 根据经验水平确定基础类别
    const experienceLevel = testAnswers['q2'];
    const baseCategory = categoryResults[experienceLevel] || categoryResults.beginner;
    
    // 根据目标和兴趣领域调整建议
    const goal = testAnswers['q1'];
    const interest = testAnswers['q3'];
    
    // 计算得分 (示例逻辑)
    let score = 0;
    switch (experienceLevel) {
      case 'beginner': score = 65; break;
      case 'intermediate': score = 80; break;
      case 'advanced': score = 90; break;
      case 'expert': score = 95; break;
      default: score = 70;
    }
    
    // 生成个性化建议
    const customRecommendations = [...baseCategory.recommendations];
    if (goal === 'career') {
      customRecommendations.push('建立专业的个人品牌和网络');
    } else if (goal === 'project') {
      customRecommendations.push('专注于项目管理和交付能力');
    }
    
    if (interest === 'fullstack') {
      customRecommendations.push('平衡前后端技能的发展');
    }

    return {
      score,
      category: baseCategory.category,
      description: baseCategory.description,
      recommendations: customRecommendations
    };
  };

  const handleSubmitTest = (testAnswers: Record<string, string>) => {
    const result = calculateResult(testAnswers);
    setAnswers(testAnswers);
    setResult(result);
    setStep('result');
  };

  const handleRestart = () => {
    setStep('welcome');
    setAnswers({});
    setResult(undefined);
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {step === 'welcome' && <WelcomeSection onStart={handleStart} />}
      
      {step === 'testing' && (
        <TestSection
          questions={sampleQuestions}
          onSubmit={handleSubmitTest}
          onBack={() => setStep('welcome')}
        />
      )}
      
      {step === 'result' && result && (
        <ResultSection
          result={result}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}; 