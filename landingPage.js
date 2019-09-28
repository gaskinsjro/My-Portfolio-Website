import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col={12}>
                        <img src="../images/photo.jpg" alt="avatar" className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Full Stack Web-Developer</h1>
                            <hr/>
                            <p>Java | JavaScript | CSS | HTML | Bootstrap | React | React Native | Node.js | Firebase</p>
                            <div className= "social-links">
                                {
                                //LinkedIn
                                }
                                <a href="https://www.linkedin.com/in/ogjr/" rel="noopener norefrrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/></a>
                                    {
                                //Github
                                }
                                <a href="https://github.com/gaskinsjro" rel="noopener norefrrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/></a>
                                    {
                                //Resume
                                }
                                 <a href="resume.pdf" rel="noopener norefrrer" target="_blank" download>
                                    <i className="fa fa-file" aria-hidden="true"/></a>
                            </div>
                        </div>
                    </Cell>


                </Grid>
            </div>
        )
    }
}
export default LandingPage;