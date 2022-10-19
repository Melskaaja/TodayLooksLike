import { inject } from 'vue'

export { usePageContext }
export { setPageContext }
export { getPageTitle }

const key = Symbol()

function usePageContext() {
    const pageContext = inject(key);
    return pageContext
}

function setPageContext(app, ctx) {
    app.provide(key, ctx);
}

function getPageTitle(ctx) {
  const title =
    // `export { documentProps }` in *.page.js
    (ctx.exports.documentProps || {}).title ||
    // `export addContextProps()` in *.page.server.js
    (ctx.documentProps || {}).title ||
    'Today Looks Like';
  return title+' - TLL'
}