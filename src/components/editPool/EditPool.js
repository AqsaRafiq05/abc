
import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useNavigate , useParams } from 'react-router-dom'
import { editPool ,getPool } from '../../services/api';
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
    
    const EditPool = () => {
        const [pool, setPool] = useState(initialValue);
        const { name, ownername, description } = pool;
        const { id } = useParams();
        let navigate = useNavigate();

        useEffect(() => {
            loadPoolDetails();
        }, []);
        
        const loadPoolDetails = async() => {
            const response = await getPool(id);
            setPool(response.data);
        }
    
        const onValueChange = (e) => {
            setPool({...pool, [e.target.name]: e.target.value})
        }
    
        const editPoolDetails = async() => {
            await editPool(pool, id);
            navigate('/questionpool');
        }
    
        return (
            <Container>
                <Typography variant="h4">Edit Poll</Typography>
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
                    <Button variant="contained" color="primary" onClick={() => editPoolDetails()}>Edit Pool</Button>
                </FormControl>
            </Container>
        );
    };
  
     
  
export default EditPool;