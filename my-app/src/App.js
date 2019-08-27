import React from 'react';
import Ninjas from './ninja';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>First App</h1>
      {/* Ninjaコンポーネント */}
      <Ninjas name="Ryu" age="25" belt="black" />
      <Ninjas name="RYU" age="30" belt="green" />

    </div>
  );
  }
}

export default App;
