import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ItemsContext } from '../utils/Context';
import '../styling/ListItem.css';

const ListItem = ({ name, index }) => {
  const [items, setItems, edit] = useContext(ItemsContext);

  const [complete, setComplete] = useState(false);

  const editItem = (e) => {
    const { name, value } = e.target
    const newObj = items.slice();
    newObj[index][name] = value
    setItems(newObj);
  }

  const deleteItem = (name) => {
    setItems(items.slice().filter((i) => i !== name))
  };

  return (
    <li type="circle"
      onClick={!edit ? () => setComplete(!complete) : undefined}
      className={`ListItem ${complete && !edit ? 'ListItem-Completed' : ''}`}
    >

      <div className="ListItem-Container">

        <span className="ListItem-Name">
          &nbsp;
          {edit
            ? <input
              name="item"
              onChange={editItem}
              value={name.item}
            />
            : name.item}
        </span>

        <span className="ListItem-Qty">
          Qty:&nbsp;
          {edit
            ? <input
              name="quantity"
              className="ListItem-QInput"
              onChange={editItem}
              value={name.quantity}
            />
            : name.quantity
          }
        </span>

        {edit
          ? <button onClick={() => deleteItem(name)}>X</button>
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
