import React from 'react';
import Grid from '@material-ui/core/Grid';
import GitHubButton from 'react-github-btn';

import CarolineResumeJPG1 from '../../resources/caroline/CarolineBezzinaResume.jpg'
import CarolineResumeJPG2 from '../../resources/caroline/CarolineBezzinaResume2.jpg'
import CarolineResumePDF from '../../resources/caroline/CarolineBezzinaResume.pdf';

class Resume extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const linkedinScript = document.createElement("script");

        linkedinScript.src = "https://platform.linkedin.com/badges/js/profile.js";
        linkedinScript.async = true;
        linkedinScript.defer = true;

        document.body.appendChild(linkedinScript);
    }

    render() {
        return (
            <Grid container spacing={10}>
                <Grid item xs={12} lg={9}>
                    <h1>Resume</h1>
                    <h3 className="link right-align">
                        <a href={CarolineResumePDF} download>Download PDF</a>
                    </h3>
                    <img className="resume-image" src={CarolineResumeJPG1}></img>
                    <img className="resume-image" src={CarolineResumeJPG2}></img>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <h1>Contact</h1>
                    <p>Phone: <a className="link" href="tel:+61402377116">0402 377 116</a></p>
                    <p>Email: <a className="link" href="mailto:c_bezzina@hotmail.com">c_bezzina@hotmail.com</a></p>
                    <div className="github-button">
                        <GitHubButton href="https://github.com/carolinebezzina" data-size="large" aria-label="Follow @carolinebezzina on GitHub">
                            Follow @carolinebezzina
                        </GitHubButton>
                    </div>
                    <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="carolinebezzina">
                        <a className="LI-simple-link" href='https://au.linkedin.com/in/carolinebezzina?trk=profile-badge'>
                            Caroline Bezzina
                        </a>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default Resume;