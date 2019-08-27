import React from 'react';
//class-based Componentsからfunctional-Componentsに変える
//propsを引数に渡す必要がある
const Ninjas = ({ninjas}) => {
      //classやインスタンスではないのでthisはいらない
      //const { ninjas } = props; 引数を(props)にするのではなく,{nijas}にするとnijas off the propsを意味している
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