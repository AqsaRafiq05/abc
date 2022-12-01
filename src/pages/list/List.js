import "./list.scss"
import Sidebar from "../../components/SideBar/Sidebar"
import Navbar from "../../components/NavBar/Navbar"
import UserData from "../../components/userdata/UserData"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UserData/>
       
      </div>
    </div>
  )
}

export default List