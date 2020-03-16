import React from 'react';
import './App.css';
import Strapi from 'strapi-sdk-javascript/build/main';
const apiURL = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiURL);

class App extends React.Component {
  state = {
    username: '',        
    password: '',
    toast: false,
    toastMessage: '',
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
        this.setState({ loading: false});
        console.log("THIS IS SIGN IN RESPONSE", response)
        // setToken(response.jwt);            
        this.redirectUser('/');
    }catch (err) {
        this.setState({ loading: false});
        this.showToast(err.message);
    }
};

redirectUser = path => this.props.history.push(path);

isFormEmpty = ({username, password}) => {
    return !username || !password;
};

showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: '' }), 5000);
}
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src="https://lmtrain.github.io/lm-images/assets/images/bugatti_3.jpg" className="App-logo" alt="logo" />
            <p>
              My Page
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <div>        
            {/* Sign in Form */}
            <form style={{ display: 'inlineBlock', textAlign: 'center', maxWidth: 450, height: 210, }}
            onSubmit={this.handleSubmit}                    
            >
                {/* Sign in Form Heading */}
                <div style={{ marginBottom: 2,  display: "flex", direction: "column", alignItems: 'center'}}>

                  {/* Username Input */}
                  <input
                      id="username"
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={this.handleChange}
                  />                   
                  {/* Password Input */}
                  <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                  />
                  <button inline color="blue" type="submit" onClick={this.handleSubmit}>Sign In</button>
                  {/* disabled={loading}  */}
                </div>
               
               
            </form> 
      </div>
    </>        
    );
  }  
}


export default App;
