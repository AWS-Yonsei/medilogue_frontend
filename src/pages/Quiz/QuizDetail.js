import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QuizMenuLayout from "./QuizMenuLayout";
import {
  TitleContainer,
  Title,
  QuizNum,
  InfoContainer,
  InfoTable,
  TableHead,
  TableData,
  InfoBar,
  QuizItemContainer,
  QuizItemTitle,
  QuizContentContainer,
  QuestionContainer,
  AnswerContainer,
  FeedbackContainer,
  FeedbackContent,
} from "./QuizDetailComponent";

import dropdownIcon from "../../components/quiz/dropdown.png";
const API_URL = 'http://localhost:8080'


const Quiz = () => {
  const { category } = useParams();
  const [isTaken, setIsTaken] = useState(true);
  const [quizNum, setQuizNum] = useState(0);
  const [correctNum, setCorrectNum] = useState(0);
  const [startTime, setStartTime] = useState("2024 - 02 - 23 14:06");
  const [endTime, setEndTime] = useState("2024 - 02 - 23 14:15");

  const [questionList, setQuestionList] = useState([]);
  const getResults = async () => {
    try{
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(`${API_URL}/quiz/feedback/${category}`, {headers: {Authorization: `Bearer ${token}`}});
      const results = response.data;
      console.log(results.feedback);
      let correctCnt = 0;
      setQuestionList(results.feedback);
      setQuizNum(questionList.length);
      results.forEach(result => {
        if (result.result===true) {
          correctCnt++;
        } 
      });
      setCorrectNum(correctCnt);
    }
    catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  useEffect(() => {
    getResults();
  }, [isTaken, quizNum, correctNum]);

  return (
    <QuizMenuLayout>
      <TitleContainer>
        <Title>{category}</Title>
        <QuizNum>{quizNum}개 문제</QuizNum>
      </TitleContainer>

      <InfoContainer>
        <InfoTable>
          <TableHead>
            <div>시작 일시</div>
            <div>진행 상황</div>
            <div>완료 일시</div>
          </TableHead>
          <TableData>
            <div>{startTime}</div>
            <div>{isTaken ? "complete" : "waiting"}</div>
            <div>{endTime}</div>
          </TableData>
        </InfoTable>

        <InfoBar>
          <div>📆 Date: {startTime}</div>
          <div>⏰ Time: 9분 25초</div>
          <div>
            💡Grade:{" "}
            <span style={{ color: "#0BAB7C" }}>
              {correctNum}/{quizNum}
            </span>
          </div>
        </InfoBar>
      </InfoContainer>

      {questionList.map((item) => (
        console.log(item),
        <QuizItem {...item} />
      ))}
    </QuizMenuLayout>
  );
};
export default Quiz;

const QuizItem = ({
  content,
  result,
  comment,
  submittedAnswer = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(submittedAnswer);

  return (
    <QuizItemContainer>
      <QuizItemTitle onClick={() => setIsOpen(!isOpen)}>
        <span>문제1</span>
        <img src={dropdownIcon} width={12} alt="dropdown" />
        <span
          style={{
            color: result ? "#10B177" : "#BB1919",
          }}
        >
          {result ? "정답" : "오답"}
        </span>
        <span style={{ color: "#B2B2B2" }}>
          {+result} / 1 (총 1점 중 {+result}점)
        </span>
      </QuizItemTitle>

      {isOpen && (
        <QuizContentContainer>
          <hr />
          <QuestionContainer>
            문제: {content}
            <div>
              <input
                type="radio"
                checked={selectedAnswer === 1}
                onChange={(e) => setSelectedAnswer(1)}
              />
              <span>O</span>
            </div>
            <div>
              <input
                type="radio"
                checked={selectedAnswer === 2}
                onChange={(e) => setSelectedAnswer(2)}
              />
              <span>X</span>
            </div>
          </QuestionContainer>
          <AnswerContainer>
            <div
              style={{
                color: result ? "#10B177" : "#BB1919",
              }}
            >
              {result ? "답이 맞습니다" : "답이 틀립니다"}
            </div>
            <div>정답 설명: {comment}</div>
          </AnswerContainer>
          <FeedbackContainer>
            <span>피드백</span>
            <FeedbackContent>댓글: {comment}</FeedbackContent>
          </FeedbackContainer>
        </QuizContentContainer>
      )}
    </QuizItemContainer>
  );
};
