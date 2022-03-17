import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import {
  FormControl, Box, TextField, Button,
} from '@mui/material';
import Post from '../../assets/images/Post.jpg';
import { IPost } from '../../redux/Posts/PostsInterfaces';
import { deletePostStart, editPostStart } from '../../redux/Posts/PostsActions';

const PostItemUser = ({
  title,
  _id,
}: IPost) => {
  const [redacting, setRedacting] = useState(false);
  const [postText, setPostText] = useState({
    _id,
    title,
  });
  const location = useLocation();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePostStart(_id));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(editPostStart(postText));
    setRedacting(!redacting);
  };

  const handleChange = (event: any) => {
    const { value, name: targetName } = event.target;

    setPostText({ ...postText, [targetName]: value });
  };

  const handleEdit = () => {
    setRedacting(!redacting);
  };

  return (
    <div className="forum__user-data-field-item">
      {
      redacting
        ? (
          <FormControl
            variant="standard"
            sx={{
              width: '100%',
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box sx={{
                display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'flex-end',
              }}
              >
                {' '}
                <TextField
                  id="input-with-sx"
                  onChange={handleChange}
                  name="title"
                  value={postText.title}
                  variant="standard"
                />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Box>
            </form>
          </FormControl>
        ) : (
          <Link to={`/posts/${_id}`} className="forum__user-data-field-item_link">
            <div className="forum__user-data-field-item_info">
              <img src={Post} alt="post preview" className="forum__user-data-field-item-image" />
              <div className="forum__user-data-field-item-title">{title}</div>
            </div>
          </Link>
        )
    }
      {
        location.pathname === '/' ? (
          <div>
            <div onClick={handleEdit}>
              <EditIcon />
            </div>
            <div onClick={handleDelete}>
              <ClearIcon />
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

export default PostItemUser;
