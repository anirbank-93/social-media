import { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress, styled } from '@mui/material';

// Redux actions
import { getPosts } from '../../redux/actions/postAction';

// Components
import Post from './Post/Post';

const Container = styled(Grid)`
  display: flex;
  align-items: stretch;
`;

const Posts = () => {
  const { posts } = useSelector((state) => state.getPosts);
  console.log(posts, 'posts');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return posts.length > 0 ? (
    <Container container spacing={3}>
      {posts.map((item, index) => (
        <Grid item key={index} xs={12} sm={6}>
          <Post post={item} />
        </Grid>
      ))}
    </Container>
  ) : (
    <CircularProgress />
  );
};

export default Posts;
