import React,{useState} from 'react';
import '../App.css';
import {BrowserRouter as Router,Route,Switch,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

function Register(props) {
  const history = useHistory();
  const [inputs,setInputs] = useState({});
  const onChangeInput = (event) =>{
    
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  const handleSubmit=(event) => {
    let path = `/data`;
    event.preventDefault();
    console.log(inputs);
    props.data(inputs);
    history.push(path);
  }
  const routeRegister = () =>{
    let path = `/`;
    history.push(path);
  }
  return (
    <div className="appcontainer">
    <Router>
        <h2>Register</h2><br/>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label for="exampleInputname">name</label>
            <input type="text" className="form-control" name='name' aria-describedby="emailHelp" placeholder="Enter name" onChange={onChangeInput}/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name='emailId' aria-describedby="emailHelp" placeholder="Enter email" onChange={onChangeInput}/>
            <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name='password' placeholder="Password" onChange={onChangeInput}/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword2">Conform Password</label>
            <input type="password" className="form-control" name='cpassword' placeholder="Password" onChange={onChangeInput}/>
          </div>
          <button style={{float:"right"}} type="submit" className="btn btn-primary">Submit</button><br/><br/>
      </form><br/>
      <button style={{float:"right"}} className="btn btn-primary" onClick={routeRegister}>Login</button><br/><br/>
      </Router>
    </div>
  );
}
const mapDispatchToProps =(dispatch)=>{
  return{
    data:(inputs)=>{dispatch({type:"data",payload:inputs})}
  }
}
export default connect(null,mapDispatchToProps)(Register);
