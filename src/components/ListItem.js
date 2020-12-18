import React, {useState}  from 'react';
import '../styling/ListItem.css'

const ListItem = ({name, handleClick, edit, index, setItems, items}) => {
  const [complete, setComplete] = useState(false);

  const editItem = (e) => {
    const { name,value } = e.target
    const newObj = items.slice();
    newObj[index][name] = value
    setItems(newObj);
  }

  return (
    <li type="circle"
        onClick={!edit ? () => setComplete(!complete) : undefined}
        className={`ListItem ${ complete  && !edit ? 'ListItem-Completed' : ''}`}
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
          ? <button onClick={() => handleClick(name)}>X</button>
          : null
        }
      </div>

    </li>
  )
}

export default ListItem