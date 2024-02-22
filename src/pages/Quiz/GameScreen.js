// GameScreen.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";


import EnemyImage from '../../components/quiz/Enemy.png';
import CharacterImage from '../../components/quiz/Character.png';
import background from "../../components/quiz/background.png";
import sword from "../../components/quiz/sword.png";
import OImage from '../../components/quiz/O.png';
import XImage from '../../components/quiz/X.png';

const API_URL = "http://localhost:8080";

const modalStyles = {
  content: {
    width: '300px',
    height: '300px',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '20px',
  },
};


var state = "";
var iswin = "";
var i = 0;

const GameScreen = ({ questionData, onAnswer, onGameOver, onCategorySelect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playerHP, setPlayerHP] = useState(100);  
  const [enemyHP, setEnemyHP] = useState(100);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizResults, setQuizResults] = useState([]);
  const [sendingcategory, setSendingCategory] = useState(null); 
  const navigate = useNavigate();
  useEffect(() => {
    if (playerHP <= 0) {
      iswin = "false";
      setModalIsOpen2(true);
      setIsGameOver(true);
    }
    if (enemyHP <= 0) {
      iswin = "true";
      setModalIsOpen2(true);
      setIsGameOver(true);
    }
  }, [playerHP, enemyHP]);


  const handleSubmitAnswer = () => {

      const isGameFinished = false; 

      if (isGameFinished) {
        setIsGameOver(true);
        onGameOver(isCorrect);
      } else {
        setIsCorrect(isCorrect);
        onAnswer(isCorrect);
        setSelectedAnswer(null);
      }
    
  };
  
  useEffect(() => {
    if (selectedAnswer !== null && !isGameOver) {
      const correctAnswer = questionData.answer;
      const isCorrect = selectedAnswer === correctAnswer; 
  
      const result = {
        qid: i + 1,
        question : questionData.question,
        result: isCorrect,
        comment: questionData.reason
      };
      setQuizResults(prevQuizResults => [...prevQuizResults, result]);
      i++;
  
      if (isCorrect) {
        setModalIsOpen(true);
        state = "correct";
        setEnemyHP(enemyHP - 20);       
      } else {
        setModalIsOpen(true);
        state = "wrong"
        setPlayerHP(playerHP - 20);
      }
    }
  }, [selectedAnswer, isGameOver]);


  const sendData = async () => {
    return axios
    .post(API_URL+'/quiz/result', { 
      uid: 'user2',
      category: questionData.category,
      quiz_results: quizResults})
      .then((response) => {
        console.log(response);
        return response;
  })
}

  const renderGameOverScreen = () => {
    return (
      <div>
      </div>
    );
  };

  const styles = {
    
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover', 
      minHeight: '100vh', 
    },
    rowContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
      width: '100%',
    },
    characterContainer: {
      textAlign: 'center',
    },
    characterTitle: { 
      fontSize: '1.5em',
      marginBottom: '10px',
      color: 'blue',
    },
    healthBar: {
      width: '100%',
      height: '20px',
      backgroundColor: 'red',
      marginTop: '10px',
      transition: 'width 0.3s',
    },
    questionContainer: {
      textAlign: 'center',
      marginBottom: '20px',
      flex: 1,
    },
    answersContainer: {
      textAlign: 'center',
      flexDirection: 'row',
      width: '100%',
    },
    answerButton: {
      cursor: 'pointer',
      padding: '10px',
      margin: '5px',
      marginTop: '-70px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      flexDirection: 'row',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: '400px',
      width: '350px', 
      height: '350px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.rowContainer}>
        <div style={styles.characterContainer}>
            <img src={CharacterImage} alt="주인공" style={{ width: '200px', height: '200px' }} />
            <div style={{ ...styles.healthBar, backgroundColor: 'blue', width: `${playerHP}%` }}></div>
            <p>HP: {playerHP}</p>
          </div>

          <div style={styles.questionContainer}>
            <h2 style={{ fontSize: '32px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'black' }}>{questionData.question}</h2>
          </div>

        <div style={styles.characterContainer}>
          <img src={EnemyImage} alt="질병" style={{ width: '200px', height: '200px' }} />
          <div style={{ ...styles.healthBar, width: `${enemyHP}%` }}></div>
          <p>HP: {enemyHP}</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
            onClick={() => {
              setSelectedAnswer('O');
              setModalIsOpen(true);}
          }
            style={{
              ...styles.answerButton,            
              marginRight: '10px',  
              paddingBottom: '35px',
              backgroundImage: `url(${OImage})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              border: 'none',
            }}
          ></div>
          <div
          onClick={() => {
            setSelectedAnswer('X');
            setModalIsOpen(true);}
          }
          style={{
            ...styles.answerButton,            
            marginLeft: '10px',
            paddingBottom: '35px',
            backgroundImage: `url(${XImage})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            border: 'none',
          }}
        ></div>
      </div>
      
      <Modal
        isOpen={modalIsOpen2} 
        onRequestClose={() => setModalIsOpen2(false)} 
        style={modalStyles}
      >
        <h2>{state === "correct" && iswin === "true" && <p>승리하셨습니다.</p>}</h2>
        <h2>{state === "wrong" && iswin === "false" && <p>패배하셨습니다.</p>}</h2>
        <button onClick={() => {
          sendData();
          console.log(questionData.category);
          navigate(`${"/quiz/feedback/"+questionData.category}`);
        }}>확인</button>
      </Modal>

<Modal
  isOpen={modalIsOpen} 
  onRequestClose={() => setModalIsOpen(false)} 
  style={modalStyles}
>
  <h2 style={{ textAlign: 'center', fontSize: '24px' }}>
    {state === "correct" && <p style={{ fontSize: '20px', marginBottom: '10px'}}>정답입니다. <br></br><br></br>{questionData.reason}</p>}
    {state === "wrong" && <p style={{ fontSize: '20px', marginBottom: '10px' }}>오답입니다. <br></br><br></br>{questionData.reason}</p>}
  </h2>
  
  <button 
    onClick={() => {
      setModalIsOpen(false); 
      handleSubmitAnswer(); 
    }} 
    style={{
      border: '2px solid black', // 테두리 추가
      borderRadius: '5px', // 테두리 둥글게
      padding: '10px', // 내부 여백
      margin: 'auto', // 가운데 정렬을 위한 외부 여백
      display: 'block', // 블록 요소로 변경하여 가운데 정렬
      marginTop: '20px', // 상단 여백
      cursor: 'pointer', // 커서 모양 변경
    }}
  >
    확인
  </button>
</Modal>


      {isGameOver && renderGameOverScreen()}
    </div>
  );
};

export default GameScreen;
