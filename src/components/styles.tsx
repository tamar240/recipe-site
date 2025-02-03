import { SxProps, Theme } from '@mui/system';

export const appBarStyles: SxProps<Theme> = {
  display: { xs: 'none', md: 'flex' },
  mr: 1,
};

export const typographyStyles: SxProps<Theme> = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
};

export const updateStyle : SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const menuIconStyles: SxProps<Theme> = {
  display: { xs: 'flex', md: 'none' },
  mr: 1,
};

export const mobileTypographyStyles: SxProps<Theme> = {
  mr: 2,
  display: { xs: 'flex', md: 'none' },
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
};

export const buttonStyles: SxProps<Theme> = {
  my: 2,
  color: 'white',
  display: 'block',
};

export const menuStyles: SxProps<Theme> = {
  display: { xs: 'block', md: 'none' },
};

export const tooltipStyles: SxProps<Theme> = {
  p: 0,
};

export const avatarMenuStyles: SxProps<Theme> = {
  mt: '45px',
};

export const modalStyle: SxProps<Theme> = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const loginButtonStyle: SxProps<Theme> = {
    position: "absolute",
    top: "100px",
    left: "10px",
backgroundColor:"gray"
};

export const signUpButtonStyle: SxProps<Theme> = {
    position: "absolute",
    top: "100px",
    left: "105px",
backgroundColor:"gray"

};

export const textFieldStyle: SxProps<Theme> = {
    mt: 2,
};

export const modalDescriptionStyle: SxProps<Theme> = {
    mt: 2,
};

export const submitButtonStyle: SxProps<Theme> = {
    mt: 2,
    color:'gray',
    marginLeft: '5px',
};

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
};

export const recipeListStyle: SxProps<Theme> = {
  width: '30%',
  maxWidth: '300px',
  padding: '1rem',
  overflowY: 'auto',
  height:'80vh',
  marginTop:'15px'
};

export const recipeDetailsStyle: SxProps<Theme> = {
  width: '70%',
  padding: '2rem',
  overflowY: 'auto',
};

export const buttonStyle: SxProps<Theme> = {
  color: 'orange',
  border: '0px solid orange',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
};