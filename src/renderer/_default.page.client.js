export { render }
export const clientRouting = true

import { createApp } from './App'
import { getPageTitle } from './Page'
import '../styles/tll-app.scss'

let app

async function render(ctx) {
    if (!app) {
        let created = createApp(ctx);
        created.pinia.state.value = ctx.initialStoreState;
        app = created.app
        app.mount('#app');
    } else {
        app.changePage(ctx);
    }
    document.title = getPageTitle(ctx);
}