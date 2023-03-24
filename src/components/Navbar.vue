<template>
<nav class="navbar sticky-top navbar-expand-sm navbar-light">
    <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <!-- <a class="nav-link active" aria-current="page" href="/">Home</a> -->
                    <router-link class="nav-link" id="homeLink" :to="{ name: 'home' }">Home</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="/about">About Us</a> -->
                    <router-link class="nav-link" id="aboutLink" :to="{ name: 'about' }">About Us</router-link>
                </li>
                
                <li class="nav-item">
                    <!-- <a class="nav-link" href="/contact">Contact</a> -->
                    <router-link class="nav-link" id="contactLink" :to="{ name: 'contact' }">Contact</router-link>
                </li>
            </ul>
            <ul class="navbar-nav d-flex">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../assets/JMS/user.png" class="rounded-circle z-depth-0 me-1" alt="User_img" height="35" width="35"> Profile
                    </a>
                    <ul class="dropdown-menu">
                        <li><router-link class="nav-link" :to="{ name: 'jobs' }">Jobs</router-link></li>
                        <li><router-link class="nav-link" :to="{ name: 'salaries' }">Salaries</router-link></li>
                        <li><router-link class="nav-link" :to="{ name: 'setting' }">Setting</router-link></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item disabled">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<style scoped>
.navbar {
    background-color: rgb(176, 224, 224);
    margin: 20px;
}
</style>
