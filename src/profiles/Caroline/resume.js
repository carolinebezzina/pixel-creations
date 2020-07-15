import React from 'react';
import CarolineResumeJPG1 from '../../resources/caroline/CarolineBezzinaResume.jpg'
import CarolineResumeJPG2 from '../../resources/caroline/CarolineBezzinaResume2.jpg'
import CarolineResumePDF from '../../resources/caroline/CarolineBezzinaResume.pdf';

class Resume extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const linkedinScript = document.createElement("script");
        const followButtonsScript = document.createElement("script");

        linkedinScript.src = "https://platform.linkedin.com/badges/js/profile.js";
        linkedinScript.async = true;
        linkedinScript.defer = true;
        followButtonsScript.src = "https://platform-api.sharethis.com/js/sharethis.js#property=5f0ebf5eca3dea00137b2bc6&product=inline-follow-buttons&cms=sop";
        followButtonsScript.async = true;

        document.body.appendChild(linkedinScript);
        document.body.appendChild(followButtonsScript);
    }

    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div>
                <h1>Resume / Contact</h1>
                <div className="left-column">
                    <h2 className="download-link"><a href={CarolineResumePDF} download>Download PDF</a></h2>
                    <img className="resume-image" src={CarolineResumeJPG1}></img>
                    <img className="resume-image" src={CarolineResumeJPG2}></img>
                </div>
                <div className="right-column">
                    <div class="sharethis-inline-follow-buttons"></div>
                    <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="carolinebezzina">
                        <a className="LI-simple-link" href='https://au.linkedin.com/in/carolinebezzina?trk=profile-badge'>
                            Caroline Bezzina
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;