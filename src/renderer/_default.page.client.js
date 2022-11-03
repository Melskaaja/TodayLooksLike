export { render }
export const clientRouting = true

import { createApp } from './App'
import { getPageTitle } from './Page'
import { hydrateAllStores } from './Storage'
import '../styles/tll-app.scss'

let app

async function render(ctx) {
    if (!app) {
        let creation = createApp(ctx);

        creation.pinia.state.value = ctx.initialStoreState;
        
        // TODO how to preserve stores beyond refresh
        hydrateAllStores(creation.nhost);

        app = creation.app;
        app.mount('#app');
    } else {
        app.changePage(ctx);
    }
    document.title = getPageTitle(ctx);
}