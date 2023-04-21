<template>
  <div class="container home p-2">
    <h1>Home</h1>

    <div class="row" style="background-color: ">
      <div
        class="col-sm-6 col-md-7 col-lg-8 col-xxl-8"
        style="background-color: "
      >
        <div class="table-responsive">
          <table class="table table-hover table-striped">
            <thead class="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="user in users">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td>{{ user.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="col-sm-6 col-md-5 col-lg-4 col-xxl-4"
        style="background-color: "
      >
        <div class="row">
          <!-- Login -->
          <div
            class="col-sm-6 text-center text-sm-end text-md-end text-lg-end text-xl-end"
          >
            <button @click="$router.push('/login')" class="btn btn-success">
              Login
            </button>
          </div>
          <!-- SignUp -->
          <div
            class="col-sm-6 text-center text-sm-start text-md-start text-lg-start text-xl-start my-2 my-sm-0"
          >
            <button @click="$router.push('/signup')" class="btn btn-info">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Login & SignUp Components -->
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router"
import { ref } from "vue"
import axios from "axios"

export default {
  name: "Home",
  setup() {
    const users = ref("")

    // Get Method to get data from DB
    // axios.get("http://localhost/Vue3/index.php").then((result) => {
    //   users.value = result.data
    //   console.log(result)
    // })

    // Post Method to send data to DB and get some response from DB or Backend
    axios
      .post("http://localhost/Vue3/index.php", {
        action: "select_allUsers",
      })
      .then((result) => {
        users.value = result.data
        //console.log(result)
      })

    return {
      users,
    }
  },
}
</script>

<style scoped>
.home {
  background-color: lightgray;
}
</style>
