import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import GoodbyeWorld from './GoodbyeWorld'
import HelloWorld from './HelloWorld'
import CSS from './AppStyles'

export default class App extends Component {
  render() {
    return (
      <div className="wrapper" style={CSS.wrapper}>
        <header className="header" style={CSS.header}>Header</header>
        <article className="main" style={CSS.main}>
        {this.props.children}        
        </article>
        <aside className="aside aside-1" style={CSS.aside1}>
          <Link to={'/hello'}> What up? </Link>
          <br/>
          <Link to={'/goodbye'}> Goodbye </Link>
        </aside>
        <aside className="aside aside-2" style={CSS.aside2}>Aside 2</aside>
        <footer className="footer" style={CSS.footer}>Footer</footer>
      </div>      
    )
  }
}

