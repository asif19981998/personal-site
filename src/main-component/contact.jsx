import React, { Component } from 'react';
import "../main-css/contact.css"
import {TextField,Button} from '@material-ui/core';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contact_body">
            <div className="contact_body_element">
            <h3 className="page-header">Let's Talk</h3>
            <div className="card project-card" >
                <form autoComplete="off">
                
                <div className="row">
                    <div className="col-12 col-md-6">
                    <TextField required id="firstName" label="FirstName"  />
                    </div>
                    <div className="col-12 col-md-6">
                    <TextField required id="lastName" label="LastName"  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                    <TextField required id="email" label="Email" />
                    </div>
                    <div className="col-12 col-md-6">
                    <TextField required id="subject" label="Subject"  />
                    </div>
                
                </div>
                
                <div className="row">
                <div className="col-12 col-md-6 ">
                <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                     />
                        </div>
                    <div className="col-12 col-md-6 send-button">
                                <Button
                    variant="contained"
                    color="primary"
                    
                 >
                    Send
      </Button>
                    </div>
                
                </div>
            
                   </form>    
                        </div>
                    </div>
           
               </div>
       

     

         );
    }
}
 
export default Contact;