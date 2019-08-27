import React, {Component} from 'react';

class Ninjas extends Component{
   render(){
      //renderメソッド配下にconsole.log()する(javascriptの領域だから)
      console.log(this.props);
      //const ninjas = this.props.ninjasでも同じ
      const { ninjas } = this.props;
      //新しいarrayで返す
      const ninjaList = ninjas.map(ninja => {
         return(
         //同じクラス名なのでuniquekeyを渡す必要がある
         <div className="ninja" key={ninja.id}>
            <div>Name: { ninja.name }</div>
            <div>Age: { ninja.age }</div>
            <div>Belt: { ninja.belt }</div>
         </div>

         )
      })
      return(
         <div className="ninja-list">
            { ninjaList }
         </div>
      )
   }
}

export default Ninjas;