import React from 'react';
import Ninjas from './ninja';
import AddNinja from './AddNinja';


class App extends React.Component {
  state = {
    ninjas : [
      { name: 'RYU', age: 30, belt: 'black', id: 1},
      { name: 'Yoshi', age: 25, belt: 'green', id: 2},
      { name: 'crystal', age: 35, belt: 'white', id: 3}
    ]
  }
  render(){
  return (
    <div className="App">
      <h1>First App</h1>
      {/* Ninjaコンポーネント */}
      <Ninjas ninjas={this.state.ninjas} />
      <AddNinja />
    </div>
  );
  }
}

export default App;
