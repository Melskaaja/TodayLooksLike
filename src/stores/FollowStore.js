import { defineStore } from 'pinia'
import { useUserData } from '@nhost/vue'
import { useMutation } from '@vue/apollo-composable'
import { gql } from '@apollo/client/core'

export const useFollowStore = defineStore('whichButtonsToShowStore', {
    state: () => ({
        all: ['mood', 'social', 'food', 'journal', 'work', 'sport', 'period', 'sleep'],
        labels: ['General mood', 'Social activity', 'Food consumption', 'Open journal', 'Work activity', 'Physical activity', 'Aunt Flo', 'Sleep habits'],
        followed: [],
        active: ''
    }),
    actions: {
        getLabel(item) {
            let index = this.all.indexOf(item)
            return index >= 0 ? this.labels.slice(index, index+1).pop() : ''
        },
        clearActive() {
            this.active = '';
        },
        setActive(item) {
            if (this.all.indexOf(item) >= 0) {
                this.active = item
            }
        },
        clearFollows() {
            this.followed = [];
        },
        toggleFollow(item) {
            let allIndex = this.all.indexOf(item)
            let selectIndex = this.followed.indexOf(item)
            if (allIndex >= 0 && selectIndex < 0) {
                this.followed.push(item)
            } else if (allIndex >= 0) {
                this.followed.splice(selectIndex, 1)
                if (this.active == item) {
                    this.active = ''
                }
            }
        },
        async hydrate(nhost) {
            const PREFQUERY = gql`
                query UserPreferences {
                    preferences {
                        followed
                        active
                    }
                }
            `
            const { data, error } = await nhost.graphql.request(PREFQUERY);

            if (!error) {
                let result = data.preferences[0];
                this.setActive(result.active);
                this.clearFollows();
                for (let f = 0; f < result.followed.length; f++) {
                    this.toggleFollow(result.followed[f]);
                }
            }
        },
        async archive(nhost) {
            const PREFUPSERT = gql`
                mutation UpsertPreferences ($id: uuid, $followed: jsonb, $active: String) {
                    insert_preferences(
                        objects: { user_id: $id, followed: $followed, active: $active }
                        on_conflict: {
                            constraint: preferences_pkey,
                            update_columns: [ followed, active ]
                        }
                    ) {
                        returning {
                            followed
                            active
                        }
                    }
                }
            `
            let props = { 
                id: 'be7286d1-74b9-4fcc-a17e-5abc8375c4b2', 
                followed: this.followed, 
                active: this.active
            };
            const { data, error } = await nhost.graphql.request(PREFUPSERT, props);
            
            if (!error) {
                let result = data.insert_preferences.returning[0];
                this.setActive(result.active);
                this.clearFollows();
                for (let f = 0; f < result.followed.length; f++) {
                    this.toggleFollow(result.followed[f]);
                }
            }
        }
    }
});