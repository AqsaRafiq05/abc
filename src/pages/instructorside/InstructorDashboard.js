import InstructorSidebar from "../../components/instructorSidebar/InstructorSidebar";
import Navbar from "../../components/NavBar/Navbar";
import "./instructorside.scss";
import Widget from "../../components/widget/Widget";

import Feature from "../../components/feature/Feature";
const Home = () => {
  return (
    <div className="home">
    <InstructorSidebar />
    <div className="homeContainer">
      <Navbar />

      <div className="widgets">
          <Widget type="candidate" />
        
          <Widget type="reffered-domain" />
        
         
        </div>
        <div className="charts">
          <Feature/>
        
        </div>
    </div>
    </div>
  );
};

export default Home;