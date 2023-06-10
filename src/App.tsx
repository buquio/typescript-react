import React, {FC} from 'react';
import './App.css';
import {Person, HairColor} from './components/Person';

// npx create-react-app typecript-react --template typescript 
// typecript-react ---folder name
const App: FC =()=> {
  return (
    <div className="App">
      <Person name="Pedro" age={20} email="pedroemail.com" hairColor={HairColor.Blonde}/>

    </div>
  );
}

export default App;
