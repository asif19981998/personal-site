import logo from './logo.svg';
import './App.css';
import Home from './main-component/home';
import Navbar from './sub-component/nav-bar';

import Resume from './main-component/resume';
import Projects from './main-component/projects';
import Contact from './main-component/contact';
import { Route } from 'react-router';
function App() {
  return (
    <div className="body">
      <Navbar></Navbar>
      <Route path="/home" component={Home}></Route>
      <Route path="/resume" component={Resume}></Route>
      <Route path="/projects" component={Projects}></Route>
      <Route path="/contact" component={Contact}></Route>
    </div>
    
   );
}

export default App;
