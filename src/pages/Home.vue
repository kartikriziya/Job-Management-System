<template>
<div class="container home p-2">
    <h1>Home</h1>

    <div class="row" style="background-color: ;">
        <div class="col-sm-6 col-md-7 col-lg-8 col-xxl-8"></div>
        <div class="col-sm-6 col-md-5 col-lg-4 col-xxl-4" style="background-color: ;">
            <div class="row">
                <!-- Login -->
                <div class="col-sm-6 text-center text-sm-end text-md-end text-lg-end text-xl-end">
                    <button @click="$router.push('/login')" class="btn btn-success">Login</button>
                </div>
                <!-- SignUp -->
                <div class="col-sm-6 text-center text-sm-start text-md-start text-lg-start text-xl-start my-2 my-sm-0">
                    <button @click="$router.push('/signup')" class="btn btn-info">SignUp</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Login & SignUp Components -->
    <RouterView />
</div>
</template>

<script>
import {RouterView } from 'vue-router';

export default {
    name: 'Home',
    setup(){

    }

}
</script>

<style scoped>
.home {
    background-color: lightgray;
}
</style>
