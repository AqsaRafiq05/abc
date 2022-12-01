
import InstructorSidebar from "../../components/instructorSidebar/InstructorSidebar";
import AddPool from "../../components/addpool/AddPool";
import Navbar from "../../components/NavBar/Navbar";


const AddNewPool = () => {


  return (
    <div className="home">
    <InstructorSidebar />
    <div className="homeContainer">
      <Navbar />

      <div className="widgets">
        <AddPool/>
        
         
        </div>
        
    </div>
    </div>
  );
};


export default AddNewPool;
