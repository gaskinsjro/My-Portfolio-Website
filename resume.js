import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="../images/photo.jpg" style={{  height: '400px'}}/>
                                <h2 style={{paddingTop: '0.2em'}}>Omari Gaskins Jr.</h2>
                                <h4 style={{color: 'grey'}}>Human Computer Interaction Major</h4>
                                <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                                <h5>Address</h5>
                                <p>245 W Norwich Ave</p>
                                <h5> Phone </h5>
                                <p>(937) 823-6473</p>
                                <h5>School Email</h5>
                                <p>gaskins.30@osu.edu</p>
                                <h5>Personal Email</h5>
                                <p>omari.gaskins.dev@gmail.com</p>
                                <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                        </div>
                    </Cell>
                    
                   
                    <Cell className = "resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear ={2017}
                        endYear="May 2021"
                        schoolName="The Ohio State University"
                        schoolDescription="Bachelor of Arts, Major in Human-Computer Interaction and Computer Science and French Minor. Cumulative GPA: 3.29/4.0. Honors: Dean’s List Autumn 2017, Autumn 2018"
                        />
                        <hr style={{borderTop: '3px solid #ed22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear="June 2018"
                            endYear="July 2018"
                            jobName="Xtern Bootcamp"
                            jobDescription="Participated in a 3-week intensive training program focused on software development and took project-based curriculum on JavaScript which demonstrated real-world applications. Learned the React Framework, GitHub creation and prepared for technical interviews."
                        />
                        <Experience
                            startYear="June 2018"
                            endYear="July 2018"
                            jobName="Chatarang"
                            jobDescription="Developed private messaging application that utilizes Google Firebase, React.js, Node.js, and Redux. Designed application using Twitter Bootstrap."
                        />
                        <Experience
                            startYear="Autumn 2017"
                            endYear="September 2019"
                            jobName="Thompson Library Circulation Assistant"
                            jobDescription="Responsible for routine circulation, shelf maintenance and clerical functions using automated circulation system."
                        />
                        <hr style={{borderTop: '3px solid #ed22947'}}/>
                        <Skills
                            skill="Java"
                            progress={85}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={70}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={65}
                        />
                        <Skills
                            skill="React"
                            progress={45}
                        />
                        <Skills
                        skill="React Native"
                        progress={40}
                    />
                        <Skills
                        skill="PhotoShop"
                        progress={65}
                    />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;