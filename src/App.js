import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CountDown from './components/CountDown';
import ClockImage from './images/clock.jpg';
const useStyles = makeStyles(theme => ({
  container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: `url(${ClockImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: false
  }
}))

const App = () => {
  
  const classes = useStyles();
  return(
      <div className={classes.container}>
        <Container maxWidth="sm">
          <CountDown />
        </Container>
      </div>
  )
}

export default App;
