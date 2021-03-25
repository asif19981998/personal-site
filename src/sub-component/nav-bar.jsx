import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          
            
            <nav>
              
              <input type="checkbox" id="check"/>
              <label htmlFor="check" className="checkbtn">
              <FontAwesomeIcon icon={faBars} />
              </label>
              <label >
              <div >
                  <div className="row author-name">
                     <p className="name">
                         S.M Rakibul Huda/
                     </p>
                     
                     <p className="profession">Software Engineer</p>
                  </div>
                       
               </div>
              </label>
              <ul>
                
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
              </ul>
            </nav>
            
            
           
         
            );
    }
}
 
export default Navbar;