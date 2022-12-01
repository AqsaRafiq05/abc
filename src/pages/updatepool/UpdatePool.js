
import InstructorSidebar from "../../components/instructorSidebar/InstructorSidebar";
import EditPool from "../../components/editPool/EditPool";
import Navbar from "../../components/NavBar/Navbar";


const UpdatePool = () => {


  return (
    <div className="home">
    <InstructorSidebar />
    <div className="homeContainer">
      <Navbar />

      <div className="widgets">
        <EditPool/>
        
         
        </div>
        
    </div>
    </div>
  );
};


export default UpdatePool;
