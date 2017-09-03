import { Meteor } from 'meteor/meteor';

if (Meteor.isClient) {
    import './imports/client';
} else if (Meteor.isServer) {
    import './imports/server';
}