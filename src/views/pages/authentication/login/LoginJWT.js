import React from "react"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import { Mail, Lock} from "react-feather"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"

class LoginJWT extends React.Component {
  constructor(props) {
   
    
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
 }
  state = {
    email: "",
    password: "",
    remember: false
  }
  async handleLogin(e) {
    window.localStorage.clear(); //clear all localstorage
    window.localStorage.removeItem("user_data"); //remove one item
    window.localStorage.removeItem('user_title');
    let login_data = this.state;  
    e.preventDefault()
    const base_url = "http://localhost:3080/api/user";
     const url =  base_url+"/login";
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      "userLogin": {
                       "email":login_data.email,  
                       "password":login_data.password 
                      }
                    })
                    };
                const user_response = await fetch(url, requestOptions);
                const user_data = await user_response.json();
                
                if(user_data.status === 'Ok')
                {
                  localStorage.setItem('user_data', JSON.stringify(user_data.userData));
                  if(JSON.parse(localStorage.getItem('user_data')).length === 1) 
                  {
                    localStorage.setItem('user_title', 'Profile');
                  }
                  else
                  {
                    localStorage.setItem('user_title', 'User Details');
                  }
                  
                alert("Successfully login");  
                history.push('/Dashboard');
                }
                else
                {
                  alert("Incorrect Username or Password!")
                }
     
      
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form action="/" onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>User Name</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <div className="d-flex justify-content-between">
              
              <Button.Ripple color="primary" type="submit">
                Login
              </Button.Ripple>
            </div>
          </Form>
        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT)
