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
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';
import Dashboared from './pages/Home/Dashboared/Dashboared';
import MyOrder from './pages/Home/MyOrder/MyOrder';
import Dashboard from './pages/Home/Dashboared/Dashboared';
import Peyment from './pages/Home/Petment/Peyment';
import ManageOrder from './pages/Home/ManegeOrder/ManageOrder';
import AllServiceManage from './pages/Home/Home/AllSericeManage/AllServiceManage';
import MakeAdmin from './pages/Home/MakeAdmin/MakeAdmin';
import Footer from './pages/Home/Home/Footer/Footer';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="addService" element={<AddService />}></Route>
            {/* <Route path="/appointment" element={<PrivateRoute>
              
            </PrivateRoute>}> */}

            <Route path="login" element={<Login />}></Route>
            {/* <Route path="dashboard" element={<PrivateRoute>
              <Dashboared />
            </PrivateRoute>} /> */}
            <Route path="dashboard" element={<PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>}>
              <Route path="/dashboard/order" element={<MyOrder />}></Route>
              <Route path="/dashboard/payment" element={<Peyment></Peyment>}></Route>
              <Route path="/dashboard/manageOrder" element={<ManageOrder></ManageOrder>}></Route>
              <Route path="/dashboard/AllServiceManage" element={<AllServiceManage />}></Route>
              <Route path="/dashboard/MakeAdmin" element={<MakeAdmin />}></Route>
            </Route>
            <Route path="/details/:serviceId" element={<PrivateRoute>
              <Details></Details>
            </PrivateRoute>} />
            <Route path="register" element={<Registration />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/order" element={<MyOrder />}></Route>
            {/* <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}> */}


            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
