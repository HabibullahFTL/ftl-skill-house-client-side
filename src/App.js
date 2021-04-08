import './App.css';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllCourses from './components/AllCourses/AllCourses';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn';
import { createContext, useState } from 'react';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Manage from './components/Manage/Manage';
import CheckOut from './components/CheckOut/CheckOut';
import AddCourse from './components/AddCourse/AddCourse';

export const UserContext = createContext();

function App() {
  const [loginUserDetails, setLoginUserDetails] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: '',
    uid: null,
    errMessage: ''
  });
  return (
    <UserContext.Provider value={[loginUserDetails, setLoginUserDetails]}>
      <div>
        <Router>
          <Switch>
            <PrivateRoute path="/admin-tools">
              <Manage></Manage>
            </PrivateRoute>

            <PrivateRoute path="/add-course">
              <AddCourse></AddCourse>
            </PrivateRoute>

            <PrivateRoute path="/check-out/:_id">
              <Header></Header>
              <CheckOut></CheckOut>
              <Footer></Footer>
            </PrivateRoute>

            <PrivateRoute path="/orders">
              <Header></Header>
              <Orders></Orders>
              <Footer></Footer>
            </PrivateRoute>

            <Route path="/login">
              <Header></Header>
              <LogIn></LogIn>
              <Footer></Footer>
            </Route>

            <Route exact path="/">
              <Header></Header>
              <SearchBox></SearchBox>
              <AllCourses></AllCourses>
              <Footer></Footer>
            </Route>

            <Route path="*">
              <Header></Header>
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
