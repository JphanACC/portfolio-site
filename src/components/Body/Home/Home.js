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
                            <h5 className="md-font light-gray"><strong>I'm both an engineer and an artist</strong></h5>
                            <p className="sm-font light-gray">As an engineer, my job is to help building application and features that meet the user's requirements and needs. 
                            As an artist, I ensure our users to have a great time using my application's intuitive UI designs. </p>

                            <p className="sm-font orange-light">
                            P: +1 (720) 401 5257
                            <br/>E: jphanACC@gmail.com
                            </p> 
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                    <h2 className="orange-light">About Me</h2>
                    <p className="sm-font light-gray">I'm an software engineer based in US. After I graduated and worked in teams in several companies as QA Analyst, I desired to become an engineer that can put both of my clients and my own ideas to full realization.
                    Working together and solving problems have become important nature part of my life, and I would love to explore more possibilities to grow my capabilities as both of a designer and designer for any types of application. </p>
                    <p className="sm-font light-gray d-flex justify-content-center">Let's achieve together!</p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h1 className="fnt-pacifico orange-light to-left">Want More?</h1>
                        </div>
                        <div className="row">
                            <div className="to-left mobile-center">
                            <ArrowIcon className="font-secondary spacing-1"/>
                            <a href="https://github.com/JphanACC"><GithubIcon className="icon"/></a>
                            <a href="https://www.linkedin.com/in/jackphante/"><LinkedInIcon className="icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
