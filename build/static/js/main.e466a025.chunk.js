(this["webpackJsonpreact-redux-thunk-quick-start"]=this["webpackJsonpreact-redux-thunk-quick-start"]||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/caroline-profile.fb9719a2.jpg"},27:function(e,a,t){e.exports=t.p+"static/media/arthur-profile.d7cf3cd9.jpg"},28:function(e,a,t){e.exports=t.p+"static/media/aaron-profile.04376b35.jpg"},31:function(e,a,t){e.exports=t.p+"static/media/caroline-child.817230ce.jpg"},32:function(e,a,t){e.exports=t.p+"static/media/comp1.520e60ba.jpg"},33:function(e,a,t){e.exports=t.p+"static/media/comp2.3480dede.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/comp3.a36b5390.jpg"},35:function(e,a,t){e.exports=t.p+"static/media/CarolineBezzinaResume.cc72f5a4.jpg"},36:function(e,a,t){e.exports=t.p+"static/media/CarolineBezzinaResume2.dbc3e92b.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/CarolineBezzinaResume.406bae04.pdf"},38:function(e,a,t){e.exports=t.p+"static/media/caroline-coffee.9cea22bd.jpg"},40:function(e,a,t){e.exports=t(64)},45:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(25),i=t.n(o),l=t(11),s=t(5),c=(t(45),t(17)),m=t(1),u=t(2),d=t(18),h=t(4),p=t(3),g=t(14),b=t.n(g),f=t(26),w=t.n(f),y=t(27),v=t.n(y),E=t(28),j=t.n(E),k=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={userIntroduced:""!==b.a.load("usersName"),usersName:b.a.load("usersName"),errors:!1},e.introduceUser=e.introduceUser.bind(Object(d.a)(e)),e}return Object(u.a)(t,[{key:"componentWillMount",value:function(){void 0===b.a.load("usersName")&&b.a.save("usersName","",{path:"/"})}},{key:"handleChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"introduceUser",value:function(){var e=this.state.usersName;""===e||null===e?this.setState({errors:!0}):(this.setState({userIntroduced:!0}),b.a.save("usersName",e,{path:"/"}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.userIntroduced,n=a.usersName,o=a.errors;return r.a.createElement("div",{className:"container"},t?r.a.createElement("div",{className:"centered"},r.a.createElement("h1",null,"Hello ",n,"!"),r.a.createElement("h2",null,"Pleased to meet you."),r.a.createElement("p",null,"Who would you like to learn about?"),r.a.createElement("table",{className:"profile-grid"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(l.b,{to:"/caroline"},r.a.createElement("h2",null,"Caroline"),r.a.createElement("img",{className:"photo",src:w.a,width:"250px",height:"250px"}),r.a.createElement("h3",null,"Programmer"))),r.a.createElement("td",null,r.a.createElement(l.b,{to:"/arthur"},r.a.createElement("h2",null,"Arthur"),r.a.createElement("img",{className:"photo",src:v.a,width:"250px",height:"250px"}),r.a.createElement("h3",null,"Artist / Game Designer"))),r.a.createElement("td",null,r.a.createElement(l.b,{to:"/aaron"},r.a.createElement("h2",null,"Aaron"),r.a.createElement("img",{className:"photo",src:j.a,width:"250px",height:"250px"}),r.a.createElement("h3",null,"Programmer / 3D Modeler"))))))):r.a.createElement("div",{className:"centered"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("h2",null,"Before we begin, please enter your first name."),r.a.createElement("p",null,"Hi, my name is\xa0\xa0",r.a.createElement("input",{type:"text",id:"usersName",name:"usersName",onChange:function(a){return e.handleChange(a)}}),"\xa0",r.a.createElement("button",{onClick:this.introduceUser},"Wave \u270b")),o?r.a.createElement("p",null,"C'mon, don't be shy..."):null))}}]),t}(r.a.Component),S=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(l.b,{to:"/"},"\u2b05 Back to Home \ud83c\udfe0")}}]),t}(r.a.Component),D=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"History"),r.a.createElement("div",{className:"left-column"},r.a.createElement("p",null,"Growing up i always had an interest in drawing. whenever i think back to primary or high school, i am always drawing on something, my books, the table, myself. I never took drawing too seriously until about 2 years ago when i made a few artist friends and realised that this is the area i want to put myself into. I studying a lot on youtube, before going to university in 2019 for a Diploma of 3D Animation. Completed with credit on most units. The reason i took on the diploma was due to the aspect of Production Art that came with it. Creating concept art is where my passion is. I am also putting my abilities towards working on a graphic novel of my own design.")))}}]),t}(r.a.Component),I=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Skills"),r.a.createElement("div",{className:"left-column"},r.a.createElement("p",null,"Efficient at Concept art, Character design, color theory, team leading."),r.a.createElement("p",null,"I am also very passionate about story writing and world building."),r.a.createElement("p",null,"I am capable with 3D Animation and 3D Modelling, and Texturing.")))}}]),t}(r.a.Component),O=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Portfolio"),r.a.createElement("iframe",{src:"https://itch.io/embed/618650",height:"167",width:"552",frameborder:"0"},r.a.createElement("a",{href:"https://wobbleblocks.itch.io/rough-ship"},"Rough Ship by Wobble Blocks")))}}]),t}(r.a.Component),C=t(19),N=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"left-column"},r.a.createElement("table",{className:"instagram-table"},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(C.a,{url:"https://www.instagram.com/p/B9f530VDN8N/",hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})),r.a.createElement("td",null,r.a.createElement(C.a,{url:"https://www.instagram.com/p/B8Vdd0CgpCN/",hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})),r.a.createElement("td",null,r.a.createElement(C.a,{url:"https://www.instagram.com/p/B8VcGysgRaR/",hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}))))),r.a.createElement("div",{className:"right-column"},r.a.createElement("h1",{className:"right-align"},"Contact"),r.a.createElement("p",{className:"right-align"},"Email: ",r.a.createElement("a",{className:"link",href:"mailto:Mairs.arthur@gmail.com"},"Mairs.arthur@gmail.com")),r.a.createElement("p",{className:"right-align"},"Instagram: ",r.a.createElement("a",{className:"link",target:"_blank",href:"https://www.instagram.com/oddsandbobscreations"},"OddsandBobsCreations"))))}}]),t}(r.a.Component),x=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={historyEnabled:!1,projectsEnabled:!1,nowEnabled:!1,resumeEnabled:!1},e}return Object(u.a)(t,[{key:"enableSection",value:function(e,a,t,n){this.setState({historyEnabled:e}),this.setState({skillsEnabled:a}),this.setState({portfolioEnabled:t}),this.setState({contactEnabled:n})}},{key:"render",value:function(){var e=this,a=this.state,t=a.historyEnabled,n=a.skillsEnabled,o=a.portfolioEnabled,i=a.contactEnabled;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Arthur"),r.a.createElement("p",null),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.enableSection(!0,!1,!1,!1)}},"History"),r.a.createElement("button",{onClick:function(){return e.enableSection(!1,!0,!1,!1)}},"Skills"),r.a.createElement("button",{onClick:function(){return e.enableSection(!1,!1,!0,!1)}},"Porfolio"),r.a.createElement("button",{onClick:function(){return e.enableSection(!1,!1,!1,!0)}},"Contact")),t?r.a.createElement(D,null):null,n?r.a.createElement(I,null):null,o?r.a.createElement(O,null):null,i?r.a.createElement(N,null):null))}}]),t}(r.a.Component),M=t(31),T=t.n(M),z=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"History"),r.a.createElement("div",{className:"left-column"},r.a.createElement("p",null,"My interest in programming technology began at a young age. I was always the most tech-savvy in my family, even though I am the youngest. During my primary school years I would play online kids games that built my problem solving skills. I was facinated by the online world and I remember asking my family how I could make my own website. Unfortunately my family did not know much about computers so they did not know how to help me."),r.a.createElement("p",null,"Skipping ahead to high school, my interest for technology continued. During my free time I would experiment with altering CSS and personalising my old social media pages. When I was 14 I was involved in a state wide competition called \u2018RoboCup Junior\u2019. Groups of students from various schools around the state had the opportunity to build and program our own robot that would dance to music. The end goal of the project was to enter the competition in dance-off\u2019s against the other state schools, which had a chance to go Australia wide."),r.a.createElement("p",null,"It was around this time that I also discovered my interest for drama and performing. I had the opportunity to join a group of like minded students at Shopfront Theatre where I was able to be involved in multiple live performance productions, which I had acted in, and contributed to the writing and production of. Such performances were; The Tuesday Clan (2006) in which I had my own segment called \u2018Caroline\u2019s Commute\u2019, The Nimbs (2007), and Villainous Business (2008). One of the performances I was a part of was a street performance called Lost Toy Story (2008) performed on the streets of Hurstville. During my final year at Shopfront I was involved in another couple of projects which were amateur short films; I.R.L (2009), Remove Before Show (2009), and Studio09 (2009)."),r.a.createElement("p",null,"After completing the HSC (Higher School Certificate) I decided I wanted to further my education. This lead me to completing a Certificate IV in Information Technology (Web Design) at TAFE, achieving distinctions and credits for most units. I found my time at TAFE to be one of the most enjoyable years of my life as it allowed me to dive straight into developing practical skills that were relevant to the career I want to pursue. In order to gain further qualifications in the field I moved to Brisbane, Queensland, to attend university at Queensland University of Technology. University gave me the opportunity to explore different options and aspects of information technology."),r.a.createElement("p",null,"During my time in Brisbane I also worked part-time as an administration assistant at Guardian Childcare Alliance. It was this job that really emphasised my interest in working with technology as it opened up chances for me to work with databases and data management. This was also my first opportunity to work in an office environment where I could learn to become more professional and gain a deeper understanding of how a company operates on a business level."),r.a.createElement("p",null,"I moved back to Sydney to complete my Bachelor's degree in Information and Communications Technology at Western Sydney University. I participated in a university program called Women in Science and Engineering (WiSE) which gave me the skills and mentorship I needed to prepare myself for beginning my career. During this time I also discovered my passion for coding extends to video game development. I competed in a video game development competition held by Western Sydney University, and supported by Wargaming.Net. The competition required me to build a video game in Unity and complete a 5 minute presentation of my game. I had placed 3rd in this competition and received an award. My game 'The Other Side' can be found in the 'Projects' section of this website."),r.a.createElement("p",null,"During and after uni I worked at an arcade called Playtime (now known as Timezone). I performed customer service duties, as well as host children's birthday parties and perform some technical maintainance on arcade machines. Working with arcade games helped me learn the importance of different gaming aspects that keep the player engaged. Such as, if the game volume was too loud or quiet, or the movement and vibration functions of the machine were not functioning, it would easily cause the player to lose interest in the game. It was also interesting to see how children and adults would react differently to certain games."),r.a.createElement("p",null,"Finally, before getting my first job as a software developer, I was a web and game development intern at 2and2. I contributed to three projects during my time there. I worked on a website called GovCMS for the Department of Finance, a website called Food For Thought for Headspace, and a game for the Cogniss app platform. This was my first step to experiencing what it was like being a developer in a small company.")),r.a.createElement("div",{className:"right-column"},r.a.createElement("img",{className:"photo",src:T.a,width:"250px",height:"300px"})))}}]),t}(r.a.Component),J=t(12),A=t.n(J),H=(t(21),[{original:"../../resources/caroline/webDev/sctr1.png",thumbnail:"../../resources/caroline/webDev/sctr1.png"},{original:"../../resources/caroline/webDev/sctr2.png",thumbnail:"../../resources/caroline/webDev/sctr2.png"},{original:"../../resources/caroline/webDev/sctr3.png",thumbnail:"../../resources/caroline/webDev/sctr3.png"},{original:"../../resources/caroline/webDev/sctr4.png",thumbnail:"../../resources/caroline/webDev/sctr4.png"},{original:"../../resources/caroline/webDev/sctr5.png",thumbnail:"../../resources/caroline/webDev/sctr5.png"}]),F=[{original:"../../resources/caroline/webDev/refresh1.png",thumbnail:"../../resources/caroline/webDev/refresh1.png"},{original:"../../resources/caroline/webDev/refresh2.png",thumbnail:"../../resources/caroline/webDev/refresh2.png"},{original:"../../resources/caroline/webDev/refresh3.png",thumbnail:"../../resources/caroline/webDev/refresh3.png"},{original:"../../resources/caroline/webDev/refresh4.png",thumbnail:"../../resources/caroline/webDev/refresh4.png"}],R=[{original:"../../resources/caroline/webDev/headspace1.png",thumbnail:"../../resources/caroline/webDev/headspace1.png"},{original:"../../resources/caroline/webDev/headspace2.png",thumbnail:"../../resources/caroline/webDev/headspace2.png"},{original:"../../resources/caroline/webDev/headspace3.png",thumbnail:"../../resources/caroline/webDev/headspace3.png"},{original:"../../resources/caroline/webDev/headspace4.png",thumbnail:"../../resources/caroline/webDev/headspace4.png"}],W=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Web Development"),r.a.createElement("div",{className:"wallOfText"},r.a.createElement("p",null,"I was a web and game development intern at 2and2. I contributed to two websites during my time there."),r.a.createElement("h3",null,"Department of Finance - GovCMS"),r.a.createElement("p",null,"I first worked on a website called GovCMS for the Department of Finance, which I am unable to share screenshots of. I was told to mimic the colours, fonts and styling of their current website as closely as possible, and replicated them in the govCMS project using SCSS. I also implemented a video player using Videogular with AngularJS."),r.a.createElement("h3",null,"Headspace - Food For Thought"),r.a.createElement("p",null,"The second project was a website called Food For Thought for Headspace. I was given a mockup of the design of the webpage, and needed to style the page accordingly using Jade and Less. Some of the functionality of the website also needed altering using CoffeeScript and AngularJS. The website is available to view at ",r.a.createElement("a",{className:"link",target:"_blank",href:"http://www.foodforthought.org.au/"},"www.foodforthought.org.au"),".")),r.a.createElement(A.a,{items:R}),r.a.createElement("div",{className:"wallOfText"},r.a.createElement("h3",null,"South Coast Tyre Recycling"),r.a.createElement("p",null,"During my last year at uni I completed a unit which gave me the opportunity to team up with others to work with a real client and gain work experience."),r.a.createElement("p",null,"My team and I met up with our assigned client and we discussed their project requirements. We then met up with our client regularly to provide updates on our progress, and applied any feedback that they gave us. Finally we presented to them the completed project."),r.a.createElement("p",null,"We decided to use HTML, CSS, PHP, SQL, and JavaScript to complete their website which included a Content Management System which admins could then use to update the website content at a later stage. It was also a requirement that the website was mobile responsive so that their employees could log in to the website via their work-assigned iPads.")),r.a.createElement(A.a,{items:H}),r.a.createElement("div",{className:"wallOfText"},r.a.createElement("h3",null,"Refresh Cleaning"),r.a.createElement("p",null,"During my first year at uni I decided to take the skills I had learnt at TAFE and apply that to a real world client."),r.a.createElement("p",null,"I volunteered to create a website for a small business using HTML, CSS, and JavaScript.")),r.a.createElement(A.a,{items:F}))}}]),t}(r.a.Component),B=(t(62),t(32)),L=t.n(B),P=t(33),G=t.n(P),U=t(34),q=t.n(U),V=[{original:"../../resources/caroline/gameDev/tos1.jpg",thumbnail:"../../resources/caroline/gameDev/tos1.jpg"},{original:"../../resources/caroline/gameDev/tos2.jpg",thumbnail:"../../resources/caroline/gameDev/tos2.jpg"},{original:"../../resources/caroline/gameDev/tos3.jpg",thumbnail:"../../resources/caroline/gameDev/tos3.jpg"},{original:"../../resources/caroline/gameDev/tos4.jpg",thumbnail:"../../resources/caroline/gameDev/tos4.jpg"}],_=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"left-column"},r.a.createElement("h2",null,"Game Development"),r.a.createElement("h3",null,"The Other Side"),r.a.createElement("p",null,"During uni I completed a video game development unit which included participating in a competition against other students. The competition required me to build a video game in Unity and complete a 5 minute presentation of the game. I received full marks for my game, and it placed 3rd in the competition and I received an award by a representative from Wargaming.Net."),r.a.createElement("p",null,"The game I created is a first-person story telling game called \u2018The Other Side\u2019. The idea behind this game is to step away from explosions, guns, blood, and gore, and instead explore a different aspect of gaming. This game is about immersing yourself into a story. There are very few existing games that are similar to this one. I am creating this game to prove that a story does not need to be read or watched and there is more to be experienced within a game."),r.a.createElement("p",null,"The Other Side takes place at a modern day family home. The player controls a dog named Sam and explores the house as a little girl, Suzie, follows you. The aim of the game is to explore your surroundings and piece together clues in order to solve the mystery of a family member\u2019s death. The player is able to discover clues by following scent trails and listening to the stories told by a ghost in the room. As the player begins to find clues, Suzie explains the significance of some objects, or the ghost will begin to recall memories or diary entries relating to that object."),r.a.createElement("h4",null,"A bit of background info on the characters in the game:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Sam is a 1 year old Golden Retriever. She was adopted by Jack after he found her a year ago, abandoned on the side of a road. Ever since, Sam has always accompanied Jack on his hunting trips and they have a strong bond between them."),r.a.createElement("li",null,"Suzie is an 8 year old girl who has always wanted a little brother or sister as she always feels quite lonely being an only child. When Jack brought Sam home, Suzie felt excited that she would now have a new friend to play with."),r.a.createElement("li",null,"Jack is a 68 year old man still mourning the loss of his wife, Helen. On a recent hunting trip with his son-in-law, he gets shot and killed. His spirit still lingers within the house, desperately trying to get a message across in any way he can."),r.a.createElement("li",null,"Helen passed away a year ago from an illness. She was the same age as Jack and they were happily married for many years."),r.a.createElement("li",null,"Linda is the daughter of Jack and Helen. She is 40 years old and is currently pregnant with her second child. She teaches at the local primary school."),r.a.createElement("li",null,"James is Linda\u2019s husband and is 42 years old. He has been arrested for the murder of Jack.")),r.a.createElement("h4",null,"The story being introduced at the start of the game:"),r.a.createElement("p",null,"Jack, James and Sam go on a hunting trip on Friday afternoon. They were planning to return on Sunday night, however Jack is shot, and killed, and James is arrested for his murder. Sam is the only one to return from the trip. When Sam returns, she notices a presence within the house, and soon recognises the presence as Jack\u2019s ghost. Jack attempts to communicate with Sam, but can only do so in the form of memories. Sam realises that something is bothering Jack and he is trying to pass on a message to his daughter, Linda. It is Sam\u2019s job to discover this message and find a way to pass this message on to Linda."),r.a.createElement("p",null,"The player completes the game when they uncover all the main clues in the game and solve the mystery of Jack\u2019s death.")),r.a.createElement("div",{className:"right-column"},r.a.createElement("img",{className:"photo",src:L.a,width:"500px",height:"300px"}),r.a.createElement("img",{className:"photo",src:G.a,width:"500px",height:"300px"}),r.a.createElement("img",{className:"photo",src:q.a,width:"500px",height:"300px"})),r.a.createElement("div",{className:"image-gallery"},r.a.createElement(A.a,{items:V})))}}]),t}(r.a.Component),Q=[{original:"../../resources/caroline/3DModeling/3dmod1.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod1.jpg"},{original:"../../resources/caroline/3DModeling/3dmod2.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod2.jpg"},{original:"../../resources/caroline/3DModeling/3dmod3.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod3.jpg"},{original:"../../resources/caroline/3DModeling/3dmod4.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod4.jpg"},{original:"../../resources/caroline/3DModeling/3dmod5.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod5.jpg"},{original:"../../resources/caroline/3DModeling/3dmod6.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod6.jpg"},{original:"../../resources/caroline/3DModeling/3dmod7.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod7.jpg"},{original:"../../resources/caroline/3DModeling/3dmod8.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod8.jpg"},{original:"../../resources/caroline/3DModeling/3dmod9.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod9.jpg"},{original:"../../resources/caroline/3DModeling/3dmod10.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod10.jpg"},{original:"../../resources/caroline/3DModeling/3dmod11.jpg",thumbnail:"../../resources/caroline/3DModeling/3dmod11.jpg"}],Y=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"left-column"},r.a.createElement("h2",null,"3D Modeling"),r.a.createElement("p",null,"I've never been a very creative or artistic person, however I decided to buy a graphics tablet and create some 3D models using Blender just for fun! \ud83d\ude04")),r.a.createElement("div",{className:"image-gallery"},r.a.createElement(A.a,{items:Q})))}}]),t}(r.a.Component),K=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={webDevEnabled:!1,gameDevEnabled:!1,tDModelingEnabled:!1},e}return Object(u.a)(t,[{key:"enableSection",value:function(e,a,t){this.setState({webDevEnabled:e}),this.setState({gameDevEnabled:a}),this.setState({tDModelingEnabled:t})}},{key:"render",value:function(){var e=this,a=this.state,t=a.webDevEnabled,n=a.gameDevEnabled,o=a.tDModelingEnabled;return r.a.createElement("div",null,r.a.createElement("h1",null,"Projects"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.enableSection(!0,!1,!1)}},"Web Development"),r.a.createElement("button",{onClick:function(){return e.enableSection(!1,!0,!1)}},"Game Development"),r.a.createElement("button",{onClick:function(){return e.enableSection(!1,!1,!0)}},"3D Modeling")),t?r.a.createElement(W,null):null,n?r.a.createElement(_,null):null,o?r.a.createElement(Y,null):null)}}]),t}(r.a.Component),X=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"left-column"},r.a.createElement("h1",null,"Now"),r.a.createElement("p",null,"Well, if you're on this website, then that means you've already seen my latest project."),r.a.createElement("p",null,'Recently I noticed that there has been a gap in my knowledge: how to build a website from scratch, and deploy it to a hosting service. I lay awake one night and thought "I\'m going to create an online portfolio". So I got out of bed, registered a domain name, signed up for web hosting, and got to work. I chose to use this as an opportunity to teach myself how to create a ReactJS app from scratch, including installing all necessary packages, and working out a deployment process. The experience so far has been challenging (and at times frustrating), but it has been exciting and rewarding.'))}}]),t}(r.a.Component),Z=t(39),$=t(35),ee=t.n($),ae=t(36),te=t.n(ae),ne=t(37),re=t.n(ne),oe=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://platform.linkedin.com/badges/js/profile.js",e.async=!0,e.defer=!0,document.body.appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"left-column"},r.a.createElement("h1",null,"Resume"),r.a.createElement("h3",{className:"link right-align"},r.a.createElement("a",{href:re.a,download:!0},"Download PDF")),r.a.createElement("img",{className:"resume-image",src:ee.a}),r.a.createElement("img",{className:"resume-image",src:te.a})),r.a.createElement("div",{className:"right-column"},r.a.createElement("span",{className:"right-align"},r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"Call me: ",r.a.createElement("a",{className:"link",href:"tel:+61402377116"},"0402 377 116")),r.a.createElement("p",null,"Email me: ",r.a.createElement("a",{className:"link",href:"mailto:c_bezzina@hotmail.com"},"c_bezzina@hotmail.com"))),r.a.createElement("div",{className:"github-button"},r.a.createElement(Z.a,{href:"https://github.com/carolinebezzina","data-size":"large","aria-label":"Follow @carolinebezzina on GitHub"},"Follow @carolinebezzina")),r.a.createElement("div",{className:"LI-profile-badge","data-version":"v1","data-size":"medium","data-locale":"en_US","data-type":"vertical","data-theme":"dark","data-vanity":"carolinebezzina"},r.a.createElement("a",{className:"LI-simple-link",href:"https://au.linkedin.com/in/carolinebezzina?trk=profile-badge"},"Caroline Bezzina"))))}}]),t}(r.a.Component),ie=t(38),le=t.n(ie),se=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={historyEnabled:!1,projectsEnabled:!1,nowEnabled:!1,resumeEnabled:!1},e}return Object(u.a)(t,[{key:"enableSection",value:function(e,a,t,n){this.setState({historyEnabled:e}),this.setState({projectsEnabled:a}),this.setState({nowEnabled:t}),this.setState({resumeEnabled:n})}},{key:"render",value:function(){var e=this,a=this.state,t=a.historyEnabled,n=a.projectsEnabled,o=a.nowEnabled,i=a.resumeEnabled;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{className:"left-column"},r.a.createElement("h1",null,"Caroline"),r.a.createElement("p",null,"Hi there! My name is Caroline. I'm in my late 20's and I live in South Yarra, Victoria."),r.a.createElement("p",null,"I've spent the last three and a half years working as a Software Developer. I'm currently looking for work in Melbourne or remotely as a software, web, or game developer."),r.a.createElement("p",null,"On most mornings you're likely to find me wrapped up in a blanket with a large cup of coffee in hand (I'm more of a night-owl than a morning person). On weekends and evenings I like to binge watch TV shows or grab a great video game and play it for the fifth time. *cough* Skyrim *cough*"),r.a.createElement("p",null,"If you'd like to know a bit more about me, select a category below.")),r.a.createElement("div",{className:"right-column"},r.a.createElement("img",{className:"photo",src:le.a,width:"270px",height:"300px"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.enableSection(!0,!1,!1,!1)}},"History"),r.a.createElement("button",{onClick:function(){return e.enableSection(!1,!0,!1,!1)}},"Projects"),r.a.createElement("button",{onClick:function(){return e.enableSection(!1,!1,!0,!1)}},"Now"),r.a.createElement("button",{onClick:function(){return e.enableSection(!1,!1,!1,!0)}},"Resume / Contact"))),t?r.a.createElement(z,null):null,n?r.a.createElement(K,null):null,o?r.a.createElement(X,null):null,i?r.a.createElement(oe,null):null))}}]),t}(r.a.Component),ce=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"left-column"},r.a.createElement("h1",null,"Aaron"),r.a.createElement("p",null,"Hello there! I'm Aaron, I hail from Queensland! I currently reside in Melbourne, Victoria."),r.a.createElement("p",null,"I've had an interest in Game Design and Music for as long as I can remember, I made my first Game Maker game when I was around 6 or 7, and I've been playing guitar over 12 years. Since 2015 I've studied Music in University and Game Design in two other Universities!"),r.a.createElement("p",null,"Most days you can find me playing guitar, writing music, or making/playing games."),r.a.createElement("p",null,"Once a week I participate in a Live Action Role-Play (LARP for short)!"),r.a.createElement("p",null,"If you wish for more knowlege about me, select a category below."))))}}]),t}(r.a.Component),me=r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/arthur"},r.a.createElement(x,null)),r.a.createElement(s.a,{path:"/caroline"},r.a.createElement(se,null)),r.a.createElement(s.a,{path:"/aaron"},r.a.createElement(ce,null)),r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(k,null)))));i.a.render(me,document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e466a025.chunk.js.map