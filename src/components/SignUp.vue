<template>
  <div class="row py-3" style="background-color: ">
    <div class="col-sm-5 col-md-6 col-lg-7 col-xxl-8"></div>
    <div
      class="col-sm-7 col-md-6 col-lg-5 col-xxl-4"
      style="background-color: "
    >
      <!-- by removing novalidate from form tag will not clear fields on changing state or rendering new component -->
      <form
        class="row gy-2 needs-validation"
        novalidate
        style="background-color: "
      >
        <div class="col-sm-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              name="fName"
              id="fName"
              placeholder="first"
              required
            />
            <label for="fName">First name</label>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              name="lName"
              id="lName"
              placeholder="last"
              required
            />
            <label for="lName">Last name</label>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              name="email"
              id="SignUpEmail"
              placeholder="name@example.com"
              required
            />
            <label for="SignUpEmail">Email address</label>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter valid Email</div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              name="password"
              id="SignUpPassword1"
              placeholder="********"
              required
            />
            <label for="SignUpPassword1">Password</label>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              name="password"
              id="SignUpPassword2"
              placeholder="********"
              required
            />
            <label for="SignUpPassword2">Re-password</label>
          </div>
        </div>
        <div class="col-sm-3"></div>
        <div class="col-sm-6 text-center d-grid">
          <button
            @click.prevent="signUpValidate()"
            class="btn btn-outline-info"
          >
            Signup
          </button>
        </div>
        <div class="col-sm-3"></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  setup() {
    function signUpValidate() {
      const needs = document.querySelector(".needs-validation")

      const fName = document.getElementById("fName").value
      const lName = document.getElementById("lName").value
      const SignUpEmail = document.getElementById("SignUpEmail").value
      const SignUpPassword1 = document.getElementById("SignUpPassword1").value
      const SignUpPassword2 = document.getElementById("SignUpPassword2").value

      if (
        fName == "" ||
        lName == "" ||
        SignUpEmail == "" ||
        SignUpPassword1 == "" ||
        SignUpPassword2 == ""
      ) {
        needs.classList.add("was-validated")
        needs.classList.remove("needs-validation")
      }
    }

    return {
      signUpValidate,
    }
  },
}
</script>

<style scoped></style>
