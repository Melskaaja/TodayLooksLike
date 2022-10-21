import { defineStore } from 'pinia'

// TODO get from mongo at some point
// do a fetch action, use vue's onServerPrefetch, onMounted to call the action in page

export const useFollowStorage = defineStore('whichButtonsToShowStore', {
    state: () => ({
        all: ['mood', 'social', 'food', 'journal', 'work', 'sport', 'period', 'sleep'],
        labels: ['General mood', 'Social activity', 'Food consumption', 'Open journal', 'Work activity', 'Physical activity', 'Aunt Flo', 'Sleep habits'],
        followed: ['mood', 'social', 'food', 'sleep'],
        active: ''
    }),
    actions: {
        fetchData() {
            //
        },
        setActive(item) {
            if (this.all.indexOf(item) >= 0) {
                this.active = item
            }
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
        getLabel(item) {
            let index = this.all.indexOf(item)
            return index >= 0 ? this.labels.slice(index, index+1).pop() : ''
        }
    }
});