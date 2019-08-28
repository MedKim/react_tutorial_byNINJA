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
  addNinja = (ninja) => {
    ninja.id = Math.random();
    //spread operatorでarray展開する(ninjaを追加)
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    //新しいninjas-Arrayを作成する(idでfileterをかける,idとninja.idが一致しているとarrayから除外される)
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    })

  }
  render(){
  return (
    <div className="App">
      <h1>First App</h1>
      {/* Ninjaコンポーネント */}
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      <AddNinja addNinja={this.addNinja} />
    </div>
  );
  }
}

export default App;
