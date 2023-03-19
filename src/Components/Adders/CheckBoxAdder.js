import React from "react";


const CheckBoxAdder = (props) =>{
  const onDragEnd = () =>{
    props.onDragEnd(2)
  }
  return(
    <div>
      <button style={{width:'100px',height:'50px'}} onClick={onDragEnd} >Check Box</button>
    </div>
  )
}

export default CheckBoxAdder;