<template>
  <section class="achievements">
    <div class="container">
      <div class="achievements-grid">
        <div 
          v-for="(achievement, index) in achievements" 
          :key="index"
          class="achievement-card"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="achievement-icon">
            <span>{{ achievement.icon }}</span>
          </div>
          <div class="achievement-content">
            <div class="achievement-number" :ref="`number-${index}`">
              {{ animatedNumbers[index] || '0' }}
            </div>
            <div class="achievement-label">{{ achievement.label }}</div>
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
      
      const achievementCards = document.querySelectorAll('.achievement-card')
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
.achievements {
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-background) 100%);
  color: white;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: rgba(225, 180, 106, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  border: 1px solid rgba(225, 180, 106, 0.3);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.achievement-card:hover {
  transform: translateY(-5px);
  background: rgba(225, 180, 106, 0.2);
  box-shadow: var(--shadow-lg);
}

.achievement-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(225, 180, 106, 0.2), transparent);
  transition: left 0.5s ease;
}

.achievement-card:hover::before {
  left: 100%;
}

.achievement-icon {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-sm);
  display: flex;
  justify-content: center;
  animation: float 3s ease-in-out infinite;
}

.achievement-icon:nth-child(1) {
  animation-delay: 0s;
}

.achievement-icon:nth-child(2) {
  animation-delay: 0.5s;
}

.achievement-icon:nth-child(3) {
  animation-delay: 1s;
}

.achievement-icon:nth-child(4) {
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.achievement-content {
  position: relative;
  z-index: 1;
}

.achievement-number {
  font-size: var(--font-size-5xl);
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.achievement-label {
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .achievements {
    padding: var(--spacing-lg) 0;
  }

  .achievements-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }
  
  .achievement-card {
    padding: var(--spacing-md);
    min-height: 160px;
  }
  
  .achievement-number {
    font-size: var(--font-size-3xl);
  }
  
  .achievement-icon {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-xs);
  }

  .achievement-label {
    font-size: var(--font-size-sm);
  }
}

@media (max-width: 480px) {
  .achievements-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xs);
  }

  .achievement-card {
    padding: var(--spacing-sm);
    min-height: 140px;
  }

  .achievement-number {
    font-size: var(--font-size-2xl);
  }

  .achievement-icon {
    font-size: 2rem;
  }
}
</style>
