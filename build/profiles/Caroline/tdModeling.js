import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const TDModelingImages = [
    {
        original: '../../resources/caroline/3DModeling/3dmod1.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod1.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod2.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod2.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod3.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod3.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod4.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod4.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod5.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod5.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod6.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod6.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod7.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod7.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod8.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod8.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod9.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod9.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod10.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod10.jpg',
    },
    {
        original: '../../resources/caroline/3DModeling/3dmod11.jpg',
        thumbnail: '../../resources/caroline/3DModeling/3dmod11.jpg',
    },
];

class TDModeling extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={8}>
                    <h1>3D Modeling</h1>
                    <p>I've never been a very creative or artistic person, however I decided to buy a graphics tablet and create some 3D models using Blender just for fun! &#128516;</p>
                </Grid>
                <Grid item xs={12}>
                    <ImageGallery items={TDModelingImages} />
                </Grid>
            </Grid>
        );
    }
}

export default TDModeling;