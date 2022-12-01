import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import DomainVerificationIcon from '@mui/icons-material/DomainVerification';

const Widget = ({ type }) => {
  let data;

  //temporary
  const num = 0;

  switch (type) {
    case "candidate":
      data = {
        title: "Candidates",
         isCount: false,
        link: "See all Candidates",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "instructor":
      data = {
        title: "Instructors",
        isCount: false,
        link: "View all Instructors",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "reffered-domain":
      data = {
        title: "Reffered Domain",
        isCount: false,
        link: "View List",
        icon: (
          <DomainVerificationIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
 
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isCount} {num}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
       
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;