import { useState } from "react";
import MenuLayout from "../../layouts/MenuLayout";
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
const Quiz = () => {
  const [quizInfo, setQuizInfo] = useState({
    quizNo: 2,
    isTaken: true,
    title: "당뇨병 식단 퀴즈",
    quizNum: 8,
    correctNum: 7,
    startTime: "2024 - 02 - 01 18:16",
    endTime: "2024 - 02 - 01 18:16",
    remainTime: "sdf",
  });

  const [questionList, setQuestionList] = useState([
    {
      isCorrect: false,
      question: "questionquestionquestionquestion",
      answer: "answeransweransweransweranswer",
      feedback: "feedbackfeedbackfeedbackfeedbackfeedback",
      submittedAnswer: 1,
    },
    {
      isCorrect: true,
      question: "questionquestionquestionquestion",
      answer: "answeransweransweransweranswer",
      feedback: "feedbackfeedbackfeedbackfeedbackfeedback",
      submittedAnswer: 2,
    },
  ]);

  return (
    <MenuLayout>
      <TitleContainer>
        <Title>{quizInfo.title}</Title>
        <QuizNum>{quizInfo.quizNum}개 문제</QuizNum>
      </TitleContainer>

      <InfoContainer>
        <InfoTable>
          <TableHead>
            <div>시작 일시</div>
            <div>진행 상황</div>
            <div>완료 일시</div>
          </TableHead>
          <TableData>
            <div>{quizInfo.startTime}</div>
            <div>{quizInfo.isTaken ? "complete" : "waiting"}</div>
            <div>{quizInfo.endTime}</div>
          </TableData>
        </InfoTable>

        <InfoBar>
          <div>📆 Date: {quizInfo.startTime}</div>
          <div>⏰ Time: 9분 25초</div>
          <div>
            💡Grade:{" "}
            <span style={{ color: "#0BAB7C" }}>
              {quizInfo.correctNum}/{quizInfo.quizNum}
            </span>
          </div>
        </InfoBar>
      </InfoContainer>

      {questionList.map((item) => (
        <QuizItem {...item} />
      ))}
    </MenuLayout>
  );
};
export default Quiz;

const QuizItem = ({
  isCorrect = false,
  question,
  answer,
  feedback,
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
            color: isCorrect ? "#10B177" : "#BB1919",
          }}
        >
          {isCorrect ? "정답" : "오답"}
        </span>
        <span style={{ color: "#B2B2B2" }}>
          {+isCorrect} / 1 (총 1점 중 {+isCorrect}점)
        </span>
      </QuizItemTitle>

      {isOpen && (
        <QuizContentContainer>
          <hr />
          <QuestionContainer>
            문제: {question}
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
                color: isCorrect ? "#10B177" : "#BB1919",
              }}
            >
              {isCorrect ? "답이 맞습니다" : "답이 틀립니다"}
            </div>
            <div>정답 설명: {answer}</div>
          </AnswerContainer>
          <FeedbackContainer>
            <span>피드백</span>
            <FeedbackContent>댓글: {feedback}</FeedbackContent>
          </FeedbackContainer>
        </QuizContentContainer>
      )}
    </QuizItemContainer>
  );
};
