import {Card, Col, Row, Space} from 'antd';
import React from "react";
import TextAdder from "./Adders/TextAdder";
import CheckBoxAdder from "./Adders/CheckBoxAdder";
import ButtonAdder from "./Adders/ButtonAdder";
import DateAdder from "./Adders/DateAdder";
import InputAdder from "./Adders/InputAdder";

const LeftMenu = (props) => {
  const onClick=(a)=>{
    props.onClick(a)
  }
  return(
    <div style={{margin:'0px 0px 0px'}}>
      <Card>
        <Space direction="vertical" size="small" style={{margin:'0px 0px 8px'}}>
          <Row>
            <Space direction="horizontal" size="small">
              <Col span={1}/>
              <TextAdder onDragEnd={onClick}/>
              <CheckBoxAdder onDragEnd={onClick}/>
              <ButtonAdder onDragEnd={onClick}/>
            </Space>
          </Row>
          <Row>
            <Space direction="horizontal" size="small">
            <Col span={1}/>
              <DateAdder onDragEnd={onClick}/>
              <InputAdder onDragEnd={onClick}/>
            </Space>
          </Row>
        </Space>
      </Card>
    </div>
  )
}

export default LeftMenu;
