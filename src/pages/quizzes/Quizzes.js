
import InstructorSidebar from "../../components/instructorSidebar/InstructorSidebar";
import Navbar from "../../components/NavBar/Navbar";
import Quiz from "../../components/quiz/Quiz";

const Quizzes = () => {
  return (
    <div className="list">
      <InstructorSidebar/>
      <div className="listContainer">
        <Navbar/>
       
        <Quiz/>
      </div>
    </div>
  )
}

export default Quizzes;