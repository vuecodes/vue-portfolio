<template>
  <web-hero></web-hero>
  <main id="main">
    <!-- ======= About Section ======= -->
    <about-section></about-section>
    <!-- ======= Facts Section ======= -->
    <facts-section></facts-section>
    <!-- ======= Skills Section ======= -->
    <skills-section></skills-section>
    <!-- ======= Resume Section ======= -->
    <resume-section></resume-section>
    <!-- ======= Portfolio Section ======= -->
    <portfolio-section></portfolio-section>
    <!-- ======= Services Section ======= -->
    <services-section></services-section>
    <!-- ======= Testimonials Section ======= -->
    <testimonials-section></testimonials-section>
    <!-- ======= Contact Section ======= -->
    <contact-section></contact-section>
  </main><!-- End #main -->
</template>

<script>
import webHero from '@/components/webHero'
import aboutSection from './section/aboutSection'
import factsSection from './section/factsSection'
import contactSection from './section/contactSection'
import portfolioSection from './section/portfolioSection'
import resumeSection from './section/resumeSection'
import servicesSection from './section/servicesSection'
import skillsSection from './section/skillsSection'
import testimonialsSection from './section/testimonialsSection'
export default {
  components: {
    webHero,
    aboutSection,
    factsSection,
    contactSection,
    portfolioSection,
    resumeSection,
    servicesSection,
    skillsSection,
    testimonialsSection,
  },
    setup () {
        return {}
    }
}
</script>

