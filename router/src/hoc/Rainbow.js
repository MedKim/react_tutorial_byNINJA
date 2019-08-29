import React from 'react';
//先の事例だとNavbarコンポーネントに当たる(WrappedComponent)
const Rainbow = (WrappedComponent) => {
   const colors = ['red', 'pink', 'orange', 'green', 'blue','yellow'];
   const randomColor = colors[Math.floor(Math.random() * 5)];
   const className = randomColor + '-text';

   return (props) => {
      return(
         <div className={className}>
            <WrappedComponent {...props} />
         </div>
      )
   }
}

export default Rainbow;