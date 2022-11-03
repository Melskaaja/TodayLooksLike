import { NhostClient } from '@nhost/vue'
import { createApolloClient } from '@nhost/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import 'cross-fetch/polyfill'

export { createNhostClient }

function createNhostClient() {
    let nhost = new NhostClient({
        subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
        region: import.meta.env.VITE_NHOST_REGION
    });
    
    let apollo = createApolloClient({ nhost });
    let defaultApollo = DefaultApolloClient;

    return { nhost, apollo, defaultApollo }
}