import React, { Component } from 'react';
import routes from './route'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';
import { withRouter, Link } from 'react-router-dom';


class App extends Component {
  render() {
    console.log(this.props.location.pathname);

    return (
      this.props.location.pathname !== "/articles" ? (
        <div className="app-wrapper">

          <header className="app-header">
            <Header />
          </header>

          <article className="app-article">
            {routes}
            <Link to='articles'>
              <i className='apparrow appright'></i>
            </Link>
          </article>

          <footer className="app-footer">
            <Footer />
          </footer>

        </div>
      ) : (
          <div className="app-wrapper">

            <header className="app-header">
              <Header />
            </header>

            <article className="app-article-no-footer">
              {routes}
            </article>

          </div>
        )

    );
  }
}

export default withRouter(App);
