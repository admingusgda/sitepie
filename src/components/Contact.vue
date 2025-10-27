<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Entre em Contato</h2>
        <p>Estamos prontos para ajudar com suas questões jurídicas</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info" data-aos="fade-right">
          <div class="contact-card">
            <h3>Informações de Contato</h3>
            <p>Entre em contato conosco através dos canais abaixo ou preencha o formulário ao lado.</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-content">
                  <h4>Telefone</h4>
                  <p>{{ lawyerData.phone }}</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">✉️</div>
                <div class="method-content">
                  <h4>E-mail</h4>
                  <p>{{ lawyerData.email }}</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">📍</div>
                <div class="method-content">
                  <h4>Endereço</h4>
                  <p>{{ lawyerData.address }}</p>
                </div>
              </div>
            </div>
            
            <div class="contact-hours">
              <h4>Horário de Atendimento</h4>
              <div class="hours-list">
                <div class="hour-item">
                  <span>Segunda - Sexta:</span>
                  <span>8h às 18h</span>
                </div>
                <div class="hour-item">
                  <span>Sábado:</span>
                  <span>8h às 12h</span>
                </div>
                <div class="hour-item">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container" data-aos="fade-left">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                placeholder="Seu nome completo"
              />
            </div>
            
            <div class="form-group">
              <label for="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                placeholder="seu@email.com"
              />
            </div>
            
            <div class="form-group">
              <label for="phone">Telefone</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone" 
                placeholder="(11) 99999-9999"
              />
            </div>
            
            <div class="form-group">
              <label for="subject">Assunto</label>
              <select id="subject" v-model="form.subject" required>
                <option value="">Selecione o assunto</option>
                <option value="consulta">Consulta Jurídica</option>
                <option value="contrato">Contratos</option>
                <option value="empresarial">Direito Empresarial</option>
                <option value="consumidor">Direito do Consumidor</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Mensagem</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required
                rows="5"
                placeholder="Descreva brevemente sua situação ou dúvida..."
              ></textarea>
            </div>
            
            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input 
                  type="checkbox" 
                  v-model="form.consent" 
                  required
                />
                <span class="checkmark"></span>
                Concordo com o tratamento dos meus dados pessoais conforme a LGPD
              </label>
            </div>
            
            <button 
              type="submit" 
              class="submit-btn"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Enviar Mensagem</span>
              <span v-else>Enviando...</span>
            </button>
          </form>
        </div>
      </div>
      
      <div class="contact-cta" data-aos="fade-up">
        <div class="cta-content">
          <h3>Precisa de uma consulta urgente?</h3>
          <p>Entre em contato agora mesmo e receba uma resposta em até 24 horas</p>
          <div class="cta-buttons">
            <a :href="`tel:${lawyerData.phone}`" class="btn-phone">
              📞 Ligar Agora
            </a>
            <a :href="`mailto:${lawyerData.email}`" class="btn-email">
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

<style scoped>
.contact {
  padding: var(--section-padding);
  background: var(--color-background);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-card {
  background: var(--color-secondary);
  border-radius: var(--border-radius-lg);
  padding: 2.5rem;
  height: fit-content;
  border: 1px solid var(--color-border);
}

.contact-card h3 {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.contact-card p {
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #E1B46A;
}

.contact-method:last-child {
  border-bottom: none;
}

.method-icon {
  font-size: var(--font-size-2xl);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  border-radius: 50%;
  color: var(--color-secondary);
}

.method-content h4 {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.method-content p {
  color: var(--color-text);
  font-size: var(--font-size-base);
  margin: 0;
}

.contact-hours h4 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hour-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #E1B46A;
}

.hour-item:last-child {
  border-bottom: none;
}

.hour-item span:first-child {
  color: #E8D5B7;
  font-weight: 500;
}

.hour-item span:last-child {
  color: #E1B46A;
  font-weight: 600;
}

.contact-form {
  background: var(--color-secondary);
  border-radius: var(--border-radius-lg);
  padding: 2.5rem;
  border: 1px solid var(--color-border);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group label {
  display: block;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem var(--spacing-sm);
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-base);
  background: var(--color-background);
  color: var(--color-text);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(225, 180, 106, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #E8D5B7;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  margin: 0;
}

.submit-btn {
  width: 100%;
  background: var(--color-primary);
  color: var(--color-secondary);
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
}

.submit-btn:hover:not(:disabled) {
  background: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.contact-cta {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-background) 100%);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-2xl);
  text-align: center;
  color: white;
  border: 1px solid var(--color-border);
}

.cta-content h3 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.cta-content p {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-phone,
.btn-email {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-phone {
  background: var(--color-primary);
  color: var(--color-secondary);
}

.btn-phone:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

.btn-email {
  background: var(--color-secondary);
  color: var(--color-primary);
  border: 1px solid var(--color-border);
}

.btn-email:hover {
  background: var(--color-primary);
  color: var(--color-secondary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .contact-card,
  .contact-form {
    padding: var(--spacing-lg);
  }
  
  .contact-cta {
    padding: var(--spacing-lg);
  }
  
  .cta-content h3 {
    font-size: var(--font-size-2xl);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-phone,
  .btn-email {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
