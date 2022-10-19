export { render }
export const clientRouting = true

import '../styles/tll-app.scss'

let app
async function render(pageContext) {
    if (!app) {
        app = createApp(pageContext)
        app.mount('#app')
    } else {
        app.changePage(pageContext)
    }
}