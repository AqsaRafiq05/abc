//import "./newpool.scss";
import { Link } from "react-router-dom";
import react, { useState, useEffect } from 'react';
import { getQuestions, deleteQuestion } from '../../services/questionapi';
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

const DisplayQuiz = () => {
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        getAllQuestions();
    }, []);

   const deleteQuestionData = async (id) => {
        await deleteQuestion(id);
        getAllQuestions();
    }

    const getAllQuestions= async () => {
       let response=  await getQuestions();
      setQuestions(response.data);
     
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Question</TableCell>
                    <TableCell>Option 1</TableCell>
                    <TableCell>Option 2</TableCell>
                    <TableCell>Option 3</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                questions.map(question => (
                    <TRow key={question.id}> 
                        <TableCell>{question._id}</TableCell> 
                        <TableCell>{question.writequestion}</TableCell>
                        <TableCell>{question.option1}</TableCell>
                        <TableCell>{question.option2}</TableCell>
                        <TableCell>{question.option3}</TableCell>
                      
                    <TableCell>
                           <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editquestion/${question._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                           <Button color="secondary" variant="contained" style={{marginRight:10}}  onClick={() => deleteQuestionData(question._id)} >Delete</Button> {/* change it to user.id to use JSON Server */}
                          
                           
                       </TableCell>
                       </TRow>
                    
                ))}
            </TableBody>
        </StyledTable>
    )
}


export default DisplayQuiz;
