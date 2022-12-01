import "./instruct.scss"
import Sidebar from "../../components/SideBar/Sidebar"
import Navbar from "../../components/NavBar/Navbar"

import InstructorData from "../../components/instructordata/InstructorData"
const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
       
        <InstructorData/>
      </div>
    </div>
  )
}

export default List