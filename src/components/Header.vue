<template>
  <header>
    <div class="container-fluid">
      <div class="row p-2 brand">
        <div
          class="col-sm-3 text-center text-sm-start text-md-start text-lg-start text-xl-start"
        >
          <!-- <a href="#">
                    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
                </a> -->
          <router-link :to="{ name: 'home' }">
            <img
              alt="Vue logo"
              class="logo"
              src="../assets/logo.svg"
              width="125"
              height="125"
            />
          </router-link>
        </div>
        <div
          class="col-sm-9 text-center text-sm-start text-md-start text-lg-start text-xl-start"
        >
          <h1>Job-Management-System</h1>
        </div>
      </div>
    </div>
  </header>

  <Navbar />
</template>

<script>
import Navbar from "./Navbar.vue"

export default {
  name: "Header",
  components: {
    Navbar,
  },
}
</script>

<style scoped>
header {
  background-color: coral;
  cursor: pointer;
}

/* >=Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .brand {
    display: flex;
    place-items: center;
  }
}
</style>
