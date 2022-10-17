const initialStore = {

  auth: false,
  title: "Hello from redux! I'm not happy to be here...",

  counter: 0,
  posts:{
    loading: false,
    posts:[]
  },
  comments:{
    loading: false,
    comments:[]
  },
  todos:{
    loading: false,
    todos:[]
  },

  list:[1,2,6]

};

export default initialStore;