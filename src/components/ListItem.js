import React, {useState}  from 'react';
import '../styling/ListItem.css'

const ListItem = (props) => {
  const [complete, setComplete] = useState(false);
  return (
    <div className="ListItem">

      <div className="ListItem-Container">

        <li type="circle"
            onClick={() => setComplete(!complete)}
            className={ complete ? 'ListItem-Completed' : null}
        >

          <span>

            <div>{props.name.item}</div>

            <div>Qty: {props.name.quantity}</div>

          </span>
        </li>
      </div>

      {props.edit
        ? <button onClick={() => props.handleClick(props.name)}>X</button>
        : null
      }
    </div>

  )
}

export default ListItem