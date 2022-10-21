import { defineStore } from 'pinia'

// TODO get data from mongo again.. and no need for defaults or any kind of structure lol

export const useContentStorage = defineStore('visibleContentInfoStore', {
    state: () => ({
        mood: { feels: [] },
        social: {},
        food: {},
        work: {},
        sport: {},
        period: {},
        sleep: {},
        journal: {}
    }),
    actions: {
        toggleFeel(feeling) {
            let i = this.mood.feels.indexOf(feeling)
            if (i >= 0) {
                this.mood.feels.splice(i, 1)
            } else {
                this.mood.feels.push(feeling)
            }
        }
    }
});