import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {Button, Checkbox, Input} from "antd";
import creationPage from "./Pages/CreationPage";

const finalSpaceCharacters = [
  {
    id:1,
    key: 'button',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id:2,
    key: 'chckbx',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id:3,
    key: 'input',
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
  let count=4;
  const onClick = (expense) => {
    const data = {
      id: count,
      key: 'button',
      statement: '',
      enteredData: '',
    };
    updateCharacters((prevExpenses) => {
      return [data, ...prevExpenses];
    });
    count++;
  }

  return (
    <div className="App">
      <button onClick={onClick}></button>
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id,key, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={key} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {key==='button' && <Button/>}
                          {key==='chckbx' && <Checkbox/>}
                          {key==='input' && <Input/>}
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
