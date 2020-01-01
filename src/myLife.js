import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';



import resumeData from './resumeData';
import Navigation from "./components/Navigation";
import Cards from "./components/MyLifeCards";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Card from "react-bootstrap/Card";


class MyLife extends Component {
    render() {
        return (


            <div className="MyLife">



                <Navigation resumeData={resumeData}/>
                <Cards resumeData={resumeData}/>

            </div>


        );
    }
}

export default MyLife
