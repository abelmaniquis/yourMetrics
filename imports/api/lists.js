import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Lists = new Mongo.Collection('lists');

if(Meteor.isServer) {
    Meteor.publish('lists', function tasksPublication(){
        
    });
}

Meteor.methods({
    'lists.insert'(text) {
        console.log('from lists.js');
    }
})