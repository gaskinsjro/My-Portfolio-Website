import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Omari Gaskins Jr.</h2>
                        <img src="../images/Professional Photo.jpg" alt="avatar" style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> Hello, my name is Omari Gaskins Jr, and I am a Human Computer Interaction Major at 
                        the Ohio State University. I have experience in Java, JavaScript, React, React Native and Bootstrap primarily. 
                        I love to learn, and hope to someday become a UI/UX Engineer or a Software Developer. My contact information is to the
                        right. Thank you for visiting my website.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Get In Touch!</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                    <icon className="fa fa-phone-square" aria-hidden="true"/>
                                    (937) 823-6473
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                    <icon className="fa fa-envelope" aria-hidden="true"/>
                                    gaskins.30@osu.edu
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
                                    <icon className="fa fa-envelope" aria-hidden="true"/>
                                    omari.gaskins.dev@gmail.com
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;