<template>
  <div class="home">
    <!-- Header -->
    <Header />
    
    <!-- Hero Section -->
    <Hero />
    
    <!-- About Section -->
    <About />
    
    <!-- Services Section -->
    <Services />
    
    <!-- Achievements Section -->
    <Achievements />
    
    <!-- Testimonials Section -->
    <Testimonials />
    
    <!-- Contact Section -->
    <Contact />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Achievements from '../components/Achievements.vue'
import Testimonials from '../components/Testimonials.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    About,
    Services,
    Achievements,
    Testimonials,
    Contact,
    Footer
  }
}
</script>

<style scoped>
.home {
  @apply overflow-x-hidden overflow-y-visible min-h-screen;
}
</style>
