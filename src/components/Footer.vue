<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-brand">
            <h3>Dra. Pietra Ribeiro</h3>
            <p>Advocacia</p>
          </div>
          <p class="footer-description">
            Oferecendo serviços jurídicos especializados com excelência e dedicação há mais de 10 anos.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="LinkedIn">
              <span>💼</span>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <span>📷</span>
            </a>
            <a href="#" class="social-link" aria-label="WhatsApp">
              <span>💬</span>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Serviços</h4>
          <ul class="footer-links">
            <li><a href="#services">Direito Civil</a></li>
            <li><a href="#services">Direito Empresarial</a></li>
            <li><a href="#services">Direito do Consumidor</a></li>
            <li><a href="#services">Consultoria Jurídica</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Links Úteis</h4>
          <ul class="footer-links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Contato</h4>
          <div class="footer-contact">
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span>{{ lawyerData.phone }}</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span>{{ lawyerData.email }}</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>{{ lawyerData.address }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; {{ currentYear }} Dra. Pietra Ribeiro Advocacia. Todos os direitos reservados.</p>
          <p class="oab-info">OAB/SP 123.456</p>
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

<style scoped>
.footer {
  background: var(--color-background);
  color: white;
  padding: var(--spacing-2xl) 0 var(--spacing-sm);
  border-top: 1px solid var(--color-border);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.footer-section p {
  color: var(--color-text);
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
}

.footer-brand p {
  color: #E8D5B7;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.footer-description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-secondary);
  border-radius: 50%;
  text-decoration: none;
  transition: all var(--transition-base);
  border: 1px solid var(--color-border);
}

.social-link:hover {
  background: var(--color-primary);
  transform: translateY(-2px);
}

.social-link span {
  font-size: 1.2rem;
}

.footer-section h4 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--color-text);
  text-decoration: none;
  transition: color var(--transition-base);
  font-size: var(--font-size-base);
}

.footer-links a:hover {
  color: var(--color-primary);
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: var(--font-size-base);
  color: var(--color-text);
}

.contact-icon {
  font-size: 1rem;
  width: 20px;
  text-align: center;
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding-top: var(--spacing-lg);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom-content p {
  color: var(--color-text);
  font-size: var(--font-size-base);
  margin: 0;
}

.oab-info {
  color: var(--color-primary) !important;
  font-weight: 600;
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-lg) 0 var(--spacing-sm);
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-social {
    justify-content: center;
  }
}
</style>
