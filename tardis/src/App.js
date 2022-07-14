import './App.css';
import { useState } from 'react'
import Tardis from './components/Tardis'
import DivOne from './components/DivOne'
import DivTwo from './components/DivTwo'
import DivThree from './components/DivThree'


function App() {

  const [ tardis, setTardis ] = useState(
    {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    }
  )
  
  const changeCase = () => {
    let newTardis = {...tardis}
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
      <DivOne changeCase={changeCase} tardis={tardis}/>
    </div>
  );
}

export default App;
