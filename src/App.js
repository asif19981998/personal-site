
import './App.css';
import Home from './main-component/home';
import Navbar from './sub-component/nav-bar';

import Resume from './main-component/resume';
import Projects from './main-component/projects';
import Contact from './main-component/contact';
import { Route, Switch } from 'react-router';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <React.Fragment>
      <div className="navbar">
        
        <Navbar></Navbar>
      </div> 
        
     
     
    
    <body>  
      <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/resume" component={Resume}></Route>
      <Route path="/projects" component={Projects}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/" component={Home}></Route>
      </Switch>
      
    </body>
    
    <footer className="footer" >
      <div style={{paddingLeft:"2%"}}>
        <div className="row">
          
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-4 col-md-4">
              <p>Call<br></br>
            01706634346
            </p>
              </div>
              {/* <div className="col-4 col-md-4">
              <p>Gmail<br></br>
              rakibulasif1998@gmail.com
            </p>
              </div> */}
              <div className="col-4 col-md-4">
              <p>Follow<br></br>
            <FontAwesomeIcon icon={faCertificate}/>
            <FontAwesomeIcon icon={'twitter'}/>
            <FontAwesomeIcon icon={'linkedin'}/>
            <FontAwesomeIcon icon={'instagram'}/>
            
            </p>
              </div>
            
           
            
            </div>
          </div>
          <div className="col-12 col-md-6" >
            <p>Copyright @2021 By S.M Rakibul Huda</p>
          </div>
       
        </div>
      </div>
    </footer>
   
    
    </React.Fragment>
    
    
   );
}

export default App;
