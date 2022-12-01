import { Link } from "react-router-dom";
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom'
import { addQuiz } from '../../services/quizapi';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
 
    
    const initialValue = {
        name: '',
        ownername: '',
        description:'',
        level:''
   
        
    }
    
    const Container = styled(FormGroup)`
        width: 50%;
        margin: 5% 0 0 25%;
        &> div {
            margin-top: 20px; 
        }
    `;
    
    const CreateQuiz = () => {
        const [quiz, setQuiz] = useState(initialValue);
        const { name, ownername, description , level} = quiz;
        
        let navigate = useNavigate();
    
        const onValueChange = (e) => {
            setQuiz({...quiz, [e.target.name]: e.target.value})
        }
    
        const addQuizDetails = async() => {
            await addQuiz(quiz);
            navigate('/questionnaire');
        }
    
        return (
            <Container>
                <Typography variant="h4">Add quiz</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Ownername</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='ownername' value={ownername} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Description</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
                </FormControl>
            
            <FormControl>
                    <InputLabel htmlFor="my-input">Level</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='level' value={level} id="my-input" />
                </FormControl>
                
                <FormControl>
                    <Button variant="contained" color="primary" component={Link} to={`/addquestion`}>Add Question</Button>
                </FormControl>
                
            </Container>
        );
    };
  
     
  
export default CreateQuiz;