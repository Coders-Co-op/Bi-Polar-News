import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import {Link} from 'react-router-dom'

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
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <Link to='/'>
          <h1>Header</h1>
        </Link>
        <span onClick={()=>this.toggleDrawer()}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
        <Drawer 
          open={this.state.drawerOpen} 
          onClose={()=>this.toggleDrawer()}
          anchor='right'  
        >
          <div
            tabIndex={0}
            role="button"
            onClick={()=>this.toggleDrawer()}
            onKeyDown={()=>this.toggleDrawer()}
          >
            <ul>
          <Link to="/topics">
              <li>Topics</li>
          </Link>
          <Link to="/about">
              <li>About</li>
          </Link>
          <Link to='/donate'>
              <li>Donate</li>
          </Link>
            </ul>
          </div>
        </Drawer>
      </div>
    )
  }
}

