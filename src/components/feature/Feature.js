import "./feature.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Feature = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Students Attemped the Quetionnaire</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"10%"} strokeWidth={5} />
        </div>
        <p className="title">Questionnaires Attempted today</p>
        <p className="amount">5</p>
        
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              
              <div className="resultAmount">2</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
            
              <div className="resultAmount">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;