import React, { useState, useEffect } from 'react';
import { useAsyncError, useParams } from 'react-router-dom';
import GameScreen from './GameScreen';
import diabetesQuiz from '../../data/diabetesQuiz';
import highbloodpressureQuiz from '../../data/highbloodpressureQuiz';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const { category } = useParams();
  const [quizData, setQuizData] = useState(diabetesQuiz);

  useEffect(() => {
    if(category === '당뇨병 퀴즈' || category === '당뇨병 퀴즈2') {
    } else {
      setQuizData(highbloodpressureQuiz);
    }
  }, []);

  const handleAnswer = (answer) => {
    
    setUserAnswers([...userAnswers, answer]);

    
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
  };

  const currentQuestionData = quizData[currentQuestion];

  return (
    <div>
      {showResult ? (
        <div>
          <h2>퀴즈가 종료되었습니다!</h2>
          <p>결과: {calculateResult()}</p>
          <button onClick={handleRestart}>처음부터 다시하기</button>
        </div>
      ) : (
        
        <GameScreen
          questionData={currentQuestionData}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

const calculateResult = ({ quizData, userAnswers }) => {
  
  const correctAnswers = quizData.filter(
    (question, index) => question.answer === userAnswers[index]
  );
  return `정답 수: ${correctAnswers.length}/${quizData.length}`;
};

export default Quiz;