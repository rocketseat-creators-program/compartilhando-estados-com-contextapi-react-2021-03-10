import { createContext, useState } from 'react';

import selectedUser from '../data/selected.json'
import userList from '../data/users.json'

export const GithubContext = createContext({});


export const GithubContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({})
  const [profileList, setUserList] = useState([])
  const getProfile = async (username) => {
    setUserProfile(selectedUser);
  }

  const getUserList = async (username) => {
    setUserList(userList.items)
  }

  const githubProviderValue = {
    selectedUser: userProfile,
    userList: profileList,
    getProfile,
    getUserList,
  }

  return <GithubContext.Provider value={githubProviderValue}>{children}</GithubContext.Provider>
}