const initState = {
   posts: [
      {id: '1', title: 'first', body: 'first-body'},
      {id: '2', title: 'second', body: 'second-body'},
      {id: '3', title: 'third', body: 'third-body'},      
   ]
};

const rootReducer = (state = initState, action) => {
   console.log(action);
   if (action.type === 'DELETE_POST'){
      let newPosts = state.posts.filter(post => {
         return action.id !== post.id
      });
      return {
         ...state,
         posts: newPosts
      }
   }
   return state;
};

export default rootReducer