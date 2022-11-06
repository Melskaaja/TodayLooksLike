<script setup>
import { NConfigProvider, NSpace, NAlert, NButtonGroup, NIcon, NButton } from 'naive-ui'
import { Login, Pen, SettingsAdjust, Logout } from '@vicons/carbon'
import { useAuthenticated, useNhostClient, useSignOut } from '@nhost/vue'
import { navigate } from 'vite-plugin-ssr/client/router'

import { tllTheme, tllOverride } from './Theme'
import { archiveAllStores, clearAllStores } from '../renderer/Storage'

const { nhost } = useNhostClient();
const isAuthenticated = useAuthenticated();
const { signOut } = useSignOut();

const handleLogout = async () => {
    archiveAllStores(nhost);
    clearAllStores();
    signOut();
    await navigate('/login');
}
</script>

<template>
    <n-config-provider :theme="tllTheme" :themeOverrides="tllOverride">
        <header>
            <nav>
                <n-button-group>
                    <n-button type="primary" quaternary round @click="navigate('/')" class="collapse">
                        <template #icon><n-icon :component="Pen" size="22"/></template>
                        <template #default>Tracking</template>
                    </n-button>
                    <n-button type="primary" quaternary round @click="navigate('/preferences')" class="collapse">
                        <template #icon><n-icon :component="SettingsAdjust" size="22"/></template>
                        <template #default>Preferences</template>
                    </n-button>
                    <n-button type="error" quaternary round @click="handleLogout()" class="collapse">
                        <template #icon><n-icon :component="Logout" size="22"/></template>
                        <template #default>Log out</template>
                    </n-button>
                </n-button-group>
            </nav>
        </header>

        <main>
            <n-space v-if="!isAuthenticated" justify="center">
                <n-alert type="warning" title="You're not logged in!" closable>
                    Any tracking info you enter before logging in will not be saved.
                </n-alert>
            </n-space>
            <slot />
        </main>

        <footer>
            <p>&copy; {{ new Date().getFullYear() }} <a href="https://github.com/Melskaaja" target="_blank">Melskaaja</a></p>
        </footer>
    </n-config-provider>
</template>

<style scoped lang="scss">
@import '../styles/tll-variables';
header {
    position: fixed;
    width: $full-width;
    height: $header-height;
    background-color: $header-background;
    @media (prefers-color-scheme: light) {
        background-color: $light-header-background;
    }
    nav {
        flex-shrink: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0;
        height: $header-height;
    }
}
main {
    font-size: $text-size !important;
    margin: 0 auto;
    padding-top: $header-height;
    padding-bottom: $footer-height;
    height: 100%;
    width: calc(100% - 1rem);
}
footer {
    position: fixed;
    bottom: 0;
    width: $full-width;
    height: $footer-height;
    display: flex;
    justify-content: center;
    font-size: $text-size * 0.8;
    background-color: $footer-background;
    @media (prefers-color-scheme: light) {
        background-color: $light-footer-background;
    }
    p {
        margin: 0;
        padding: 0 1rem;
    }
}
</style>