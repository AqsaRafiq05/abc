
import InstructorSidebar from "../../components/instructorSidebar/InstructorSidebar";
import SubPool from "../../components/subpool/SubPool"
import Navbar from "../../components/NavBar/Navbar";


const NewSubPool = () => {


  return (
    <div className="home">
    <InstructorSidebar />
    <div className="homeContainer">
      <Navbar />

      <div className="widgets">
        <SubPool/>
        
         
        </div>
        
    </div>
    </div>
  );
};


export default NewSubPool;