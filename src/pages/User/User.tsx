import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostItem from '../../components/PostItem/PostItem';
import { selectCurrentUser } from '../../redux/Users/UserSelector';
import UserImage from '../../assets/images/UserImage.jpg';

import './User.scss';

const User = () => {
  const { userId } = useParams();
  const {
    mail,
    name,
    website,
    phone,
    posts,
  } = useSelector(selectCurrentUser(Number(userId)));

  return (
    <div className="forum__user-page">
      <div className="forum__user-page-profile">
        <div>
          <img src={UserImage} alt="user" />
        </div>
        <div className="forum__user-page-profile-contacts">
          <div className="forum__user-page-profile-contacts-item">{name}</div>
          <div className="forum__user-page-profile-contacts-item">{mail}</div>
          <div className="forum__user-page-profile-contacts-item">{website}</div>
          <div className="forum__user-page-profile-contacts-item">{phone}</div>
        </div>
      </div>
      <div className="forum__user-page-posts">
        <h1>{`${name}'s Posts`}</h1>
        {posts?.map((item) => <PostItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default (User);
