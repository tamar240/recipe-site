import React, { useEffect } from 'react';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface AlertProps {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const SuccessAlert: React.FC<AlertProps> = ({ error, setError }) => {
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [error, setError]);

  return error ? (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ mb: 2 }}>
      {error}
    </Alert>
  ) : null;
};

export default SuccessAlert;
