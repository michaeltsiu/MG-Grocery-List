import React, { useState } from 'react';
import '../styling/InputText.css';

const InputText = (props) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <form
      className="InputText"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit({item: name, quantity: quantity});
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
  )
}

export default InputText