require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.API_PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => 
    res.send('File upload API ready for use'));

app.get('/api/download', function(req, res){
    const file = './AlexanderSkinnerResume.pdf';
    res.download(file); // Set disposition and send it.
});


app.post('/api/email', (req, res) => {

    console.log(req.body);

    const reason = req.body.business ? 'BUSINESS' : 'PERSONAL';

    const subject = 'Portfolio: ' + '(' + reason + ')'

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GACC,
        pass: process.env.GPASS
    }
    });

    var mailOptions = {
    from: process.env.GACC,
    to: process.env.GACC,
    subject: subject,
    text: `Name: ${req.body.name.toString()} - Email: ${req.body.email.toString()} - ${req.body.message.toString()}`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

    res.send(req.body);
})

app.listen(port, () => 
    console.log(`File uploader API listening on port ${port}`));