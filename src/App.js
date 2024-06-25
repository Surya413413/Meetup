import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'

import NotFound from './components/NotFound'

import ShareContext from './context/ShareContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    userName: '',
    topics: 'Arts and Culture',
    isRegistered: false,
    errorDisplay: false,
  }

  changeUser = userName => {
    this.setState({userName})
  }

  changeTopic = topics => {
    this.setState({topics})
  }

  registerUser = () => {
    this.setState({isRegistered: true})
  }

  errorUpdate = () => {
    this.setState({errorDisplay: true})
  }

  render() {
    const {userName, topics, isRegistered, errorDisplay} = this.state
    return (
      <ShareContext.Provider
        value={{
          userName,
          topics,
          isRegistered,
          errorDisplay,
          changeUser: this.changeUser,
          changeTopic: this.changeTopic,
          registerUser: this.registerUser,
          errorUpdate: this.errorUpdate,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </ShareContext.Provider>
    )
  }
}

export default App
