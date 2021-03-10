/* eslint-disable no-use-before-define */
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getGithubUser, getGithubUserList } from '../../services'

const SearchInput = () => {
  const [userList, setUserList] = useState([])
  const fetchData = (term) => {
    if(term.length >= 3) {
      getGithubUserList(term)
      .then(data => setUserList(data.data.items))
    }
  }

  const getUser = (userName) => {
    getGithubUser(userName)
    .then(data => console.log(data.data))
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