import React from 'react';
import Ninjas from './ninja';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>First App</h1>
      {/* Ninjaコンポーネント */}
      <Ninjas />
    </div>
  );
  }
}

export default App;
