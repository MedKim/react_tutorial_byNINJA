import React, {Component} from 'react';

class Ninjas extends Component{
   render(){
      //renderメソッド配下にconsole.log()する(javascriptの領域だから)
      console.log(this.props);
      const { name, age, belt } = this.props;
      // {this.props.name }のように書かなくてすむ
      return(
         <div className="ninja">
            <div>Name: { name }</div>
            <div>Age: { age }</div>
            <div>Belt: { belt }</div>
         </div>
      )
   }
}

export default Ninjas;