import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
  <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/landingPage">Home</Link>
                <Link to="/resume">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="">
            <Navigation>
                <Link to="/landingPage">Home</Link>
                <Link to="/resume">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
