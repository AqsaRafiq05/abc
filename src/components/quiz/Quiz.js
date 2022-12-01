import "./quiz.scss"
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Quizlist from "../quizlist/Quizlist";
 const Quiz= () => {
    return (
        <div className= "questionPool">
       
      <div className="top">
    <span className="heading">Quizzes</span>
               </div>
              <div><Link to="/createquiz">
      <button type="button" className="btn btn-info">Create New Quiz</button>
      </Link>
      </div> 
      <div>
        <Quizlist/>
      </div>
  
      
        </div>


    )
 }
 export default Quiz;