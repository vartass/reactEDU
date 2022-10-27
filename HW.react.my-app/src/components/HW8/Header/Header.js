import {Link, NavLink} from "react-router-dom";
import "./Header.css"
import React, {useEffect, useState} from 'react';
import useInput from "../../hooks/useInput";
import {connect, useDispatch, useSelector} from "react-redux";
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import store from "../../../redux/configStore";
// import auth from "../../Auth/Auth";

const settings = ['Profile', 'Login', 'Logout'];

const Header = () => {

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openModal, setOpenModal] = useState(false)
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [btnName, setBtnName] = useState("Login")

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlerModalOpen = () => {
    setOpenModal(true);
    setName("")

  };
  const handlerModalClose = () => {
    setOpenModal(false);
  };
  const handlerLogin = () =>{
    setOpenModal(false);
    setBtnName(name);
    handleCloseUserMenu();
  }
  const handlerLogout = () =>{
    setBtnName("Login");
    handleCloseUserMenu();
  }

  return (
    // position="static"
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >HW 8/9</Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Button sx={
              {
                my: 1,
                mx: 1,
                color: 'white',
                display: 'block',
                fontSize: 20,
              }
            }>
              <Link to="posts">Posts</Link>
            </Button>
            <Button sx={
              {
                my: 1,
                mx: 1,
                color: 'white',
                display: 'block',
                fontSize: 20,
              }
            }>
              <Link to="/comments">Comments</Link>
            </Button>
            <Button sx={
              {
                my: 1,
                mx: 1,
                color: 'white',
                display: 'block',
                fontSize: 20,
              }
            }>
              <Link to="/todos">To do</Link>
            </Button>
          </Box>

          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt="L" src="/static/images/avatar/2.jpg"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={!!anchorElUser}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={settings.id}>
                <Button sx={{fontSize: 15}} onClick={handlerModalOpen}>{btnName}</Button>
                <Dialog open={!!openModal} onClose={handlerModalClose}
                        aria-labelledby={"form-dialog-title"}>
                  <DialogTitle id="form-dialog-title">Authorization</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Log in to site</DialogContentText>
                    <TextField
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Login"
                      type="text"
                      fullWidth
                    />
                    <TextField
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                      margin="dense"
                      id="pass"
                      label="Password"
                      type="password"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handlerModalClose}>Cancel</Button>
                    <Button onClick={handlerLogin}>Log in</Button>
                  </DialogActions>

                </Dialog>
              </MenuItem>
              <MenuItem key={settings.id} onClick={handlerLogout}>
                <Button sx={{fontSize: 15}}>LogOut</Button>
              </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header