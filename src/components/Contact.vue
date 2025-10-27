<template>
  <section id="contact" class="py-20 md:py-12 bg-[#1a2e1f]">
    <div class="max-w-7xl mx-auto px-8 md:px-4">
      <div class="text-center mb-16 md:mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-3xl font-bold text-[#E1B46A] mb-4">Entre em Contato</h2>
        <p class="text-lg md:text-base text-[#E8D5B7]">Estamos prontos para ajudar com suas questões jurídicas</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-16">
        <div data-aos="fade-right">
          <div class="bg-[#1a2e1f] rounded-xl p-10 md:p-6 border border-[#E1B46A]/30">
            <h3 class="text-2xl md:text-xl font-semibold text-[#E1B46A] mb-2">Informações de Contato</h3>
            <p class="text-[#E8D5B7] mb-6 md:mb-4 leading-relaxed">Entre em contato conosco através dos canais abaixo ou preencha o formulário ao lado.</p>

            <div class="mb-8 md:mb-6">
              <div class="flex items-center gap-4 py-4 border-b border-[#E1B46A]">
                <div class="text-2xl w-10 h-10 flex items-center justify-center bg-[#E1B46A] rounded-full text-[#1a2e1f]">📞</div>
                <div>
                  <h4 class="text-base font-semibold text-[#E1B46A] mb-1">Telefone</h4>
                  <p class="text-[#E8D5B7] text-base m-0">{{ lawyerData.phone }}</p>
                </div>
              </div>

              <div class="flex items-center gap-4 py-4 border-b border-[#E1B46A]">
                <div class="text-2xl w-10 h-10 flex items-center justify-center bg-[#E1B46A] rounded-full text-[#1a2e1f]">✉️</div>
                <div>
                  <h4 class="text-base font-semibold text-[#E1B46A] mb-1">E-mail</h4>
                  <p class="text-[#E8D5B7] text-base m-0">{{ lawyerData.email }}</p>
                </div>
              </div>

              <div class="flex items-center gap-4 py-4">
                <div class="text-2xl w-10 h-10 flex items-center justify-center bg-[#E1B46A] rounded-full text-[#1a2e1f]">📍</div>
                <div>
                  <h4 class="text-base font-semibold text-[#E1B46A] mb-1">Endereço</h4>
                  <p class="text-[#E8D5B7] text-base m-0">{{ lawyerData.address }}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 class="text-xl md:text-lg font-semibold text-[#E1B46A] mb-4 md:mb-3">Horário de Atendimento</h4>
              <div class="flex flex-col gap-2">
                <div class="flex justify-between py-2 border-b border-[#E1B46A]">
                  <span class="text-[#E8D5B7] font-medium">Segunda - Sexta:</span>
                  <span class="text-[#E1B46A] font-semibold">8h às 18h</span>
                </div>
                <div class="flex justify-between py-2 border-b border-[#E1B46A]">
                  <span class="text-[#E8D5B7] font-medium">Sábado:</span>
                  <span class="text-[#E1B46A] font-semibold">8h às 12h</span>
                </div>
                <div class="flex justify-between py-2">
                  <span class="text-[#E8D5B7] font-medium">Domingo:</span>
                  <span class="text-[#E1B46A] font-semibold">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <form class="bg-[#1a2e1f] rounded-xl p-10 md:p-6 border border-[#E1B46A]/30" @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block font-semibold text-[#E1B46A] mb-2">Nome Completo</label>
              <input type="text" id="name" v-model="form.name" required placeholder="Seu nome completo" class="w-full px-3 py-3 md:py-2 border-2 border-[#E1B46A] rounded text-base transition-all bg-[#0f1910] text-[#E8D5B7] focus:outline-none focus:border-[#F4D03F] focus:shadow-[0_0_0_3px_rgba(225,180,106,0.1)]"/>
            </div>

            <div class="mb-4">
              <label for="email" class="block font-semibold text-[#E1B46A] mb-2">E-mail</label>
              <input type="email" id="email" v-model="form.email" required placeholder="seu@email.com" class="w-full px-3 py-3 md:py-2 border-2 border-[#E1B46A] rounded text-base transition-all bg-[#0f1910] text-[#E8D5B7] focus:outline-none focus:border-[#F4D03F] focus:shadow-[0_0_0_3px_rgba(225,180,106,0.1)]"/>
            </div>

            <div class="mb-4">
              <label for="phone" class="block font-semibold text-[#E1B46A] mb-2">Telefone</label>
              <input type="tel" id="phone" v-model="form.phone" placeholder="(11) 99999-9999" class="w-full px-3 py-3 md:py-2 border-2 border-[#E1B46A] rounded text-base transition-all bg-[#0f1910] text-[#E8D5B7] focus:outline-none focus:border-[#F4D03F] focus:shadow-[0_0_0_3px_rgba(225,180,106,0.1)]"/>
            </div>

            <div class="mb-4">
              <label for="subject" class="block font-semibold text-[#E1B46A] mb-2">Assunto</label>
              <select id="subject" v-model="form.subject" required class="w-full px-3 py-3 md:py-2 border-2 border-[#E1B46A] rounded text-base transition-all bg-[#0f1910] text-[#E8D5B7] focus:outline-none focus:border-[#F4D03F] focus:shadow-[0_0_0_3px_rgba(225,180,106,0.1)]">
                <option value="">Selecione o assunto</option>
                <option value="consulta">Consulta Jurídica</option>
                <option value="contrato">Contratos</option>
                <option value="empresarial">Direito Empresarial</option>
                <option value="consumidor">Direito do Consumidor</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div class="mb-4">
              <label for="message" class="block font-semibold text-[#E1B46A] mb-2">Mensagem</label>
              <textarea id="message" v-model="form.message" required rows="5" placeholder="Descreva brevemente sua situação ou dúvida..." class="w-full px-3 py-3 md:py-2 border-2 border-[#E1B46A] rounded text-base transition-all bg-[#0f1910] text-[#E8D5B7] resize-vertical min-h-[120px] focus:outline-none focus:border-[#F4D03F] focus:shadow-[0_0_0_3px_rgba(225,180,106,0.1)]"></textarea>
            </div>

            <div class="mb-4 flex items-start gap-3">
              <label class="flex items-start gap-3 cursor-pointer text-sm leading-relaxed text-[#E8D5B7]">
                <input type="checkbox" v-model="form.consent" required class="w-auto m-0"/>
                Concordo com o tratamento dos meus dados pessoais conforme a LGPD
              </label>
            </div>

            <button type="submit" :disabled="isSubmitting" class="w-full bg-[#E1B46A] text-[#1a2e1f] px-8 py-3 md:py-2 border-none rounded text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-[#F4D03F] hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(225,180,106,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
              <span v-if="!isSubmitting">Enviar Mensagem</span>
              <span v-else">Enviando...</span>
            </button>
          </form>
        </div>
      </div>

      <div class="bg-gradient-to-br from-[#1a2e1f] to-[#0f1910] rounded-2xl p-12 md:p-8 text-center text-white border border-[#E1B46A]/30" data-aos="fade-up">
        <div>
          <h3 class="text-3xl md:text-2xl font-bold mb-2">Precisa de uma consulta urgente?</h3>
          <p class="text-xl md:text-lg mb-6 md:mb-4 opacity-90">Entre em contato agora mesmo e receba uma resposta em até 24 horas</p>
          <div class="flex gap-4 justify-center flex-wrap md:flex-col md:items-center">
            <a :href="`tel:${lawyerData.phone}`" class="inline-flex items-center gap-2 px-8 py-4 md:px-6 md:py-3 rounded-full no-underline font-semibold transition-all duration-300 bg-[#E1B46A] text-[#1a2e1f] hover:bg-[#F4D03F] hover:-translate-y-0.5 md:w-full md:max-w-[300px] md:justify-center">
              📞 Ligar Agora
            </a>
            <a :href="`mailto:${lawyerData.email}`" class="inline-flex items-center gap-2 px-8 py-4 md:px-6 md:py-3 rounded-full no-underline font-semibold transition-all duration-300 bg-[#1a2e1f] text-[#E1B46A] border border-[#E1B46A] hover:bg-[#E1B46A] hover:text-[#1a2e1f] hover:-translate-y-0.5 md:w-full md:max-w-[300px] md:justify-center">
              ✉️ Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { lawyerData } from '../data/mockData.js'
import { useForm } from '../composables/useForm.js'

export default {
  name: 'Contact',
  setup() {
    const initialForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false
    }

    const { form, isSubmitting, resetForm, submitForm: handleSubmit } = useForm(initialForm)

    const submitForm = async () => {
      await handleSubmit(async (formData) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log('Formulário enviado:', formData)
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        resetForm()
      })
    }

    return {
      form,
      isSubmitting,
      submitForm
    }
  },
  data() {
    return {
      lawyerData
    }
  }
}
</script>
