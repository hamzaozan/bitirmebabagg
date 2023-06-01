import {Button, Card, Checkbox, Col, Input, Row, Space} from 'antd';
import React,{useState} from "react";
import ButtonReturner from "../Returners/ButtonReturner";
import DateReturner from "../Returners/DateReturner";
import LeftMenu from "../LeftMenu";
import DnD from "../DnD";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

let süslüa='{';
let süslüb='}';
let küçük='<';
let büyük='>';
let count=0;

const CreationPage = () => {
  const [submitted,setSubmitted] = useState(false);
  const [dropped, setDropped] = useState([]);
  const [formName, setFormName] = useState('')
  const [characters, updateCharacters] = useState(dropped);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items)
  }
  const formNameChanger = (event) =>{
    setFormName(event.target.value);
  }

  const onClick = (expense) => {
    const data = {
      id: expense,
    };
    if (data.id === 1) {
      const data = {
        id: count,
        key: count.toString(),
        statement: 'input',
        out: '<Input>choice<Input/>',
        enteredData: '',
      };
      updateCharacters((prevExpenses) => {
        return [data, ...prevExpenses];
      });
    }else if (data.id === 2) {
      const data = {
        id: count,
        key: count.toString(),
        statement: 'chckbx',
        out: '<Checkbox>choice<Checkbox/>',
        enteredData: '',
      };
      updateCharacters((prevExpenses) => {
        return [data, ...prevExpenses];
      });
      count++;
    }else if (data.id === 3 ){
      const data = {
        id: count,
        key: count.toString(),
        statement: 'button',
        enteredData: '',
      };
      updateCharacters((prevExpenses) => {
        return [data, ...prevExpenses];
      });
      count++;
    }else if (data.id === 4){
      data.statement = '<DatePicker/>'
    }else if (data.id === 5){
      data.statement = ''
    }
    setDropped((prevExpenses) => {
      return [data, ...prevExpenses];
    });
    count++;
  };

  function Submitter() {
    setSubmitted(true);
  }

  return (
    <div>
      <a href='/'>
      <h2 style={{margin:'0px 0px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'8vh'
      }}>NAO LowCode</h2>
      </a>
      <Row style={{margin:'0px 12px 0px'}}>
        <Col span={1}/>
        <Col span={6}>
          <LeftMenu onClick={onClick}/>
        </Col>
        <Col span={1}/>
        <Col span={15}>
          <Card>
            <div>
              <label style={{margin:'0px 200px 0px'}}>Enter your form name</label>
              <input style={{margin:'0px 200px 0px'}} onChange={formNameChanger}/>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                  {(provided) => (
                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                      {characters.map(({id,key, name, thumb,statement}, index) => {
                        return (
                          <Draggable key={id} draggableId={key} index={index}>
                            {(provided) => (
                              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                {statement==='button' && <Button/>}
                                {statement==='chckbx' && <Checkbox/>}
                                {statement==='input' && <Input/>}
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            {/*
            <ul>
              <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <label style={{margin:'0px 200px 0px'}}>Enter your form name</label>
                <input style={{margin:'0px 200px 0px'}} onChange={formNameChanger}/>
                <DnD list={dropped}/>
                {dropped.map((element) => (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  >
                    {element.id === 1 && <Input/>}
                    {element.id === 2 && <Checkbox><input/></Checkbox>}
                    {element.id === 3 && <ButtonReturner/>}
                    {element.id === 4 && <DateReturner/>}
                  </div>
                ))}
                <button style={{width:'100px',height:'50px',margin:'0px 400px 0px'}} onClick={Submitter}>Submit</button>
                <a href='/dnd'>
                 <button>to dnd part</button>
                </a>
              </Space>
            </ul>*/}
            <button style={{width:'100px',height:'50px',margin:'0px 400px 0px'}} onClick={Submitter}>Submit</button>
          </Card>
        </Col>
        <Col span={1}/>
      </Row>
      <Row style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {submitted &&
          <Card>
            <div style={{width:'125vh', margin:'8px 8px 10px'}}>
              <div>
                <text style={{display:'flex'}}>import React from "react";</text>
                <text style={{display:'flex'}} >import {süslüa} Checkbox, Space, Button, DatePicker {süslüb} from "antd";</text>
                <text style={{display:'flex'}}>const {formName} = () => {süslüa}</text>
                <text style={{display:'flex',margin:'0px 16px 0px'}}>return(</text>
                <text style={{display:'flex',margin:'0px 24px 0px'}}>{küçük}div style={süslüa}{süslüa}margin:'0px 8px 0px'{süslüb}{süslüb}{büyük}</text>
                <text style={{margin:'0px 32px 0px'}}>{küçük}Space direction='vertical' size='small'{büyük}</text>
              </div>
              <ul>
                {characters.map((element) => (
                  <div>
                    {element.out}
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

