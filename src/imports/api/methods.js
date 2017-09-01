import { Meteor } from 'meteor/meteor';
import Notes from './collections';

Meteor.methods({
    ['notes.add'](args) {
        const { text } = args;

        Notes.insert({
            text,
            created: new Date(),
        });
    },

    ['notes.remove'](args) {

        const { _id } = args

        Notes.remove(_id)
    },
})
