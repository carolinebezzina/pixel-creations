import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import CarolineResume from '../../images/CarolineBezzinaResume.pdf';

class Resume extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);
    }

    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    onLoadError = ({ error }) => {
        console.log(error);
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div>
                <h1>Resume / Get in contact</h1>
                <div className="left-column">
                    <Document
                        file={CarolineResume}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page
                            pageNumber={1}
                            scale={1.5}
                        />
                    </Document>
                    <Document
                        file={CarolineResume}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page
                            pageNumber={2}
                            scale={1.5}
                        />
                    </Document>
                </div>
                <div className="right-column">
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