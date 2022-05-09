const mongoose = require('mongoose');

const Person = mongoose.model('Person',{
    name: string,
    salary: number,
    approved: boolean,
})

module.exports = Person
