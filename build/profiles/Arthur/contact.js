import React from 'react';
import Grid from '@material-ui/core/Grid';
import InstagramEmbed from 'react-instagram-embed';

class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Grid container className="instagram" spacing={2}>
                        <Grid item xs={6}>
                            <InstagramEmbed url='https://www.instagram.com/p/B9f530VDN8N/' />
                        </Grid>
                        <Grid item xs={6}>
                            <InstagramEmbed url='https://www.instagram.com/p/B8Vdd0CgpCN/' />
                        </Grid>
                        <Grid item xs={6}>
                            <InstagramEmbed url='https://www.instagram.com/p/B8VcGysgRaR/' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <h1>Contact</h1>
                    <p>Email: <a className="link" href="mailto:Mairs.arthur@gmail.com">Mairs.arthur@gmail.com</a></p>
                    <p>Instagram: <a className="link" target="_blank" href="https://www.instagram.com/oddsandbobscreations">OddsandBobsCreations</a></p>
                </Grid>
            </Grid>
        );
    }
}

export default Contact;