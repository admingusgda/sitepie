<template>
  <div
    class="bg-transparent rounded-xl shadow-sm border border-[#E1B46A]/30 transition-all duration-300 relative overflow-hidden h-[525px] md:h-auto md:min-h-[400px] hover:-translate-y-2.5 hover:shadow-lg hover:border-[#F4D03F]"
    :class="{ 'bg-[#1a2e1f] hover:scale-105': index === 0, 'scale-100': index !== 0 }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div v-if="!isFlipped" class="w-full h-full bg-[#1a2e1f] rounded-xl p-4 md:p-3 flex flex-col justify-between transition-all duration-300 opacity-100">
      <div class="text-4xl md:text-3xl mb-4 md:mb-2 flex justify-center">
        <span>{{ service.icon }}</span>
      </div>

      <div class="flex-1 flex flex-col justify-between min-h-0 overflow-hidden">
        <h3 class="text-2xl md:text-xl font-semibold mb-3 md:mb-2 text-[#E1B46A]">{{ service.title }}</h3>
        <p class="text-base md:text-sm leading-snug mb-4 md:mb-2 text-[#E8D5B7] opacity-90">{{ service.description }}</p>

        <div>
          <h4 class="text-lg md:text-base font-semibold mb-3 md:mb-2 text-[#E1B46A]">Especialidades:</h4>
          <ul class="list-none p-0 mb-4 md:mb-2">
            <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2 py-1.5 md:py-1 text-sm md:text-xs text-[#E8D5B7] opacity-90">
              <span class="text-[#E1B46A] font-bold">→</span>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="flex gap-2 md:gap-1 flex-wrap mt-auto pt-4 md:pt-2">
          <button class="px-5 py-2.5 md:px-4 md:py-2 border-none rounded font-semibold cursor-pointer transition-all duration-300 flex-1 min-w-[100px] text-base md:text-sm bg-[#0f1910] text-[#E1B46A] border border-[#E1B46A] hover:bg-[#E1B46A] hover:text-[#1a2e1f] hover:-translate-y-0.5" @click="$emit('rotate')">
            Saiba Mais
          </button>
          <button class="px-5 py-2.5 md:px-4 md:py-2 border-none rounded font-semibold cursor-pointer transition-all duration-300 flex-1 min-w-[100px] text-base md:text-sm bg-[#E1B46A] text-[#1a2e1f] hover:bg-[#F4D03F] hover:-translate-y-0.5" @click="$emit('contact')">
            Consultar
          </button>
        </div>
      </div>
    </div>

    <div v-if="isFlipped" class="w-full h-full bg-[#0f1910] rounded-xl p-4 md:p-3 flex flex-col justify-between transition-all duration-300 opacity-100">
      <div class="text-4xl md:text-3xl mb-4 md:mb-2 flex justify-center">
        <span>{{ service.icon }}</span>
      </div>

      <div class="flex-1 flex flex-col justify-between min-h-0 overflow-hidden">
        <h3 class="text-2xl md:text-xl font-semibold mb-3 md:mb-2 text-[#E1B46A]">{{ service.title }}</h3>
        <p class="text-base md:text-sm leading-snug mb-4 md:mb-2 text-[#E8D5B7] opacity-90">{{ service.description }}</p>

        <div>
          <h4 class="text-lg md:text-base font-semibold mb-3 md:mb-2 text-[#E1B46A]">Nossas Especialidades:</h4>
          <ul class="list-none p-0 mb-4 md:mb-2">
            <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2 py-1.5 md:py-1 text-sm md:text-xs text-[#E8D5B7] opacity-90">
              <span class="text-green-500 font-bold mr-2">✓</span>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="flex gap-2 md:gap-1 flex-wrap mt-auto pt-4 md:pt-2 md:flex-col">
          <button class="px-5 py-2.5 md:px-4 md:py-2 border-none rounded font-semibold cursor-pointer transition-all duration-300 flex-1 min-w-[100px] md:w-full text-base md:text-sm bg-[#0f1910] text-[#E1B46A] border border-[#E1B46A] hover:bg-[#E1B46A] hover:text-[#1a2e1f] hover:-translate-y-0.5" @click="$emit('rotate')">
            Voltar
          </button>
          <button class="px-5 py-2.5 md:px-4 md:py-2 border-none rounded font-semibold cursor-pointer transition-all duration-300 flex-1 min-w-[100px] md:w-full text-base md:text-sm bg-[#E1B46A] text-[#1a2e1f] hover:bg-[#F4D03F] hover:-translate-y-0.5" @click="$emit('contact')">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>

    <div v-if="isHovered" class="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-transparent via-[#E1B46A]/10 to-transparent rotate-45 transition-all duration-300"></div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isFlipped: {
      type: Boolean,
      default: false
    },
    isHovered: {
      type: Boolean,
      default: false
    }
  },
  emits: ['rotate', 'contact', 'mouseenter', 'mouseleave'],
  methods: {
    handleMouseEnter() {
      this.$emit('mouseenter')
    },
    handleMouseLeave() {
      this.$emit('mouseleave')
    }
  }
}
</script>
