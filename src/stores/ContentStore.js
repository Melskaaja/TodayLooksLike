import { defineStore } from 'pinia'
import { gql } from '@apollo/client/core'

export const useContentStore = defineStore('visibleContentInfoStore', {
    state: () => ({
        food: {},
        journal: { text: '' },
        mood: { feels: [] },
        period: {},
        sleep: {},
        social: {},
        sport: {},
        work: {}
    }),
    actions: {
        toggleFeel(feeling) {
            let i = this.mood.feels.indexOf(feeling)
            if (i >= 0) {
                this.mood.feels.splice(i, 1)
            } else {
                this.mood.feels.push(feeling)
            }
        },
        async hydrate(nhost) {
            const TRACKQUERY = gql`
                query UserTrack ($today: date) {
                    contents (where: {date: {_eq: $today}}) {
                        food
                        journal
                        mood
                        period
                        sleep
                        social
                        sport
                        work
                    }
                }
            `
            const { data, error } = await nhost.graphql.request(TRACKQUERY, { today: getDbDateFormat() });

            if (!error) {
                let result = data.contents[0];
                this.food = result.food ?? {};
                this.journal = { text: result.journal } ?? {};
                this.mood = result.mood ?? { feels: [] };
                this.period = result.period ?? {};
                this.sleep = result.sleep ?? {};
                this.social = result.social ?? {};
                this.sport = result.sport ?? {};
                this.work = result.work ?? {};
            }
        },
        async archive(nhost) {
            const TRACKUPSERT = gql`
                mutation UpsertTracking ($id: uuid, $date: date, 
                        $food: jsonb, $journal: String, $mood: jsonb, $period: jsonb, 
                        $sleep: jsonb, $social: jsonb, $sport: jsonb, $work: jsonb) {
                    insert_contents(
                        objects: { user_id: $id, date: $date, 
                            food: $food, journal: $journal, mood: $mood, period: $period, 
                            sleep: $sleep, social: $social, sport: $sport, work: $work }
                        on_conflict: {
                            constraint: content_pkey,
                            update_columns: [ food, journal, mood, period, sleep, social, sport, work ]
                        }
                    ) {
                        returning {
                            food
                            journal
                            mood
                            period
                            sleep
                            social
                            sport
                            work
                        }
                    }
                }
            `
            let props = { id: 'be7286d1-74b9-4fcc-a17e-5abc8375c4b2', date: getDbDateFormat(),
                    food: this.food, journal: this.journal.text, mood: this.mood, period: this.period,
                    sleep: this.sleep, social: this.social, sport: this.sport, work: this.work }
            const { data, error } = await nhost.graphql.request(TRACKUPSERT, props);

            if (!error) {
                let result = data.insert_contents.returning[0];
                this.food = result.food ?? {};
                this.journal = { text: result.journal ?? '' };
                this.mood = result.mood ?? { feels: [] };
                this.period = result.period ?? {};
                this.sleep = result.sleep ?? {};
                this.social = result.social ?? {};
                this.sport = result.sport ?? {};
                this.work = result.work ?? {};
            }
        }
    }
});

function getDbDateFormat() {
    let now = new Date();
    return now.getFullYear()+'-'+((now.getMonth()+1)+'').padStart(2, '0')+'-'+(now.getDate()+'').padStart(2, '0');
}