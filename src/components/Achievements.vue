<template>
  <section class="py-16 md:py-12 bg-gradient-to-br from-[#1a2e1f] to-[#0f1910] text-white">
    <div class="max-w-7xl mx-auto px-8 md:px-4">
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-4">
        <div
          v-for="(achievement, index) in achievements"
          :key="index"
          class="bg-[#E1B46A]/10 backdrop-blur-sm rounded-lg p-6 md:p-4 text-center border border-[#E1B46A]/30 transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:bg-[#E1B46A]/20 hover:shadow-lg min-h-[160px] md:min-h-[140px] before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[#E1B46A]/20 before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="text-5xl md:text-4xl sm:text-3xl mb-2 md:mb-1 flex justify-center animate-float" :style="{ animationDelay: `${index * 0.5}s` }">
            <span>{{ achievement.icon }}</span>
          </div>
          <div class="relative z-10">
            <div class="text-5xl md:text-3xl sm:text-2xl font-bold mb-1 bg-gradient-to-r from-[#E1B46A] to-[#F4D03F] bg-clip-text text-transparent leading-none">
              {{ animatedNumbers[index] || '0' }}
            </div>
            <div class="text-base md:text-sm sm:text-xs font-medium text-[#E8D5B7] uppercase tracking-wide">
              {{ achievement.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { achievements } from '../data/mockData.js'

export default {
  name: 'Achievements',
  data() {
    return {
      achievements,
      animatedNumbers: {},
      hasAnimated: false
    }
  },
  mounted() {
    this.observeAchievements()
  },
  methods: {
    observeAchievements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true
            this.animateAllNumbers()
          }
        })
      }, { threshold: 0.5 })

      const achievementCards = document.querySelectorAll('[data-aos="fade-up"]')
      achievementCards.forEach(card => observer.observe(card))
    },

    animateAllNumbers() {
      this.achievements.forEach((achievement, index) => {
        const targetNumber = achievement.number.replace(/[^\d]/g, '')
        const suffix = achievement.number.replace(/[\d]/g, '')

        if (targetNumber) {
          this.animateNumber(index, parseInt(targetNumber), suffix)
        } else {
          this.animatedNumbers[index] = achievement.number
        }
      })
    },

    animateNumber(index, target, suffix) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        this.animatedNumbers[index] = Math.floor(current) + suffix
      }, duration / steps)
    }
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
