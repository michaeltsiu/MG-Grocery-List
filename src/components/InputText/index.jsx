import React, { useState, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { ItemsContext } from '../../utils';

// Style sheet for jss
const useStyles = createUseStyles({
  inputText: {
    display: 'flex',
    marginTop: '2vh',
    overflow: 'hidden',
  },
  name: {
    width: 'auto',
  },
  quantity: {
    width: 25,
  }
});

const InputText = () => {
  const classes = useStyles();
  const [ name, setName ] = useState('');
  const [ quantity, setQuantity ] = useState(1);
  const [ items, setItems, edit, setEdit ] = useContext(ItemsContext);


  const addItem = (item) => {
    setItems(items.concat(item));
  };

  return (
    <div className={classes.inputText}>
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
          className={classes.name}
          type="text"
          placeholder="Item name"
          value={name}
          required="required"
          onChange={e => setName(e.target.value)}
        />
        {/* Input box for the quantity to be added */}
        <input
          className={classes.quantity}
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