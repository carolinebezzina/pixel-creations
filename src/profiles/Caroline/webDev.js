import React from 'react';
import Grid from '@material-ui/core/Grid';
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

const headspaceImages = [
    {
        original: '../../resources/caroline/webDev/headspace1.png',
        thumbnail: '../../resources/caroline/webDev/headspace1.png',
    },
    {
        original: '../../resources/caroline/webDev/headspace2.png',
        thumbnail: '../../resources/caroline/webDev/headspace2.png',
    },
    {
        original: '../../resources/caroline/webDev/headspace3.png',
        thumbnail: '../../resources/caroline/webDev/headspace3.png',
    },
    {
        original: '../../resources/caroline/webDev/headspace4.png',
        thumbnail: '../../resources/caroline/webDev/headspace4.png',
    },
]

class Projects extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid container xs={12}>
                {/* <ImageGallery items={nutritionCareImages} /> */}
                <Grid item xs={8}>
                    <h1>Web Development</h1>
                    <p>I was a web and game development intern at 2and2. I contributed to two websites during my time there.</p>
                    <h3>Department of Finance - GovCMS</h3>
                    <p>I first worked on a website called GovCMS for the Department of Finance, which I am unable to share screenshots of. I was told to mimic the colours, fonts and styling of their current website as closely as possible, and replicated them in the govCMS project using SCSS. I also implemented a video player using Videogular with AngularJS.</p>
                    <h3>Headspace - Food For Thought</h3>
                    <p>The second project was a website called Food For Thought for Headspace. I was given a mockup of the design of the webpage, and needed to style the page accordingly using Jade and Less. Some of the functionality of the website also needed altering using CoffeeScript and AngularJS. The website is available to view at <a className="link" target="_blank" href="http://www.foodforthought.org.au/">www.foodforthought.org.au</a>.</p>
                    <br />
                </Grid>
                <Grid item xs={12}>
                    <ImageGallery items={headspaceImages} />
                </Grid>
                <Grid item xs={8}>
                    <h3>South Coast Tyre Recycling</h3>
                    <p>During my last year at uni I completed a unit which gave me the opportunity to team up with others to work with a real client and gain work experience.</p>
                    <p>My team and I met up with our assigned client and we discussed their project requirements. We then met up with our client regularly to provide updates on our progress, and applied any feedback that they gave us. Finally we presented to them the completed project.</p>
                    <p>We decided to use HTML, CSS, PHP, SQL, and JavaScript to complete their website which included a Content Management System which admins could then use to update the website content at a later stage. It was also a requirement that the website was mobile responsive so that their employees could log in to the website via their work-assigned iPads.</p>
                    <br />
                </Grid>
                <Grid item xs={12}>
                    <ImageGallery items={SCTRImages} />
                </Grid>
                <Grid item xs={8}>
                    <h3>Refresh Cleaning</h3>
                    <p>During my first year at uni I decided to take the skills I had learnt at TAFE and apply that to a real world client.</p>
                    <p>I volunteered to create a website for a small business using HTML, CSS, and JavaScript.</p>
                    <br />
                </Grid>
                <Grid item xs={12}>
                    <ImageGallery items={refreshCleaningImages} />
                </Grid>
            </Grid>
        );
    }
}

export default Projects;