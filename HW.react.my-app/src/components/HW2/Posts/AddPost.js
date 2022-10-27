import React from 'react';
import {useEffect, useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {PostAction} from "./addPostAction";
import { v4 as uuidv4 } from 'uuid';

const AddPost = ({props}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [inputValue,setInputValue] = useState("");
  // props = inputValue;

  const handlerModalOpen = () => {
    setOpenModal(true);
    console.log(openModal);
  };
  const handlerModalClose = () => {
    setOpenModal(false);
    setInputValue("")
  };
  const handlerAddPost = ()=>{
    setInputValue(inputValue);
    dispatch(PostAction({id:uuidv4(), title:inputValue}))
    handlerModalClose()
  }

  return (
    <>
      <Button sx={{fontSize: 25}} onClick={handlerModalOpen}>New Post</Button>
      <Dialog open={!!openModal} onClose={handlerModalClose}
              aria-labelledby={"form-dialog-title"}>
        <DialogTitle id="form-dialog-title">Add Post</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
            margin="dense"
            id="inputValue"
            label="Add new post"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerModalClose}>Cancel</Button>
          <Button onClick={handlerAddPost}>Add</Button>
        </DialogActions>

      </Dialog>
    </>
  );
};

export default AddPost;