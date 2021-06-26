import React, { useState } from 'react';
import './App.css';
import './styles/output.css'
import DragBox from './components/DragBox';
function App() {
  const [items, setItems] = useState([
    {
      id: "1",
      order: 2,
      val: 'micheal'
    }, {
      id: "2",
      order: 1,
      val: 'john'
    }, {
      id: "3",
      order: 3,
      val: 'ammy'
    }, {
      id: "4",
      order: 4,
      val: 'harry'
    },
  ])
  const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };
  const handleDrop = (ev) => {
    const dragItem = items.find((item) => item.id === dragId);
    const dropItem = items.find((item) => item.id === ev.currentTarget.id);
    const dragItemOrder = dragItem.order;
    const dropItemOrder = dropItem.order;

    const newItems = items.map((item) => {
      if (item.id === dragId) {
        item.order = dropItemOrder;
      }
      if (item.id === ev.currentTarget.id) {
        item.order = dragItemOrder;
      }
      return item;
    });

    setItems(newItems);
  };
  const renderJson = () => {
    return JSON.stringify(items, null, '\t');
  }
  return (
    <div class="grid md:grid-rows-2 md:grid-flow-col gap-4 p-4 min-h-screen">
      <div class="md:row-span-4 md:col-span-3 	p-4  bg-blue-300 border-solid border-2 border-blue-500">
        <ul>
          {items.sort((a, b) => a.order - b.order)
            .map(item =>
              <li key={item.id} class="bg-blue-400 p-1 my-1 border-solid 
          border-2 border-blue-500 rounded hover:bg-gray-200">
                <DragBox id={item.id} handleDrag={handleDrag} handleDrop={handleDrop}>{item.val}</DragBox></li>
            )}
        </ul>
      </div>
      <div class="md:row-span-4 md:col-span-5 p-4 bg-white-400 border-solid border-2 border-blue-500">
        <b>Anlık Json Çıktısı </b>
        <i>
          <pre>
            {renderJson()}
          </pre>
        </i>

      </div>
    </div>
  );
}

export default App;
