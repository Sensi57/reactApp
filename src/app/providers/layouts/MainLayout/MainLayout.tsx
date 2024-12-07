import React, { useState } from 'react';
import { AppBar, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, IconButton, CssBaseline } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Info as InfoIcon, ContactMail as ContactMailIcon } from '@mui/icons-material';
import { Outlet, Link } from 'react-router-dom';

const drawerWidth = 240;

const MainLayout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);  
  };

  const DrawerContent = () => (
    <div>
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Главная" />
        </ListItemButton>
        <ListItemButton component={Link} to="/about">
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="О нас" />
        </ListItemButton>
        <ListItemButton component={Link} to="/contact">
          <ListItemIcon><ContactMailIcon /></ListItemIcon>
          <ListItemText primary="Контакты" />
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Мой сайт
          </Typography>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            display: { xs: 'block', sm: 'block', md: 'block' },
          }}
          variant={mobileOpen ? 'temporary' : 'permanent'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          <DrawerContent />
        </Drawer>
      </nav>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginLeft: { sm: drawerWidth, xs: mobileOpen ? drawerWidth : 0 },
        }}
      >
        <Toolbar />
        <h1>Главная страница</h1>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
