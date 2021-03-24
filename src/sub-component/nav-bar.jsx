import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

               
                <div className="col-6">
                  <div className="row">
                     <p className="author-name">
                         S.M Rakibul Huda
                     </p>
                     <p>/</p>
                     <p>Software Engineer</p>
                  </div>
                       
               </div>
               <div className="col-6">
               <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      
    </ul>
  </div>
               
               
               </div>
               
                
            </nav>
            );
    }
}
 
export default Navbar;