import React, { useState } from 'react';

const InputText = (props) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit({item: name, quantity: quantity});
      setName('');
      setQuantity(1);
    }}>
      <input type="text" placeholder="Item name" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} min="1" onChange={e => setQuantity(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default InputText