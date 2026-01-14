import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Trophy, RefreshCw } from 'lucide-react';
import Button from './Button';
import { useApp } from '../context/AppContext';

const Quiz = ({ title, questions, onComplete, onClose }) => {
  const { addXp } = useApp();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);

  const handleAnswerClick = (optionIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(optionIndex);
    setIsAnswered(true);

    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const handleComplete = () => {
    if (!xpAwarded) {
      const xpEarned = score * 10 + 50;
      addXp(xpEarned);
      setXpAwarded(true);
    }
    if (onComplete) onComplete();
    else if (onClose) onClose();
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setXpAwarded(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-2xl w-full mx-auto border-4 border-brand-green/20">
      <div className="bg-brand-green p-6 text-white flex justify-between items-center">
        <h3 className="font-display font-bold text-2xl">{title}</h3>
        <div className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold">
          Q {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {showResult ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-brand-yellow rounded-full mx-auto flex items-center justify-center mb-6">
                <Trophy size={48} className="text-brand-dark" />
              </div>
              <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">
                Quiz Completed!
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                You scored{' '}
                <span className="font-bold text-brand-green text-2xl">{score}</span> out of{' '}
                {questions.length}
              </p>

              <div className="flex justify-center space-x-4">
                <Button onClick={handleComplete} variant="primary">
                  Collect Rewards &amp; Continue
                </Button>
                <button
                  onClick={resetQuiz}
                  className="flex items-center px-6 py-3 rounded-full font-bold text-brand-green border-2 border-brand-green hover:bg-brand-green-bg transition-colors"
                >
                  <RefreshCw size={20} className="mr-2" /> Retry
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="text-xl font-bold text-brand-dark mb-8 leading-relaxed">
                {questions[currentQuestion].question}
              </h4>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center
                      ${
                        isAnswered && idx === questions[currentQuestion].correctAnswer
                          ? 'border-brand-green bg-brand-green/10 text-brand-green'
                          : isAnswered && idx === selectedAnswer
                            ? 'border-red-400 bg-red-50 text-red-500'
                            : 'border-gray-200 hover:border-brand-yellow hover:bg-yellow-50 text-gray-700'
                      }
                    `}
                  >
                    <span className="font-medium">{option}</span>
                    {isAnswered &&
                      idx === questions[currentQuestion].correctAnswer && (
                        <CheckCircle size={24} className="text-brand-green" />
                      )}
                    {isAnswered &&
                      idx === selectedAnswer &&
                      idx !== questions[currentQuestion].correctAnswer && (
                        <XCircle size={24} className="text-red-500" />
                      )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!showResult && (
        <div className="h-2 bg-gray-100 w-full">
          <motion.div
            className="h-full bg-brand-yellow"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;

