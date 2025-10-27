<template>
  <section id="testimonials" class="py-20 md:py-12 bg-[#0f1910]">
    <div class="max-w-7xl mx-auto px-8 md:px-4">
      <div class="text-center mb-16 md:mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-3xl font-bold text-[#E1B46A] mb-4">O que nossos clientes dizem</h2>
        <p class="text-lg md:text-base text-[#E8D5B7]">Depoimentos de quem confia nos serviços da Dra. Pietra</p>
      </div>

      <div class="relative overflow-hidden rounded-3xl">
        <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            class="min-w-full flex-shrink-0"
          >
            <div class="bg-[#1a2e1f] rounded-2xl p-12 md:p-8 shadow-lg text-center relative overflow-hidden border border-[#E1B46A]/30 mx-2 md:mx-1" data-aos="fade-up" :data-aos-delay="index * 100">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E1B46A] to-[#F4D03F]"></div>

              <div class="mb-6 md:mb-4">
                <div class="text-6xl md:text-5xl text-[#E1B46A] font-bold leading-none mb-4 md:mb-2 opacity-30">"</div>
                <p class="text-xl md:text-base leading-relaxed text-[#E8D5B7] italic mb-6 md:mb-4 relative">
                  {{ testimonial.text }}
                </p>
                <div class="flex justify-center gap-1">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="text-2xl md:text-xl transition-colors duration-300"
                    :class="star <= testimonial.rating ? 'text-[#E1B46A]' : 'text-gray-400'"
                  >
                    ★
                  </span>
                </div>
              </div>

              <div class="flex flex-col md:flex-col items-center justify-center gap-4 md:gap-3">
                <div class="w-[60px] h-[60px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden border-3 md:border-2 border-[#E1B46A] relative bg-[#1a2e1f]">
                  <img
                    :src="testimonial.image"
                    :alt="testimonial.name"
                    class="w-full h-full object-cover"
                    @error="handleImageError($event, testimonial.id)"
                  />
                  <div v-if="imageErrors[testimonial.id]" class="w-full h-full flex items-center justify-center bg-[#E1B46A] text-[#1a2e1f] text-2xl md:text-xl font-bold">
                    <span>{{ testimonial.name.charAt(0) }}</span>
                  </div>
                </div>
                <div class="text-center">
                  <h4 class="text-xl md:text-lg font-semibold text-[#E1B46A] mb-1">{{ testimonial.name }}</h4>
                  <p class="text-base md:text-sm text-[#E8D5B7]">{{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute top-1/2 left-0 right-0 flex justify-between pointer-events-none -translate-y-1/2">
          <button
            class="bg-[#E1B46A] border-none w-[50px] h-[50px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center text-3xl md:text-2xl text-[#1a2e1f] cursor-pointer shadow-sm transition-all duration-300 pointer-events-auto mx-2 md:mx-1 hover:bg-[#F4D03F] hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            @click="previousSlide"
            :disabled="currentSlide === 0"
          >
            ‹
          </button>
          <button
            class="bg-[#E1B46A] border-none w-[50px] h-[50px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center text-3xl md:text-2xl text-[#1a2e1f] cursor-pointer shadow-sm transition-all duration-300 pointer-events-auto mx-2 md:mx-1 hover:bg-[#F4D03F] hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            @click="nextSlide"
            :disabled="currentSlide === testimonials.length - 1"
          >
            ›
          </button>
        </div>

        <div class="flex justify-center gap-2 mt-8 md:mt-6 pb-2">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="w-3 h-3 md:w-2.5 md:h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-gray-400"
            :class="index === currentSlide ? 'bg-[#E1B46A] scale-125 md:scale-120' : 'bg-gray-400'"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { testimonials } from '../data/mockData.js'
import { useSlider } from '../composables/useSlider.js'
import { ref } from 'vue'

export default {
  name: 'Testimonials',
  setup() {
    const { currentSlide, nextSlide, previousSlide, goToSlide } = useSlider(testimonials, 5000)
    const imageErrors = ref({})

    const handleImageError = (event, testimonialId) => {
      imageErrors.value[testimonialId] = true
    }

    return {
      testimonials,
      currentSlide,
      nextSlide,
      previousSlide,
      goToSlide,
      imageErrors,
      handleImageError
    }
  }
}
</script>
