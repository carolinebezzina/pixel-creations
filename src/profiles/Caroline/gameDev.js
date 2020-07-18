import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import Competition1 from '../../resources/caroline/gameDev/comp1.jpg';
import Competition2 from '../../resources/caroline/gameDev/comp2.jpg';
import Competition3 from '../../resources/caroline/gameDev/comp3.jpg';

const TOSImages = [
    {
        original: '../../resources/caroline/gameDev/tos1.jpg',
        thumbnail: '../../resources/caroline/gameDev/tos1.jpg',
    },
    {
        original: '../../resources/caroline/gameDev/tos2.jpg',
        thumbnail: '../../resources/caroline/gameDev/tos2.jpg',
    },
    {
        original: '../../resources/caroline/gameDev/tos3.jpg',
        thumbnail: '../../resources/caroline/gameDev/tos3.jpg',
    },
    {
        original: '../../resources/caroline/gameDev/tos4.jpg',
        thumbnail: '../../resources/caroline/gameDev/tos4.jpg',
    }
];

class GameDev extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                    <h1>Game Development</h1>
                    <h3>The Other Side</h3>
                    <p>During uni I completed a video game development unit which included participating in a competition against other students. The competition required me to build a video game in Unity and complete a 5 minute presentation of the game. I received full marks for my game, and it placed 3rd in the competition and I received an award by a representative from Wargaming.Net.</p>
                    <p>The game I created is a first-person story telling game called ‘The Other Side’. The idea behind this game is to step away from explosions, guns, blood, and gore, and instead explore a different aspect of gaming. This game is about immersing yourself into a story. There are very few existing games that are similar to this one. I am creating this game to prove that a story does not need to be read or watched and there is more to be experienced within a game.</p>
                    <p>The Other Side takes place at a modern day family home. The player controls a dog named Sam and explores the house as a little girl, Suzie, follows you. The aim of the game is to explore your surroundings and piece together clues in order to solve the mystery of a family member’s death. The player is able to discover clues by following scent trails and listening to the stories told by a ghost in the room. As the player begins to find clues, Suzie explains the significance of some objects, or the ghost will begin to recall memories or diary entries relating to that object.</p>
                    <h4>A bit of background info on the characters in the game:</h4>
                    <ul>
                        <li>Sam is a 1 year old Golden Retriever. She was adopted by Jack after he found her a year ago, abandoned on the side of a road. Ever since, Sam has always accompanied Jack on his hunting trips and they have a strong bond between them.</li>
                        <li>Suzie is an 8 year old girl who has always wanted a little brother or sister as she always feels quite lonely being an only child. When Jack brought Sam home, Suzie felt excited that she would now have a new friend to play with.</li>
                        <li>Jack is a 68 year old man still mourning the loss of his wife, Helen. On a recent hunting trip with his son-in-law, he gets shot and killed. His spirit still lingers within the house, desperately trying to get a message across in any way he can.</li>
                        <li>Helen passed away a year ago from an illness. She was the same age as Jack and they were happily married for many years.</li>
                        <li>Linda is the daughter of Jack and Helen. She is 40 years old and is currently pregnant with her second child. She teaches at the local primary school.</li>
                        <li>James is Linda’s husband and is 42 years old. He has been arrested for the murder of Jack.</li>
                    </ul>
                    <h4>The story being introduced at the start of the game:</h4>
                    <p>Jack, James and Sam go on a hunting trip on Friday afternoon. They were planning to return on Sunday night, however Jack is shot, and killed, and James is arrested for his murder. Sam is the only one to return from the trip. When Sam returns, she notices a presence within the house, and soon recognises the presence as Jack’s ghost. Jack attempts to communicate with Sam, but can only do so in the form of memories. Sam realises that something is bothering Jack and he is trying to pass on a message to his daughter, Linda. It is Sam’s job to discover this message and find a way to pass this message on to Linda.</p>
                    <p>The player completes the game when they uncover all the main clues in the game and solve the mystery of Jack’s death.</p>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <img className="photo" src={Competition1} width="400px" height="250px" />
                    <br /><br /><br />
                    <img className="photo" src={Competition2} width="400px" height="250px" />
                    <br /><br /><br />
                    <img className="photo" src={Competition3} width="400px" height="250px" />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <ImageGallery items={TOSImages} />
                </Grid>
            </Grid>
        );
    }
}

export default GameDev;