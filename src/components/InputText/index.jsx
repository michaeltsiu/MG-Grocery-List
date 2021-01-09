import React, { useState, useContext } from 'react';
import './InputText.css';
import { ItemsContext } from '../../utils';

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
        {/* Input box for the item to be added */}
        <input
          className="InputText-Name"
          type="text"
          placeholder="Item name"
          value={name}
          required="required"
          onChange={e => setName(e.target.value)}
        />
        {/* Input box for the quantity to be added */}
        <input
          className="InputText-Quantity"
          type="number"
          placeholder="Quantity"
          value={quantity}
          min="1"
          onChange={e => setQuantity(e.target.value)}
        />

        <button>Add</button>
      </form>
      <button onClick={() => setEdit(!edit)}>Edit</button>
    </div>
  )
}

export default InputText