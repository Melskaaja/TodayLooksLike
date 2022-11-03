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
    console.log('clearing stores..');
    getAllStores().forEach((store) => {
        store.$reset();
    });
}

function hydrateAllStores(nhost) {
    console.log('hydrating stores..', nhost.auth);
    getAllStores().forEach((store) => {
        store.hydrate(nhost);
    });
}

function archiveAllStores(nhost) {
    console.log('archiving stores..');
    getAllStores().forEach((store) => {
        store.archive(nhost);
    });
}