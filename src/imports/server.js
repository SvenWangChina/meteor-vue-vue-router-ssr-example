import { Meteor } from 'meteor/meteor';
import { VueSSR } from 'meteor/akryum:vue-ssr';

import CreateApp from './app';

import './api/publications';
import './api/methods';
import Notes from './api/collections';

Meteor.startup(() => {
    if (!Notes.findOne()) {
        for (let i = 0; i < 3; i++) {
            Notes.insert({
                text: `Note ${i}`,
                created: new Date(),
            });
        }
    }
});

VueSSR.createApp = (context) => {
    return new Promise((resolve, reject) => {
        const { app, router } = CreateApp();
        router.push(context.url);
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();

            if (!matchedComponents.length) {
                reject({ code: 404 });
            }

            resolve({
                app,
            });
        });
    });
};