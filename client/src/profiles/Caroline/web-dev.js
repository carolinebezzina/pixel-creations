import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import nutrition1 from '../../media/caroline/web-dev/nutrition1.png';
import nutrition2 from '../../media/caroline/web-dev/nutrition2.png';
import nutrition3 from '../../media/caroline/web-dev/nutrition3.png';
import sctr1 from '../../media/caroline/web-dev/sctr1.png';
import sctr2 from '../../media/caroline/web-dev/sctr2.png';
import sctr3 from '../../media/caroline/web-dev/sctr3.png';
import sctr4 from '../../media/caroline/web-dev/sctr4.png';
import sctr5 from '../../media/caroline/web-dev/sctr5.png';
import refresh1 from '../../media/caroline/web-dev/refresh1.png';
import refresh2 from '../../media/caroline/web-dev/refresh2.png';
import refresh3 from '../../media/caroline/web-dev/refresh3.png';
import refresh4 from '../../media/caroline/web-dev/refresh4.png';
import headspace1 from '../../media/caroline/web-dev/headspace1.png';
import headspace2 from '../../media/caroline/web-dev/headspace2.png';
import headspace3 from '../../media/caroline/web-dev/headspace3.png';
import headspace4 from '../../media/caroline/web-dev/headspace4.png';

const nutritionCareImages = [
    {
        original: nutrition1,
        thumbnail: nutrition1,
    },
    {
        original: nutrition2,
        thumbnail: nutrition2,
    },
    {
        original: nutrition3,
        thumbnail: nutrition3,
    },
];

const SCTRImages = [
    {
        original: sctr1,
        thumbnail: sctr1,
    },
    {
        original: sctr2,
        thumbnail: sctr2,
    },
    {
        original: sctr3,
        thumbnail: sctr3,
    },
    {
        original: sctr4,
        thumbnail: sctr4,
    },
    {
        original: sctr5,
        thumbnail: sctr5,
    },
];

const refreshCleaningImages = [
    {
        original: refresh1,
        thumbnail: refresh1,
    },
    {
        original: refresh2,
        thumbnail: refresh2,
    },
    {
        original: refresh3,
        thumbnail: refresh3,
    },
    {
        original: refresh4,
        thumbnail: refresh4,
    },
];

const headspaceImages = [
    {
        original: headspace1,
        thumbnail: headspace1,
    },
    {
        original: headspace2,
        thumbnail: headspace2,
    },
    {
        original: headspace3,
        thumbnail: headspace3,
    },
    {
        original: headspace4,
        thumbnail: headspace4,
    },
]

class Projects extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid container xs={12} lg={12}>
                {/* <ImageGallery items={nutritionCareImages} /> */}
                <Grid item xs={12} lg={8}>
                    <h1>Web Development</h1>
                    <p>I was a web and game development intern at 2and2. I contributed to two websites during my time there.</p>
                    <h3>Department of Finance - GovCMS</h3>
                    <p>I first worked on a website called GovCMS for the Department of Finance, which I am unable to share screenshots of. I was told to mimic the colours, fonts and styling of their current website as closely as possible, and replicated them in the govCMS project using SCSS. I also implemented a video player using Videogular with AngularJS.</p>
                    <h3>Headspace - Food For Thought</h3>
                    <p>The second project was a website called Food For Thought for Headspace. I was given a mockup of the design of the webpage, and needed to style the page accordingly using Jade and Less. Some of the functionality of the website also needed altering using CoffeeScript and AngularJS.</p>
                    <br />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <ImageGallery items={headspaceImages} />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <h3>South Coast Tyre Recycling</h3>
                    <p>During my last year at uni I completed a unit which gave me the opportunity to team up with others to work with a real client and gain work experience.</p>
                    <p>My team and I met up with our assigned client and we discussed their project requirements. We then met up with our client regularly to provide updates on our progress, and applied any feedback that they gave us. Finally we presented to them the completed project.</p>
                    <p>We decided to use HTML, CSS, PHP, SQL, and JavaScript to complete their website which included a Content Management System which admins could then use to update the website content at a later stage. It was also a requirement that the website was mobile responsive so that their employees could log in to the website via their work-assigned iPads.</p>
                    <br />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <ImageGallery items={SCTRImages} />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <h3>Refresh Cleaning</h3>
                    <p>During my first year at uni I decided to take the skills I had learnt at TAFE and apply that to a real world client.</p>
                    <p>I volunteered to create a website for a small business using HTML, CSS, and JavaScript.</p>
                    <br />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <ImageGallery items={refreshCleaningImages} />
                </Grid>
            </Grid>
        );
    }
}

export default Projects;