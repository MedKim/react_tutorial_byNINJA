import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
   render(){
      console.log(this.props);
      const {posts} = this.props;
      const postList = posts.length ? (
         posts.map(post => {
            return (
               <div className="post card" key={post.id}>
                  <img src={Pokeball} alt="A Poke ball" />
                  <div className="card-content">
                     <Link to={'/' + post.id}>
                        <span className="card-title">{post.title}</span>
                     </Link>
                     <p>{post.body}</p>
                  </div>
               </div>
            )
         })
      ):(
         <div className="center">No Posts Yet</div>
      )
      return(
         <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
         </div>
      )  
   }
};
//central-Stateであるreduxからsome-dateをpropsにする処理
const mapStateToProps = () => {
   return {
      posts: state.posts
   }
}
//connectはHOCなのでHOMEをwrapするんだがただのfunctionなのでまずconnect()でHOCを返しhomeをwrapしている形
//connect-functionにmapStateToPropsを渡す
export default connect(mapStateToProps)(Home);