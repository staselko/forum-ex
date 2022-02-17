import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../redux/Users/UsersInterfaces';
import UserImage from '../../assets/images/UserImage.jpg';
import './UserItem.scss';

const UserItem = (item: IUser) => {
  const {
    name,
    email,
    phone,
    id,
  } = item;

  return (
    <Link to={`${id}`} className="forum__users-field-item">
      <div className="forum__users-field-item">
        <img src={UserImage} alt="user" className="forum__users-field-item-avatar" />
        <div className="forum__users-field-item-info">
          <div className="forum__users-field-item-info-name">{name}</div>
          <div className="forum__users-field-item-info-email">{email}</div>
          <div className="forum__users-field-item-phone">{phone}</div>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
