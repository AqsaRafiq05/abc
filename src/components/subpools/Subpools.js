//import "./newpool.scss";
import { Link } from "react-router-dom";
import react, { useState, useEffect } from 'react';
import { getSubPools, deleteSubPool } from '../../services/subpoolApi';
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

const Subpools = () => {
    const [subpools, setSubPools] = useState([]);
    
    useEffect(() => {
        getAllSubPools();
    }, []);

   const deleteSubPoolData = async (id) => {
        await deleteSubPool(id);
        getAllSubPools();
    }

    const getAllSubPools= async () => {
       let response=  await getSubPools();
      setSubPools(response.data);
     
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                 
                    <TableCell>Description</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                subpools.map(subpool => (
                    <TRow key={subpool.id}> 
                        <TableCell>{subpool._id}</TableCell> 
                        <TableCell>{subpool.name}</TableCell>
                     
                        <TableCell>{subpool.description}</TableCell>
                      
                    <TableCell>
                           <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editsubpool/${subpool._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                           <Button color="secondary" variant="contained" style={{marginRight:10}}  onClick={() => deleteSubPoolData(subpool._id)} >Delete</Button> {/* change it to user.id to use JSON Server */}
                           <Button color="secondary" variant="contained" style={{marginRight:10}} component={Link} to={`/viewsubpool/${subpool._id}`} >View</Button> {/* change it to user.id to use JSON Server */}
                           <Button color="secondary" variant="contained" component={Link} to={`/Subpool/${subpool._id}`} >Add SubPool</Button> {/* change it to user.id to use JSON Server */}
                       </TableCell>
                       </TRow>
                    
                ))}
            </TableBody>
        </StyledTable>
    )
}


export default Subpools;