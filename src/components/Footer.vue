<template>
  <footer class="bg-[#1a2e1f] text-white py-16 md:py-8 px-4 border-t border-[#E1B46A]">
    <div class="max-w-7xl mx-auto px-8 md:px-4">
      <div class="grid grid-cols-4 md:grid-cols-1 gap-12 md:gap-8 mb-8 md:mb-6">
        <div>
          <div class="mb-4 md:mb-2">
            <h3 class="text-2xl md:text-xl font-bold text-[#E1B46A] mb-1">Dra. Pietra Ribeiro</h3>
            <p class="text-[#E8D5B7] text-base mb-4">Advocacia</p>
          </div>
          <p class="leading-relaxed mb-6 md:mb-4 text-[#E8D5B7]">
            Oferecendo serviços jurídicos especializados com excelência e dedicação há mais de 10 anos.
          </p>
          <div class="flex gap-4">
            <a href="#" class="flex items-center justify-center w-10 h-10 bg-[#1a2e1f] rounded-full no-underline transition-all duration-300 border border-[#E1B46A] hover:bg-[#E1B46A] hover:-translate-y-0.5" aria-label="LinkedIn">
              <span class="text-xl">💼</span>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 bg-[#1a2e1f] rounded-full no-underline transition-all duration-300 border border-[#E1B46A] hover:bg-[#E1B46A] hover:-translate-y-0.5" aria-label="Instagram">
              <span class="text-xl">📷</span>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 bg-[#1a2e1f] rounded-full no-underline transition-all duration-300 border border-[#E1B46A] hover:bg-[#E1B46A] hover:-translate-y-0.5" aria-label="WhatsApp">
              <span class="text-xl">💬</span>
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-xl md:text-lg font-semibold text-[#E1B46A] mb-4 md:mb-3">Serviços</h4>
          <ul class="list-none p-0 m-0">
            <li class="mb-2"><a href="#services" class="text-[#E8D5B7] no-underline transition-colors duration-300 text-base hover:text-[#E1B46A]">Direito Civil</a></li>
            <li class="mb-2"><a href="#services" class="text-[#E8D5B7] no-underline transition-colors duration-300 text-base hover:text-[#E1B46A]">Direito Empresarial</a></li>
            <li class="mb-2"><a href="#services" class="text-[#E8D5B7] no-underline transition-colors duration-300 text-base hover:text-[#E1B46A]">Direito do Consumidor</a></li>
            <li class="mb-2"><a href="#services" class="text-[#E8D5B7] no-underline transition-colors duration-300 text-base hover:text-[#E1B46A]">Consultoria Jurídica</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl md:text-lg font-semibold text-[#E1B46A] mb-4 md:mb-3">Links Úteis</h4>
          <ul class="list-none p-0 m-0">
            <li class="mb-2"><a href="#about" class="text-[#E8D5B7] no-underline transition-colors duration-300 text-base hover:text-[#E1B46A]">Sobre</a></li>
            <li class="mb-2"><a href="#testimonials" class="text-[#E8D5B7] no-underline transition-colors duration-300 text-base hover:text-[#E1B46A]">Depoimentos</a></li>
            <li class="mb-2"><a href="#contact" class="text-[#E8D5B7] no-underline transition-colors duration-300 text-base hover:text-[#E1B46A]">Contato</a></li>
            <li class="mb-2"><a href="#" class="text-[#E8D5B7] no-underline transition-colors duration-300 text-base hover:text-[#E1B46A]">Política de Privacidade</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl md:text-lg font-semibold text-[#E1B46A] mb-4 md:mb-3">Contato</h4>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 text-base text-[#E8D5B7]">
              <span class="text-base w-5 text-center">📞</span>
              <span>{{ lawyerData.phone }}</span>
            </div>
            <div class="flex items-center gap-3 text-base text-[#E8D5B7]">
              <span class="text-base w-5 text-center">✉️</span>
              <span>{{ lawyerData.email }}</span>
            </div>
            <div class="flex items-center gap-3 text-base text-[#E8D5B7]">
              <span class="text-base w-5 text-center">📍</span>
              <span>{{ lawyerData.address }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-[#E1B46A] pt-6 md:pt-4">
        <div class="flex justify-between items-center flex-wrap gap-4 md:flex-col md:text-center">
          <p class="text-[#E8D5B7] text-base m-0">&copy; {{ currentYear }} Dra. Pietra Ribeiro Advocacia. Todos os direitos reservados.</p>
          <p class="text-[#E1B46A] font-semibold m-0">OAB/SP 123.456</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { lawyerData } from '../data/mockData.js'

export default {
  name: 'Footer',
  data() {
    return {
      lawyerData,
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
