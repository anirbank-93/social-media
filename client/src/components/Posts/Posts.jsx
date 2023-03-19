import { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

// API calls
import { getPosts } from '../../redux/actions/postAction';

// Components
import Post from './Post/Post';

const Posts = () => {
  const { posts } = useSelector((state) => state.getPosts);
  console.log(posts, 'posts');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
