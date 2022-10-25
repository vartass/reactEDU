const initialStore = {

  auth: {
    name: null,
    modal: false
  },
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

  // list:[1,2,6]

};

export default initialStore;