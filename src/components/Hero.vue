<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-text" data-aos="fade-up">
        <h1 class="hero-title">
          <span class="hero-name">{{ lawyerData.name }}</span>
        </h1>
        <h2 class="hero-subtitle">{{ lawyerData.title }}</h2>
        <p class="hero-description">{{ lawyerData.description }}</p>
        
        <div class="hero-stats">
          <div class="stat" data-aos="fade-up" data-aos-delay="200">
            <span class="stat-number">{{ lawyerData.experience }}</span>
            <span class="stat-label">de experiência</span>
          </div>
          <div class="stat" data-aos="fade-up" data-aos-delay="400">
            <span class="stat-number">{{ lawyerData.cases }}</span>
            <span class="stat-label">casos resolvidos</span>
          </div>
        </div>
        
        <div class="hero-buttons" data-aos="fade-up" data-aos-delay="600">
          <button class="btn btn-primary" @click="scrollToContact">
            Consulta Gratuita
          </button>
          <button class="btn btn-secondary" @click="scrollToServices">
            Nossos Serviços
          </button>
        </div>
      </div>
      
      <div class="hero-image" data-aos="fade-left" data-aos-delay="300">
        <div class="image-container">
          <img 
            v-if="!imageError"
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80" 
            alt="Dra. Pietra Ribeiro - Advogada Especialista em Saúde"
            class="lawyer-portrait"
            @error="handleImageError"
            @load="handleImageLoad"
          />
          <div class="image-placeholder" v-if="imageError">
            <div class="placeholder-content">
              <div class="placeholder-icon">👩‍⚖️</div>
              <p>Imagem não disponível</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="800">
      <div class="scroll-arrow"></div>
      <span>Role para baixo</span>
    </div>
  </section>
</template>

<script>
import { lawyerData } from '../data/mockData.js'

export default {
  name: 'Hero',
  data() {
    return {
      lawyerData,
      imageLoaded: true,
      imageError: false
    }
  },
  methods: {
    scrollToContact() {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    },
    scrollToServices() {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    },
    handleImageLoad() {
      this.imageLoaded = true
      this.imageError = false
    },
    handleImageError() {
      this.imageError = true
      this.imageLoaded = false
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
  padding-top: 4rem;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-background) 100%);
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.hero-content {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
  width: 100%;
}

.hero-text {
  color: white;
  overflow: visible;
  text-align: center;
  width: 100%;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
  overflow: visible;
  display: block;
  text-align: center;
  white-space: nowrap;
}

.hero-name {
  display: inline;
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  overflow: visible;
  white-space: nowrap;
}

.hero-subtitle {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 400;
  color: var(--color-text-dark);
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  text-align: center;
  overflow: visible;
}

.hero-description {
  font-size: var(--font-size-xl);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
  overflow: visible;
  text-align: center;
  max-width: 100%;
}

.hero-stats {
  display: flex;
  gap: var(--spacing-2xl);
  margin-bottom: 2.5rem;
}

.stat {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  display: block;
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: #fff;
  line-height: 1;
}

.stat-label {
  font-size: var(--font-size-base);
  color: var(--color-text-dark);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-secondary);
  box-shadow: var(--shadow-primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(225, 180, 106, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-border);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-secondary);
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 400px;
  height: 500px;
  margin-top: 1rem;
}



/* Lawyer Portrait Styles */
.lawyer-portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-base);
  display: block;
  background-color: #f0f0f0;
  border: 2px solid var(--color-border);
}

.lawyer-portrait:hover {
  transform: translateY(-5px);
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-background) 100%);
  border-radius: var(--border-radius-xl);
  border: 2px solid var(--color-border);
}

.placeholder-content {
  text-align: center;
  color: var(--color-text);
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-sm);
}

.placeholder-content p {
  font-size: var(--font-size-lg);
  color: var(--color-text);
  margin: 0;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.9rem;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: white;
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -4px;
  width: 10px;
  height: 10px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
}



@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 4rem;
    min-height: auto;
    padding-bottom: var(--spacing-2xl);
    overflow-x: hidden;
    overflow-y: visible;
  }

  .hero-background {
    overflow: visible;
  }

  .hero-overlay {
    overflow: visible;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    padding: var(--spacing-sm);
    overflow: visible;
    justify-items: center;
  }
  
  .hero-text {
    padding-top: 0;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .hero-title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-xs);
    line-height: 1.2;
    overflow: visible;
    padding-top: 0;
    white-space: normal;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-name {
    padding-top: 0;
    overflow: visible;
    white-space: normal;
    display: inline;
  }

  .hero-subtitle {
    font-size: var(--font-size-base);
    overflow: visible;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-description {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-md);
    overflow: visible;
    text-align: center;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-stats {
    justify-content: center;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
    width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  .stat-number {
    font-size: var(--font-size-3xl);
  }

  .stat-label {
    font-size: var(--font-size-sm);
  }
  
  .hero-buttons {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
  
  .image-container {
    width: 100%;
    max-width: 350px;
    height: 450px;
    margin: 0 auto;
  }
  
  .btn {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: var(--font-size-base);
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .scroll-indicator {
    position: relative;
    margin-top: var(--spacing-lg);
    bottom: auto;
    transform: none;
  }
}
</style>
