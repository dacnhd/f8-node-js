const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { count, countReset } = require('console');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

// Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(morgan('combined'))

app.engine(
    'hbs',
    handlebars.engine({ defaultLayout: 'main', extname: '.hbs' }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
console.log(path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
