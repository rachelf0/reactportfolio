import React from 'react';
import profilePicture from '../../assets/img/profilePicture.jpg'

function About() {
    return (
        
        <section className="about">
            <div>
                <h1 id="about">About me</h1>
                <img className="profile-picture" src={profilePicture} alt="Rachel Fritz" />
            </div>
            <div className="bio">
                <p>
                    With 2.5 years of experience as a graphic designer I decided to expand my skillset and knowledge in web design and development.
                    Bringing forth expertise in the full design process from concept to final delivery, development, testing, and maintenance of webb systems.
                    I am quipped with a diverse and promising skillset, and proficient in an assortment of technologies and softwares inclduing Adobe Creative Suite,
                    JavaScript, React, HTML/CSS, MySQL and WordPress.
                </p>
                <br />
                <p>
                    I am an entergetic team player with temendous intitiative, elite personal drivev and a disciplined work eithic. I am also skilled in conceptualizing
                    and preparing artowkr for concept meetings, landing pages for websites, storyboards, advertisements, catalogs, and many other areas.
                </p>
                <br />
                <p>
                    I am currently attending a Vanderbilt University Coding Bootcamp, to be concluded in November 2020. Since starting this course I've become familiar with Git, HTML,
                    CSS, JavaScript, AJAX, jQuery, MySQL, MongoDB, Express.js, React, Node.js, HandleBars.js, Test-driven Development (TDD), Object Oriented Programing (OOP), Test Driven Development(TDD),
                    Object-Relational Mapping(ORM), Model-View-Controller(MVC), RegEx, and Progressive Web Applications (PWA).
                </p>
            </div>
        </section>
    );
}

export default About;