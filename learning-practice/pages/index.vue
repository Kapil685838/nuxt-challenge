<template>
    <div>
        <h1>Welcome to the homepage</h1>
        <AppAlert>
            This is an auto-imported component
        </AppAlert>
        <br>
        <img src="/img/nuxt-logo.png" 
            alt="Discover Nuxt 3" 
            width="40%" 
            style="margin: auto" />
        <br>
        <img src="~/assets/img/nuxt-logo.png" 
            alt="Discover Nuxt 3" 
            width="40%" 
            style="margin: auto" />
    </div>
</template>


<script setup>
    const runtimeConfig = useRuntimeConfig();
    const appConfig = useAppConfig()
</script>