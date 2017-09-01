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
            console.log('addNote', this.newNote);
            if (this.newNote) {
                await Meteor.callPromise('notes.add', { text: this.newNote });
                this.newNote = '';
            }
        },

        addLimit() {
            console.log('add limit');
            this.limit++;
        },
    },
};