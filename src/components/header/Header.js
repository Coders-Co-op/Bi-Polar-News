import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import {Link} from 'react-router-dom'
import logo from '../../images/liberal-and-conservative-news-sources.png'


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
      <header >
        <div><Link to='/'>
          <img id="imge" src = {logo} alt="Liberal and Conservative News Sources Compared and Contrasted" /></Link>
        </div>

        <div className='screen-links'>
          <ul>
            <li><Link to="/topics" className="link-style">Topics</Link></li>
            <li><Link to="/about" className="link-style">About</Link></li>
            <li><Link to="/articles" className="link-style">Articles</Link></li>         
          </ul>
        </div>


        <div className="toggle-drawer" 
          onClick={()=>this.toggleDrawer()} >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>


        <Drawer 
          open={this.state.drawerOpen} 
          onClose={()=>this.toggleDrawer()}
          anchor='right'>
          <div
            className='headerDrawer'
            tabIndex={0}
            role="button"
            onClick={()=>this.toggleDrawer()}
            onKeyDown={()=>this.toggleDrawer()}>
            <ul>
          <Link to="/topics" style={{textDecoration:'none'}}><li>Topics</li></Link>
          <Link to="/about" style={{textDecoration:'none'}}><li>About</li></Link>
          <Link to="/articles" style={{textDecoration:'none'}}><li>Articles</li></Link>          
            </ul>
          </div>

        </Drawer>
      </header>
    )
  }
}

