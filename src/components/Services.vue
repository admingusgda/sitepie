<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Nossos Serviços</h2>
        <p>Áreas de especialização e serviços oferecidos</p>
      </div>
      
      <div class="services-grid" data-aos="fade-up">
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
      
      <div class="services-cta" data-aos="fade-up" data-aos-delay="600">
        <div class="cta-content">
          <h3>Precisa de ajuda jurídica?</h3>
          <p>Entre em contato para uma consulta personalizada</p>
          <button class="btn-cta" @click="handleContact">
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

<style scoped>
.services {
  padding: var(--section-padding);
  background: var(--color-background);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.services-cta {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-background) 100%);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-2xl);
  text-align: center;
  color: white;
  border: 1px solid var(--color-border);
}

.cta-content h3 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.cta-content p {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.btn-cta {
  background: var(--color-primary);
  color: var(--color-secondary);
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-round);
  font-size: var(--font-size-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-cta:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .services-cta {
    padding: var(--spacing-lg);
  }
  
  .cta-content h3 {
    font-size: var(--font-size-2xl);
  }
}
</style>
