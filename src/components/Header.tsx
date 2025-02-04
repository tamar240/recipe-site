import * as React from 'react';
import { useContext, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from './User';
import { appBarStyles, menuIconStyles, mobileTypographyStyles, buttonStyles, menuStyles, tooltipStyles, avatarMenuStyles, typographyStyles } from './styles';
import FoodBankRoundedIcon from '@mui/icons-material/FoodBankRounded';
const pages = [
  { text: 'Home', link: '/home' },
  { text: 'Our Recipes', link: '/recipeList' },
  { text: 'Add your recipe', link: '/recipeForm', requiresLogin: true },
];
const settings = [
  { text: 'update', link: '/update' },
  { text: 'Logout', link: '/logout' },
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [state] = useContext(UserContext);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const avatarLetter = state.firstName ? state.firstName.charAt(0).toUpperCase() : '';
  return (
     <> <AppBar position="static" sx={{ backgroundColor: 'orange' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FoodBankRoundedIcon sx={appBarStyles} />
            <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu" sx={typographyStyles}>
              Yummy
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={menuStyles}>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={menuStyles}   >
                  {pages.filter((page) => !(page.requiresLogin && state.id <= 0)) // מסנן אם אין התחברות
                    .map((page) => (
                      <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                        <Button component={Link} to={page.link} >
                          {page.text}
                        </Button>
                      </MenuItem>))}
                </Menu>
              </Menu>
            </Box>
            <AdbIcon sx={menuIconStyles} />
            <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" sx={mobileTypographyStyles}>
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {state.id== 0 &&<Button component={Link} to="/" onClick={handleCloseNavMenu} sx={buttonStyles}>
                Connect
              </Button>}
              <Button component={Link} to="/home" onClick={handleCloseNavMenu} sx={buttonStyles}>
                Home
              </Button>
              <Button component={Link} to="/recipeList" onClick={handleCloseNavMenu} sx={buttonStyles}>
                Our Recipes
              </Button>
              {state.id > 0 && (
                <Button component={Link} to="/recipeForm" onClick={handleCloseNavMenu} sx={buttonStyles}>
                  Add your recipe
                </Button>)}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={tooltipStyles}>
                  {state.id > 0 && <Avatar>{avatarLetter}</Avatar>}
                </IconButton>
              </Tooltip>
              <Menu sx={avatarMenuStyles} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting.text} onClick={handleCloseUserMenu} component={Link} to={setting.link}>
                    <Typography sx={{ textAlign: 'center' }}>{setting.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar> </>  );}
export default ResponsiveAppBar;