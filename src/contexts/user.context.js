import { createContext, useState } from 'react'
import users from '../data/users.json'
import selected from '../data/selected.json'

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({})
  const [userList, setUserList] = useState([])

  const getUserList = (username) => {
    setUserList(users.items);
  }

  const selectUserProfile = (username) => {
    setUserProfile(selected)
  }

  const userProviderValue = {
    selectedUser: userProfile,
    userList,
    getUserList,
    selectUserProfile,
  }

  return <UserContext.Provider value={userProviderValue}>{children}</UserContext.Provider>
}