import React, { useState } from 'react';
import Modal from '../Modal';

const ApplicationList = ({ category }) => {

  const [applications] = useState([
    {
      name: 'Run Buddy',
      category: 'front',
      description: 'The front end of a running based fitness subscription funded site',
      gitHub: 'https://github.com/rachelf0/run-buddy',
      site:'https://rachelf0.github.io/run-buddy/',
    },
    {
      name: 'Taskinator',
      category: 'front',
      description: 'A simple application for keeping track of tasks',
      gitHub: 'https://github.com/rachelf0/taskinator',
      site:'https://rachelf0.github.io/taskinator/',
    },
    {
      name: 'Code Quiz',
      category: 'front',
      description: 'An easy JavaScript knowledge quiz built with HMTL, CSS and JavaScript',
      gitHub: 'https://github.com/rachelf0/codequiz',
      site:'https://rachelf0.github.io/codequiz/',
    },
    {
      name: 'Work Day Scheduler',
      category: 'front',
      description: 'An application for maping out your day',
      gitHub: 'https://github.com/rachelf0/super-disco',
      site:'https://rachelf0.github.io/super-disco/',
    },
    {
      name: 'Weather Dashboard',
      category: 'front',
      description: 'A weather forecast application using the Open Weather Database',
      gitHub: 'https://github.com/rachelf0/triple8',
      site:'https://rachelf0.github.io/triple8/',
    },
    {
      name: 'Readme Generator',
      category: 'back',
      description: 'A Node.js application for generating a markdown readme page with the inquirer npm package',
      gitHub: 'https://github.com/rachelf0/generate-rm',
      site:'NA',
    },
    {
      name: 'Team Profile Generator',
      category: 'back',
      description: 'A Node.js build application to generate an HTML page of team members with team roles and other pertinent data',
      gitHub: 'https://github.com/rachelf0/TeamProfile',
      site:'NA',
    },
    {
      name: 'Note Taker',
      category: 'back',
      description: 'A note taking program I built the back end of using Node.js and Express.js',
      gitHub: 'https://github.com/rachelf0/write-pro',
      site:'https://cryptic-refuge-57218.herokuapp.com/notes',
    },
    {
      name: 'Employee Tracker',
      category: 'back',
      description: 'A Node.js application using Inquirer to gather user input and Express.js to serve data, while performing CRUD operations on a MySQL Database to store employee information',
      gitHub: 'https://github.com/rachelf0/jackinthebox',
      site:'NA',
    },
    {
      name: 'E-Commerce Back End',
      category: 'back',
      description: 'A Node.js application that uses Express.js to serve data while using sequelize to perform CRUD operations on a MySQL database for an E-Commerce Site',
      gitHub: 'https://github.com/rachelf0/ecommerce',
      site:'NA',
    },
    {
      name: 'Tech Blog',
      category: 'full',
      description: 'A CMS style Tech-Blog used to solidify the concepts of ORM (Object-Relational Mapping) and MVC (Model-View-Control)',
      gitHub: 'https://github.com/rachelf0/tech-blog',
      site:'https://secure-lowlands-66841.herokuapp.com/',
    },
    {
      name: 'Spontaneous Adventurer',
      category: 'front',
      description: 'A website for spontaneous travelers to plan last minute activities, check weather and buy tickets to local events',
      gitHub: 'https://taylornyquist.github.io/spontaneous-adventurer/',
      site:'https://github.com/taylornyquist/spontaneous-adventurer',
    },
    {
      name: 'Social Media API',
      category: 'back',
      description: 'Education exercise to learn MongoDB and mongoose through the construction of a Social Media API',
      gitHub: 'https://github.com/rachelf0/social-network-api',
      site:'NA',
    },
    {
      name: 'Budget Tracker',
      category: 'front',
      description: 'A Progressive Web Application built from an already functioning front end app',
      gitHub: 'https://github.com/rachelf0/2020budget-tracker',
      site:'https://murmuring-scrubland-74158.herokuapp.com/',
    },
    {
      name: 'The Speakeasy',
      category: 'full',
      description: 'A MERN stack application built for those seeking to try and share exquisite cocktail recipes.',
      gitHub: 'https://github.com/adamkeyser45/thespeakeasy',
      site:'https://fierce-forest-64673.herokuapp.com/',
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