import './App.css';
import { useState } from 'react'
import Counter from './components/counter/Counter';
import Welcome from './components/welcome/Welcome';

function App() {

  const [ names, setNames ] = useState([
    'Frodo', 'Sam', 'Pippin', 'Merry'
  ]);
  const [ count, setCount ] = useState(0);

  const displayWelcome = () => {
    return(names.map((name,index) => {
      return(
        <Welcome 
          key={index}
          name={name}
          names={names}
          setNames={setNames}
        />
      )
    }))
  }

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} />
      {displayWelcome()}
    </div>
  );
}

export default App;
