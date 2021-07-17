import React, { Component } from 'react';
import "../main-css/project.css"
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="project_body">
               <div className="project_body_element">
               <h3 className="page-header">Project</h3>
                
             
                    <div className="card project-card" >
                        <div className="row">
                        <div className="col-12 col-md-6">
                        <p  className="project-title"><b>Educational Institution Management System</b></p>
                        <p>  A solution for Educational Institution Management System. This is my company project where i worked on.  </p>
                        </div>
                        <div className="col-12 col-md-6 prject-technology">
                        I made it using C#, ASP.NET Core Api, Entity Framework, Angular, MSSQL

                        </div>
                        </div>
                    </div>
                    <div className="card project-card" >
                        <div className="row">
                        <div className="col-12 col-md-6">
                        <p className="project-title"><b>Stock Management System</b></p>
                        <p >  A solution for Stock Mangement System. I work with 3 members in this project.  </p>
                        </div>
                        <div className="col-12 col-md-6 prject-technology">
                        This is the final project of BITM training. Customer Entry, Product Entry, Sales,
                         Purchase, Inventory, Report are the features of this project.
                          I worked with 2 members in this project. 
                        </div>
                        </div>
                    </div>
                    <div className="card project-card" >
                        <div className="row">
                        <div className="col-12 col-md-6">
                        <p  className="project-title"><b>AmarDaktar</b></p>
                        <p>  A solution for Health Service. This is my own build project.  </p>
                        </div>
                        <div className="col-12 col-md-6 prject-technology">
                         I am Using ReactJs,Aspnet Core Api,MsSql as Database .
                        </div>
                        </div>
                    </div>
       
       
               
               </div>
           
            </div>

         );
    }
}
 
export default Projects;