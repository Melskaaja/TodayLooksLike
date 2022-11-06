export { createApp }

import { createSSRApp, h, markRaw, reactive } from 'vue'
import { createPinia } from 'pinia'
import { setPageContext } from './Page'
import { createNhostClient } from './Nhost'

import LayoutDefault from '../layouts/Default.vue'
import LayoutUser from '../layouts/User.vue'

async function createApp(ctx) {
    let rootComponent
    const { nhost, apollo, apolloSymbol } = createNhostClient()

    // pick user layout if authenticated
    if (await nhost.auth.isAuthenticatedAsync()) {
        ctx.User = nhost.auth.getUser();
        ctx.Layout = LayoutUser;
    }

    // generate ssr app
    const app = createSSRApp({
        data: () => ({
            Layout: markRaw(ctx.Layout || LayoutDefault),
            Page: markRaw(ctx.Page),
            pageProps: markRaw(ctx.pageProps || {})
        }),
        render() {
            return h(this.Layout, {}, {
                default: () => {
                    return h(this.Page, this.pageProps)
                }
            })
        },
        created() {
            rootComponent = this
        }
    });

    // pinia setup
    const pinia = createPinia();

    app.provide(apolloSymbol, apollo)
       .use(pinia)
       .use(nhost);

    // function to change pages with client routing
    app.changePage = (ctx) => {
        Object.assign(pageContextReactive, ctx)
        rootComponent.Layout = markRaw(ctx.Layout || LayoutDefault)
        rootComponent.Page = markRaw(ctx.Page)
        rootComponent.pageProps = markRaw(ctx.pageProps || {})
    }
    
    // since client routing is on, context should be reactive
    const pageContextReactive = reactive(ctx);
    setPageContext(app, pageContextReactive);

    return { app, pinia, nhost }
}
