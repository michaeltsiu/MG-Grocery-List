import React from 'react';
import { createUseStyles } from 'react-jss';
import ListDisplay from '../ListDisplay';
import InputText from '../InputText';

// Style sheet for jss
const useStyles = createUseStyles({
  listContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '0.3fr 1.7fr',
    gap: '0px 0px',
    gridTemplateAreas: '"banner banner banner"". container ."',
    backgroundColor: '#2e2c2c',
    height: '100vh',
  },
  banner: {
    gridArea: 'banner',
    maxWidth: 444,
    maxHeight: 140,
  },
  container: {
    gridArea: 'container',
    backgroundColor: '#F7F4EB',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '35vw',
    height: '75vh',
    boxShadow: '3px 5px 10px 0px black',
    borderRadius: 25,
    paddingTop: 25,
    paddingBottom: 25,
  },
  '@media screen and (max-width: 900px)': {
    listContainer: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
      gridTemplateAreas: '"banner""container"',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    container: {
      width: '70vw',
      height: '90vh',
      marginBottom: '5vh',
      marginLeft: '15vw',
      marginRight: '15vw',
    }
  },
  '@media screen and (max-width: 550px)': {
    container: {
      width: '90vw',
      height: '90vh',
      marginBottom: '5vh',
      marginLeft: '5vw',
      marginRight: '5vw',
    }
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.listContainer}>

      <img
        className={classes.banner}
        src="https://res.cloudinary.com/mozii/image/upload/f_auto,q_auto/v1596587957/MoziiLogos/color_logo_transparent_5_cjnc7t.png"
        alt="Company Logo"
      />

      <div className={classes.container}>

        <h1>GROCERY LIST</h1>

        <section>
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
