import React, { Component } from 'react';
import routes from './route'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <article>

          {routes}

        </article>

        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;
