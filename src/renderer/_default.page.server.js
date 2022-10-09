export { render }
export { passToClient }

import { createApp } from './tll-app'
import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'

const passToClient = ['pageProps', 'documentProps', 'routeParams']

async function render(pageContext) {
    const app = createApp(pageContext)

    const appHtml = await renderToString(app)

    const title = 'Today Looks Like'

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