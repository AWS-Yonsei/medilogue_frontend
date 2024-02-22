import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 100px;
  padding-top: 10x;
`;
export const TitleIcon = styled.img`
  width: 80px;
  margin-right: 10px;
`;
export const Title = styled.div`
  font-family: Krub;
  font-size: 40px;
  font-weight: 700;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  margin-bottom: 20px;
`;
export const SearchBarContainer = styled.div`
  display: flex;
  width: 650px;
  height: 55px;
  border-radius: 15px;
  margin-right: 20px;
  padding-left: 100px;
`;
export const SearchBar = styled.input`
  width: calc(100% - 55px);
  height: 100%;
  border-radius: 15px 0 0 15px;
  border: 1px solid #0070db99;
  padding: 0 10px;


  ::placeholder {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    
  }
`;
export const SearchButton = styled.div`
  width: 55px;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f6edbd;
  border-radius: 0 15px 15px 0;

  :hover {
    cursor: pointer;
  }
`;
export const CategoryFilter = styled.select`
  width: 170px;
  height: 30px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;

  border: 1px solid #0000004d;
  margin-left: 20px;
`;
export const DisplayQuizNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 24px;

  border-radius: 10px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    linear-gradient(0deg, rgba(228, 228, 228, 0.4), rgba(228, 228, 228, 0.4));
  border: 1px solid #0000001a;
  margin-left: auto;

  font-family: Krub;
  font-size: 12px;
  font-weight: 400;
`;

export const QuizItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;
  width: 100%;
  padding-left: 100px;


  :hover {
    cursor: pointer;
  }
`;
export const QuizItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  width: 380px;
  height: 300px;

  background-color: white;
  border: 1px solid #00000040;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 10px;
  padding: 10px 20px;
`;
export const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;
export const QuizInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;

  width: 300px;
  height: 200px;
  border-radius: 18px;
  background: #e0e0e0;
`;
export const QuizInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  width: 190px;
  height: 70px;
  border-radius: 12px;
  background: #f6fbfa;

  padding: 10px 15px;
  margin: 15px 10px;
`;
export const QuizTitle = styled.div`
  font-family: Krub;
  font-size: 22px;
  font-weight: 600;
`;
export const QuizNum = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-family: Work Sans;
  font-size: 14px;
  font-weight: 400;
  color: #888888;
`;

export const QuizIcon = styled.img`
  position: absolute;
  top: -15px;
  right: 0;

  width: 130px;
  height: 130px;
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 2px;
  background: repeating-linear-gradient(90deg, #dedede 0 7px, #0000 0 12px);
`;
export const QuizStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 68px;
  height: 24px;
  background: #f6edbd;
  box-shadow: 0px 4px 4px 0px #00000040;

  font-family: Lato;
  font-size: 12px;
  font-weight: 900;
  color: ${(props) => (props.$isTaken ? "#0BAB7C" : "#444444")};

  border: 1px solid #00000033;
  border-radius: 8px;
  margin-left: auto;
`;
