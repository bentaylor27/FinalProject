import React, { Component } from 'react'
import '../src/App.css'


export default class App extends Component {
  render() {
    return (
      <div>
        <div className='body'>
          <header>
            <h1>Hi, I'm Ben Taylor</h1>
            <nav>Welcome</nav>
          </header>
        </div>
        <footer className='footer'>
            <a href='https://www.linkedin.com/in/ben-taylor-se/' target='_blank'>Social</a>
        </footer>
      </div>
    )
  }
}
