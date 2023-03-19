import * as actionTypes from '../constants/postConstants';

export const getPostsReducers = (state = { posts: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return { posts: action.payload };
    case actionTypes.GET_POSTS_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};
