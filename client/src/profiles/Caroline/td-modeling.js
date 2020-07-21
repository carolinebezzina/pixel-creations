import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import tdmod1 from '../../media/caroline/td-modeling/tdmod1.jpg';
import tdmod2 from '../../media/caroline/td-modeling/tdmod2.jpg';
import tdmod3 from '../../media/caroline/td-modeling/tdmod3.jpg';
import tdmod4 from '../../media/caroline/td-modeling/tdmod4.jpg';
import tdmod5 from '../../media/caroline/td-modeling/tdmod5.jpg';
import tdmod6 from '../../media/caroline/td-modeling/tdmod6.jpg';
import tdmod7 from '../../media/caroline/td-modeling/tdmod7.jpg';
import tdmod8 from '../../media/caroline/td-modeling/tdmod8.jpg';
import tdmod9 from '../../media/caroline/td-modeling/tdmod9.jpg';
import tdmod10 from '../../media/caroline/td-modeling/tdmod10.jpg';
import tdmod11 from '../../media/caroline/td-modeling/tdmod11.jpg';

const TDModelingImages = [
    {
        original: tdmod1,
        thumbnail: tdmod1,
    },
    {
        original: tdmod2,
        thumbnail: tdmod2,
    },
    {
        original: tdmod3,
        thumbnail: tdmod3,
    },
    {
        original: tdmod4,
        thumbnail: tdmod4,
    },
    {
        original: tdmod5,
        thumbnail: tdmod5,
    },
    {
        original: tdmod6,
        thumbnail: tdmod6,
    },
    {
        original: tdmod7,
        thumbnail: tdmod7,
    },
    {
        original: tdmod8,
        thumbnail: tdmod8,
    },
    {
        original: tdmod9,
        thumbnail: tdmod9,
    },
    {
        original: tdmod10,
        thumbnail: tdmod10,
    },
    {
        original: tdmod11,
        thumbnail: tdmod11,
    },
];

class TDModeling extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12} lg={8}>
                    <h1>3D Modeling</h1>
                    <p>I've never been a very creative or artistic person, however I decided to buy a graphics tablet and create some 3D models using Blender just for fun! &#128516;</p>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <ImageGallery items={TDModelingImages} />
                </Grid>
            </Grid>
        );
    }
}

export default TDModeling;