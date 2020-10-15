import React, { useState } from 'react';
import Modal from '../Modal';

const ApplicationList = ({ category }) => {

  const [applications] = useState([
    {
      name: 'Run Buddy',
      category: 'front',
      description: 'The front end of a running based fitness subscription funded site',
      gitHub: 'https://github.com/josephptflanagan/run-buddy',
      site:'https://josephptflanagan.github.io/run-buddy/',
    },
    {
      name: 'Password Generator',
      category: 'front',
      description: 'A Password Generator capable of producing a customizable password with anywhere from 8 to 128 characters',
      gitHub: 'https://github.com/josephptflanagan/200607-Password-Generator',
      site:'https://josephptflanagan.github.io/200607-Password-Generator/',
    },
    {
      name: 'Taskinator',
      category: 'front',
      description: 'A simple application for keeping track of tasks',
      gitHub: 'https://github.com/josephptflanagan/Taskinator',
      site:'https://josephptflanagan.github.io/Taskinator/',
    },
    {
      name: 'Code Quiz',
      category: 'front',
      description: 'An easy JavaScript knowledge quiz built with HMTL, CSS and JavaScript',
      gitHub: 'https://github.com/josephptflanagan/20200614-Code-Quiz',
      site:'https://josephptflanagan.github.io/20200614-Code-Quiz/',
    },
    {
      name: 'Taskmaster-Pro',
      category: 'front',
      description: 'An application for keeping track of tasks',
      gitHub: 'https://github.com/josephptflanagan/taskmaster-pro',
      site:'https://josephptflanagan.github.io/taskmaster-pro/',
    },
    {
      name: 'Work Day Scheduler',
      category: 'front',
      description: 'An application for maping out your day',
      gitHub: 'https://github.com/josephptflanagan/200621-Work-Day-Scheduler',
      site:'https://josephptflanagan.github.io/200621-Work-Day-Scheduler/',
    },
    {
      name: 'Git It Done',
      category: 'front',
      description: 'An application for seaching GitHub repositories',
      gitHub: 'https://github.com/josephptflanagan/git-it-done',
      site:'https://josephptflanagan.github.io/git-it-done/',
    },
    {
      name: 'Weather Dashboard',
      category: 'front',
      description: 'A weather forecast application using the Open Weather Database',
      gitHub: 'https://github.com/josephptflanagan/200628-Weather-Dashboard',
      site:'https://josephptflanagan.github.io/200628-Weather-Dashboard/',
    },
    {
      name: 'Bored at Home',
      category: 'front',
      description: 'A group project created time-waster',
      gitHub: 'https://github.com/josephptflanagan/project-1',
      site:'https://josephptflanagan.github.io/project-1',
    },
    {
      name: 'Portfolio Generator',
      category: 'back',
      description: 'A Node.js application for generating HTML portfolio pages with the inquirer npm package',
      gitHub: 'https://github.com/josephptflanagan/portfolio-generator',
      site:'NA',
    },
    {
      name: 'Readme Generator',
      category: 'back',
      description: 'A Node.js application for generating a markdown readme page with the inquirer npm package',
      gitHub: 'https://github.com/josephptflanagan/200719-Readme-Generator',
      site:'NA',
    },
    {
      name: 'Jest Another RPG',
      category: 'back',
      description: 'A Node.js build text based RPG build using jest for Test Driven Development, and the inquirer package for user input',
      gitHub: 'https://github.com/josephptflanagan/jest-another-RPG',
      site:'NA',
    },
    {
      name: 'Team Profile Generator',
      category: 'back',
      description: 'A Node.js build application to generate an HTML page of team members with team roles and other pertinent data',
      gitHub: 'https://github.com/josephptflanagan/20200726-Team-Profile-Generator',
      site:'NA',
    },
    {
      name: 'Zookeepr',
      category: 'back',
      description: 'An animal tracking program I built the back end of using Node.js and Express.js. ',
      gitHub: 'https://github.com/josephptflanagan/zookeepr',
      site:'https://vast-depths-58840.herokuapp.com/',
    },
    {
      name: 'Note Taker',
      category: 'back',
      description: 'A note taking program I built the back end of using Node.js and Express.js',
      gitHub: 'https://github.com/josephptflanagan/200802-Note-Taker',
      site:'https://radiant-stream-14965.herokuapp.com/',
    },
    {
      name: 'U Develop It',
      category: 'back',
      description: 'A Node.js application using Express.js and CRUD operations to serve data to and from a SQLite Database',
      gitHub: 'https://github.com/josephptflanagan/u-develop-it',
      site:'NA',
    },
    {
      name: 'Employee Tracker',
      category: 'back',
      description: 'A Node.js application using Inquirer to gather user input and Express.js to serve data, while performing CRUD operations on a MySQL Database to store employee information',
      gitHub: 'https://github.com/josephptflanagan/u-develop-it',
      site:'NA',
    },
    {
      name: 'E-Commerce Back End',
      category: 'back',
      description: 'A Node.js application that uses Express.js to serve data while using sequelize to perform CRUD operations on a MySQL database for an E-Commerce Site',
      gitHub: 'https://github.com/josephptflanagan/200816-E-Commerce-Back-End',
      site:'NA',
    },
    {
      name: 'Just Tech News',
      category: 'full',
      description: 'A clone of Hacker News I used to learn ORM (Object-Relational Mapping) and MVC (Model-View-Control)',
      gitHub: 'https://github.com/josephptflanagan/just-tech-news',
      site:'https://nameless-mesa-13516.herokuapp.com/',
    },
    {
      name: 'Tech Blog',
      category: 'full',
      description: 'A CMS style Tech-Blog used to solidify the concepts of ORM (Object-Relational Mapping) and MVC (Model-View-Control)',
      gitHub: 'https://github.com/josephptflanagan/200823-Tech-Blog',
      site:'https://pacific-hamlet-81446.herokuapp.com/',
    },
    {
      name: 'famSpace',
      category: 'full',
      description: 'A social media site centered on families',
      gitHub: 'https://github.com/shanemcf/famSpace',
      site:'https://famspace.herokuapp.com/',
    },
    {
      name: 'Pizza Hunt ',
      category: 'back',
      description: 'Education exercise to learn MongoDB through the construction of a social media site centered on Pizza',
      gitHub: 'https://github.com/josephptflanagan/pizza-hunt',
      site:'https://serene-atoll-11380.herokuapp.com/',
    },
    {
      name: 'Social Media API',
      category: 'back',
      description: 'Education exercise to learn MongoDB and mongoose through the construction of a Social Media API',
      gitHub: 'https://github.com/josephptflanagan/20200920-Social-Media-API',
      site:'NA',
    },
    {
      name: 'Food Festival',
      category: 'front',
      description: 'A Progressive Web Application built to study improving the performance of websites',
      gitHub: 'https://github.com/josephptflanagan/food-festival',
      site:'https://josephptflanagan.github.io/food-festival/',
    },
    {
      name: 'Budget Tracker',
      category: 'front',
      description: 'A Progressive Web Application built from an already functioning front end app',
      gitHub: 'https://github.com/josephptflanagan/20200922-Budget-Tracker',
      site:'https://arcane-sea-67344.herokuapp.com/',
    },
    {
      name: 'Photo Port',
      category: 'front',
      description: 'A Single Page Application built with React',
      gitHub: 'https://github.com/josephptflanagan/photo-port',
      site:'https://josephptflanagan.github.io/photo-port/',
    },
    {
      name: 'Deep Thoughts',
      category: 'full',
      description: 'A MERN stack application built for the educational purpose of creating a social media site',
      gitHub: 'https://github.com/josephptflanagan/deep-thoughts',
      site:'https://stark-eyrie-59661.herokuapp.com/',
    }
  ]);

  const currentApplications = applications.filter((application) => application.category === category);
  const [currentApplication, setCurrentApplication] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    setCurrentApplication({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
        <Modal currentApplication={currentApplication} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentApplications.map((image, i) => (
          <img
            src={require(`../../assets/img/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;