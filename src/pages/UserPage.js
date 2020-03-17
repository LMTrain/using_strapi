import React, { Component } from "react";
import { Button, Row, Col } from 'reactstrap';
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class UserPage extends Component {
    state = {
        redirect: false        
    }


    // homePage = () => {
    //     this.setState({redirect: true})
    //     if (this.state.redirect === true) {        
    //         return <Redirect to='/Home' />
    //       }    
    // }
  render() {
      
   return (
       <div>
     
           <Row>              
           <Col size="md-10">
               <div><b> Welcome Guys</b></div>
           </Col>
           <Col size="md-2">
               <div className="lineitems">            
                   <span><Button type="submit" color="success" size="sm" onClick={() => console.log("THIS IS SETTINGS")}>Settings</Button></span>
                   <Button type="submit" color="success" size="sm" onClick={() => console.log("THIS IS TODAYS DEAL")}>Todays Deal</Button>
                   <Button  color="success" size="sm"><Link to="/Home" className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}>Sign Out</Link></Button>
        
               </div>        
           </Col>
           </Row>
       
       </div>
   );
 }
}


export default UserPage;




