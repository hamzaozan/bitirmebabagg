import React from "react";
import FormFieldOpener from "./FormFieldOpener";

const LoginPageReturner = (props) => {
  const onClick = () => {
    props.onClick(2);
  }
  return(
    <div style={{width:'350px', margin:'16px 8px 0px'}}>
      <FormFieldOpener/>
      <button style={{margin:'0px 150px 16px'}} onClick={onClick}>select</button>
    </div>
  )
}

export default LoginPageReturner;