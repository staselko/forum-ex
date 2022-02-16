import React from 'react';
import { IUserItem } from '../../redux/Users/UsersInterfaces';
import UserImage from '../../assets/images/UserImage.jpg';
import './UserItem.scss';

const UserItem = ({ name, email, phone }:IUserItem) => {
  console.log();
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
