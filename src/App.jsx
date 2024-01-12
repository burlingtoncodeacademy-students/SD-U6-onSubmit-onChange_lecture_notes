import './App.css';
import { useState } from 'react'
import Counter from './components/counter/Counter';
import Welcome from './components/welcome/Welcome';
import AddUser from './components/user/AddUser';

function App() {

  const [names, setNames] = useState([]);
  const [count, setCount] = useState(0);

  const displayWelcome = () => {
    return (names.map((name, index) => {
      return (
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
      <AddUser names={names} setNames={setNames} />
      <Counter count={count} setCount={setCount} />
      {
        names.length > 0 ?
          displayWelcome() :
          <h1 style={{textAlign: "center"}}>Add a User</h1>
      }
    </div>
  );
}

export default App;
