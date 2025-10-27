<template>
  <div v-if="selectedService" class="fixed inset-0 bg-black/60 flex justify-center items-center z-[2000] p-6 md:p-4" @click="close">
    <div class="bg-white rounded-xl max-w-[600px] w-full max-h-[80vh] overflow-y-auto relative animate-modal-slide" @click.stop>
      <button class="absolute top-4 md:top-2 right-4 md:right-2 bg-none border-none text-3xl md:text-2xl cursor-pointer text-gray-600 z-10 leading-none p-0 w-8 h-8 hover:text-gray-800" @click="close">
        ×
      </button>

      <div class="p-6 md:p-4 pb-4 md:pb-2 text-center border-b border-gray-200">
        <div class="text-6xl md:text-5xl mb-4 md:mb-2">{{ selectedService.icon }}</div>
        <h2 class="text-3xl md:text-2xl font-bold text-gray-800 m-0">{{ selectedService.title }}</h2>
      </div>

      <div class="p-6 md:p-4">
        <p class="text-lg md:text-base leading-relaxed text-gray-600 mb-6 md:mb-4">{{ selectedService.description }}</p>

        <div>
          <h3 class="text-2xl md:text-xl font-semibold text-gray-800 mb-4 md:mb-3">Nossas Especialidades:</h3>
          <ul class="list-none p-0">
            <li v-for="feature in selectedService.features" :key="feature" class="flex items-center gap-3 py-3 md:py-2 border-b border-gray-100 last:border-b-0">
              <span class="text-green-500 font-bold text-lg md:text-base">✓</span>
              <span class="text-base md:text-sm text-gray-700">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="p-4 md:p-3 pb-6 md:pb-4 text-center">
        <button class="bg-indigo-600 text-white px-8 py-3 md:px-6 md:py-2 border-none rounded text-base md:text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-0.5" @click="$emit('contact')">
          Solicitar Orçamento
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceModal',
  props: {
    selectedService: {
      type: Object,
      default: null
    }
  },
  emits: ['close', 'contact'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-modal-slide {
  animation: modalSlideIn 0.3s ease-out;
}
</style>
