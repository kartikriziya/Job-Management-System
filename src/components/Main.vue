<template>
<main>
    <h1>Main</h1>
    <router-view></router-view>
</main>
</template>

<script>

export default {
    name: "Main",
};
</script>

<style scoped>
main {
    background-color: rgb(168, 193, 183);
    min-height: 1200px;
    margin-top: 10px;
}
</style>
