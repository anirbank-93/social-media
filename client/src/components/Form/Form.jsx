import { TextField, Button, Typography, Paper, styled } from '@mui/material';

const StyledPaper = styled(Paper)``;

const StyledForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Form = () => {
  return (
    <StyledPaper>
      <StyledForm autoComplete="off" noValidate>
        <Typography variant="h6">Creating A Memory</Typography>
        <TextField name="creator" variant="outlined" fullWidth />
      </StyledForm>
    </StyledPaper>
  );
};

export default Form;
