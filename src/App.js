import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from './api'
function App(props) {
  const history = useHistory();
  const [inputs,setInputs] = useState({});
  const onChangeInput = (event) =>{
    
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  const handleSubmit=(event) => {
    login(inputs.emailId,inputs.password)
    .then(res =>{
      if(!res){
        alert('plz register')
        history.push("/register")
      }
      else{
        history.push('/loginsuccess')
      }
     })
     .catch(err =>{
      alert(err);
    })
    event.preventDefault();
    console.log(inputs);
  }
  const routeRegister=()=>{
    let path =`/register`;
      history.push(path);
}
  return (
    <div className="appcontainer">
    <Router>
        <h2>Login</h2><br/>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name='emailId' aria-describedby="emailHelp" placeholder="Enter email" onChange={onChangeInput}/>
            <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name='password' placeholder="Password" onChange={onChangeInput}/>
          </div>
          <button style={{float:"right"}} type="submit" className="btn btn-primary">Submit</button><br/><br/>
      </form><br/>
      <button style={{float:"right"}} className="btn btn-primary" onClick={routeRegister}>Register</button><br/><br/>
      </Router>
    </div>
  );
}

export default App;
