// separate app creation, so it can be called the same from both server and client
import { createSSRApp, defineComponent, h, markRaw, reactive } from 'vue'
import { setPageContext } from './usePageContext.js'
import LayoutDefault from '../layouts/Default.vue'

export { createApp }

function createApp(pageContext) {
    const { Page } = pageContext

    let rootComponent
    const PageWithWrapper = defineComponent({
        data: () => ({
            Page: markRaw(Page),
            pageProps: markRaw(pageContext.pageProps || {}),
            Layout: markRaw(pageContext.exports.Layout || LayoutDefault)
        }),
        created() {
            rootComponent = this
        },
        render() {
            return h(this.Layout, {}, {
                default: () => {
                    return h(this.Page, this.pageProps)
                }
            })
        }
    })

    const app = createSSRApp(PageWithWrapper)

    // for client routing
    app.changePage = (pageContext) => {
        Object.assign(pageContextReactive, pageContext)
        rootComponent.Page = markRaw(pageContext.Page)
        rootComponent.pageProps = markRaw(pageContext.pageProps || {})
        rootComponent.Layout = markRaw(pageContext.exports.Layout || LayoutDefault)
    }
    
    const pageContextReactive = reactive(pageContext)

    setPageContext(app, pageContextReactive)

    return app
}