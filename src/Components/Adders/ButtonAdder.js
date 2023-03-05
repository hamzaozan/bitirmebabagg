import React from "react";

const ButtonAdder = (props) => {
  const onDragEnd = () =>{
    props.onDragEnd(3);
  }
  return(
    <div>
      <button onClick={onDragEnd}>Button</button>
    </div>
  )
}

export default ButtonAdder;