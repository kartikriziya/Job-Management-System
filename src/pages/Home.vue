<template>
<div class="container home p-2">
    <h1>Home</h1>

    <!-- Login-Component -->
    <Login/>

    <!-- SignUp-Component -->
    <SignUp />
</div>
</template>

<script>
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

export default {
    name: 'Home',
    components: {
        Login,
        SignUp
    },

}
</script>

<style scoped>
.home {
    background-color: lightgray;
}
</style>
