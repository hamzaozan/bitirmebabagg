import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {Button, Checkbox, Input} from "antd";
import creationPage from "./Pages/CreationPage";

let count=4;
const finalSpaceCharacters = [
  {
    id:1,
    key: '1',
    statement: 'button',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id:2,
    key: '2',
    statement: 'chckbx',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id:3,
    key: '3',
    statement: 'input',
    name: 'KVN',
    thumb: '/images/kvn.png'
  },
]

function DnD() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items)
  }
  const onClickbtn = (expense) => {
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
  }
  const onClickchckbx = (expense) => {
    const data = {
      id: count,
      key: count.toString(),
      statement: 'chckbx',
      enteredData: '',
    };
    updateCharacters((prevExpenses) => {
      return [data, ...prevExpenses];
    });
    count++;
  }

  return (
    <div className="App">
      <button onClick={onClickbtn}>Button Adder</button>
      <button onClick={onClickchckbx}>CheckBox Adder</button>
      <header className="App-header">
        <h1>Final Space Characters</h1>
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
      </header>
    </div>
  );
}

export default DnD;
