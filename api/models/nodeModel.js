'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Enter the name of the task'
  },
  CreatedDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'current','completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);