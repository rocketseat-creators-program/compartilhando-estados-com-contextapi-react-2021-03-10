/* eslint-disable no-use-before-define */
import { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { GithubContext } from '../../contexts'

const SearchInput = () => {
  const { getProfile, getUserList, selectedUser, userList } = useContext(GithubContext);
  console.log(selectedUser)
  return (
    <div className="SearchInput">
      <Autocomplete
        freeSolo
        id="search-user"
        disableClearable
        style={{ width: '600px'}}
        onSelect={e => getUserList(e.target.value)}
        onChange={e => getProfile(e.target.innerHTML)}
        options={userList.map((option) => option.login)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pesquise o usuário"
            margin="normal"
            variant="filled"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

export default SearchInput;