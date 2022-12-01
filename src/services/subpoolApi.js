import axios from 'axios';


const URL = 'http://localhost:8080';
export const addSubPool = async (data) => {
    try{
        return await axios.post(`${URL}/Subpool`, data);
    }catch(error) {
console.log('error while caling add pool api', error);
    }
}

export const getSubPools= async () => {
    try{
        return await axios.get(`${URL}/viewpool`);
    }catch(error) {
console.log('error while caling get pools api', error);
    }
}

export const getSubPool= async (id) => {
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error) {
console.log('error while caling get pool api', error);
    }
}
 
export const editSubPool= async (subpool,id) => {
    try{
        return await axios.post(`${URL}/${id}`,subpool );
    }catch(error) {
console.log('error while caling  editpool api', error);
    }
}

export const deleteSubPool= async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error) {
console.log('error while caling  deletepool api', error);
    }
}

