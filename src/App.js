import './App.css';
import {Checkbox, Col, Row, Space} from 'antd';
import Card from './Components/UI/Card'
import React,{useState} from "react";
import ButtonReturner from "./Components/Returners/ButtonReturner";
import DateReturner from "./Components/Returners/DateReturner";
import LeftMenu from "./Components/LeftMenu";

let süslüa='{';
let süslüb='}';
let küçük='<';
let büyük='>';

function App() {
  const [submitted,setSubmitted] = useState([])
  const [dropped, setDropped] = useState([]);
  const [enteredData,setEnteredData] = useState('')

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
      data.statement = '<text/>'
      data.enteredData = ''
    }
    if (data.id === 2) {
      data.statement = '<Checkbox><input/></Checkbox>'
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
  }

  return (
    <div>
      <Row>
        <Col span={1}/>
        <Col span={6}>
          <LeftMenu onClick={onClick}/>
        </Col>
        <Col span={1}/>
        <Col span={15}>
          <Card>
            <ul>
              <Space direction="vertical" size="small" style={{ display: 'flex' }}>
              {dropped.map((element) => (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {element.id === 1 && <input onChange={dataAdder}/>}
                  {element.id === 2 && <Checkbox><input/></Checkbox>}
                  {element.id === 3 && <ButtonReturner/>}
                  {element.id === 4 && <DateReturner/>}
                </div>
              ))}
                <button onClick={Submitter}>Submit</button>
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
        <Card>
          <div style={{width:'125vh', margin:'8px 8px 0px'}}>
            <div>
              <text style={{display:'flex'}}>import React from "react";</text>
              <text style={{display:'flex'}} >import {süslüa} Checkbox, Space {süslüb} from "antd";</text>
              <text style={{display:'flex'}}>const App = () => {süslüa}</text>
              <text style={{display:'flex',margin:'0px 16px 0px'}}>return(</text>
              <text style={{margin:'0px 24px 0px'}}>{küçük}div{büyük}</text>
            </div>
              <ul>
              {submitted.map((element) => (
                <div>
                  {element.statement}
                </div>
              ))}
                </ul>
          </div>
        </Card>
      </Row>
    </div>
  );
}

export default App;

