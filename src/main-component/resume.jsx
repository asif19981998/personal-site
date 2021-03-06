import React, { Component } from 'react';
import school from "../image/school.jpg";
import clg from "../image/college.jpg";
import varsity from "../image/varsity.jpg";
import "../main-css/resume.css"
class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="resume_body">
               <div className="resume_body_element">
               <h3 className="page-header">Resume</h3>
                
                <div>
                    <h4>Experience</h4>
                    <div className="card resume-card" >
                        <div className="row">
                        <div className="col-12 col-md-6">
                        <p>April,2019 - June,2020</p>
                        <p>Junior Software Developer</p>

                        <p>Aits Idea Limited</p>

                       <p>Mohamadpur,Dhaka</p>
                        </div>
                        <hr></hr>
                        <div className="col-12 col-md-6 about-me">
                           I had worked there as Junior Software Engineer. My main accountability was 
                           bulit client site for a Educational Institution Management System. I aslo 
                           learn Server Site Api Design and Pattern .
                        </div>
                        </div>
                    </div>
                   
             


                </div>
                < div>
                    <h4>Education</h4>
                    <div className="card resume-card">
                        <div className="row">
                        <div className="col-6 col-md-6">
                        <p>Session: 2018-2021</p>
                        <p >Bsc in Computer Science And Engineering</p>

                        <p>Daffodil International University</p>

                        <p>Savar,Dhaka</p>
                        </div>
                        <div className="col-6 col-md-6">
                            <img className="resume-image" src={varsity}></img>
                        </div>
                       
                        </div>
                    </div> <div className="card resume-card">
                        <div className="row">
                        <div className="col-6 col-md-6">
                        <p>Session: 2015-2016</p>
                        <p>Higher Secondary School Certificate</p>

                        <p>Mojid Memorial City College</p>

                        <p>Khulna</p>
                        </div>
                        <div className="col-6 col-md-6">
                            <img className="resume-image" src={clg}></img>
                        </div>
                       
                        </div>
                    </div>
                    <div className="card resume-card">
                        <div className="row">
                        <div className="col-6 col-md-6">
                        <p>Session: 2013-2014</p>
                        <p>Secondary School Certificate</p>

                        <p>Lions School and College,Khulna</p>

                        <p>Khulna</p>
                        </div>
                        <div className="col-6 col-md-6">
                            <img className="resume-image" src={school}></img>
                        </div>
                       
                        </div>
                    </div>


                  
                </div>
               </div>
            </div>

         );
    }
}
 
export default Resume;