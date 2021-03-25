import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import authorImg from "../image/author.jpg"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="row">
            
                <div className="col-12 col-md-6 left-side">
                  <div className="author-detail">
                  <div class="card" >
  <img className="card-img-top" src={authorImg} alt="Card image"/>
  <div className="card-body">
    <h4  className="card-title"  >S.M Rakibul Huda</h4>
    <hr ></hr>
    <p>Software Engineer</p>
   
    
  </div>
  
</div>

                  </div>
                </div>
                
                
                
                <div className="col-12 col-md-6 right-side">
                    <h1>About Me</h1>
                    <div>
                       <NavLink to="/resume"><button className="btn btn-primary">Resume</button></NavLink> 
                        <NavLink to="/projects"><button className="btn btn-primary">Project</button></NavLink>
                    </div>
                    <p>I have always tried to learn new things and love to face challenges.
I am interested in web programming, e.g developing web apps. Artificial Intelligence(AI) based solution
is also fascinated me where I also working on that. 
As a full-stack developer try to update me with technologies and try to acquire more bits of knowledge.
I am a former Junior Software Engineer in AITS where I was working with Angular for one year.</p>
                </div>
            
           
           
        </div>
        
            );
    }
}
 
export default Home;