import React from "react";

const LogInAdder = (props) => {
  const onDragEnd = () =>{
    props.onDragEnd(5);
  }
  return(
    <div>
      <button style={{width:'100px',height:'50px'}} onClick={onDragEnd}>Log In Comp.</button>
    </div>
  )
}

export default LogInAdder;