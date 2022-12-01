import "./questionPool.scss"
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import NewPool from "../newpool/NewPool";
 const QuestionPool = () => {
    return (
        <div className= "questionPool">
       
      <div className="top">
    <span className="heading">Question Pool</span>
               </div>
              <div><Link to="/addnewpool">
      <button type="button" className="btn btn-info">Add New Pool</button>
      </Link>
      
      </div> 
      <div>
        <NewPool/>
      </div>
  
      
        </div>


    )
 }
 export default QuestionPool;