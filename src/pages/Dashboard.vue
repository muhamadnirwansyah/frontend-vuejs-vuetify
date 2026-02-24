<template>
    <v-main>
        <v-container>
            <v-card class="pa-6" rounded="xl">
                <v-card-title class="text-h5">
                    Dashboard
                </v-card-title>
                <v-card-text>
                    Selamat datang  🚀
                </v-card-text>
                <v-btn color="primary" class="mr-2" @click="router.push('/questions')">
                    Go to Questions
                </v-btn>
                <v-btn color="error" @click="logout">
                    Logout
                </v-btn>
            </v-card>
        </v-container>
    </v-main>
</template>
<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const logout = () => {
        localStorage.removeItem('auth');
        router.push('/login');
    }
</script>