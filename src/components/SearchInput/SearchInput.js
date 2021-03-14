/* eslint-disable no-use-before-define */
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchInput = () => {
  
  return (
    <div className="SearchInput">
      <Autocomplete
        freeSolo
        id="search-user"
        disableClearable
        style={{ width: '600px'}}
        onSelect={e => console.log(e.target.value)}
        onChange={e => console.log(e.target.innerHTML)}
        options={[].map((option) => option.login)}
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