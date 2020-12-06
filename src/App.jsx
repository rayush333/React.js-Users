import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"; 
import AddUser from "./components/pages/adduser";
import EditUser from "./components/pages/edituser";
import DeleteUser from "./components/pages/deleteuser";
import View from "./components/pages/View";
function App()
{
    return (<Router><div>
    <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/adduser" component={AddUser} />
            <Route exact path="/edit/:id" component={EditUser} />
            <Route exact path="/delete/:id" component={DeleteUser} />
            <Route exact path="/users/:id" component={View} />
            <Route component={NotFound} />
        </Switch>
    </div></Router>);
}
export default App;