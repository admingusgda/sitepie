<template>
  <div v-if="selectedService" class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="close">×</button>
      <div class="modal-header">
        <div class="modal-icon">{{ selectedService.icon }}</div>
        <h2>{{ selectedService.title }}</h2>
      </div>
      <div class="modal-body">
        <p>{{ selectedService.description }}</p>
        <div class="modal-features">
          <h3>Nossas Especialidades:</h3>
          <ul>
            <li v-for="feature in selectedService.features" :key="feature">
              <span class="feature-check">✓</span>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-modal" @click="$emit('contact')">
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-modal-overlay);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: var(--spacing-lg);
}

.modal-content {
  background: var(--color-modal-bg);
  border-radius: var(--border-radius-lg);
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlideIn var(--transition-base);
}

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

.modal-close {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background: none;
  border: none;
  font-size: var(--font-size-3xl);
  cursor: pointer;
  color: #6b7280;
  z-index: 1;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
}

.modal-close:hover {
  color: #374151;
}

.modal-header {
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-sm);
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
}

.modal-icon {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-sm);
}

.modal-header h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: #1f2937;
}

.modal-body {
  padding: var(--spacing-lg);
}

.modal-body p {
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: var(--spacing-lg);
}

.modal-features h3 {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: #1f2937;
  margin-bottom: var(--spacing-sm);
}

.modal-features ul {
  list-style: none;
  padding: 0;
}

.modal-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.modal-features li:last-child {
  border-bottom: none;
}

.feature-check {
  color: var(--color-success);
  font-weight: bold;
  font-size: var(--font-size-lg);
}

.modal-footer {
  padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-lg);
  text-align: center;
}

.btn-modal {
  background: #6366f1;
  color: white;
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-modal:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: var(--spacing-sm);
  }
  
  .modal-content {
    max-height: 90vh;
  }
}
</style>
