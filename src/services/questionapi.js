import axios from 'axios';


const URL = 'http://localhost:8080/';
export const addQuestion = async (data) => {
    try{
        return await axios.post(`${URL}/addquestion`, data);
    }catch(error) {
console.log('error while caling add pool api', error);
    }
}
export const getQuestions= async () => {
    try{
        return await axios.get(`${URL}/createquiz`);
    }catch(error) {
console.log('error while caling get pools api', error);
    }
}

export const getQuestion= async (id) => {
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error) {
console.log('error while caling get pool api', error);
    }
}
 
export const editQuestion= async (question,id) => {
    try{
        return await axios.post(`${URL}/${id}`,question );
    }catch(error) {
console.log('error while caling  editpool api', error);
    }
}

export const deleteQuestion= async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error) {
console.log('error while caling  deletepool api', error);
    }
}

