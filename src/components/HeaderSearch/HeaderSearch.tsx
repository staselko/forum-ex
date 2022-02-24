import {
  Box, Button, Collapse,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FormInput from '../../FormInput/FormInput';
import { IRootReducer } from '../../redux/RootReducer';
import { selectUserFromSearch } from '../../redux/Users/UserSelector';
import HeaderSearchUserList from '../HeaderSearchUserList/HeaderSearchUserList';
import { closeSearchingField, toggleSearchingField } from '../../redux/Users/UsersActions';

import './HeaderSearch.scss';

const HeaderSearch = () => {
  const [searchingValue, setSearchingValue] = useState('');
  const isSearching = useSelector((store: IRootReducer) => store.users.isSearching);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchingValue(value);
  };

  useEffect(() => {
    dispatch(closeSearchingField());
    setSearchingValue('');
  }, [location]);

  const handleClick = () => {
    dispatch(toggleSearchingField());
  };

  const select = useSelector(selectUserFromSearch(searchingValue));

  return (
    <div className="forum__header-search">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ height: 40, display: 'flex', flexDirection: 'row-reverse' }}>
          <Button onClick={handleClick} sx={{ color: '#fff' }}><SearchIcon /></Button>
          <Box
            sx={{
              '& > :not(style)': {
                display: 'flex',
                justifyContent: 'space-around',
                height: 40,
                width: 300,
              },
            }}
          >
            <div>
              <Collapse
                in={isSearching}
                orientation="horizontal"
              >
                <FormInput
                  title="search"
                  name="searchingValue"
                  label="Search"
                  value={searchingValue}
                  handleChange={handleChange}
                  className="form-input-header"
                />
              </Collapse>
            </div>
          </Box>
        </Box>
      </Box>
      {
        isSearching
          ? (
            <div className="forum__header-search-result">
              {
          searchingValue && isSearching

            ? select.map((user) => <HeaderSearchUserList key={user.id} {...user} />)
            : <h2 className="forum__header-search-result-error">Type any name or username</h2>

        }
            </div>
          ) : null
      }
    </div>
  );
};

export default HeaderSearch;
