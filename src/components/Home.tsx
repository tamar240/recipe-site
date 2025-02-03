import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'transparent',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontWeight: 'bold',
          color: 'orange',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          animation: `${fadeIn} 2s ease-in-out`,
        }}
      >
        Welcome to our site :)
      </Typography>
    </Box>
  );
};

export default Home;