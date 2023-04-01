<template>
  <div class="row py-3" style="background-color: ">
    <div class="col-sm-5 col-md-6 col-lg-7 col-xxl-8"></div>
    <div
      class="col-sm-7 col-md-6 col-lg-5 col-xxl-4"
      style="background-color: "
    >
      <!-- by adding novalidate to form tag will clear fields on changing state or rendering new component -->
      <form class="row gy-2 needs-validation">
        <div class="col-12">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="loginEmail"
              placeholder="name@example.com"
              required
            />
            <label for="loginEmail">Email address</label>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter valid Email</div>
          </div>
        </div>
        <div class="col-12">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="loginPassword"
              placeholder="********"
              required
            />
            <label for="loginPassword">Password</label>
          </div>
        </div>
        <div class="col-12 ms-2">
          <a href="#">Forgot Password?</a>
        </div>
        <div class="col-sm-3"></div>
        <div class="col-sm-6 text-center d-grid">
          <button
            @click.prevent="loginValidate()"
            class="btn btn-outline-success"
          >
            Login
          </button>
        </div>
        <div class="col-sm-3"></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  setup() {
    function loginValidate() {
      const needs = document.querySelector(".needs-validation")

      const loginEmail = document.getElementById("loginEmail").value
      const loginPassword = document.getElementById("loginPassword").value

      if (loginEmail == "" || loginPassword == "") {
        needs.classList.add("was-validated")
        needs.classList.remove("needs-validation")
      }
    }

    return {
      loginValidate,
    }
  },
}
</script>

<style scoped></style>
