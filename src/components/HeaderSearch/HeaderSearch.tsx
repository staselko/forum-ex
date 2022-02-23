import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FormInput from '../../FormInput/FormInput';
import { selectUserFromSearch } from '../../redux/Users/UserSelector';
import HeaderSearchUserList from '../HeaderSearchUserList/HeaderSearchUserList';

const HeaderSearch = () => {
  const [searchingValue, setSearchingValue] = useState('');
  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchingValue(value);
  };

  const select = useSelector(selectUserFromSearch(searchingValue));

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormInput
        title="search"
        name="searchingValue"
        label="Search"
        value={searchingValue}
        handleChange={handleChange}
      />
      {
        select.map((user) => <HeaderSearchUserList key={user.id} {...user} />)
      }
    </Box>
  );
};

export default HeaderSearch;
