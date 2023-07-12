<template>
    <div class="app-wrapper">
        <div class="main-container">
            <navbar></navbar>
            <!-- <tags-view></tags-view> -->
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { Navbar, AppMain } from './components'

export default {

    name: 'layout',
    components: {
        Navbar,
        AppMain
    },
}

</script>

<style scoped>

</style>