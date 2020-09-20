import React, { Component } from "react";
import classes from "./SignupForm.module.css";
import { Link } from "react-router-dom";
import googleLogo from "../../../google.svg";
import { Button, Form, Col } from "react-bootstrap";

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.firstName = React.createRef()
        this.lastName = React.createRef()
        this.email = React.createRef()
        this.password =React.createRef()
        this.confirm_password = React.createRef()
        this.accept_policy = React.createRef()
    }

  onSignupHandler = (event) => {
    event.preventDefault();
    console.log(this.firstName.current.value);
  };

  render() {
    return (
      <div className={classes.Container}>
        <p className="title">Sign up</p>
        <Link to="/" onClick={this.googleLogin} className={classes.Button}>
          <i>
            <img src={googleLogo} alt="logo" style={{ width: "20px" }} />
          </i>
          &nbsp;&nbsp;Signup with Google
        </Link>

        <div className={classes.Or}>
          <hr className={classes.Hr} /> or <hr className={classes.Hr} />
        </div>

        <Form onSubmit={this.onSignupHandler}>
          <Form.Row className={classes.Mb}>
            <Col>
              <Form.Control placeholder="First name" required ref={this.firstName} />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" required ref={this.lastName}/>
            </Col>
          </Form.Row>
         
          <Form.Row className={classes.Mb}>
              <Col>
                  <Form.Control type='email' placeholder='Email Address' required ref={this.email} />
              </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
              <Col>
                  <Form.Control type='password' required placeholder='Password'ref={this.password} />
              </Col>
          </Form.Row >

          <Form.Row className={classes.Mb}>
              <Col>
                  <Form.Control type='password' required placeholder='Confirm Password'ref={this.confirm_password} />
              </Col>
          </Form.Row>

          <Form.Row className={classes.Mb}>
              <Col>
                  <Form.Check type='checkbox' required label="I agree to the Terms and Privacy Policy" ref={this.accept_policy} />
              </Col>
          </Form.Row>

          <Button
              type="submit"
              variant="primary"
            >
              Sign up
            </Button>
        </Form> 
        </div>
    );
  }
}

export default SignUpForm;
