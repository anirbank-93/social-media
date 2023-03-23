import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import { createPostReducer, getPostsReducer } from './reducers/postReducer';

const reducers = combineReducers({
  getPosts: getPostsReducer,
  createPost: createPostReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
