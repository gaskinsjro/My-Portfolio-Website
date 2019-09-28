import React from 'react';
import LandingPage from './landingPage';
import {Switch, Route} from 'react-router-dom';
import AboutMe from './resume';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path = "/" component={LandingPage} />
        <Route path = "/resume" component={AboutMe} />
        <Route path = "/contact" component={Contact} />
        <Route path = "/projects" component={Projects} />
        <Route path = "/resume" component={Resume} />
        <Route path = "/landingPage" component={LandingPage} />
    </Switch>
)
export default Main;