import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import "../main-css/nav-bar.css";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.checkInput = React.createRef();
    }

    handleCheckBok=()=>{
        this.checkInput.current.checked = false;
    }
    render() { 
        return ( 
          
            
            <nav >
            <div className="row">
             <div className="col col-md-6">
             
              <label >
              <div >
                  <div className="author-name">
                     <div className="col-12">
                     <p className="name">
                         S.M Rakibul Huda<span className="profession">/Software Engineer</span>
                     </p>
                     
                    
                     </div>
                  </div>
                       
               </div>
              </label>
             </div>
             <div className="col-4 col-md-6">
             <input type="checkbox" id="check" ref={this.checkInput}/>
              <label htmlFor="check" className="checkbtn">
              <FontAwesomeIcon icon={faBars} />
              </label>
             <ul onClick={this.handleCheckBok} >
             
                
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
              </ul>
             </div>

             </div>
              
             
            </nav>
            
            
           
         
            );
    }
}
 
export default Navbar;