import './App.css';
import {Checkbox, Col, Row, Space} from 'antd';
import Card from './Components/UI/Card'
import React,{useState} from "react";
import TextAdder from "./Components/Adders/TextAdder";
import CheckBoxAdder from "./Components/Adders/CheckBoxAdder";
import ButtonAdder from "./Components/Adders/ButtonAdder";
import DateAdder from "./Components/Adders/DateAdder";
import ButtonReturner from "./Components/Returners/ButtonReturner";
import AddressReturner from "./Components/Returners/AddressReturner";
import Asd from './Asd';
import FormOut from "./FormOut";
import Deneme from "./Deneme";

function App() {
  const [submitted,setSubmitted] = useState('')
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
    for (const i in dropped){
      if(dropped[i].statement==='<text/>'){
        dropped[i].statement = '<text> entered data </text>'
      }
      a = a+ dropped[i].statement +'\n';
    }
    setSubmitted(a);
  }

  return (
    <div>
      <Deneme/>
      <Row>
        <Col span={1}/>
        <Col span={6}>
          <Card>
            <Space direction="vertical" size="small">
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
                  {element.id === 4 && <AddressReturner/>}
                </div>
              ))}
                <button onClick={Submitter}>Submit</button>
              </Space>
            </ul>
          </Card>
        </Col>
        <Col span={1}/>
      </Row>
      <Row>
        <div>
          {submitted}
        </div>
        </Row>
    </div>
  );
}

export default App;

