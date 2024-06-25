import React from 'react'

const ShareContext = React.createContext({
  userName: '',
  topics: 'Arts and Culture',
  changeUser: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerUser: () => {},
  showError: false,
  errorUpdate: () => {},
})

export default ShareContext
