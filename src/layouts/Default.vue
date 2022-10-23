<script setup>
import { navigate } from 'vite-plugin-ssr/client/router'
import { useAuthenticated, useSignOut } from '@nhost/vue'
import { NConfigProvider, NSpace, NAlert, NIcon, NButton } from 'naive-ui'
import { createTheme, cardDark, sliderDark, inputDark, switchDark, inputNumberDark, alertDark } from 'naive-ui'
import { Login, Pen, SettingsAdjust, Logout } from '@vicons/carbon'

const isAuthenticated = useAuthenticated();
const { signOut } = useSignOut();

let tllTheme = createTheme([ cardDark, sliderDark, inputDark, switchDark, inputNumberDark, alertDark ]);
let tllOverride = {
    common: {
        fontFamily: 'Dosis, Helvetica, Arial, sans-serif',
        fontSize: '18px',
        fontSizeHuge: '22px',
        fontSizeLarge: '20px',
        fontSizeMedium: '18px',
        fontSizeMini: '15px',
        fontSizeSmall: '15px',
        fontSizeTiny: '12px',
        primaryColor: '#169292',
        primaryColorHover: '#1cb5b5',
        primaryColorPressed: '#107070',
        primaryColorSuppl: '#0a5050'
    },
    slider: {
        markFontSize: '15px'
    },
    input: {
        fontSizeMedium: '16px'
    }
};

let year = new Date().getFullYear();

const handleLogout = async () => {
    signOut();
    await navigate('/login');
}
</script>

<template>
    <n-config-provider :theme="tllTheme" :themeOverrides="tllOverride">
        <header>
            <nav>
                <n-space>
                    <a v-show="!isAuthenticated" href="/login">
                        <n-button type="success" quaternary round>
                            <n-icon :component="Login" size="22"/>
                            <label>Log in</label>
                        </n-button>
                    </a>
                    <a href="/">
                        <n-button type="primary" quaternary round>
                            <n-icon :component="Pen" size="22"/>
                            <label>Tracking</label>
                        </n-button>
                    </a>
                    <a href="/preferences">
                        <n-button type="primary" quaternary round>
                            <n-icon :component="SettingsAdjust" size="22"/>
                            <label>Preferences</label>
                        </n-button>
                    </a>
                    <n-button v-show="isAuthenticated" type="error" quaternary round @click="handleLogout()">
                        <n-icon :component="Logout" size="22"/>
                        <label>Log out</label>
                    </n-button>
                </n-space>
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
            <p>&copy; {{ year }} <a href="https://github.com/Melskaaja" target="_blank">Melskaaja</a></p>
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
        .n-button label {
            margin-left: 0.6rem;
            display: none;
            @media (min-width: $breakpoint-md) {
                display: inline;
            }
        }
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