//import "./newpool.scss";
import { Link } from "react-router-dom";
import react, { useState, useEffect } from 'react';
import { getQuizzes, deleteQuiz } from '../../services/quizapi.js';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'





const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: white;
        color:  #6439ff;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const Quizlist = () => {
    const [quizzes, setQuizzes] = useState([]);
    
    useEffect(() => {
        getAllQuizzes();
    }, []);

   const deleteQuizData = async (id) => {
        await deleteQuiz(id);
        getAllQuizzes();
    }

    const getAllQuizzes= async () => {
       let response=  await getQuizzes();
      setQuizzes(response.data);
     
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Quiz Name</TableCell>
                    <TableCell>Ownername</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                quizzes.map(quiz=> (
                    <TRow key={quiz.id}> 
                        <TableCell>{quiz._id}</TableCell> 
                        <TableCell>{quiz.name}</TableCell>
                        <TableCell>{quiz.ownername}</TableCell>
                        <TableCell>{quiz.description}</TableCell>
                       
                      
                    <TableCell>
                           <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editquizdetail/${quiz._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                           <Button color="secondary" variant="contained" style={{marginRight:10}}  onClick={() => deleteQuizData(quiz._id)} >Delete</Button> {/* change it to user.id to use JSON Server */}
                           <Button color="secondary" variant="contained" style={{marginRight:10}} component={Link} to={`/viewpool/${quiz._id}`} >View</Button> {/* change it to user.id to use JSON Server */}
                      
                       </TableCell>
                       </TRow>
                    
                ))}
            </TableBody>
        </StyledTable>
    )
}


export default Quizlist;