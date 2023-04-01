<template>
  <div class="container">
    <!-- <h1>Salaries</h1> -->
    <div class="row text-center">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <h2>Select View to see Hours</h2>
      </div>
      <div class="col-sm-3"></div>
    </div>
    <div class="row text-center my-3">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div class="btn-group">
          <button
            @click="showMonthly()"
            class="btn btn-secondary"
            id="btnMonthly"
          >
            Monthly
          </button>
          <button
            @click="showYearly()"
            class="btn btn-secondary"
            id="btnYearly"
          >
            Yearly
          </button>
          <button @click="showAll()" class="btn btn-primary" id="btnAll">
            All
          </button>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
    <div class="row my-5">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <div v-if="monthly" class="table-responsive monthly">
          <table class="table table-hover table-striped">
            <thead class="table-dark">
              <tr>
                <th scope="col">Monthly</th>
                <th scope="col">Date</th>
                <th scope="col">From</th>
                <th scope="col">Till</th>
                <th scope="col">Company</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>24.03.2023</td>
                <td>17:00</td>
                <td>23:59</td>
                <td>Clage GmbH</td>
                <td>7</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>25.03.2023</td>
                <td>17:00</td>
                <td>23:59</td>
                <td>Clage GmbH</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="yearly" class="table-responsive monthly">
          <table class="table table-hover table-striped">
            <thead class="table-dark">
              <tr>
                <th scope="col">Yearly</th>
                <th scope="col">Date</th>
                <th scope="col">From</th>
                <th scope="col">Till</th>
                <th scope="col">Company</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>24.03.2023</td>
                <td>17:00</td>
                <td>23:59</td>
                <td>Clage GmbH</td>
                <td>7</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>25.03.2023</td>
                <td>17:00</td>
                <td>23:59</td>
                <td>Clage GmbH</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="all" class="table-responsive monthly">
          <table class="table table-hover table-striped">
            <thead class="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">From</th>
                <th scope="col">Till</th>
                <th scope="col">Company</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>24.03.2023</td>
                <td>17:00</td>
                <td>23:59</td>
                <td>Clage GmbH</td>
                <td>7</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>25.03.2023</td>
                <td>17:00</td>
                <td>23:59</td>
                <td>Clage GmbH</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-sm-1"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "Salaries",
  setup() {
    const monthly = ref(false)
    const yearly = ref(false)
    const all = ref(true)

    function showMonthly() {
      monthly.value = true
      yearly.value = false
      all.value = false

      document
        .querySelector("#btnMonthly")
        .classList.replace("btn-secondary", "btn-primary")
      document
        .querySelector("#btnYearly")
        .classList.replace("btn-primary", "btn-secondary")
      document
        .querySelector("#btnAll")
        .classList.replace("btn-primary", "btn-secondary")
    }
    function showYearly() {
      monthly.value = false
      yearly.value = true
      all.value = false

      document
        .querySelector("#btnMonthly")
        .classList.replace("btn-primary", "btn-secondary")
      document
        .querySelector("#btnYearly")
        .classList.replace("btn-secondary", "btn-primary")
      document
        .querySelector("#btnAll")
        .classList.replace("btn-primary", "btn-secondary")
    }
    function showAll() {
      monthly.value = false
      yearly.value = false
      all.value = true

      document
        .querySelector("#btnMonthly")
        .classList.replace("btn-primary", "btn-secondary")
      document
        .querySelector("#btnYearly")
        .classList.replace("btn-primary", "btn-secondary")
      document
        .querySelector("#btnAll")
        .classList.replace("btn-secondary", "btn-primary")
    }

    return {
      monthly,
      showMonthly,
      yearly,
      showYearly,
      all,
      showAll,
    }
  },
}
</script>

<style scoped></style>
