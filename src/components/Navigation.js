import React, {Component} from 'react';
import resumeData from "../resumeData";
import News from "./news";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/es/FormControl";



export default class Navigation extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (


     //       <Navbar id="navigation" bg="primary" variant="dark">
       //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
         //       <Nav className="mr-auto">
          //          <Nav.Link href="#home">Home</Nav.Link>
            //        <Nav.Link href="#features">Features</Nav.Link>
              //      <Nav.Link href="#pricing">Pricing</Nav.Link>
            //    </Nav>
             //   <Form inline>
              //      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             //       <Button variant="outline-light">Search</Button>
           //     </Form>
           // </Navbar>



            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current"><a href="https://ishanrandika.herokuapp.com/#home">Home</a></li>
                    <li><a href="https://ishanrandika.herokuapp.com/#about">About</a></li>
                    <li><a href="https://ishanrandika.herokuapp.com/#resume">Resume</a></li>
                    <li><a href="https://ishanrandika.herokuapp.com/#portfolio">Works</a></li>
                    {/*<News resumeData={resumeData}/>*/}
                    <li><a href="https://ishanrandika.herokuapp.com/#testimonials">News</a></li>
                    <li><a href="https://ishanrandika.herokuapp.com/#contact">Contact</a></li>
                </ul>
            </nav>
        );
    }
}
