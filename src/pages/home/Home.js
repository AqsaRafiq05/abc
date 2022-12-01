import Sidebar from "../../components/SideBar/Sidebar";
import Navbar from "../../components/NavBar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";

import Feature from "../../components/feature/Feature";
const Home = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />

      <div className="widgets">
          <Widget type="candidate" />
          <Widget type="instructor" />
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