<script setup>
import { NConfigProvider, NIcon } from 'naive-ui';
import { createTheme, cardDark, sliderDark, inputDark, switchDark, inputNumberDark } from 'naive-ui';
import { Lightning, SettingsAdjust } from '@vicons/carbon';

let tllTheme = createTheme([ cardDark, sliderDark, inputDark, switchDark, inputNumberDark ]);
let tllOverride = {
    common: {
        fontFamily: 'Dosis, Helvetica, Arial, sans-serif',
        fontSize: '18px',
        fontSizeHuge: '22px',
        fontSizeLarge: '20px',
        fontSizeMedium: '18px',
        fontSizeMini: '15px',
        fontSizeSmall: '15px',
        fontSizeTiny: '12px'
    },
    slider: {
        markFontSize: '15px'
    },
    input: {
        fontSizeMedium: '16px'
    }
};

let year = new Date().getFullYear();
</script>

<template>
    <n-config-provider :theme="tllTheme" :themeOverrides="tllOverride">
        <header>
            <nav>
                <a class="navitem" href="/">
                    <n-icon :component="Lightning"/>
                    <label>Quick view</label>
                </a>
                <a class="navitem" href="/preferences">
                    <n-icon :component="SettingsAdjust"/>
                    <label>Preferences</label>
                </a>
            </nav>
        </header>

        <main><slot /></main>

        <footer>
            <p>&copy; {{ year }} <a href="https://github.com/Melskaaja" target="_blank">Melskaaja</a></p>
        </footer>
    </n-config-provider>
</template>

<style scoped lang="scss">
@import '../scss/tll-variables';
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
        .navitem {
            padding: 3px 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .n-icon {
                font-size: 1.2rem;
            }
            label {
                display: none;
                @media (min-width: $breakpoint-sm) {
                    display: inline;
                    padding-left: $gap * 0.5;
                }
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