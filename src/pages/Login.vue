<template>
    <v-main>
            <v-container class="fill-height d-flex align-center justify-center">
                <v-card width="400" elevation="12" rounded="xl">
                    <v-card-title class="text-h5 text-center">
                        Login System
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="handleLogin">
                            <v-text-field
                                v-model="username"
                                label="username"
                                prepend-inner-icon="mdi-account"
                                variant="outlined"
                                required
                            />
                            <v-text-field
                                v-model="password"
                                label="password"
                                type="password"
                                prepend-inner-icon="mdi-lock"
                                variant="outlined"
                                required
                            />
                            <v-btn
                                type="submit"
                                color="primary"
                                block
                                size="large"
                                class="mt-4"
                            >
                                Login
                            </v-btn>
                        </v-form>
                        <v-alert
                            v-if="error"
                            type="error"
                            class="mt-4"
                            density="comfortable">
                            Username or password wrong !
                        </v-alert>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
</template>
<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const username = ref('');
    const password = ref('');
    const error = ref(false);

    const router = useRouter();

    const handleLogin = () => {
        if (username.value === 'admin' && password.value === '1234'){
            localStorage.setItem('auth', true);
            router.push('/dashboard');
        }else{
            error.value = true;
        }
    }

</script>