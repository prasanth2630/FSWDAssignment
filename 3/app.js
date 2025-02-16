const express = require('express');
const exphbs = require('express-handlebars');
const moment = require('moment');
const jobs = require('./data/jobs.json');

const app = express();

// Setup Handlebars as view engine
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
    helpers: {
        formatDate: (date) => moment(date).format('MMMM Do, YYYY'),
        jobType: (type) => type === "full-time" ? "Full-Time" : "Part-Time"
    }
}));
app.set('view engine', 'hbs');

// Serve static files
app.use(express.static('public'));

// Home route - render jobs
app.get('/', (req, res) => {
    res.render('home', { jobs });
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
