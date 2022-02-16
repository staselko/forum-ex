import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../redux/Users/UsersInterfaces';
import { IRootReducer } from '../../redux/RootReducer';
import UserImage from '../../assets/images/UserImage.jpg';
import './UserItem.scss';
import { mergeUserAndPosts } from '../../ApiUtils/UserPosts';
import { mergePostsToUser } from '../../redux/Users/UsersActions';

const UserItem = (item: IUser) => {
  const {
    name,
    email,
    phone,
  } = item;
  const posts = useSelector((store: IRootReducer) => store.posts.allPosts);
  const userPosts = mergeUserAndPosts(item, posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mergePostsToUser(userPosts));
  }, [dispatch]);

  return (
    <div className="forum__users-field-item">
      <img src={UserImage} alt="user" className="forum__users-field-item-avatar" />
      <div className="forum__users-field-item-info">
        <div className="forum__users-field-item-info-name">{name}</div>
        <div className="forum__users-field-item-info-email">{email}</div>
        <div className="forum__users-field-item-phone">{phone}</div>
      </div>
    </div>
  );
};

export default UserItem;
