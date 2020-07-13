import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
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
                <ImageGallery items={SCTRImages} />
                <ImageGallery items={refreshCleaningImages} />
            </div>
        );
    }
}

export default Projects;