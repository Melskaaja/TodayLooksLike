export { clearAllStores, hydrateAllStores, archiveAllStores }

import { useFollowStore } from '../stores/FollowStore'
import { useContentStore } from '../stores/ContentStore'

function getAllStores() {
    return [
        useFollowStore(),
        useContentStore()
    ];
}

function clearAllStores() {
    getAllStores().forEach((store) => {
        store.$reset();
    });
}

function hydrateAllStores(nhost) {
    getAllStores().forEach((store) => {
        store.hydrate(nhost);
    });
}

function archiveAllStores(nhost) {
    getAllStores().forEach((store) => {
        store.archive(nhost);
    });
}