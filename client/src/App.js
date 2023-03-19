import './App.css';
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  styled,
} from '@mui/material';

// Components
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

// Component styles
import { StyledAppBar, Heading, Image } from './AppComponentStyles';

function App() {
  const memories =
    'https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI';

  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <Heading variant="h2" align="center">
          Memories
        </Heading>
        <Image src={memories} alt="memories" height="60" />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
