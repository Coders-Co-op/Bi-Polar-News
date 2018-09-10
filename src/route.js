
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import Articles from './components/articles/Articles';
// import ArticlesTwo from './components/articles/ArticlesTwo';
// import ArticlesThree from './components/articles/ArticlesThree';
// import ArticlesFour from './components/articles/ArticlesFour';
// import ArticlesFive from './components/articles/ArticlesFive';
import Donate from './components/donate/Donate';
import Intro from './components/intro/Intro';
import Modal from './components/modal/Modal';
import Slider from './components/slider/Slider';
import Topics from './components/topics/Topics';
import Photos from './components/photos/Photos';

const routes = (
    <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/articles" component={Articles} />
        {/* <Route path="/articles-2" component={ArticlesTwo} />
        <Route path="/articles-3" component={ArticlesThree} />
        <Route path="/articles-4" component={ArticlesFour} />
        <Route path="/articles-5" component={ArticlesFive} /> */}
        <Route path="/slider" component={Slider} />
        <Route path="/modal" component={Modal} />        
        <Route path="/photos" component={Photos} />
        <Route path="/topics" component={Topics} />
        <Route path="/about" component={About} />
        <Route path="/donate" component={Donate} />

    </Switch>
);

export default routes