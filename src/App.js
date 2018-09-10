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
    const {getFiveArticles} = this.props
    axios.get("/api/topics").then(res => {
      let topics = res.data;
      const random = Math.floor(Math.random() * topics.length);
      let topic = topics[random].topic_name;
      axios.get(`/api/onload/${topic}`).then(res => {
        getFiveArticles(res.data);
      });
    })
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
