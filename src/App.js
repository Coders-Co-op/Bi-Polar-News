import React, { Component } from 'react';
import routes from './route'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import axios from "axios";
import './App.css';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { getFiveArticles } from "./ducks/reducer"


class App extends Component {
  componentDidMount() {
    const random = Math.floor(Math.random() * 2);
    //will need to update this to make an axios call to get all topics
    let topics = ["politics", "business", "education"]
    let topic = topics[random];
    const {getFiveArticles} = this.props
    axios.get(`/api/onload/${topic}`).then(res => {
      getFiveArticles(res.data);
    });
  }

  render() {
  console.log("i am props match", this.props.match);

    return (
      <div className="app-wrapper">
        <header className="app-header">
          <Header />          
        </header>

        <article className="app-article">

          {routes}

        </article>

        <footer className ="app-footer">
          <Footer />
        </footer>

      </div>
    );
  }
}

// export default withRouter(connect(mapstatetoprops, {}) (app));
export default withRouter(connect(null, {getFiveArticles} )(App));
