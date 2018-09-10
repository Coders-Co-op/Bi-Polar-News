import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import {Link} from 'react-router-dom'
import logo from '../../images/liberal-and-conservative-news-sources.png'
import './header.css'

export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      drawerOpen: false
    }
  }
  toggleDrawer(){
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
  render() {    
    return (
      <header className="header" style={{display:'flex', justifyContent:'space-between'}}>
        <div><Link to='/'>
          <img id="imge" src = {logo} alt="Liberal and Conservative News Sources Compared and Contrasted" /></Link>
        </div>

        <div><h1>Compare &amp; Constrast<br />Liberal &amp; Conservative News Sources</h1></div>

        <div onClick={()=>this.toggleDrawer()}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>

        <Drawer 
          open={this.state.drawerOpen} 
          onClose={()=>this.toggleDrawer()}
          anchor='right'>

          <div
            tabIndex={0}
            role="button"
            onClick={()=>this.toggleDrawer()}
            onKeyDown={()=>this.toggleDrawer()}>
            <ul>
          <Link to="/topics-view"><li>Topics</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/articles"><li>Articles</li></Link>
          <Link to='/donate'><li>Donate</li></Link>
            </ul>
          </div>

        </Drawer>
      </header>
    )
  }
}

