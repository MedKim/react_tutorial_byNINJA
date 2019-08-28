import React, {Component} from 'react';

class AddTodo extends Component {
   state = {
      content: ''
   }
   //eventオブジェクトを受け取る
   handleChange = (e) =>{
      this.setState({
         content: e.target.value
      })
   }
   handleSubmit = (e) =>{
      //pageのreflashをしないようにする
      e.preventDefault();
      //contentの内容をargument(todoとして)にしているaddTodo(関数)はpropsオブジェクト
      this.props.addTodo(this.state);
      //submitされた後のreset処理（これだけではresetされているけどinputタグの方にまで反映されていない)
      this.setState({
         content: ''
      })
   }
   render(){
      return(
         <div>
            <form onSubmit={this.handleSubmit}>
               <label>Add new todo:</label>
               <input type="text" onChange={this.handleChange} value={this.state.content} />
            </form>
         </div>
      )
   }
}

export default AddTodo;