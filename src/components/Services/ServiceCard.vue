<template>
  <div 
    class="service-card"
    :class="{ 'featured': index === 0, 'flipped': isFlipped }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="card-front" v-if="!isFlipped">
      <div class="service-icon">
        <span>{{ service.icon }}</span>
      </div>
      
      <div class="service-content">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        
        <div class="service-features">
          <h4>Especialidades:</h4>
          <ul>
            <li v-for="feature in service.features" :key="feature">
              <span class="feature-icon">→</span>
              {{ feature }}
            </li>
          </ul>
        </div>
        
        <div class="service-actions">
          <button class="btn-service" @click="$emit('rotate')">
            Saiba Mais
          </button>
          <button class="btn-contact" @click="$emit('contact')">
            Consultar
          </button>
        </div>
      </div>
    </div>
    
    <div class="card-back" v-if="isFlipped">
      <div class="service-icon">
        <span>{{ service.icon }}</span>
      </div>
      
      <div class="service-content">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        
        <div class="service-features">
          <h4>Nossas Especialidades:</h4>
          <ul>
            <li v-for="feature in service.features" :key="feature">
              <span class="feature-check">✓</span>
              {{ feature }}
            </li>
          </ul>
        </div>
        
        <div class="service-actions">
          <button class="btn-service" @click="$emit('rotate')">
            Voltar
          </button>
          <button class="btn-contact" @click="$emit('contact')">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>
    
    <div class="service-decoration" v-if="isHovered"></div>
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

<style scoped>
.service-card {
  background: transparent;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
  height: 525px;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent);
}

.service-card.featured .card-front {
  background: var(--color-secondary);
  color: var(--color-primary);
}

.service-card.featured .card-back {
  background: var(--color-background);
  color: var(--color-primary);
}

.service-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.card-front, .card-back {
  width: 100%;
  height: 100%;
  background: var(--color-secondary);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all var(--transition-base);
  opacity: 1;
  transform: scale(1);
}

.card-back {
  background: var(--color-background);
}

.service-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-sm);
  display: flex;
  justify-content: center;
}

.card-front .service-content,
.card-back .service-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 0;
  overflow: hidden;
}

.service-content h3 {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--color-primary);
}

.service-card.featured .service-content h3 {
  color: var(--color-primary);
}

.service-content p {
  font-size: var(--font-size-base);
  line-height: 1.4;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
  opacity: 0.9;
}

.service-card.featured .service-content p {
  color: var(--color-text);
}

.service-features h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--color-primary);
}

.service-card.featured .service-features h4 {
  color: var(--color-primary);
}

.service-features ul {
  list-style: none;
  padding: 0;
  margin-bottom: var(--spacing-sm);
}

.service-features li {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.3rem 0;
  font-size: var(--font-size-sm);
  color: var(--color-text);
  opacity: 0.9;
}

.service-card.featured .service-features li {
  color: var(--color-text);
}

.feature-icon {
  color: var(--color-primary);
  font-weight: bold;
}

.feature-check {
  color: var(--color-success);
  font-weight: bold;
  margin-right: var(--spacing-xs);
}

.service-actions {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: var(--spacing-sm);
}

.btn-service, .btn-contact {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
  flex: 1;
  min-width: 100px;
  font-size: var(--font-size-base);
}

.btn-service {
  background: var(--color-background);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.btn-service:hover {
  background: var(--color-primary);
  color: var(--color-secondary);
  transform: translateY(-2px);
}

.btn-contact {
  background: var(--color-primary);
  color: var(--color-secondary);
}

.btn-contact:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

.service-card.featured .btn-service {
  background: rgba(225, 180, 106, 0.2);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.service-card.featured .btn-service:hover {
  background: var(--color-primary);
  color: var(--color-secondary);
}

.service-card.featured .btn-contact {
  background: var(--color-primary);
  color: var(--color-secondary);
}

.service-card.featured .btn-contact:hover {
  background: var(--color-accent);
}

.service-decoration {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(225, 180, 106, 0.1), transparent);
  transform: rotate(45deg);
  transition: all var(--transition-base);
}

@media (max-width: 768px) {
  .service-card {
    height: auto;
    min-height: 400px;
  }

  .card-front,
  .card-back {
    padding: var(--spacing-md);
  }

  .service-icon {
    font-size: var(--font-size-3xl);
  }

  .service-content h3 {
    font-size: var(--font-size-xl);
  }

  .service-content p {
    font-size: var(--font-size-sm);
  }

  .service-features h4 {
    font-size: var(--font-size-base);
  }

  .service-actions {
    flex-direction: column;
  }

  .btn-service,
  .btn-contact {
    width: 100%;
  }

  .service-card.featured {
    transform: none;
  }
  
  .service-card.featured:hover {
    transform: translateY(-10px);
  }
}
</style>
