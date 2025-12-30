
import { Routes , Route} from 'react-router-dom';
import './App.css';
import Header from "./pages/header/Header";
import UserInput from "./pages/employee/UserInput"
import Nomatch from "./pages/nomatch/Nomatch";
import Dashboard from "./pages/dashboard/Dashboard";
import UpdateUser from "./pages/updateUser/UpdateUser"
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path = '/' element= {<Dashboard/>} />
      <Route path = '/employee' element= {<UserInput/>} />
      <Route path = '/employee/:id' element= {<UpdateUser/>} />
      <Route path = '*' element= {<Nomatch/>} />
      
            
        </Routes>
    </>
  );
}

export default App;
