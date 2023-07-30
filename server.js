const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Contact form route
app.post('/contact', async(req, res) => {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        host: ' smtp.gmail.com', // Replace with your email host (e.g., smtp.gmail.com)
        port: 587, // Replace with your email port
        secure: false, // Set to true if using a secure connection (e.g., with SSL/TLS)
        auth: {
            user: 'abhi77385@gmail.com', // Replace with your email address
            pass: 'Abhinav@c2p2c2p2c2p2' // Replace with your email password or app-specific password
        }
    });

    try {
        // Send email
        await transporter.sendMail({
            from: 'abhi77385@gmail.com', // Replace with your email address
            to: 'am8123261@gmail.com', // Replace with the recipient's email address
            subject: 'New contact form submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        // Example response
        const response = {
            message: 'Thank you for your message! We will get back to you soon.'
        };

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while sending the email.' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});