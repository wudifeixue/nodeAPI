'use strict';
module.exports = function(app) {
  let nodeDemo = require('../controllers/nodeController');

  // nodeDemo Routes
  app.route('/tasks')
    .get(nodeDemo.listAllTasks)
    .post(nodeDemo.createTask);

  app.route('/tasks/:taskId')
    .get(nodeDemo.readTask)
    .put(nodeDemo.updateTask)
    .delete(nodeDemo.deleteTask);
};