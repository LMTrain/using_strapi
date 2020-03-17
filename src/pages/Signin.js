import React from 'react';
import { Redirect } from "react-router-dom";
import '../App.css';
import Strapi from 'strapi-sdk-javascript/build/main';
import ToastMessage from '../components/ToastMessage';
import { Card, Button } from 'reactstrap';
const apiURL = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiURL);

class Signin extends React.Component {
  state = {
    username: '',        
    password: '',
    toast: false,
    toastMessage: '',
    redirect: false,
    loading: false
  }

//   handleChange = ({ event, value }) => {
//     console.log(event, value)
//     // event.persist();
//     this.setState({[event.target.name]: value});
// };

handleChange = event => {
  console.log(event)
  const name = event.target.name;
  const value = event.target.value;
  console.log(name)
  console.log(value)
  this.setState({
    [name]: value,
  });
};

handleSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;

    if (this.isFormEmpty(this.state)) {
        this.showToast("Fill in all fields");
        return;
    }
    
    //Sign up user
    try {
        this.setState({ loading: true});           
        const response = await strapi.login(username, password);
        this.setState({ loading: false, redirect: true,});
        console.log("THIS IS SIGN IN RESPONSE", response)
        // setToken(response.jwt);            
        // this.redirectUser('/');
    }catch (err) {
        this.setState({ loading: false});
        this.showToast(err.message);
    }
};

// redirectUser = path => this.props.history.push(path);

isFormEmpty = ({username, password}) => {
    return !username || !password;
};

showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: '' }), 5000);
}
  render() {
    const { toastMessage, toast, loading } = this.state;
    if (this.state.redirect === true) {        
        return <Redirect to='/UserPage' />
      }    
    return (
      <> 
       <div className="card card-body">    
        <Card>
          <form className="form-groups">
            <div className="form-group">
            <label htmlFor="username"></label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </div>                  
            {/* Password Input */}
            <div className="form-group">
            <label htmlFor="password"></label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <Button type="submit" onClick={this.handleSubmit} disabled={loading} color="success" size="sm" >Sign In</Button>
                  
                            
          </form> 
        </Card>
        </div>
        <ToastMessage show={toast} message={toastMessage}/>        
    </>        
    );
  }  
}


export default Signin;
