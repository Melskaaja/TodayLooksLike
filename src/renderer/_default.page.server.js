export { render }
export { passToClient }

import { createApp } from './App'
import { getPageTitle } from './Page'
import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'

const passToClient = ['Layout', 'documentProps', 'pageProps', 'initialStoreState']; // 'routeParams', 

async function render(ctx) {
    let { app, pinia } = createApp(ctx);

    let title = getPageTitle(ctx);
    let appHtml = await renderToString(app);
    
    ctx.initialStoreState = pinia.state.value;

    return escapeInject`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
    </head>
    <body id="app">${dangerouslySkipEscape(appHtml)}</body>
</html>`
}