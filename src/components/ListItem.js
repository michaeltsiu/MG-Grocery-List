import React, {useState}  from 'react';
import '../styling/ListItem.css'

const ListItem = ({name, handleClick, edit, index, setItems, items}) => {
  const [complete, setComplete] = useState(false);
  // onChange(e) {
  //   const 
  //     [e.target.name]: e.target.value
  // }
  const changeItem = (e) => {
    // console.log(name.item)
    const { name,value } = e.target
    const newObj = items.slice();
    newObj[index][name] = value
    // newObj[index].item = e.targ≈et.value
    setItems(newObj);
  }

  const changeQty = (name) => (e) => {
    // console.log(name.item)
    const newObj = items.slice();
    newObj[index].quantity = e.target.value
    setItems(newObj);
  }

  return (
    <div className="ListItem">

      <div className="ListItem-Container">

        <li type="circle"
            onClick={() => setComplete(!complete)}
            className={ complete ? 'ListItem-Completed' : null}
        >

          <span>

            <div>{edit ? <input name="item" onChange={changeQty('item')} value={name.item} ></input> : name.item}</div>

            <div>Qty: {edit ? <input name="quantity" onChange={changeQty('qty')} value={name.quantity}></input> : name.quantity}</div>

          </span>
        </li>
      </div>

      {edit
        ? <button onClick={() => handleClick(name)}>X</button>
        : null
      }
    </div>

  )
}

export default ListItem