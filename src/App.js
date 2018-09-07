import React, { Component } from 'react';
import routes from './route'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';
import {withRouter} from 'react-router';
// import { connect } from 'react-redux';


class App extends Component {

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
export default withRouter(App);
