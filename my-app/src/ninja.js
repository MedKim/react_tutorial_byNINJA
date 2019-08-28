import React from 'react';
import './App.css';

//class-based Componentsからfunctional-Componentsに変える
//propsを引数に渡す必要がある
const Ninjas = ({ninjas, deleteNinja}) => {
      //classやインスタンスではないのでthisはいらない
      //const { ninjas } = props; 引数を(props)にするのではなく,{nijas}にするとnijas off the propsを意味している
      //新しいarrayで返す
     // const ninjaList = ninjas.map(ninja => {
         //制御構文を使う
      //   if (ninja.age > 20 ){
    //     return(
         //同じクラス名なのでuniquekeyを渡す必要がある
         //  <div className="ninja" key={ninja.id}>
         //  <div>Name: { ninja.name }</div>
         //   <div>Age: { ninja.age }</div>
         //   <div>Belt: { ninja.belt }</div>
         //</div>
    //     )
    //  } else {
    //     return null
    //  }
  // }) }
  //このようにもかける
   const ninjaList = ninjas.map(ninja => {
      return ninja.age > 20 ? (
         <div className="ninja" key={ninja.id}>
            <div>Name: { ninja.name }</div>
            <div>Age: { ninja.age }</div>
            <div>Belt: { ninja.belt }</div>
            <button onClick={()=>{deleteNinja(ninja.id)}}>Delete ninja</button>
         </div>
      ) : null;
   });

      return(
         <div className="ninja-list">
            { ninjaList }
         </div>
      )
   }


export default Ninjas;