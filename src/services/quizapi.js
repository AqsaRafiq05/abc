import axios from 'axios';


const URL = 'http://localhost:8080';
export const addQuiz= async (data) => {
    try{
        return await axios.post(`${URL}/createquiz`, data);
    }catch(error) {
console.log('error while caling add quiz api', error);
    }
}

export const getQuizzes= async () => {
    try{
        return await axios.get(`${URL}/questionnaire`);
    }catch(error) {
console.log('error while caling get quizzes api', error);
    }
}

export const getQuiz= async (id) => {
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error) {
console.log('error while caling get quiz api', error);
    }
}
 
export const editQuizdetail= async (quiz,id) => {
    try{
        return await axios.post(`${URL}/${id}`,quiz );
    }catch(error) {
console.log('error while caling  editquiz api', error);
    }
}

export const deleteQuiz= async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error) {
console.log('error while caling  deletequiz api', error);
    }
}

