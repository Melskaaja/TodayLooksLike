<script setup></script>

<template>
    <div>
        <h1>Preferences</h1>
    </div>
    <div>
        There will be many switches here to toggle which kinds of stuff to follow. Options include:
        <ol>
            <li>mood/moods? can there be several?</li>
            <li>period</li>
            <li>quote/journal</li>
        </ol>
    </div>
</template>

<style scoped lang="scss">
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo {
    transform: rotate(0deg);
    transition: 1s ease-in-out;
    &:hover {
        filter: drop-shadow(0 0 1em lightseagreen);
        transform: rotate(-180deg);
        &.vue {
            filter: drop-shadow(0 0 1em pink);
            transform: rotate(180deg);
        }
    }
}
</style>
