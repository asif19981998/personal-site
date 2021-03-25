import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="row">
            
                <div className="col-12 col-md-6 left-side">Left</div>
                <div className="col-12 col-md-6">Right</div>
            
           
           
        </div>
        
            );
    }
}
 
export default Home;