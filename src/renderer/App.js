// separate app creation, so it can be called the same from both server and client
import { createSSRApp, h, markRaw, reactive } from 'vue'
import { createPinia } from 'pinia'
import { createNhostClient } from './Nhost'
import { setPageContext } from './Page'
import LayoutDefault from '../layouts/Default.vue'

export { createApp }

function createApp(pageContext) {
    // generate ssr app
    let rootComponent
    const app = createSSRApp({
        data: () => ({
            Layout: markRaw(pageContext.Layout || LayoutDefault),
            Page: markRaw(pageContext.Page),
            pageProps: markRaw(pageContext.pageProps || {})
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

    // cross-app store and remote db
    const pinia = createPinia();
    const nhost = createNhostClient();
    app.use(pinia).use(nhost);

    // for client routing
    app.changePage = (ctx) => {
        Object.assign(pageContextReactive, ctx)
        rootComponent.Layout = markRaw(ctx.Layout || LayoutDefault)
        rootComponent.Page = markRaw(ctx.Page)
        rootComponent.pageProps = markRaw(ctx.pageProps || {})
    }
    
    // with client routing context has to be reactive
    const pageContextReactive = reactive(pageContext);
    setPageContext(app, pageContextReactive);

    return { app, pinia, nhost }
}