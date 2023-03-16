import React from "react";
import LogInPage from "./LogInPage";

const LoginPageReturner = (props) => {
  const onClick = () => {
    props.onClick(1);
  }
  return(
    <div style={{width:'350px', margin:'16px 8px 0px'}}>
      <LogInPage/>
      <button style={{margin:'0px 150px 16px'}} onClick={onClick}>select</button>
    </div>
  )
}

export default LoginPageReturner;