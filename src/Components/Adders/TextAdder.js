import React from "react";

const TextAdder = (props) => {
  const onDragEnd = () =>{
    props.onDragEnd(1);
  }
  return(
    <div>
      <button onClick={onDragEnd}>Text</button>
    </div>
  )
}

export default TextAdder;