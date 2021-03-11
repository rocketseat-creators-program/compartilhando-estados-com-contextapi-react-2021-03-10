/* eslint-disable no-use-before-define */
import { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { GithubContext } from '../../contexts'
const SearchInput = () => {
  const { getProfile, getUserList, selectedUser, userList} = useContext(GithubContext)
  const fetchData = (term) => {
    if(term.length >= 3) {
      getUserList(term)
    }
  }

  const getUser = (userName) => {
    getProfile(userName)
  }
  return (
    <div className="SearchInput">
      <Autocomplete
        freeSolo
        id="search-user"
        disableClearable
        style={{ width: '600px'}}
        onSelect={e => fetchData(e.target.value)}
        onChange={e => getUser(e.target.innerHTML)}
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