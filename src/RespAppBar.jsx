import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import RAMIcon from './RAMIcon'

const sections = [
  {label: 'Ismertetés', id: 'ismertetes'},
  {label: 'Letöltés', id: 'letoltes'},
  {label: 'GY.I.K', id: 'gyik'},
  {label: 'Vélemények', id: 'velemenyek'}
];

function RespAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const scrollToId = (id) => {
    const elem = document.querySelector(`#${id}`);
    elem.scrollIntoView(true/*{behavior: 'smooth'} why isn't this working on phone??????*/);
  };

  return (
    <AppBar position="fixed" sx={{top: 0}}>
      <Container>
        <Toolbar disableGutters>
          <RAMIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, widthh: '1.5em', heightt: '1.5em' }}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#root"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RAM Letöltés
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section.id} onClick={() => {scrollToId(section.id); handleCloseNavMenu();}}>
                  <Typography textAlign="center">{section.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <RAMIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2, widthh: '1.5em', heightt: '1.5em' }}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RAM Letöltés
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => {handleCloseNavMenu(); scrollToId(section.id)}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {section.label}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default RespAppBar;
