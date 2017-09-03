import { Meteor } from 'meteor/meteor';

import Notes from '../../api/collections';

export default {
    data() {
        return {
            title: 'Home Page.',
            newNote: '',
            notes: [],
            limit: 2,
        };
    },

    meteor: {
        $subscribe: {
            notes() {
                return [this.limit];
            },
        },
        notes() {
            return Notes.find({}, { sort: { created: -1 } });
        },
    },

    methods: {
        async addNote() {
            if (this.newNote) {
                await Meteor.call('notes.add', { text: this.newNote });
                this.newNote = '';
            }
        },

        addLimit() {
            this.limit++;
        },
    },
};