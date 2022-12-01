//import "./newpool.scss";
import { Link } from "react-router-dom";
import react, { useState, useEffect } from 'react';
import { getPools, deletePool } from '../../services/api';
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

const NewPool = () => {
    const [pools, setPools] = useState([]);
    
    useEffect(() => {
        getAllPools();
    }, []);

   const deletePoolData = async (id) => {
        await deletePool(id);
        getAllPools();
    }

    const getAllPools= async () => {
       let response=  await getPools();
      setPools(response.data);
     
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Ownername</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                pools.map(pool => (
                    <TRow key={pool.id}> 
                        <TableCell>{pool._id}</TableCell> 
                        <TableCell>{pool.name}</TableCell>
                        <TableCell>{pool.ownername}</TableCell>
                        <TableCell>{pool.description}</TableCell>
                      
                    <TableCell>
                           <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editpool/${pool._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                           <Button color="secondary" variant="contained" style={{marginRight:10}}  onClick={() => deletePoolData(pool._id)} >Delete</Button> {/* change it to user.id to use JSON Server */}
                           <Button color="secondary" variant="contained" style={{marginRight:10}} component={Link} to={`/viewpool`} >View</Button> {/* change it to user.id to use JSON Server */}
                           <Button color="secondary" variant="contained" component={Link} to={`/Subpool`} >Add SubPool</Button> {/* change it to user.id to use JSON Server */}
                       </TableCell>
                       </TRow>
                    
                ))}
            </TableBody>
        </StyledTable>
    )
}


export default NewPool;