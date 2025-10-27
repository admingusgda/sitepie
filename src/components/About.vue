<template>
  <section id="about" class="py-20 md:py-12 bg-[#0f1910]">
    <div class="max-w-7xl mx-auto px-8 md:px-4">
      <div class="text-center mb-16 md:mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-3xl font-bold text-[#E1B46A] mb-4">Sobre Dra. Pietra Ribeiro</h2>
        <p class="text-lg md:text-base text-[#E8D5B7]">Conheça a trajetória e expertise da Dra. Pietra</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-start">
        <div data-aos="fade-right">
          <div class="mb-12 md:mb-8">
            <h3 class="text-3xl md:text-2xl font-semibold text-[#E1B46A] mb-4">Uma advogada dedicada à excelência</h3>
            <p class="text-lg md:text-base leading-relaxed text-[#E8D5B7] mb-4">
              Com mais de 10 anos de experiência no mercado jurídico, a Dra. Pietra Ribeiro
              se especializou em Direito Civil e Empresarial, oferecendo soluções jurídicas
              inovadoras e eficazes para seus clientes.
            </p>
            <p class="text-lg md:text-base leading-relaxed text-[#E8D5B7]">
              Sua abordagem combina conhecimento técnico sólido com uma visão estratégica,
              sempre priorizando os melhores interesses de quem confia em seus serviços.
            </p>
          </div>

          <div class="mt-12 md:mt-8">
            <h4 class="text-2xl md:text-xl font-semibold text-[#E1B46A] mb-6 md:mb-4">Nossos Valores</h4>
            <div class="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-4">
              <div
                class="bg-[#1a2e1f] p-4 md:p-3 rounded-lg shadow-sm transition-all duration-300 border border-[#E1B46A]/30 hover:-translate-y-1 hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="text-3xl md:text-2xl mb-4 md:mb-2">🎯</div>
                <h5 class="text-xl md:text-lg font-semibold text-[#E1B46A] mb-2 md:mb-1">Excelência</h5>
                <p class="text-base md:text-sm text-[#E8D5B7] leading-relaxed">
                  Compromisso com a qualidade e resultados excepcionais
                </p>
              </div>

              <div
                class="bg-[#1a2e1f] p-4 md:p-3 rounded-lg shadow-sm transition-all duration-300 border border-[#E1B46A]/30 hover:-translate-y-1 hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="text-3xl md:text-2xl mb-4 md:mb-2">🤝</div>
                <h5 class="text-xl md:text-lg font-semibold text-[#E1B46A] mb-2 md:mb-1">Confiança</h5>
                <p class="text-base md:text-sm text-[#E8D5B7] leading-relaxed">
                  Relacionamento transparente e baseado na confiança mútua
                </p>
              </div>

              <div
                class="bg-[#1a2e1f] p-4 md:p-3 rounded-lg shadow-sm transition-all duration-300 border border-[#E1B46A]/30 hover:-translate-y-1 hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="text-3xl md:text-2xl mb-4 md:mb-2">⚡</div>
                <h5 class="text-xl md:text-lg font-semibold text-[#E1B46A] mb-2 md:mb-1">Agilidade</h5>
                <p class="text-base md:text-sm text-[#E8D5B7] leading-relaxed">
                  Respostas rápidas e soluções eficientes para seus casos
                </p>
              </div>

              <div
                class="bg-[#1a2e1f] p-4 md:p-3 rounded-lg shadow-sm transition-all duration-300 border border-[#E1B46A]/30 hover:-translate-y-1 hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="text-3xl md:text-2xl mb-4 md:mb-2">💡</div>
                <h5 class="text-xl md:text-lg font-semibold text-[#E1B46A] mb-2 md:mb-1">Inovação</h5>
                <p class="text-base md:text-sm text-[#E8D5B7] leading-relaxed">
                  Abordagens modernas e estratégias inovadoras
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#1a2e1f] rounded-xl p-10 md:p-6 shadow-lg border border-[#E1B46A]/30" data-aos="fade-left">
          <h4 class="text-2xl md:text-xl font-semibold text-[#E1B46A] mb-6 md:mb-4">Formação Acadêmica</h4>
          <div class="relative mb-12 md:mb-8 before:content-[''] before:absolute before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#E1B46A]/30">
            <div
              v-for="(edu, index) in education"
              :key="index"
              class="relative pl-12 md:pl-10 mb-8 md:mb-6"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="absolute left-3 top-2 w-4 h-4 bg-[#E1B46A]/30 rounded-full border-4 border-[#1a2e1f] shadow-[0_0_0_4px_rgba(225,180,106,0.3)]"></div>
              <div>
                <h5 class="text-xl md:text-base font-semibold text-[#E1B46A] mb-1">{{ edu.degree }}</h5>
                <p class="text-base md:text-sm text-[#E8D5B7] mb-1">{{ edu.institution }}</p>
                <span class="inline-block bg-[#E1B46A] text-[#1a2e1f] px-3 py-1 rounded-full text-sm md:text-xs font-medium">
                  {{ edu.year }}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-2xl md:text-xl font-semibold text-[#E1B46A] mb-4 md:mb-3">Certificações</h4>
            <ul class="list-none p-0">
              <li
                v-for="(cert, index) in certifications"
                :key="index"
                class="flex items-center gap-3 py-3 md:py-2 border-b border-[#E1B46A]/30 text-[#E8D5B7] last:border-b-0"
              >
                <span class="text-[#E1B46A] font-bold text-lg md:text-base">✓</span>
                <span class="text-base md:text-sm">{{ cert }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { education, certifications } from '../data/mockData.js'

export default {
  name: 'About',
  data() {
    return {
      education,
      certifications
    }
  }
}
</script>
