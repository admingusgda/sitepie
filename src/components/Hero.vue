<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center pt-16 overflow-x-hidden overflow-y-visible"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-[#1a2e1f] to-[#0f1910] -z-20"></div>
    <div class="absolute inset-0 bg-black/30 -z-10"></div>

    <div class="max-w-7xl mx-auto px-8 md:px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div class="text-white overflow-visible text-center w-full" data-aos="fade-up">
        <h1 class="text-5xl md:text-3xl sm:text-2xl font-bold leading-tight mb-4 overflow-visible block text-center whitespace-nowrap md:whitespace-normal">
          <span class="inline bg-gradient-to-r from-[#E1B46A] to-[#F4D03F] bg-clip-text text-transparent">
            {{ lawyerData.name }}
          </span>
        </h1>

        <h2 class="block text-2xl md:text-lg sm:text-base font-normal text-[#E8D5B7] mt-2 mb-4 text-center">
          {{ lawyerData.title }}
        </h2>

        <p class="text-xl md:text-base sm:text-sm leading-relaxed mb-6 text-[#E8D5B7] text-center max-w-full">
          {{ lawyerData.description }}
        </p>

        <div class="flex gap-8 md:gap-4 mb-10 justify-center" data-aos="fade-up" data-aos-delay="200">
          <div class="flex flex-col items-center text-center">
            <span class="block text-4xl md:text-3xl sm:text-2xl font-bold text-white leading-none">
              {{ lawyerData.experience }}
            </span>
            <span class="text-base md:text-sm sm:text-xs text-[#E8D5B7] uppercase tracking-wider mt-1">
              de experiência
            </span>
          </div>
          <div class="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
            <span class="block text-4xl md:text-3xl sm:text-2xl font-bold text-white leading-none">
              {{ lawyerData.cases }}
            </span>
            <span class="text-base md:text-sm sm:text-xs text-[#E8D5B7] uppercase tracking-wider mt-1">
              casos resolvidos
            </span>
          </div>
        </div>

        <div class="flex gap-4 flex-wrap justify-center" data-aos="fade-up" data-aos-delay="600">
          <button
            class="px-8 py-4 md:px-6 md:py-3 border-none rounded-full text-base md:text-sm font-semibold cursor-pointer transition-all duration-300 bg-[#E1B46A] text-[#1a2e1f] shadow-[0_4px_15px_rgba(225,180,106,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(225,180,106,0.4)] w-full md:w-auto max-w-[280px]"
            @click="scrollToContact"
          >
            Consulta Gratuita
          </button>
          <button
            class="px-8 py-4 md:px-6 md:py-3 border-2 border-[#E1B46A] rounded-full text-base md:text-sm font-semibold cursor-pointer transition-all duration-300 bg-transparent text-[#E1B46A] hover:bg-[#E1B46A] hover:text-[#1a2e1f] hover:-translate-y-0.5 w-full md:w-auto max-w-[280px]"
            @click="scrollToServices"
          >
            Nossos Serviços
          </button>
        </div>
      </div>

      <div class="flex justify-center items-center" data-aos="fade-left" data-aos-delay="300">
        <div class="relative w-[400px] h-[500px] md:w-full md:max-w-[350px] md:h-[450px] mt-4 md:mx-auto">
          <img
            v-if="!imageError"
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80"
            alt="Dra. Pietra Ribeiro - Advogada Especialista em Saúde"
            class="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 block bg-gray-100 border-2 border-[#E1B46A] hover:-translate-y-1"
            @error="handleImageError"
            @load="handleImageLoad"
          />
          <div v-if="imageError" class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a2e1f] to-[#0f1910] rounded-2xl border-2 border-[#E1B46A]">
            <div class="text-center text-[#E8D5B7]">
              <div class="text-6xl mb-4">👩‍⚖️</div>
              <p class="text-lg">Imagem não disponível</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 md:relative md:mt-8 md:bottom-auto md:left-auto md:translate-x-0 flex flex-col items-center gap-2 text-white text-sm animate-bounce"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      <div class="w-0.5 h-8 bg-white relative after:content-[''] after:absolute after:bottom-0 after:-left-1 after:w-2.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"></div>
      <span>Role para baixo</span>
    </div>
  </section>
</template>

<script>
import { lawyerData } from '../data/mockData.js'

export default {
  name: 'Hero',
  data() {
    return {
      lawyerData,
      imageLoaded: true,
      imageError: false
    }
  },
  methods: {
    scrollToContact() {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    },
    scrollToServices() {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    },
    handleImageLoad() {
      this.imageLoaded = true
      this.imageError = false
    },
    handleImageError() {
      this.imageError = true
      this.imageLoaded = false
    }
  }
}
</script>
