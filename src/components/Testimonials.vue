<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>O que nossos clientes dizem</h2>
        <p>Depoimentos de quem confia nos serviços da Dra. Pietra</p>
      </div>
      
      <div class="testimonials-slider">
        <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.id"
            class="testimonial-slide"
          >
            <div class="testimonial-card" data-aos="fade-up" :data-aos-delay="index * 100">
              <div class="testimonial-content">
                <div class="quote-icon">"</div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-rating">
                  <span 
                    v-for="star in 5" 
                    :key="star"
                    class="star"
                    :class="{ 'filled': star <= testimonial.rating }"
                  >
                    ★
                  </span>
                </div>
              </div>
              
              <div class="testimonial-author">
                <div class="author-image">
                  <img 
                    :src="testimonial.image" 
                    :alt="testimonial.name"
                    @error="handleImageError($event, testimonial.id)"
                  />
                  <div class="author-placeholder" v-if="imageErrors[testimonial.id]">
                    <span>{{ testimonial.name.charAt(0) }}</span>
                  </div>
                </div>
                <div class="author-info">
                  <h4>{{ testimonial.name }}</h4>
                  <p>{{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="slider-controls">
          <button 
            class="slider-btn prev" 
            @click="previousSlide"
            :disabled="currentSlide === 0"
          >
            ‹
          </button>
          <button 
            class="slider-btn next" 
            @click="nextSlide"
            :disabled="currentSlide === testimonials.length - 1"
          >
            ›
          </button>
        </div>
        
        <div class="slider-dots">
          <button 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="dot"
            :class="{ 'active': index === currentSlide }"
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

<style scoped>
.testimonials {
  padding: var(--section-padding);
  background: var(--color-background-alt);
}

.testimonials-slider {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}

.testimonials-track {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-slide {
  min-width: 100%;
  flex-shrink: 0;
}

.testimonial-card {
  background: var(--color-secondary);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}

.testimonial-content {
  margin-bottom: var(--spacing-lg);
}

.quote-icon {
  font-size: var(--font-size-5xl);
  color: var(--color-primary);
  font-weight: bold;
  line-height: 1;
  margin-bottom: var(--spacing-sm);
  opacity: 0.3;
}

.testimonial-text {
  font-size: var(--font-size-xl);
  line-height: 1.7;
  color: var(--color-text);
  font-style: italic;
  margin-bottom: var(--spacing-lg);
  position: relative;
}

.testimonial-rating {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}

.star {
  font-size: 1.5rem;
  color: #d1d5db;
  transition: color 0.3s ease;
}

.star.filled {
  color: var(--color-primary);
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--color-border);
  position: relative;
  background: var(--color-secondary);
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-secondary);
  font-size: 1.5rem;
  font-weight: bold;
}

.author-info h4 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.author-info p {
  font-size: var(--font-size-base);
  color: var(--color-text);
}

.slider-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  transform: translateY(-50%);
}

.slider-btn {
  background: var(--color-primary);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-2xl);
  color: var(--color-secondary);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  pointer-events: all;
  margin: 0 var(--spacing-sm);
}

.slider-btn:hover:not(:disabled) {
  background: var(--color-accent);
  color: var(--color-secondary);
  transform: scale(1.1);
}

.slider-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--color-primary);
  transform: scale(1.2);
}

.dot:hover {
  background: #9ca3af;
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: var(--spacing-lg);
    margin: var(--spacing-sm);
  }
  
  .quote-icon {
    font-size: var(--font-size-4xl);
    margin-bottom: var(--spacing-xs);
  }
  
  .testimonial-text {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-md);
  }
  
  .testimonial-rating {
    margin-bottom: var(--spacing-md);
  }

  .star {
    font-size: var(--font-size-xl);
  }
  
  .slider-btn {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-xl);
    margin: 0 0.25rem;
  }

  .slider-controls {
    margin: 0 var(--spacing-xs);
  }
  
  .author-image {
    width: 50px;
    height: 50px;
    border: 2px solid var(--color-border);
  }

  .author-placeholder span {
    font-size: 1.2rem;
  }
  
  .testimonial-author {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }

  .slider-dots {
    margin-top: var(--spacing-lg);
    padding-bottom: var(--spacing-sm);
  }

  .dot {
    width: 10px;
    height: 10px;
  }
}
</style>
