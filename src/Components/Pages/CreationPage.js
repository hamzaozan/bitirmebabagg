import {Button, Checkbox, Col, Row, Space} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Card from '../UI/Card'
import React,{useState} from "react";
import ButtonReturner from "../Returners/ButtonReturner";
import DateReturner from "../Returners/DateReturner";
import LeftMenu from "../LeftMenu";

let süslüa='{';
let süslüb='}';
let küçük='<';
let büyük='>';
let submit=true;
let formName=''

const CreationPage = () => {
  const [submitted,setSubmitted] = useState([])
  const [dropped, setDropped] = useState([]);
  const [enteredData,setEnteredData] = useState('')

  const formNameChanger = (event) =>{
    formName=event.target.value;
    console.log(event.target.value)
  }

  const dataAdder = (event) =>{
    setEnteredData(event.target.value);
    console.log(enteredData)
  }

  const onClick = (expense) => {
    const data = {
      id: expense,
      statement: '',
      enteredData: '',
    };
    if (data.id === 1) {
      let statementp1='<text>'
      data.enteredData=''//çözülmesi gereken kısımlardan biri
      let statementp2='</text>'
      data.statement = statementp1+data.enteredData+statementp2
    }else if (data.id === 2) {
      data.statement = '<Checkbox><input/></Checkbox>'
    }else if (data.id ===3 ){
      data.statement= '<Button>my button</Button>'
    }else if (data.id===4){
      data.statement='<DatePicker/>'
    }
    setDropped((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  };

  function Submitter() {
    let a =''
    setSubmitted(dropped)
    /*for (const i in dropped){
      if(dropped[i].statement==='<text/>'){
        dropped[i].statement = '<text> entered data </text>'
      }
      a =dropped[i].statement +'\n';
      setSubmitted(a);
    }*/
    submit=false;
  }

  function Remove() {
    console.log('removed');
  }

  return (
    <div>
      <h2 style={{margin:'0px 0px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'8vh'
      }}>NAO LowCode</h2>
      <Row style={{margin:'0px 12px 0px'}}>
        <Col span={1}/>
        <Col span={6}>
          <LeftMenu onClick={onClick}/>
        </Col>
        <Col span={1}/>
        <Col span={15}>
          <Card>
            <ul>
              <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <label style={{margin:'0px 200px 0px'}}>Enter your form name</label>
                <input style={{margin:'0px 200px 0px'}} onChange={formNameChanger}/>
                {dropped.map((element) => (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {element.id === 1 && <div><input onChange={dataAdder}/><MinusCircleOutlined onClick={Remove}/></div>}
                    {element.id === 2 && <div><Checkbox><input/></Checkbox> <MinusCircleOutlined onClick={Remove}/></div>}
                    {element.id === 3 && <div><ButtonReturner/><MinusCircleOutlined onClick={Remove}/></div>}
                    {element.id === 4 && <div><DateReturner/><MinusCircleOutlined onClick={Remove}/></div>}
                  </div>
                ))}
                <button style={{margin:'0px 0px 8px'}} onClick={Submitter}>Submit</button>
              </Space>
            </ul>
          </Card>
        </Col>
        <Col span={1}/>
      </Row>
      <Row style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {!submit &&
          <Card>
            <div style={{width:'125vh', margin:'8px 8px 10px'}}>
              <div>
                <text style={{display:'flex'}}>import React from "react";</text>
                <text style={{display:'flex'}} >import {süslüa} Checkbox, Space, Button {süslüb} from "antd";</text>
                <text style={{display:'flex'}}>const {formName} = () => {süslüa}</text>
                <text style={{display:'flex',margin:'0px 16px 0px'}}>return(</text>
                <text style={{display:'flex',margin:'0px 24px 0px'}}>{küçük}div style={süslüa}{süslüa}margin:'0px 8px 0px'{süslüb}{süslüb}{büyük}</text>
                <text style={{margin:'0px 32px 0px'}}>{küçük}Space direction='vertical' size='small'{büyük}</text>
              </div>
              <ul>
                {submitted.map((element) => (
                  <div>
                    {element.statement}
                  </div>
                ))}
              </ul>
              <div>
                <text style={{display:'flex',margin:'0px 32px 0px'}}>{küçük}/Space{büyük}</text>
                <text style={{display:'flex',margin:'0px 24px 0px'}}>{küçük}/div{büyük}</text>
                <text style={{display:'flex',margin:'0px 16px 0px'}}>);</text>
                <text style={{display:'flex'}}>{süslüb}</text>
                <text style={{display:'flex'}}>export default {formName};</text>
              </div>
            </div>
          </Card>
        }
      </Row>
    </div>
  );
}

export default CreationPage;

