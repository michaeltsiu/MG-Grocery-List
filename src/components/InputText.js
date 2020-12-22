import React, { useState, useContext } from 'react';
import '../styling/InputText.css';
import { ItemsContext } from '../utils/Context';

const InputText = () => {
  const [ name, setName ] = useState('');
  const [ quantity, setQuantity ] = useState(1);
  const [ items, setItems, edit, setEdit ] = useContext(ItemsContext);

  const addItem = (item) => {
    setItems(items.concat(item));
  };

  return (
    <div className="InputText">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem({item: name, quantity: quantity});
          setName('');
          setQuantity(1);
        }}
      >
        <div className="InputText-Input">

          <input
            className="InputText-Name"
            type="text"
            placeholder="Item name"
            value={name}
            required="required"
            onChange={e => setName(e.target.value)}
          />

          <input
            className="InputText-Quantity"
            type="number"
            placeholder="Quantity"
            value={quantity}
            min="1"
            onChange={e => setQuantity(e.target.value)}
          />

          <button>Add</button>
        </div>
      </form>
      <button onClick={() => setEdit(!edit)}>Edit</button>
    </div>
  )
}

export default InputText