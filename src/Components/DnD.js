import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {Button, Checkbox, Input} from "antd";

const finalSpaceCharacters = [
  {
    id: 'button',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id: 'chckbx',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id: 'input',
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

    updateCharacters(items);
    characters.push({id:'input',name:'okan',thumb:''})
    console.log(characters);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          {id==='button' && <Button/>}
                          {id==='chckbx' && <Checkbox/>}
                          {id==='input' && <Input/>}
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
