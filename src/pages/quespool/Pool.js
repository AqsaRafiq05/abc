
import InstructorSidebar from "../../components/instructorSidebar/InstructorSidebar"
import Navbar from "../../components/NavBar/Navbar"
import QuestionPool from "../../components/questionpool/QuestionPool"

const Pool = () => {
  return (
    <div className="list">
      <InstructorSidebar/>
      <div className="listContainer">
        <Navbar/>
       
        <QuestionPool/>
      </div>
    </div>
  )
}

export default Pool;