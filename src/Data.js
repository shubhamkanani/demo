import React from 'react';
import './App.css';
import {connect} from 'react-redux'
function Data(props) {
  return (
    <div className="appcontainer">
        {console.log(props.state)}
        <h2>Name :{props.state.name}</h2>
        <h2>emailID :{props.state.emailId}</h2>
        <h2>password :{props.state.password}</h2>
    </div>
  );
}
const mapStateToProps=(state)=>{
    return{
        state
    }
}
export default connect(mapStateToProps,null)(Data);
