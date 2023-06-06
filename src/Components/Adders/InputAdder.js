import React from "react";

const TextAdder = (props) => {
  const onDragEnd = () =>{
    props.onDragEnd(5);
  }
  return(
    <div>
      <button style={{width:'100px',height:'50px'}} onClick={onDragEnd}>Input</button>
    </div>
  )
}

export default TextAdder;