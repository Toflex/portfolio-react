import React from "react";
import Dashboard from "./container/dashboard/dashboard";
import { Route, Switch } from "react-router-dom";
import FAQs from "./components/pre-auth/FAQs";
import About from "./components/pre-auth/About";
import Contact from "./components/pre-auth/Contact";
import Features from "./components/pre-auth/Features";
import Home from "./components/pre-auth/Home";
import Login from "./components/authentication/LoginForm/LoginForm";
import Signup from "./components/authentication/SignUpForm/SignUpForm";
import NotFound from "./components/NotFound";
import ProfileEdit from "./components/portfolio-edit/profile-edit";
import PasswordReset from "./components/authentication/Password/PasswordReset";
import PasswordChange from "./components/authentication/Password/PasswordChange";
import Container from "./container/Container";
import Logout from "./components/authentication/Logout/Logout";
// import { useSelector, shallowEqual } from "react-redux";

const App = () => {
  // const authState = useSelector((state) => state.auth, shallowEqual);
  // console.log(authState.token);
  
  //Protected routes
  // let routes = (
  //   <Switch>
  //     <Route path="/profile/:username/edit" exact component={ProfileEdit} />
  //     <Route path="/contact" exact component={Contact} />
  //     <Route path="/logout" exact component={Logout} />
  //     <Route path="/profile/:username" exact component={Dashboard} />
  //     {/* <Route path="/" exact component={Dashboard} /> Lets keep a single url for the dashboard irrespective of the case. Just like Github */}
  //   </Switch>
  // );
  let routes = []

  if (true) {
    //unprotected routes
    routes = (
      <Switch style={{ paddingLeft: "0" }}>
        <Route path="/profile/:username/edit" exact component={ProfileEdit} />{" "}
        {/* Remove url when authentication is ready */}
        <Route path="/password/reset" exact component={PasswordReset} />
        <Route path="/password/change" exact component={PasswordChange} />
        {/* url pattern https://xportfolio.com/profile/user101 for dashboard*/}
        <Route path="/profile/:username" exact component={Dashboard} />
        <Route path="/faqs" exact component={FAQs} />
        <Route path="/features" exact component={Features} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }

  return <Container>{routes}</Container>;
};

export default App;
