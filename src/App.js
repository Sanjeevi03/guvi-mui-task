import { BrowserRouter, Route,Routes } from "react-router-dom";
import "./App.css";
import AdminLogin from "./Components/AdminLogin";
import Dashboard from "./Components/Dashboard";
import { AboutUs, Branches, Contact } from "./Components/Footer";
import StudentLogin from "./Components/StudentLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/branch' element={<Branches/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
