import React from 'react';

const Contact = (props) =>{
   console.log(props);
   //propsの中にhistoryオブジェクトがあり(ページ遷移を記録してある)のでこれのpushメソッドを利用してredirectできる
   setTimeout(() => {
      props.history.push('/about');
   }, 2000);
   return(
      <div className="container">
         <h4 className="center">Contact</h4>
         <p>sample message paragrahs</p>
      </div>
   )
};

export default Contact;