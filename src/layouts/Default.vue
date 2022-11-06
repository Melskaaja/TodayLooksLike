<script setup>
import { NConfigProvider } from 'naive-ui'
import { tllTheme, tllOverride } from './Theme.js'

</script>

<template>
    <n-config-provider :theme="tllTheme" :themeOverrides="tllOverride">
        <header>
            <nav></nav>
        </header>

        <main>
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