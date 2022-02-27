import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/Users/UserSelector';
import FormInput from '../FormInput/FormInput';
import { changeUserProfileStart } from '../../redux/Users/UsersActions';

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

const ProfileEditModal = ({ userId }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const {
    name, phone, username, email, id,
  } = useSelector(selectCurrentUser(Number(userId)));

  const [userData, setUserData] = useState({
    name, phone, username, email, id,
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(changeUserProfileStart(userData));
    handleClose();
  };

  const handleChange = (event: any) => {
    const { value, name: attrName } = event.target;

    setUserData({ ...userData, [attrName]: value });
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ borderRadius: 7, border: 1 }}>Edit Profile</Button>
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
              Edit Profile
            </Typography>
            <form method="PUT" onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="email"
                label="Change email"
                value={userData.email}
                handleChange={handleChange}
              />
              <FormInput
                type="text"
                name="name"
                label="Change name"
                value={userData.name}
                handleChange={handleChange}
              />
              <FormInput
                type="text"
                name="username"
                label="Change Nickname"
                value={userData.username}
                handleChange={handleChange}
              />
              <FormInput
                type="text"
                name="phone"
                label="Write email"
                value={userData.phone}
                handleChange={handleChange}
              />
              <Button type="submit">
                Confirm Changes
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProfileEditModal;