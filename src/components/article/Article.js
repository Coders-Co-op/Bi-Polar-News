
import React, { Component } from 'react'

export default class Article extends Component {
  render() {
  console.log("i am props match", this.props.match);
    return (
      <div>
        <h1>Article</h1>
      </div>
    )
  }
}
