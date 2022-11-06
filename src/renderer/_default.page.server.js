export { render, onBeforeRender }
export { passToClient }

import { createApp } from './App'
import { getPageTitle } from './Page'
import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'

const passToClient = ['Layout', 'User', 'StoreState', 'documentProps', 'pageProps']; // 'routeParams', 

async function render(ctx) {
    let { app, pinia } = await createApp(ctx);

    let title = getPageTitle(ctx);
    let appHtml = await renderToString(app);
    
    ctx.StoreState = pinia.state.value;

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

function onBeforeRender() {
    // for the future?
}