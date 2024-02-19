import axios from 'axios';
const API_URL = "http://localhost:8080";

export const getCategoryQuiz = async ( category ) => {
    
    const token = localStorage.getItem('accessToken');
    return await axios
    .get(API_URL+'/quiz/'+category, {headers: {Authorization: `Bearer ${token}`}})
    .then(async (response) => {
        //console.log(response.data);
        return await response.data;
    });
}

const QuizService = {
    getCategoryQuiz,
}

export default QuizService;