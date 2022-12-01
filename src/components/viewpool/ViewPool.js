import "./view.scss"
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Subpools from "../subpools/Subpools";
 const ViewPool = () => {
    return (
        <div className= "questionPool">
       
      <div className="top">
    <span className="heading">Question Pool</span>
               </div>
              <div><Link to="/addquestion">
      <button type="button" className="btn btn-info">Add Question</button>
      </Link>
      
      </div> 
      <div>
        <Subpools/>
      </div>
  
      
        </div>


    )
 }
 export default ViewPool;