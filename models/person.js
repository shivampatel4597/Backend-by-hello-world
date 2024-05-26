const mongoose = require('mongoose');
const { type } = require('os');

// define person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      work: {
        type: String,
        enum:['chef', 'waiter', 'manager'],
        required: true
      },
      mobile: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true // assuming email should be unique
      },
      address: {
        type: String,
        required: true
      },
      salary: {
        type: Number,
        required: true
      }

})

// create Person model

const Person = mongoose.model('Person', personSchema);

module.exports = Person;