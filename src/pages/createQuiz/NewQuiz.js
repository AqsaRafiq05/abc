
import InstructorSidebar from "../../components/instructorSidebar/InstructorSidebar";
import CreateQuiz from "../../components/createquiz/CreateQuiz";
import Displayquiz from "../../components/displayquiz/Displayquiz";
import Navbar from "../../components/NavBar/Navbar";
import {Button } from '@mui/material';


const NewQuiz = () => {


  return (
    <div className="home">
    <InstructorSidebar />
    <div className="homeContainer">
      <Navbar />

      <div className="widgets">
        <CreateQuiz/>
       
        </div>
        <div className="widgets">
        <Displayquiz/>
       
        </div>
        
        <div className="widgets">
        <Button variant="contained" color="primary" >save</Button>
       
        </div>
    </div>
    </div>
  );
};


export default NewQuiz;
