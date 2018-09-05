import React from 'react'
import './App.css'
import dummyData from './dummy-data'
import Search from './components/SearchBar/Search'
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authentication'
import Login from './components/Login/Login'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  search = (term) => {
    let data = dummyData.filter(post => post.username.includes(term))
    this.setState({ data })
  }

  login = (username) => {
    let user = localStorage.getItem('user')
    if (!user) localStorage.setItem('user', username)
  }

  render() {
    const App = () => {
      return (
        <div className="App">
          <Login login={this.login} />
          <Search
            className="Search"
            search={this.search}
          />
          <PostsPage {...this.state} />
        </div>
      )
    }

    const HOCApp = Authenticate(App)

    return (
      <HOCApp App={App} />
    )
  }
}

export default App
