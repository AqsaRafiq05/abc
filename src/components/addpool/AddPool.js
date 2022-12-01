
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom'
import { addPool } from '../../services/api';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
 
    
    const initialValue = {
        name: '',
        ownername: '',
       description: ''
        
    }
    
    const Container = styled(FormGroup)`
        width: 50%;
        margin: 5% 0 0 25%;
        &> div {
            margin-top: 20px; 
        }
    `;
    
    const AddPool = () => {
        const [pool, setPool] = useState(initialValue);
        const { name, ownername, description } = pool;
        
        let navigate = useNavigate();
    
        const onValueChange = (e) => {
            setPool({...pool, [e.target.name]: e.target.value})
        }
    
        const addPoolDetails = async() => {
            await addPool(pool);
            navigate('/questionpool');
        }
    
        return (
            <Container>
                <Typography variant="h4">Add Poll</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Ownername</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='ownername' value={ownername} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">description</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input"/>
                </FormControl>
                
                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => addPoolDetails()}>Add Pool</Button>
                </FormControl>
            </Container>
        );
    };
  
     
  
export default AddPool;