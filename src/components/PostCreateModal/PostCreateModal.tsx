import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { v4 as uid } from 'uuid';
import { useDispatch } from 'react-redux';
import FormInput from '../../components/FormInput/FormInput';
import { createPostStart } from '../../redux/Posts/PostsActions';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PostCreateModal = ({ userId }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    user: userId,
    id: uid(),
    title: '',
    body: '',
  });
  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(createPostStart(postData));
    handleClose();
    setPostData({
      user: userId,
      id: uid(),
      title: '',
      body: '',
    });
  };

  const handleChange = (event: any) => {
    const { value, name: attrName } = event.target;
    setPostData({ ...postData, [attrName]: value });
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ borderRadius: 7, border: 1 }}>Create Post</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create Post
            </Typography>
            <form method="PUT" onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="title"
                label="Title"
                value={postData.title}
                handleChange={handleChange}
              />
              <FormInput
                type="text"
                name="body"
                label="Text"
                value={postData.body}
                handleChange={handleChange}
              />
              <Button type="submit">
                Post It
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PostCreateModal;
