import './App.css';
import Home from '../src/pages/Home/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddService from './pages/Home/AddService/AddService';
import Login from './pages/Home/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Service from './pages/Home/Service/Service';
import Details from './pages/Home/Details/Details';
import Navigation from './pages/Home/Navigation/Navigation';
import Registration from './pages/Home/Registration/Registration';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="addService" element={<AddService />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Registration />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/details/:serviceId" element={<Details />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
