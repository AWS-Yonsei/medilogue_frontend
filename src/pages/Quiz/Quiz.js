<<<<<<< HEAD:src/pages/Main/Quiz.js
import React, { useState } from 'react';
import GameScreen from './GameScreen';

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

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
    (question, index) => question.correctAnswer === userAnswers[index]
=======
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QuizMenuLayout from "./QuizMenuLayout";
import {
  TitleContainer,
  TitleIcon,
  Title,
  SearchContainer,
  SearchBarContainer,
  SearchBar,
  SearchButton,
  CategoryFilter,
  DisplayQuizNum,
  QuizItemContainer,
  QuizItem,
  UpperContainer,
  QuizInfoWrapper,
  QuizInfo,
  QuizTitle,
  QuizNum,
  QuizIcon,
  DivideLine,
  QuizStatus,
} from "./QuizComponent";

import titleImg from "../../components/quiz/title.png";
import searchIcon from "../../components/quiz/serach.png";
import arrowIcon from "../../components/quiz/arrow.png";
import clockIcon from "../../components/quiz/clock.png";
import sampleQuizIcon from "../../components/quiz/sample_icon.png";

const Quiz = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState(null);
  const [categoryList, setCategoryList] = useState([
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
  ]);
  const [quizList, setQuizList] = useState([
    {
      quizNo: 1,
      isTaken: true,
      title: "당뇨병 식단 퀴즈",
      quizNum: 8,
      iconPath: sampleQuizIcon,
    },
    {
      quizNo: 2,
      isTaken: false,
      title: "당뇨병 식단 퀴즈2",
      quizNum: 8,
      iconPath: sampleQuizIcon,
    },
    {
      quizNo: 3,
      isTaken: false,
      title: "당뇨병 식단 퀴즈3",
      quizNum: 6,
      iconPath: sampleQuizIcon,
    },
    {
      quizNo: 4,
      isTaken: true,
      title: "당뇨병 식단 퀴즈4",
      quizNum: 10,
      iconPath: sampleQuizIcon,
    },
  ]);

  const getQuizList = () => {};

  return (
    <QuizMenuLayout>
      <TitleContainer>
        <TitleIcon src={titleImg} />
        <Title>의학 퀴즈 목록</Title>
      </TitleContainer>
      <SearchContainer>
        <SearchBarContainer>
          <SearchBar
            placeholder="찾으려는 퀴즈를 검색하세요."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchButton onClick={getQuizList}>
            <img src={searchIcon} width={22} height={22} alt="search" />
          </SearchButton>
        </SearchBarContainer>

        <CategoryFilter
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">카테고리 선택</option>
          {categoryList.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </CategoryFilter>

        <DisplayQuizNum>총 퀴즈: {quizList.length}개</DisplayQuizNum>
      </SearchContainer>

      <QuizItemContainer>
        {quizList.map((item) => (
          <QuizItem
            onClick={() => {
              navigate(`${item.quizNo}`);
            }}
          >
            <UpperContainer>
              <QuizInfoWrapper>
                <QuizInfo>
                  <QuizTitle>{item.title}</QuizTitle>
                  <QuizNum>
                    <img src={clockIcon} width={10} alt="clock" />
                    <div>{item.quizNum}개 문제</div>
                  </QuizNum>
                </QuizInfo>
                <QuizIcon src={item.iconPath} />
              </QuizInfoWrapper>
              <img src={arrowIcon} width={26} alt="arrow" />
            </UpperContainer>

            <DivideLine />
            <QuizStatus $isTaken={item.isTaken}>
              {item.isTaken ? "피드백" : "미응시"}
            </QuizStatus>
          </QuizItem>
        ))}
      </QuizItemContainer>
    </QuizMenuLayout>
>>>>>>> 2d2a968121906170192b68966b10d83531f73fcf:src/pages/Quiz/Quiz.js
  );
  return `정답 수: ${correctAnswers.length}/${quizData.length}`;
};

export default Quiz;