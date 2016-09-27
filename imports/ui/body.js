/**
 * Created by khaled on 9/26/2016.
 */
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.helpers({
  tasks(){
    return Tasks.find({},{sort:{createdAt: -1}  });
  },
});

Template.body.events({
  'submit .new-task'(event){
    //prevent default browser form submit
    event.preventDefault();
    console.log(event);
    //get value from form element
    const target = event.target;
    const text = target.text.value;

    //insert a new task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    //clear form
    target.text.value = '';
  },
});