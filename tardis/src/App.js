import './App.css';
import { useState } from 'react'
import DivOne from './components/DivOne'


function App() {

  const [ tardis, setTardis ] = useState(
    {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    }
  )
  
  const changeCase = ( oldObj ) => {
    let newTardis = { ...oldObj }
    if ( tardis.caps ) {
      newTardis.name = tardis.name.toLowerCase() 
      newTardis.caps = false
    }
    else {
      newTardis.name = tardis.name.toUpperCase() 
      newTardis.caps = true
    }
    setTardis( newTardis )
  }

  
  return (
    <div>
      <DivOne changeCase={ changeCase } tardis={ tardis }/>
    </div>
  );
}

export default App;
