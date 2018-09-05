
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/about/About'
import Article from './components/article/Article'
import Donate from './components/donate/Donate'
import Drawer from './components/drawer/Drawer'
import Intro from './components/intro/Intro'
import Modal from './components/modal/Modal'
import Slider from './components/slider/Slider'
import Topics from './components/topics/Topics'
import Photos from './components/photos/Photos'

const routes = (
    <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/article" component={Article} />
        <Route path="/slider" component={Slider} />
        <Route path="/modal" component={Modal} />
        <Route path="/drawer" component={Drawer} />
        <Route path="/photos" component={Photos} />
        <Route path="/topics" component={Topics} />
        <Route path="/about" component={About} />
        <Route path="/donate" component={Donate} />

    </Switch>
);

export default routes