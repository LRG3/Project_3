import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
      username: [],
      password: "",
  };

  componentDidMount() {
      console.log("mounted");
  }

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      });
  };

SignUp() {

}

render() {
return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Sign Up Page</h1>
              </Jumbotron>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <Input
                value={this.state.firstname}
                onChange={this.handleInputChange}
                name="firstname"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastname}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Last Name"
              />
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City"
              />
              <Input
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="State"
              />
              <Input
                value={this.state.age}
                onChange={this.handleInputChange}
                name="age"
                placeholder="Age"
              />
              <Input
                value={this.state.gender}
                onChange={this.handleInputChange}
                name="gender"
                placeholder="Gender"
              />
              <Input
                value={this.state.occupation}
                onChange={this.handleInputChange}
                name="occupation"
                placeholder="Occupation"
              />
              <Input
                value={this.state.facebook}
                onChange={this.handleInputChange}
                name="facebook"
                placeholder="Facebook"
              />
              <Input
                value={this.state.twitter}
                onChange={this.handleInputChange}
                name="twitter"
                placeholder="Twitter"
              />
                <Input
                value={this.state.instagram}
                onChange={this.handleInputChange}
                name="instagram"
                placeholder="Instagram"
              />
                <Input
                value={this.state.snapchat}
                onChange={this.handleInputChange}
                name="snapchat"
                placeholder="Snapchat"
              />
                <Input
                value={this.state.youtube}
                onChange={this.handleInputChange}
                name="youtube"
                placeholder="Youtube"
              />
            <FormBtn
              disabled={!(this.state.username && this.state.password)}
              onClick={this.signIn}>
            </FormBtn>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
          <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
          );
      }

    };
  
export default SignUp;