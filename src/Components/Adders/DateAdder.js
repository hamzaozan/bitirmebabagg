import React from "react";

const DateAdder = (props) => {
  const onDragEnd = () =>{
    props.onDragEnd(4);
  }
  return(
    <div>
      <button style={{width:'100px',height:'50px'}} onClick={onDragEnd}>Date</button>
    </div>
  )
}

export default DateAdder;