// Portfolio Class
class Portfolio {
    constructor() {
        this.projects = [];
        this.skills = new Set();
    }

    addProject(project) {
        this.projects.push(project);
        project.technologies.forEach(tech => this.skills.add(tech));
    }

    removeProject(project) {
        const index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
            project.technologies.forEach(tech => {
                if (!this.projects.some(proj => proj.technologies.includes(tech))) {
                    this.skills.delete(tech);
                }
            });
        }
    }

    getProjectByName(name) {
        return this.projects.find(project => project.name === name);
    }

    displayProjects() {
        this.projects.forEach(project => {
            window.log(`Project: ${project.name}`);
            console.log(`Description: ${project.description}`);
            console.log(`Technologies: ${project.technologies.join(', ')}`);
            console.log('-------------------------');
        });
    }

    displaySkills() {
        console.log('Skills:');
        this.skills.forEach(skill => console.log(skill));
    }
}

// Project Class
class Project {
    constructor(name, description, technologies) {
        this.name = name;
        this.description = description;
        this.technologies = technologies;
    }
}

// Usage
const portfolio = new Portfolio();

// Create projects
const project1 = new Project(
    'E-commerce Website',
    'A full-stack e-commerce website with shopping cart functionality.', ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB']
);
const project2 = new Project(
    'Weather App',
    'A weather application that displays current weather conditions.', ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
);
const project3 = new Project(
    'Task Manager',
    'A task management application with user authentication.', ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Node.js', 'MongoDB']
);

// Add projects to portfolio
portfolio.addProject(project1);
portfolio.addProject(project2);
portfolio.addProject(project3);

// Display all projects
portfolio.displayProjects();

// Find a project by name
const foundProject = portfolio.getProjectByName('Weather App');
console.log(foundProject);

// Remove a project
portfolio.removeProject(project2);

// Display updated projects
portfolio.displayProjects();

// Display skills
// portfolio.displaySkills();
// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();

// Configure Nodemailer with your email service credentials
// const transporter = nodemailer.createTransport({
//     service: 'https://mail.google.com/mail/u/0/#inbox',
//     auth: {
//         user: 'abhi77385@gmail.com',
//         pass: 'Abhinav@c2p2c2p2c2p2'
//     }
// });

// Define a route to handle incoming form submissions
// app.post('/send-email', (req, res) => {
//     const { name, email, message } = req.body;

//     // Compose the email message
//     const mailOptions = {
//         from: 'abhi77385@gmail.com',
//         to: 'your-email@example.com',
//         subject: 'New Message from Portfolio',
//         text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
//     };

// Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent:', info.response);
//             res.send('Email sent');
//         }
//     });
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


// skiill section

// Add JavaScript code to trigger the animation when scrolling to the skills section
window.addEventListener('scroll', animateSkills);

function animateSkills() {
    const skillsSection = document.querySelector('.skills-section');
    const skillsContainer = document.querySelector('.skills-container');

    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.pageYOffset;

    if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
        skillsContainer.classList.add('animate');
    } else {
        skillsContainer.classList.remove('animate');
    }
}

// headersection 
window.addEventListener('scroll', function() {
    var portfolioHeader = document.querySelector('.portfolio-header');
    if (window.scrollY > 0) {
        portfolioHeader.classList.add('header-scrolled');
    } else {
        portfolioHeader.classList.remove('header-scrolled');
    }
});

// education section 
// const educationItems = document.querySelectorAll('.education-item');

// window.addEventListener('load', function() {
//     educationItems.forEach(function(item) {
//         item.classList.add('animated');
//     });
// });


// contact section 
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var form = this;
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact'); // Replace with your server-side route
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                document.getElementById('response-message').innerText = response.message;
                form.reset();
            } else {
                document.getElementById('response-message').innerText = 'An error occurred. Please try again later.';
            }
        }
    };
    xhr.send(formData);
});


// education
const slider = document.querySelector('.car-container');

function slideNext() {
    slider.style.animation = 'slideOut 0.3s ease-in-out';
    setTimeout(() => {
        slider.appendChild(slider.firstElementChild);
        slider.style.animation = '';
    }, 300);
}

function slidePrev() {
    slider.style.animation = 'slideIn 0.3s ease-in-out';
    setTimeout(() => {
        slider.prepend(slider.lastElementChild);
        slider.style.animation = '';
    }, 300);
}