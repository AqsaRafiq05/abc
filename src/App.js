import React,{pages} from 'react';
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Instruct from "./pages/instructorPage/Instruct";
import Profile from "./pages/profile/Profile";
import Pool from "./pages/quespool/Pool";
import NewSubPool from "./pages/subPool/NewSubPool";
import AddNewPool from './pages/addnewpool/AddNewPool';
import UpdatePool from './pages/updatepool/UpdatePool';
import Quizzes from "./pages/quizzes/Quizzes";
import InstructorDashboard from "./pages/instructorside/InstructorDashboard";
import { userInputs } from "./formsource";
import NewQuiz from "./pages/createQuiz/NewQuiz";
import Subpoollist from "./pages/subpoollist/Subpoollist";
import NewQuestion from "./pages/newques/NewQuestion";

import {
BrowserRouter as Router,
Routes,
Route,
Link,

} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
  <Routes>
    <Route exact path="/" element={<Home/>}/> 
<Route  exact path="candidates" element={<List />} />
<Route  exact path="instructors" element={<Instruct />} />    
<Route exact path="profile" element={<Profile inputs={userInputs} title="Profile" />} />
<Route  exact path="instructorside" element={<InstructorDashboard/>} />
<Route  exact path="questionpool" element={<Pool />} />
<Route  exact path="addnewpool" element={<AddNewPool />} />
<Route  exact path="editpool/:id" element={<UpdatePool />} />
<Route  exact path="Subpool" element={<NewSubPool />} />
<Route  exact path="questionnaire" element={<Quizzes/>} />
<Route  exact path="createquiz" element={<NewQuiz/>} />
<Route  exact path="viewpool" element={<Subpoollist/>} />
<Route  exact path="addquestion" element={<NewQuestion/>} />



           

             
           
    
  
   </Routes>
   </div>
 

  
</Router>
  );
}

export default App;
