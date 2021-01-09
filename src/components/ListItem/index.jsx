import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { ItemsContext } from '../../utils';

// Style sheet for jss
const useStyles = createUseStyles({
  ListItem: {
    border: '2px solid black',
    marginTop: 10,
    height: 25,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    border: '2px solid black',
    color: 'white',
    height: 20,
    width: 20,
    padding: '1px 3px',
    transform: 'translateX(110px)',
  },
  completed: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      borderBottom: '2px solid #111',
      width: '100%',
    },
  },
  container: {
    fontFamily: 'Montserrat',
    color: 'black',
    fontWeight: 400,
    fontSize: 14,
  },
  name: {
    width: '70%',
  },
  quantity: {
    width: '30%',
    float: 'right',
  },
  quantityInput: {
    width: 30,
  },
});

const ListItem = ({ name, index }) => {
  const classes = useStyles();
  const [complete, setComplete] = useState(false);
  const [items, setItems, edit] = useContext(ItemsContext);

  // Function to edit the current item
  const editItem = (e) => {
    const { name, value } = e.target
    const newObj = items.slice();
    newObj[index][name] = value
    setItems(newObj);
  }

  // Function to delete the current item
  const deleteItem = (name) => {
    setItems(items.slice().filter((i) => i !== name))
  };

  return (
    <li type="circle"
      onClick={!edit ? () => setComplete(!complete) : undefined}
      className={`${classes.ListItem} ${complete && !edit ? classes.completed : ''}`}
    >

      <div className={classes.container}>
        {/* Element for the current Item name */}
        <span className={classes.name}>
          &nbsp;
          {edit
            ? <input
              name="item"
              onChange={editItem}
              value={name.item}
            />
            : name.item}
        </span>
        {/* Element for the current quantity */}
        <span className={classes.quantity}>
          Qty:&nbsp;
          {edit
            ? <input
              name="quantity"
              className={classes.quantityInput}
              onChange={editItem}
              value={name.quantity}
            />
            : name.quantity
          }
        </span>
        {/* If edit is currently true, render the button and if not, hide. */}
        {edit
          ? <button
              onClick={() => deleteItem(name)}
              className={classes.button}
            >
              X
            </button>
          : null
        }
      </div>

    </li>
  )
}

ListItem.propTypes = {
  name: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default ListItem
