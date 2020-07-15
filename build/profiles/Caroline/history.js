import React from 'react';
import CarolineChildImage from '../../resources/caroline/caroline-child.jpg';

class History extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>History</h1>
                <div className="left-column">
                    <p>My interest in programming technology began at a young age. I was always the most tech-savvy in my family, even though I am the youngest. During my primary school years I would play online kids games that built my problem solving skills. I was facinated by the online world and I remember asking my family how I could make my own website. Unfortunately my family did not know much about computers so they did not know how to help me.</p>
                    <p>Skipping ahead to high school, my interest for technology continued. During my free time I would experiment with altering CSS and personalising my old social media pages. When I was 14 I was involved in a state wide competition called ‘RoboCup Junior’. Groups of students from various schools around the state had the opportunity to build and program our own robot that would dance to music. The end goal of the project was to enter the competition in dance-off’s against the other state schools, which had a chance to go Australia wide.</p>
                    <p>It was around this time that I also discovered my interest for drama and performing. I had the opportunity to join a group of like minded students at Shopfront Theatre where I was able to be involved in multiple live performance productions, which I had acted in, and contributed to the writing and production of. Such performances were; The Tuesday Clan (2006) in which I had my own segment called ‘Caroline’s Commute’, The Nimbs (2007), and Villainous Business (2008). One of the performances I was a part of was a street performance called Lost Toy Story (2008) performed on the streets of Hurstville. During my final year at Shopfront I was involved in another couple of projects which were amateur short films; I.R.L (2009), Remove Before Show (2009), and Studio09 (2009).</p>
                    <p>After completing the HSC (Higher School Certificate) I decided I wanted to further my education. This lead me to completing a Certificate IV in Information Technology (Web Design) at TAFE, achieving distinctions and credits for most units. I found my time at TAFE to be one of the most enjoyable years of my life as it allowed me to dive straight into developing practical skills that were relevant to the career I want to pursue. In order to gain further qualifications in the field I moved to Brisbane, Queensland, to attend university at Queensland University of Technology. University gave me the opportunity to explore different options and aspects of information technology.</p>
                    <p>During my time in Brisbane I also worked part-time as an administration assistant at Guardian Childcare Alliance. It was this job that really emphasised my interest in working with technology as it opened up chances for me to work with databases and data management. This was also my first opportunity to work in an office environment where I could learn to become more professional and gain a deeper understanding of how a company operates on a business level.</p>
                    <p>I moved back to Sydney to complete my Bachelor's degree in Information and Communications Technology at Western Sydney University. I participated in a university program called Women in Science and Engineering (WiSE) which gave me the skills and mentorship I needed to prepare myself for beginning my career. During this time I also discovered my passion for coding extends to video game development. I competed in a video game development competition held by Western Sydney University, and supported by Wargaming.Net. The competition required me to build a video game in Unity and complete a 5 minute presentation of my game. I had placed 3rd in this competition and received an award. My game 'The Other Side' can be found in the 'Projects' section of this website.</p>
                    <p>During and after uni I worked at an arcade called Playtime (now known as TimeZone). I performed customer service duties, as well as host children's birthday parties and perform some technical maintainance on arcade machines. Working with arcade games helped me learn the importance of different gaming aspects that keep the player engaged. Such as, if the game volume was too loud or quiet, or the movement and vibration functions of the machine were not functioning, it would easily cause the player to lose interest in the game. It was also interesting to see how children and adults would react differently to certain games.</p>
                </div>
                <div className="right-column">
                    <img className="photo" src={CarolineChildImage} width="250px" height="300px" />
                </div>
            </div>
        );
    }
}

export default History;