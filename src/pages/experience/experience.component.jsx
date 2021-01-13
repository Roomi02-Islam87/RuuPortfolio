import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/sp.png";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
    return (
        <div id='experience'>
            <h1 className="pt-3 text-center font-details-b pb-3">INTERNSHIP</h1>
            <Jumbotron className="jumbostyle">
                <Container className="">
                    <Tilt options={{max:25}}>
                    <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="sparrow Softech pvt ltd logo" />
                    </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Web Developement</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> HTML,Bootstrap,PHP,MYSQLI,Javascript
                    <br />
                    <strong>Duration:</strong> 23rd September - 20th October
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Exposes</strong>me to real-world experience </li>
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      
                      <li><strong>Gain</strong>the practical experience & it teaches me time-management . </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the business requirements.</li>
                      <li>It encourages personal development, but also a greater understanding of self.</li>
                      <li>And Most Important I got guidaince with our Senior Employee</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
                </Card.Body>

            </Card>
        </Tilt>
    </Container>
</Jumbotron>

            
        </div>
    )
}

export default Experience
