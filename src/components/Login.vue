<template>
<div class="row py-5" style="background-color: ;">
    <div class="col-sm-6 col-md-7 col-lg-8 col-xxl-9"></div>
    <div class="col-sm-6 col-md-5 col-lg-4 col-xxl-3" style="background-color: ;">
        <form class="row gap-3 needs-validation" novalidate>
            <div class="col-12">
                <div class="form-floating">
                    <input type="email" class="form-control" id="loginEmail" placeholder="name@example.com" required>
                    <label for="loginEmail">Email address</label>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please enter valid Email
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <input type="password" class="form-control" id="loginPassword" placeholder="********" required>
                    <label for="loginPassword">Password</label>
                </div>
            </div>
            <div class="col-12 ms-2">
                <a href="#">Forgot Password?</a>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-8 text-center d-grid">
                <button @click.prevent="loginValidate()" class="btn btn-outline-success">Login</button>
            </div>
            <div class="col-sm-2"></div>
        </form>

    </div>
</div>
</template>

<script>
export default {
    name: 'Login',
    setup() {

        function loginValidate() {
            const needs = document.querySelector('.needs-validation')

            const loginEmail = document.getElementById('loginEmail').value
            const loginPassword = document.getElementById('loginPassword').value

            if (loginEmail == '' || loginPassword == '') {
                needs.classList.add('was-validated')
                needs.classList.remove('needs-validation')
            }
        }

        return {
            loginValidate
        }
    }

}
</script>

<style scoped>

</style>
