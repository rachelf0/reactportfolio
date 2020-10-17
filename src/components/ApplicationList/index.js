import React, { useState } from 'react';
import Modal from '../Modal';

const ApplicationList = ({ category }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [applications] = useState([
    {
      // image: 'https://github.com/rachelf0/reactportfolio/raw/master/src/assets/img/large/front/0.jpg',
      name: 'Run Buddy',
      category: 'front',
      description: 'Front end sit of a running based company',
      GitHub: 'https://github.com/rachelf0/run-buddy',
      site:'https://rachelf0.github.io/run-buddy/',
    },
    {
      name: 'Taskinator',
      category: 'front',
      description: 'An app for keeping tasks organized',
      GitHub: 'https://github.com/rachelf0/taskinator',
      site:'https://rachelf0.github.io/taskinator/',
    },
    {
      name: 'Code Quiz',
      category: 'front',
      description: 'An easy JavaScript knowledge quiz built with HMTL, CSS and JavaScript',
      GitHub: 'https://github.com/rachelf0/codequiz',
      site:'https://rachelf0.github.io/codequiz/',
    },
    {
      name: 'Work Day Scheduler',
      category: 'front',
      description: 'An app for planning out your days',
      GitHub: 'https://github.com/rachelf0/super-disco',
      site:'https://rachelf0.github.io/super-disco/',
    },
    {
      name: 'Weather Dashboard',
      category: 'front',
      description: 'A weather app using weather forecast information',
      GitHub: 'https://github.com/rachelf0/triple8',
      site:'https://rachelf0.github.io/triple8/',
    },
    {
      name: 'Readme Generator',
      category: 'back',
      description: 'A Node.js app for generating a markdown readme page',
      GitHub: 'https://github.com/rachelf0/generate-rm',
      site:'NA',
    },
    {
      name: 'Team Profile Generator',
      category: 'back',
      description: 'A Node.js build appn to generate an HTML page of team members with team roles and other data',
      GitHub: 'https://github.com/rachelf0/TeamProfile',
      site:'NA',
    },
    {
      name: 'Note Taker',
      category: 'back',
      description: 'A note taking program in which my role was to focus on the back end build',
      GitHub: 'https://github.com/rachelf0/write-pro',
      site:'https://cryptic-refuge-57218.herokuapp.com/notes',
    },
    {
      name: 'Employee Tracker',
      category: 'back',
      description: 'A Node.js app using Inquirer to gather user input and Express.js to serve data, while performing CRUD operations on a MySQL Database to store employee information',
      GitHub: 'https://github.com/rachelf0/jackinthebox',
      site:'NA',
    },
    {
      name: 'E-Commerce Back End',
      category: 'back',
      description: 'A Node.js app that uses Express.js to serve data while using sequelize to perform CRUD operations on a MySQL database for an E-Commerce Site',
      GitHub: 'https://github.com/rachelf0/ecommerce',
      site:'NA',
    },
    {
      name: 'Tech Blog',
      category: 'full',
      description: 'A CMS style Tech-Blog used to solidify the concepts of ORM (Object-Relational Mapping) and MVC (Model-View-Control)',
      GitHub: 'https://github.com/rachelf0/tech-blog',
      site:'https://secure-lowlands-66841.herokuapp.com/',
    },
    {
      name: 'Spontaneous Adventurer',
      category: 'full',
      description: 'A website for spontaneous travelers to plan last minute activities, check weather and buy tickets to local events',
      GitHub: 'https://github.com/taylornyquist/spontaneous-adventurer',
      site:'https://taylornyquist.github.io/spontaneous-adventurer/',
    },
    {
      name: 'Social Media API',
      category: 'full',
      description: 'Education exercise to learn MongoDB and mongoose through the construction of a Social Media API',
      GitHub: 'https://github.com/rachelf0/social-network-api',
      site:'NA',
    },
    {
      name: 'Budget Tracker',
      category: 'full',
      description: 'A Progressive Web Application built from an already functioning front end app',
      GitHub: 'https://github.com/rachelf0/2020budget-tracker',
      site:'https://murmuring-scrubland-74158.herokuapp.com/',
    },
    {
      name: 'The Speakeasy',
      category: 'full',
      description: 'A MERN stack application built for those seeking to try and share exquisite cocktail recipes.',
      GitHub: 'https://github.com/adamkeyser45/thespeakeasy',
      site:'https://fierce-forest-64673.herokuapp.com/',
    }
  ]);

  const currentApplications = applications.filter((application) => application.category === category);
  const [currentApplication, setCurrentApplication] = useState();


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
            src={require(`../../assets/img/large/${category}/${i}.jpg`)}
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