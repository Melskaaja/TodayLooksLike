<script>
export { documentProps }
let documentProps = { title: 'Login' }
</script>

<script setup>
import { ref } from 'vue'
import { navigate } from 'vite-plugin-ssr/client/router'
import { NSpace, NSpin, NCard, NInput, NButton, NIcon } from 'naive-ui'
import { At, Password, ViewFilled, ViewOffFilled } from '@vicons/carbon'
import { useSignInEmailPassword, useNhostClient } from '@nhost/vue'
import { hydrateAllStores } from '../renderer/Storage'

let { signInEmailPassword, needsEmailVerification } = useSignInEmailPassword();
const { nhost } = useNhostClient();

let email = ref('');
let password = ref('');
let showLoginSpin = ref(false);

let handleSubmit = async () => {
    showLoginSpin.value = true;
    let { isSuccess } = await signInEmailPassword(email.value, password.value);
    if (isSuccess) {
        hydrateAllStores(nhost);
        await navigate('/');
    } else {
        showLoginSpin.value = false;
    }
}
</script>

<template>
    <n-space vertical>
        <h1 class="first">Login</h1>
        <p v-if="needsEmailVerification">
            Hahano. Go to your inbox to verify yourself first.
        </p>
        <form v-else>
            <n-spin :show="showLoginSpin">
                <template #description>
                    Logging in..
                </template>
                <n-card>
                    <n-input v-model:value="email" type="email" placeholder="Email address">
                        <template #prefix>
                            <n-icon :component="At" :size="16"/>
                        </template>
                    </n-input>
                    <n-input v-model:value="password" type="password" placeholder="Password" show-password-on="click">
                        <template #prefix>
                            <n-icon :component="Password" :size="16"/>
                        </template>
                        <template #password-visible-icon>
                            <n-icon :component="ViewFilled" :size="16"/>
                        </template>
                        <template #password-invisible-icon>
                            <n-icon :component="ViewOffFilled" :size="16"/>
                        </template>
                    </n-input>
                    <n-button type="primary" @click="handleSubmit()">Log in</n-button>
                </n-card>
            </n-spin>
        </form>
    </n-space>
</template>

<style scoped lang="scss">
@import '../styles/tll-variables';
.n-card {
    margin-bottom: $gap;
    .n-input {
        margin-bottom: calc($gap / 2);
    }
}
</style>
