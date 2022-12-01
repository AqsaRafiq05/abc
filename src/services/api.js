import axios from 'axios';


const URL = 'http://localhost:8080';
export const addPool = async (data) => {
    try{
        return await axios.post(`${URL}/addnewpool`, data);
    }catch(error) {
console.log('error while caling add pool api', error);
    }
}

export const getPools= async () => {
    try{
        return await axios.get(`${URL}/questionpool`);
    }catch(error) {
console.log('error while caling get pools api', error);
    }
}

export const getPool= async (id) => {
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error) {
console.log('error while caling get pool api', error);
    }
}
 
export const editPool= async (pool,id) => {
    try{
        return await axios.post(`${URL}/${id}`,pool );
    }catch(error) {
console.log('error while caling  editpool api', error);
    }
}

export const deletePool= async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error) {
console.log('error while caling  deletepool api', error);
    }
}

