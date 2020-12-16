import React, { useState } from 'react';
import '../styling/App.css';
import ListDisplay from './ListDisplay';
import InputText from './InputText';

const App = () => {
  const [items, setItems] = useState([{item: 'Disposable Masks', quantity: 50}, {item: 'Hand Sanitizer', quantity: 5}, {item: 'Disposable Gloves', quantity: 100}, {item: 'Toilet Paper', quantity: 10}]);
  const [edit, setEdit] = useState(false);

  return (
    <div className="list-container">

      <div className="App-banner">
        <img src="https://res.cloudinary.com/mozii/image/upload/f_auto,q_auto/v1596587957/MoziiLogos/color_logo_transparent_5_cjnc7t.png" alt="Company Logo"></img>
      </div>

      <div className="App-Container">

        <h1>GROCERY LIST</h1>

        <div className="App-GroceryList">

          <div className="App-Input">
            <InputText
              handleSubmit={(item) => {
                setItems(items.concat(item));
              }}
            />
            <button onClick={() => setEdit(!edit)}>Edit</button>
          </div>

          <ListDisplay
            items={items}
            handleClick={(item) => { setItems(items.slice().filter((i) => i !== item)) }}
            edit={edit}
            setItems={setItems}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
