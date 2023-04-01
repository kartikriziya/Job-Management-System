<template>
  <div class="container">
    <!-- <h1 class="bg-red-600">Setting</h1> -->
    <div class="row">
      <div class="col-12">
        <h3>Setting</h3>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-sm-4 col-md-3 ps-md-3 ps-lg-5">
        <div class="personal_list">
          <h4 class="personal_items">
            <router-link class="personal_item" :to="{ name: 'personal' }"
              >Personal</router-link
            >
          </h4>
          <h4 class="personal_items">
            <router-link class="personal_item" :to="{ name: 'introduction' }"
              >Introduction</router-link
            >
          </h4>
          <h4 class="personal_items">
            <router-link class="personal_item" :to="{ name: 'security' }"
              >Security</router-link
            >
          </h4>
        </div>
      </div>
      <div class="col-sm-8 col-md-9" style="background-color: ">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router"

export default {
  name: "Setting",
  setup() {},
}
</script>

<style scoped>
.personal_list {
  display: flex;
  flex-direction: column;
}
.personal_items {
  margin-top: 25px;
  font-weight: 400;
  cursor: pointer;
}
.personal_items:hover {
  margin-left: 10px;
  transition: margin-left 0.5s ease;
}
.personal_item {
  display: block;
  text-decoration: none;
  color: black;
}
.personal_item:hover {
  color: rgb(159, 67, 67);
  font-weight: 500;
}
.router-link-exact-active {
  color: rgb(159, 67, 67);
}
</style>
