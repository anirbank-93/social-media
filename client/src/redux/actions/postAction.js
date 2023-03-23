import axios from 'axios';

import { SERVICE_URLS } from '../../constants/config';
import * as actionTypes from '../constants/postConstants';

const API_URL = 'http://localhost:1337';

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${API_URL}${SERVICE_URLS['createPost']}`,
      post
    );

    dispatch({
      type: actionTypes.CREATE_POST_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.CREATE_POST_FAILURE,
      payload: err.message,
    });
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${API_URL}${SERVICE_URLS['getAllPost'].url}`
    );

    dispatch({
      type: actionTypes.GET_POSTS_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_POSTS_FAILURE,
      payload: err.message,
    });
  }
};
