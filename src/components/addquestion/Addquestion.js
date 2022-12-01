
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom'
import { addQuestion } from '../../services/questionapi';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
 
    
    const initialValue = {
        writequestion: '',
        option1: '',
       option2: '',
       option3: '',
    }
    
    const Container = styled(FormGroup)`
        width: 50%;
        margin: 5% 0 0 25%;
        &> div {
            margin-top: 20px; 
        }
    `;
    
    const Addquestion = () => {
        const [question, setQuestion] = useState(initialValue);
        const {writequestion, option1, option2, option3 } = question;
        
        let navigate = useNavigate();
    
        const onValueChange = (e) => {
            setQuestion({...question, [e.target.name]: e.target.value})
        }
    
        const addQuestionDetails = async() => {
            await addQuestion(question);
            navigate('/createquiz');
        }
    
        return (
            <Container>
                <Typography variant="h4">Add Question</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Question</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='writequestion' value={writequestion} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Option 1</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='option1' value={option1} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Option 2</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='option2' value={option2} id="my-input"/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Option 3</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='option3' value={option3} id="my-input"/>
                </FormControl>
                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => addQuestionDetails()}>Add question</Button>
                </FormControl>
            </Container>
        );
    };
  
     
  
export default Addquestion;