import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const Title = styled.div`
  font-family: Krub;
  font-size: 30px;
  font-weight: 600;
`;
export const QuizNum = styled.div`
  font-family: Work Sans;
  font-size: 14px;
  font-weight: 400;
  color: #888;

  margin-left: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;
export const InfoTable = styled.div`
  display: flex;
  width: 540px;
  height: 90px;
  border-radius: 10px;
  border: 1px solid #00000080;

  > div > div {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #00000080;

    &:last-child {
      border-bottom: none;
    }
  }
`;
export const TableHead = styled.div`
  width: 150px;
  height: 100%;
  background: #d4d4d4;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  border-right: 1px solid #00000080;
  border-radius: 10px 0 0 10px;
`;
export const TableData = styled.div`
  width: calc(100% - 150px);
  height: 100%;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  border-radius: 0 10px 10px 0;
`;
export const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  padding: 5px 20px;
  background-color: #e5e5e5;

  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  color: #737373;
`;

export const QuizItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  margin-top: 20px;
  border: 1px solid #00000040;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
export const QuizItemTitle = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  width: 100%;
  padding: 10px 30px;

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;

  > span:first-child {
    font-size: 21px;
    margin-right: -10px;
  }

  &:hover {
    cursor: pointer;
  }
`;
export const QuizContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  padding: 0 30px 10px 30px;

  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;

  > hr {
    height: 1px;
    width: 100%;
    border-top-color: #000;
  }
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  padding: 10px 20px;
  margin-top: 10px;
  background: #c9dcf2;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
export const AnswerContainer = styled.div`
  margin-top: 20px;
  padding-left: 60px;
  color: #37352f;
`;
export const FeedbackContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  width: 100%;
  margin-top: 20px;
`;
export const FeedbackContent = styled.div`
  flex-grow: 1;
  padding: 10px 20px;
  background: #adf1cd;
  color: #005d42;
`;
