
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/about/About'
import Article from '../components/article/Article'
import Donate from '../components/donate/Donate'
import Drawer from '../components/drawer/Drawer'
import Intro from '../components/intro/Intro'
import Modal from '../components/modal/Modal'
import Slider from '../components/slider/Slider'
import Topics from '../components/topics/Topics'
import Photos from '../components/photos/Photos'

export default (
    <Switch >
     <Route exact path="/" component={Intro} />

    </Switch >
)