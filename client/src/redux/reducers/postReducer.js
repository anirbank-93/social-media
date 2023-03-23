import * as actionTypes from '../constants/postConstants';

export const createPostReducer = (state = { post: {} }, action) => {
  console.log('redux post error', action.payload);
  switch (action.type) {
    case actionTypes.CREATE_POST_SUCCESS:
      return { posts: action.payload };
    case actionTypes.CREATE_POST_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return { posts: action.payload };
    case actionTypes.GET_POSTS_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};
