import React from 'react';
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
                    <div className="github-button"><GitHubButton href="https://github.com/carolinebezzina" data-size="large" aria-label="Follow @carolinebezzina on GitHub">Follow @carolinebezzina</GitHubButton></div>
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