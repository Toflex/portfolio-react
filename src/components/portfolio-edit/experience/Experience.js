import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import classes from "../personal_info/personalInfo.module.css";
import style from "../profile-edit.module.css";


const submitHandler = (evt) =>{
  evt.preventDefault()
  console.log("evt");
}

const Experience = () => {
  return (
    <div className={style.SubSection}>
      <p className='title'>Experience</p>
      <hr />
      <Form onSubmit={submitHandler}>
        <Row>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Organization</Form.Label>
              <Form.Control placeholder='Monetary Assurance'/>
            </Form.Group>
          </Col>

          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control placeholder="Head of Sales" />
            </Form.Group>
          </Col>
        
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>Start Year</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={classes.Mb_5}>
            <Form.Group>
              <Form.Label>End Year</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Col>
        </Row>
          <Form.Group>
            <Form.Label>Experience Summary</Form.Label>
          <Form.Control  as="textarea" rows="2" cols='3' />
          </Form.Group>
      </Form>
      <Button style={{ float: "right" }} type="submit" className={classes.Mb_5}>
        Save
      </Button>
    </div>
  );
};

export default Experience;
