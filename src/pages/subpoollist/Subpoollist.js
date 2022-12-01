
import InstructorSidebar from "../../components/instructorSidebar/InstructorSidebar"
import Navbar from "../../components/NavBar/Navbar"
import ViewPool from "../../components/viewpool/ViewPool"

const Subpoollist = () => {
  return (
    <div className="list">
      <InstructorSidebar/>
      <div className="listContainer">
        <Navbar/>
     
        <ViewPool/>
      </div>
     
     
     
      

    </div>
  )
}

export default Subpoollist;