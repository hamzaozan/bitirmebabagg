import {Checkbox, Col, Row, Space} from 'antd';
import Card from './UI/Card'
import React,{useState} from "react";
import TextAdder from "./Adders/TextAdder";
import CheckBoxAdder from "./Adders/CheckBoxAdder";
import ButtonAdder from "./Adders/ButtonAdder";
import DateAdder from "./Adders/DateAdder";

const LeftMenu = (props) => {
  const onClick=(a)=>{
    props.onClick(a)
  }
  return(
    <div style={{margin:'16px 0px 0px'}}>
      <Card>
        <Space direction="vertical" size="small" style={{margin:'8px 0px 8px'}}>
          <Row>
            <Space direction="horizontal" size="middle">
              <Col span={1}/>
              <TextAdder onDragEnd={onClick}/>
              <CheckBoxAdder onDragEnd={onClick}/>
              <ButtonAdder onDragEnd={onClick}/>
            </Space>
          </Row>
          <Row>
            <Col span={1}/>
            <Col span={6}>
              <DateAdder onDragEnd={onClick}/>
            </Col>
          </Row>
        </Space>
      </Card>
    </div>
  )
}

export default LeftMenu;
