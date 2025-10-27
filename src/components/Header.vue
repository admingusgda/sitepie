<template>
  <header
    class="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-[10px] transition-all duration-300 border-b"
    :class="isScrolled ? 'border-gray-200 shadow-md' : 'border-transparent'"
  >
    <nav class="max-w-container mx-auto px-8 md:px-4 py-4 flex justify-between items-center">
      <div class="flex flex-col">
        <h2 class="text-primary text-2xl md:text-xl font-bold m-0">Dra. Pietra Ribeiro</h2>
        <span class="text-gray-500 text-sm md:text-xs font-normal">Advocacia</span>
      </div>

      <div
        class="flex gap-8 items-center md:fixed md:top-full md:left-0 md:right-0 md:bg-white md:flex-col md:p-lg md:gap-md md:shadow-lg md:transition-all md:duration-300"
        :class="isMenuOpen ? 'md:translate-y-0 md:opacity-100 md:visible' : 'md:-translate-y-full md:opacity-0 md:invisible'"
      >
        <a
          href="#home"
          @click="closeMenu"
          class="no-underline text-gray-700 font-medium transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-border after:transition-[width] after:duration-300 hover:after:w-full md:text-lg md:p-xs"
        >
          Início
        </a>
        <a
          href="#about"
          @click="closeMenu"
          class="no-underline text-gray-700 font-medium transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-border after:transition-[width] after:duration-300 hover:after:w-full md:text-lg md:p-xs"
        >
          Sobre
        </a>
        <a
          href="#services"
          @click="closeMenu"
          class="no-underline text-gray-700 font-medium transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-border after:transition-[width] after:duration-300 hover:after:w-full md:text-lg md:p-xs"
        >
          Serviços
        </a>
        <a
          href="#testimonials"
          @click="closeMenu"
          class="no-underline text-gray-700 font-medium transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-border after:transition-[width] after:duration-300 hover:after:w-full md:text-lg md:p-xs"
        >
          Depoimentos
        </a>
        <a
          href="#contact"
          @click="closeMenu"
          class="no-underline text-gray-700 font-medium transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-border after:transition-[width] after:duration-300 hover:after:w-full md:text-lg md:p-xs"
        >
          Contato
        </a>
      </div>

      <div class="hidden md:flex flex-col cursor-pointer gap-1" @click="toggleMenu">
        <span class="w-[25px] h-[3px] bg-gray-700 transition-all duration-300 rounded-sm"></span>
        <span class="w-[25px] h-[3px] bg-gray-700 transition-all duration-300 rounded-sm"></span>
        <span class="w-[25px] h-[3px] bg-gray-700 transition-all duration-300 rounded-sm"></span>
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
