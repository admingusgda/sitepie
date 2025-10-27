<template>
  <section id="services" class="py-20 md:py-12 bg-[#1a2e1f]">
    <div class="max-w-7xl mx-auto px-8 md:px-4">
      <div class="text-center mb-16 md:mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-3xl font-bold text-[#E1B46A] mb-4">Nossos Serviços</h2>
        <p class="text-lg md:text-base text-[#E8D5B7]">Áreas de especialização e serviços oferecidos</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 mb-16 md:mb-12" data-aos="fade-up">
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.id"
          :service="service"
          :index="index"
          :isFlipped="rotatingCard === service.id"
          :isHovered="hoveredCard === service.id"
          @rotate="handleCardRotate(service.id)"
          @contact="handleContact"
          @mouseenter="setHoveredCard(service.id)"
          @mouseleave="clearHoveredCard"
        />
      </div>

      <div
        class="bg-gradient-to-br from-[#1a2e1f] to-[#0f1910] rounded-2xl p-12 md:p-8 text-center text-white border border-[#E1B46A]/30"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div>
          <h3 class="text-3xl md:text-2xl font-bold mb-2">Precisa de ajuda jurídica?</h3>
          <p class="text-xl md:text-lg mb-6 md:mb-4 opacity-90">Entre em contato para uma consulta personalizada</p>
          <button
            class="bg-[#E1B46A] text-[#1a2e1f] px-8 py-3 md:px-6 md:py-2 border-none rounded-full text-lg md:text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-[#F4D03F] hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(225,180,106,0.3)]"
            @click="handleContact"
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </div>

    <ServiceModal
      :selectedService="selectedService"
      @close="closeModal"
      @contact="handleContact"
    />
  </section>
</template>

<script>
import { services } from '../data/mockData.js'
import { useCardRotation } from '../composables/useCardRotation.js'
import { useModal } from '../composables/useModal.js'
import { useScroll } from '../composables/useScroll.js'
import ServiceCard from './Services/ServiceCard.vue'
import ServiceModal from './Services/ServiceModal.vue'

export default {
  name: 'Services',
  components: {
    ServiceCard,
    ServiceModal
  },
  setup() {
    const { rotatingCard, hoveredCard, rotateCard, setHoveredCard, clearHoveredCard } = useCardRotation()
    const { selectedItem, openModal, closeModal } = useModal()
    const { scrollToElement } = useScroll()

    return {
      services,
      rotatingCard,
      hoveredCard,
      selectedService: selectedItem,
      rotateCard,
      setHoveredCard,
      clearHoveredCard,
      openModal,
      closeModal
    }
  },
  methods: {
    handleCardRotate(serviceId) {
      this.rotateCard(serviceId)
    },
    handleContact() {
      this.closeModal()
      this.scrollToElement('contact')
    }
  }
}
</script>
