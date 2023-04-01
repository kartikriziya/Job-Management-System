<template>
  <!-- <h1>Personal</h1> -->
  <div class="row">
    <div class="col-md-2 col-xl-1"></div>
    <div class="col-md-8 col-xl-10">
      <!-- by adding novalidate to form tag will clear fields on changing state or rendering new component -->
      <form class="row gy-3 needs-validaiton">
        <div class="col-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              name="fName"
              id="fName"
              placeholder="first"
              required
            />
            <label for="fName"
              >First name<span class="text-danger">*</span></label
            >
          </div>
        </div>
        <div class="col-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              name="lName"
              id="lName"
              placeholder="last"
              required
            />
            <label for="lName"
              >Last name<span class="text-danger">*</span></label
            >
          </div>
        </div>
        <div class="col-12">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              name="email"
              id="Email"
              placeholder="name@example.com"
              required
            />
            <label for="Email"
              >Email address<span class="text-danger">*</span></label
            >
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter valid Email</div>
          </div>
        </div>
        <div class="col-3">
          <div class="form-floating">
            <!-- <h1 v-for="day in days" value="1">{{ day }}</h1> -->
            <select
              class="form-select"
              name="day"
              id="Day"
              placeholder="day"
              required
            >
              <option v-for="n in 31" :value="n">{{ n }}</option>
            </select>
            <label for="Day">Day<span class="text-danger">*</span></label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-floating">
            <!-- <h1 v-for="day in days" value="1">{{ day }}</h1> -->
            <select
              class="form-select"
              name="month"
              id="Month"
              placeholder="month"
              required
            >
              <option v-for="month in months" :value="month">
                {{ month }}
              </option>
            </select>
            <label for="Month">Month<span class="text-danger">*</span></label>
          </div>
        </div>
        <div class="col-5">
          <div class="form-floating">
            <!-- <h1 v-for="day in days" value="1">{{ day }}</h1> -->
            <select
              class="form-select"
              name="year"
              id="Year"
              placeholder="year"
              required
            >
              <option v-for="n in yearRange(2023, 1972)" :value="n">
                {{ n }}
              </option>
            </select>
            <label for="Year">Year<span class="text-danger">*</span></label>
          </div>
        </div>
        <div class="col-5">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              name="address"
              id="Address"
              placeholder="address"
              required
            />
            <label for="Address"
              >Street name<span class="text-danger">*</span></label
            >
          </div>
        </div>
        <div class="col-2">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              name="homeNr"
              id="HomeNr"
              placeholder="home nr."
              required
            />
            <label for="HomeNr"
              >Home nr.<span class="text-danger">*</span></label
            >
          </div>
        </div>
        <div class="col-5">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              name="addAddress"
              id="AddAddesss"
              placeholder="additional address"
            />
            <label for="AddAddress">Additional address</label>
          </div>
        </div>
        <div class="col-sm-2 col-md-3 col-xl-4"></div>
        <div class="col-sm-8 col-md-6 col-xl-4 text-center d-grid">
          <button class="btn btn-outline-warning">Update</button>
        </div>
        <div class="col-sm-2 col-md-3 col-xl-4"></div>
      </form>
    </div>
    <div class="col-md-2 col-xl-1"></div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "Personal",
  setup() {
    const months = ref([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ])

    function yearRange(start, end) {
      return Array(start - end + 1)
        .fill()
        .map((val, i) => start - i)
    }

    return {
      months,
      yearRange,
    }
  },
}
</script>

<style></style>
