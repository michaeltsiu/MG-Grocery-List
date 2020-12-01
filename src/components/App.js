import React, { useState } from 'react';
import '../styling/App.css';

import ListDisplay from './ListDisplay';
import InputText from './InputText';

const App = () => {
  const [items, setItems] = useState(['Apples', 'Bananas', 'Oranges']);
  // const [items, setItems] = useState({ 'Apples': 1, 'Bananas': 2, 'Carrots': 5});

  return (
    <div className="list-container">
      <img src="https://res.cloudinary.com/mozii/image/upload/f_auto,q_auto/v1596587957/MoziiLogos/color_logo_transparent_5_cjnc7t.png" alt="Company Logo"></img>
      <h1>GROCERY LIST</h1>
      <InputText
        handleSubmit={(item) => {
          setItems(items.concat(item));
        }}
      />
      <ListDisplay
        items={items}
        handleClick={(item) => { setItems(items.slice().filter((i) => i !== item)) }}
      />
    </div>
  );
}

export default App;
