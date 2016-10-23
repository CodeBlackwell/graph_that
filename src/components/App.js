import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import CSS from './AppStyles'
import TweetBox from '../containers/Tweetbox'

export default class App extends Component {
  render() {
    return (
      <div className="wrapper" style={CSS.wrapper}>
        <header className="header" style={CSS.header}><h1>Graph That!</h1></header>
        <article className="main" style={CSS.main}>
        {this.props.children}        
        </article>
        <aside className="aside aside-1" style={CSS.aside1}>
          <Link to={'/hello'} style={CSS.link}> What up? </Link>
          <br/>
          <Link to={'/goodbye'} style={CSS.link}> Goodbye </Link>
        </aside>
        <TweetBox style={CSS.aside2}>Aside 2</TweetBox>
        <footer className="footer" style={CSS.footer}>Footer</footer>
      </div>      
    )
  }
}

