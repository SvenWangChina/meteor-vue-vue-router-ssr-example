<template>
    <nav>
        <div class="app-title">meteor vue2.0 vue-router vue-ssr vue-less vue-meteor-tracker</div>
        <router-link :to="{ name: 'home' }" exact>Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
    </nav>
</template>