//import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Login from './page/Login';
import Dashboard from './page/Dashboard/Dashboard';
import ApplyRequestForm from './page/ApplyRequestForm';
import LeaveAdministrationForm from './components/LeaveAdmistrationForm';
import EmployeeRegistrationForm from './components/EmployeeRegistrationForm';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import Sidebar from './components/SideBar';
import EmployeeRegistration from './components/EmployeeRegistration';
import Logout from './components/Logout';
import LeaveAdministration from './components/LeaveAdministration';
import LeaveForm from './components/LeaveForm';
import Notification from './components/Notification';
import Feedback from './components/Feedback';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path= 'Dashboard' element={<Dashboard/>}></Route>
        <Route path= 'apply' element={<ApplyRequestForm/>}></Route>
        <Route path= 'LeaveAdministrationForm' element={<LeaveAdministrationForm/>}></Route>
        <Route path= 'EmployeeRegistrationForm' element={<EmployeeRegistrationForm/>}></Route>
        <Route path= 'Navbar' element={<Navbar/>}></Route>
        <Route path= 'AdminDashboard' element={<AdminDashboard/>}></Route>
        <Route path= 'Sidebar' element={<Sidebar/>}></Route>
        <Route path= 'EmployeeRegistration' element={<EmployeeRegistration/>}></Route>
        <Route path= 'Logout' element={<Logout/>}></Route>
        <Route path= 'LeaveAdministartion' element={<LeaveAdministration/>}></Route>
        <Route path= 'LeaveForm' element={<LeaveForm/>}></Route>
        <Route path= 'Notification' element={<Notification/>}></Route>
        <Route path= 'Feedback' element={<Feedback/>}></Route>
        <Route path= 'EmployeeList' element={<EmployeeList/>}></Route>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




