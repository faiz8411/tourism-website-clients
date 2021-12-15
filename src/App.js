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
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="addService" element={<AddService />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
