
import InstructorSidebar from "../../components/instructorSidebar/InstructorSidebar";
import Addquestion from "../../components/addquestion/Addquestion";
import Navbar from "../../components/NavBar/Navbar";


const NewQuestion = () => {


  return (
    <div className="home">
    <InstructorSidebar />
    <div className="homeContainer">
      <Navbar />

      <div className="widgets">
        <Addquestion/>
        
         
        </div>
        
    </div>
    </div>
  );
};


export default NewQuestion;
