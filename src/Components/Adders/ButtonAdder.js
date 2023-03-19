import React from "react";

const ButtonAdder = (props) => {
  const onDragEnd = () =>{
    props.onDragEnd(3);
  }
  return(
    <div>
      <button style={{width:'100px',height:'50px'}} onClick={onDragEnd}>Button</button>
    </div>
  )
}

export default ButtonAdder;