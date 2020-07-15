import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const nutritionCareImages = [
    {
        original: '../../resources/caroline/webDev/nutrition1.png',
        thumbnail: '../../resources/caroline/webDev/nutrition1.png',
    },
    {
        original: '../../resources/caroline/webDev/nutrition2.png',
        thumbnail: '../../resources/caroline/webDev/nutrition1.png',
    },
    {
        original: '../../resources/caroline/webDev/nutrition3.png',
        thumbnail: '../../resources/caroline/webDev/nutrition3.png',
    },
];

const SCTRImages = [
    {
        original: '../../resources/caroline/webDev/sctr1.png',
        thumbnail: '../../resources/caroline/webDev/sctr1.png',
    },
    {
        original: '../../resources/caroline/webDev/sctr2.png',
        thumbnail: '../../resources/caroline/webDev/sctr2.png',
    },
    {
        original: '../../resources/caroline/webDev/sctr3.png',
        thumbnail: '../../resources/caroline/webDev/sctr3.png',
    },
    {
        original: '../../resources/caroline/webDev/sctr4.png',
        thumbnail: '../../resources/caroline/webDev/sctr4.png',
    },
    {
        original: '../../resources/caroline/webDev/sctr5.png',
        thumbnail: '../../resources/caroline/webDev/sctr5.png',
    },
];
const refreshCleaningImages = [
    {
        original: '../../resources/caroline/webDev/refresh1.png',
        thumbnail: '../../resources/caroline/webDev/refresh1.png',
    },
    {
        original: '../../resources/caroline/webDev/refresh2.png',
        thumbnail: '../../resources/caroline/webDev/refresh2.png',
    },
    {
        original: '../../resources/caroline/webDev/refresh3.png',
        thumbnail: '../../resources/caroline/webDev/refresh3.png',
    },
    {
        original: '../../resources/caroline/webDev/refresh4.png',
        thumbnail: '../../resources/caroline/webDev/refresh4.png',
    },
];

class Projects extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Web Development</h2>
                {/* <ImageGallery items={nutritionCareImages} /> */}
                <div className="wallOfText">
                    <h3>South Coast Tyre Recycling</h3>
                    <p>During my last year at uni I completed a unit which gave me the opportunity to team up with others to work with a real client and gain work experience.</p>
                    <p>My team and I met up with our assigned client and we discussed their project requirements. We then met up with our client regularly to provide updates on our progress, and applied any feedback that they gave us. Finally we presented to them the completed project.</p>
                    <p>We decided to use HTML, CSS, PHP, SQL, and JavaScript to complete their website which included a Content Management System which admins could then use to update the website content at a later stage. It was also a requirement that the website was mobile responsive so that their employees could log in to the website via their work-assigned iPads.</p>
                </div>
                <ImageGallery items={SCTRImages} />
                <div className="wallOfText">
                    <h3>Refresh Cleaning</h3>
                    <p>During my first year at uni I decided to take the skills I had learnt at TAFE and apply that to a real world client.</p>
                    <p>I volunteered to create a website for a small business using HTML, CSS, and JavaScript.</p>
                </div>
                <ImageGallery items={refreshCleaningImages} />
            </div>
        );
    }
}

export default Projects;