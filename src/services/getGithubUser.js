import { api } from './api'

export const getGithubUser = (username) => api.get(`/users/${username}`)

export const getGithubUserList = (query) => api.get(`/search/users?q=${query}`)