
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import AddService from './Pages/AddService/AddService';



function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Router>
              <Header></Header>
              <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <PrivateRoute path="/order">
                        <MyOrder></MyOrder> 
                  </PrivateRoute>
                  <PrivateRoute path="/manage">
                        <ManageOrder></ManageOrder>
                  </PrivateRoute>
                  <PrivateRoute path="/service">
                        <AddService></AddService>
                  </PrivateRoute>
                  <PrivateRoute path="/purchase/:purchaseId">
                      <Purchase></Purchase>
                  </PrivateRoute>
                  <Route path="/login">
                      <Login></Login>
                  </Route>
                  <Route path="/register">
                      <Register></Register>
                  </Route>
                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
              </Switch>
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
