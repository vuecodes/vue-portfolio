<template>
<!-- ======= Hero Section ======= -->
<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1>Alex Smith</h1>
      <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
</section><!-- End Hero --> 
</template>

<script>
import { onMounted } from 'vue'
export default {
    setup () {
        onMounted(() => {
            const typed = select('.typed');
            if (typed) {
                let typed_strings = typed.getAttribute('data-typed-items')
                typed_strings = typed_strings.split(',')
                new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
                });
            }
        })
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>