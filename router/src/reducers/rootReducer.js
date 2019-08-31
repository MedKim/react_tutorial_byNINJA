const initState = {
   posts: [
      {id: '1', title: 'first', body: 'first-body'},
      {id: '2', title: 'second', body: 'second-body'},
      {id: '3', title: 'third', body: 'third-body'},      
   ]
};

const rootReducer = (state = initState, action) => {
   return state;
};

export default rootReducer