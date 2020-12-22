import React from 'react';
import '../styling/App.css';
import ListDisplay from './ListDisplay';
import InputText from './InputText';

const App = () => {

  return (
    <div className="list-container">

      <img
        className="App-banner"
        src="https://res.cloudinary.com/mozii/image/upload/f_auto,q_auto/v1596587957/MoziiLogos/color_logo_transparent_5_cjnc7t.png"
        alt="Company Logo"
      />

      <div className="App-Container">

        <h1>GROCERY LIST</h1>

        <section className="App-GroceryList">
          {/* main functionality */}
          <InputText />
          {/* Display all items */}
          <ListDisplay />

        </section>
      </div>
    </div>
  );
}

export default App;
