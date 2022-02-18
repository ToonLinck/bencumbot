

//names.json is initiated as an object
const data = require('./names.json')


//arrays surnames and lastnames are pulled from the object "data"
const surnames = data.surname
const lastnames = data.lastname


//a string from a random position is pulled from both the surnames and lastnames array
const sname = surnames[Math.floor(Math.random()*surnames.length)]
const lname = lastnames[Math.floor(Math.random()*lastnames.length)]







