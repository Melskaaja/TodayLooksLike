import { defineStore } from 'pinia'

// TODO get from mongo at some point
// do a fetch action, use vue's onServerPrefetch, onMounted to call the action in page

export const useTrackStorage = defineStore('tracks', {
    state: () => ({
        all: ['mood', 'social', 'food', 'journal', 'work', 'sport', 'period', 'sleep'],
        labels: ['General mood', 'Social activity', 'Food consumption', 'Open journal', 'Work activity', 'Physical activity', 'Aunt Flo', 'Sleep habits'],
        active: ['mood', 'social', 'food', 'sleep']
    }),
    actions: {
        activate(item) {
            let allIndex = this.all.indexOf(item)
            let selectIndex = this.active.indexOf(item)
            if (allIndex >= 0 && selectIndex < 0) {
                this.active.push(item)
            }
        },
        deactivate(item) {
            let index = this.active.indexOf(item)
            if (index >= 0) {
                this.active.splice(index, 1)
            }
        },
        toggleActive(item) {
            let allIndex = this.all.indexOf(item)
            let selectIndex = this.active.indexOf(item)
            if (allIndex >= 0 && selectIndex < 0) {
                this.active.push(item)
            } else if (allIndex >= 0) {
                this.active.splice(selectIndex, 1)
            }
        },
        getLabel(item) {
            let index = this.all.indexOf(item)
            return index >= 0 ? this.labels.slice(index, index+1).pop() : ''
        }
    }
});