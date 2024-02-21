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
} from "./QuizSelectComponent";

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
      take_test: true,
      category: "당뇨병 퀴즈",
      quiz_cnt: 8,
      iconPath: sampleQuizIcon,
    },
    {
      take_test: false,
      category: "당뇨병 퀴즈2",
      quiz_cnt: 8,
      iconPath: sampleQuizIcon,
    },
    {
      take_test: false,
      category: "당뇨병 퀴즈3",
      quiz_cnt: 6,
      iconPath: sampleQuizIcon,
    },
    {
      take_test: true,
      category: "당뇨병 퀴즈4",
      quiz_cnt: 10,
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
              navigate(`${"/quiz/feedback/"+item.category}`);
            }}
          >
            <UpperContainer>
              <QuizInfoWrapper>
                <QuizInfo>
                  <QuizTitle>{item.category}</QuizTitle>
                  <QuizNum>
                    <img src={clockIcon} width={10} alt="clock" />
                    <div>{item.quiz_cnt}개 문제</div>
                  </QuizNum>
                </QuizInfo>
                <QuizIcon src={item.iconPath} />
              </QuizInfoWrapper>
              <img src={arrowIcon} width={26} alt="arrow" />
            </UpperContainer>

            <DivideLine />
            <QuizStatus $take_test={item.take_test}>
              {item.take_test ? "피드백" : "미응시"}
            </QuizStatus>
          </QuizItem>
        ))}
      </QuizItemContainer>
    </QuizMenuLayout>
  );
};
export default Quiz;
