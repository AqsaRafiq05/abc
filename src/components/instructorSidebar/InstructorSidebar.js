import "./instructorsidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";


import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


const InstructorSidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
    
          <span className="logo">Career Span</span>
       
      </div>
      <hr />
      <div className="center">
        <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <Link to="/questionnaire" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Creat Quiz</span>
            </li>
          </Link>
          <Link to="/questionpool" style={{ textDecoration: "none" }}>
            <li>
            <PersonOutlineIcon className="icon" />
              <span>Question Pool</span>
            </li>
          </Link>
        
       

         
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
         
         <Link to="/logout" style={{ textDecoration: "none" }}>
          <li>
            <span>Logout</span>
          </li>
          </Link>
        
        </ul>
      </div>
  
    </div>
  );
};

export default InstructorSidebar;