import React from "react";

const TextAdder = (props) => {
  const onDragEnd = () =>{
    props.onDragEnd(1);
  }
  return(
    <div>
      <button style={{width:'100px',height:'50px'}} onClick={onDragEnd}>Text</button>
    </div>
  )
}

export default TextAdder;