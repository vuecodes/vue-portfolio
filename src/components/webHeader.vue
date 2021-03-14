<template>
<!-- ======= Header ======= -->
<header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="@/assets/img/profile-img.jpg" alt="Alex Smith" class="img-fluid rounded-circle">
        <h1 class="text-light">
          <router-link to="/#hero">Alex Smith</router-link>
        </h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li>
            <router-link to="/#hero" class="nav-link scrollto active">
              <i class="bx bx-home"></i><span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/#about" class="nav-link scrollto">
              <i class="bx bx-user"></i> <span>About</span>
            </router-link>
          </li>
          <li>
            <router-link to="/#resume" class="nav-link scrollto">
              <i class="bx bx-file-blank"></i> <span>Resume</span>
            </router-link>
          </li>
          <li>
            <router-link to="/#portfolio" class="nav-link scrollto">
              <i class="bx bx-book-content"></i> <span>Portfolio</span>
            </router-link>
          </li>
          <li>
            <router-link to="/#services" class="nav-link scrollto">
              <i class="bx bx-server"></i> <span>Services</span>
            </router-link>
          </li>
          <li>
            <router-link to="/#contact" class="nav-link scrollto">
              <i class="bx bx-envelope"></i> <span>Contact</span>
            </router-link>
          </li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
</header><!-- End Header -->
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>