export { render }
export const clientRouting = true

import { createApp } from './App'
import { getPageTitle } from './Page'
import { hydrateAllStores } from './Storage'
import LayoutUser from '../layouts/User.vue'
import '../styles/tll-app.scss'

let app
let nhost

async function render(ctx) {
    if (!app) {
        let creation = await createApp(ctx);

        nhost = creation.nhost
        creation.pinia.state.value = ctx.StoreState;
        hydrateAllStores(nhost);

        app = creation.app;
        app.mount('#app');
    } else {
        // re-check layout and user when changing pages
        if (await nhost.auth.isAuthenticatedAsync()) {
            ctx.User = nhost.auth.getUser();
            ctx.Layout = LayoutUser;
        }
        
        app.changePage(ctx);
    }
    document.title = getPageTitle(ctx);
}