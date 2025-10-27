<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <nav class="nav">
      <div class="nav-brand">
        <h2>Dra. Pietra Ribeiro</h2>
        <span>Advocacia</span>
      </div>
      
      <div class="nav-menu" :class="{ 'active': isMenuOpen }">
        <a href="#home" @click="closeMenu">Início</a>
        <a href="#about" @click="closeMenu">Sobre</a>
        <a href="#services" @click="closeMenu">Serviços</a>
        <a href="#testimonials" @click="closeMenu">Depoimentos</a>
        <a href="#contact" @click="closeMenu">Contato</a>
      </div>
      
      <div class="nav-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script>
import { useScroll } from '../composables/useScroll.js'
import { ref } from 'vue'

export default {
  name: 'Header',
  setup() {
    const { isScrolled } = useScroll()
    const isMenuOpen = ref(false)
    
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    
    const closeMenu = () => {
      isMenuOpen.value = false
    }
    
    return {
      isScrolled,
      isMenuOpen,
      toggleMenu,
      closeMenu
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h2 {
  color: var(--color-primary);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin: 0;
}

.nav-brand span {
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 400;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-menu a {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-menu a:hover {
  color: var(--color-primary);
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-border);
  transition: width var(--transition-base);
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: #374151;
  transition: all 0.3s ease;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .nav {
    padding: var(--spacing-sm);
  }

  .nav-brand h2 {
    font-size: var(--font-size-xl);
  }

  .nav-brand span {
    font-size: var(--font-size-sm);
  }
  
  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: var(--spacing-lg);
    gap: var(--spacing-md);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-lg);
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-menu a {
    font-size: var(--font-size-lg);
    padding: var(--spacing-xs);
  }

  .nav-toggle {
    display: flex;
  }
  
  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}
</style>
