"use strict";

angular.module('app').factory('Todo', function (Restangular, APP_CONFIG) {


    Restangular.extendModel(APP_CONFIG.apiRootUrl + '/todos.json', function(todo) {
        todo.toggle = function(){
            if (!todo.completedAt) {
                todo.state = 'Completed';
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.state = 'Critical';
                todo.completedAt = null;
            }
            // return this.$update();
        };

        todo.setState = function(state){
            todo.state = state;
            if (state == 'Completed') {
                todo.completedAt = JSON.stringify(new Date());
            } else {
                todo.completedAt = null;
            }
            // return this.$update();
        };

        return todo;
      });

    return Restangular.all(APP_CONFIG.apiRootUrl + '/todos.json')
});