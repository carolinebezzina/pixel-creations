import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="left-column">
                    <table className="instagram-table">
                        <tr>
                            <td>
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/B9f530VDN8N/'
                                    hideCaption={false}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                    onLoading={() => { }}
                                    onSuccess={() => { }}
                                    onAfterRender={() => { }}
                                    onFailure={() => { }}
                                />
                            </td>
                            <td>
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/B8Vdd0CgpCN/'
                                    hideCaption={false}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                    onLoading={() => { }}
                                    onSuccess={() => { }}
                                    onAfterRender={() => { }}
                                    onFailure={() => { }}
                                />
                            </td>
                            <td>
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/B8VcGysgRaR/'
                                    hideCaption={false}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                    onLoading={() => { }}
                                    onSuccess={() => { }}
                                    onAfterRender={() => { }}
                                    onFailure={() => { }}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="right-column">
                    <h1 className="right-align">Contact</h1>
                    <p className="right-align">Email: <a className="link" href="mailto:Mairs.arthur@gmail.com">Mairs.arthur@gmail.com</a></p>
                    <p className="right-align">Instagram: <a className="link" target="_blank" href="https://www.instagram.com/oddsandbobscreations">OddsandBobsCreations</a></p>
                </div>
            </div>
        );
    }
}

export default Contact;