import React, { Component } from 'react'

import './Home.css';

import ProfilePhoto from "./photos/profile-photo.jpg";

//icons
import ArrowIcon from "../../Icons/ArrowIcon";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";

export default class Home extends Component {
    render() {
        return (
            <div className="container padding-top-md">
                <div className="jumbotron bg-gray">
                    <div className="row">
                        <div className="col-12 col-md-4"> 
                            <div 
                                className="profile-photo profile-photo-div"
                                style={{
                                    backgroundImage: `url(${ProfilePhoto})`
                                }}
                             ></div>
                        </div>
                        <div className="col-12 col-md-8 mobile">
                            <h4 className="orange-light">Full-stack Engineer</h4>
                            <h5 className="md-font light-gray"><strong>Based in US, I'm both an engineer and an artist</strong></h5>
                            <p className="sm-font light-gray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>

                            <p className="sm-font orange-light">
                            P: +1 (000) 111 2222
                            <br/>E: email@gmail.com
                            </p> 
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                    <h2 className="orange-light">About Me</h2>
                    <p className="sm-font light-gray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
                    <p className="sm-font light-gray d-flex justify-content-center">Let's achieve together!</p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h1 className="fnt-pacifico orange-light to-left">Want More?</h1>
                        </div>
                        <div className="row">
                            <div className="to-left mobile-center">
                            <ArrowIcon className="font-secondary spacing-1"/>
                            <a href="https://www.google.com/"><GithubIcon className="icon"/></a>
                            <a href="https://www.google.com/"><LinkedInIcon className="icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
