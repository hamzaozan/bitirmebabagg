import React from "react";

const DateAdder = (props) => {
  const onDragEnd = () =>{
    props.onDragEnd(4);
  }
  return(
    <div>
      <button onClick={onDragEnd}>Date</button>
    </div>
  )
}

export default DateAdder;