import { NhostClient } from '@nhost/vue'

export { createNhostClient }

function createNhostClient() {
    return new NhostClient({
        subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
        region: import.meta.env.VITE_NHOST_REGION
    })
}