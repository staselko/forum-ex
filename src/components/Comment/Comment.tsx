import React, { useState } from 'react';
import {
  Avatar, Box, Button, Card, CardContent, FormControl, TextField, Typography,
} from '@mui/material';
import { Link, useHref } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { IComments } from '../../redux/Posts/PostsInterfaces';

import './Comment.scss';
import { selectCurrentUser } from '../../redux/Users/UserSelector';
import { IRootReducer } from '../../redux/RootReducer';
import { changeCommentStart } from '../../redux/Posts/PostsActions';

const Comment = ({ userId, body, _id }: IComments) => {
  const [redacting, setRedacting] = useState(false);
  const [redactedComment, setRedactedComment] = useState({
    _id,
    body,
  });
  const dispatch = useDispatch();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(changeCommentStart(redactedComment));

    setRedactedComment({
      ...redactedComment,
      body: '',
    });
  };

  const handleChange = (event: any) => {
    const { value, name: targetName } = event.target;

    setRedactedComment({ ...redactedComment, [targetName]: value });
  };
  const { firstName, secondName } = useSelector(selectCurrentUser(userId));

  const { id } = useSelector((state: IRootReducer) => state.users.currentUser);
  const link = useHref('/users');
  return (
    <div className="forum__comment">
      <Card
        className="forum__comment-item"
        sx={{
          boxShadow: 'none', borderRadius: 0, borderBottom: '1px solid #e6e6e6', padding: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex', alignItems: 'center', padding: '10px',
          }}
          className="forum__post-page-profile"
        >
          <Avatar
            className="forum__post-page-profile-avatar"
            alt="users avatar"
            sx={{ height: 45, width: 45, marginRight: '20px' }}
          />
          <CardContent sx={{
            '&:last-child': { paddingBottom: 0 }, padding: 0, color: '#000', lineHeight: 1,
          }}
          >
            <Typography gutterBottom variant="subtitle2" component="div" fontWeight={500} sx={{ paddingBottom: 0, lineHeight: 1 }}>
              <Link to={`${link}/${userId}`}>{`${firstName} ${secondName}`}</Link>
            </Typography>
            {
              redacting ? (
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
                        name="body"
                        value={redactedComment.body}
                        variant="standard"
                      />
                      <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                        Send
                      </Button>
                    </Box>
                  </form>
                </FormControl>
              ) : (
                <Typography gutterBottom variant="subtitle2" component="div" fontWeight={500} sx={{ paddingBottom: 0, lineHeight: 1 }}>
                  {body}
                </Typography>
              )
            }
          </CardContent>
          {
            userId === id
              ? (
                <div onClick={() => setRedacting(!redacting)}>
                  <EditIcon />
                </div>
              )
              : null
          }
        </Box>
      </Card>
    </div>
  );
};

export default Comment;
