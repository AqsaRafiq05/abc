
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom'
import { addSubPool } from '../../services/subpoolApi';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
 
    
    const initialValue = {
        name: '',
     
       description: ''
        
    }
    
    const Container = styled(FormGroup)`
        width: 50%;
        margin: 5% 0 0 25%;
        &> div {
            margin-top: 20px; 
        }
    `;
    
    const SubPool= () => {
        const [subpool, setSubPool] = useState(initialValue);
        const { name,  description } = subpool;
        
        let navigate = useNavigate();
    
        const onValueChange = (e) => {
            setSubPool({...subpool, [e.target.name]: e.target.value})
        }
    
        const addSubPoolDetails = async() => {
            await addSubPool(subpool);
            navigate('/viewpool');
        }
    
        return (
            <Container>
                <Typography variant="h4">Add Sub-Poll</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                </FormControl>
               
                <FormControl>
                    <InputLabel htmlFor="my-input">description</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input"/>
                </FormControl>
                
                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => addSubPoolDetails()}>Add subPool</Button>
                </FormControl>
            </Container>
        );
    };
  
     
  
export default SubPool;