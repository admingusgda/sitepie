<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Sobre Dra. Pietra Ribeiro</h2>
        <p>Conheça a trajetória e expertise da Dra. Pietra</p>
      </div>
      
      <div class="about-content">
        <div class="about-text" data-aos="fade-right">
          <div class="about-intro">
            <h3>Uma advogada dedicada à excelência</h3>
            <p>
              Com mais de 10 anos de experiência no mercado jurídico, a Dra. Pietra Ribeiro 
              se especializou em Direito Civil e Empresarial, oferecendo soluções jurídicas 
              inovadoras e eficazes para seus clientes.
            </p>
            <p>
              Sua abordagem combina conhecimento técnico sólido com uma visão estratégica, 
              sempre priorizando os melhores interesses de quem confia em seus serviços.
            </p>
          </div>
          
          <div class="about-values">
            <h4>Nossos Valores</h4>
            <div class="values-grid">
              <div class="value-item" data-aos="fade-up" data-aos-delay="100">
                <div class="value-icon">🎯</div>
                <h5>Excelência</h5>
                <p>Compromisso com a qualidade e resultados excepcionais</p>
              </div>
              <div class="value-item" data-aos="fade-up" data-aos-delay="200">
                <div class="value-icon">🤝</div>
                <h5>Confiança</h5>
                <p>Relacionamento transparente e baseado na confiança mútua</p>
              </div>
              <div class="value-item" data-aos="fade-up" data-aos-delay="300">
                <div class="value-icon">⚡</div>
                <h5>Agilidade</h5>
                <p>Respostas rápidas e soluções eficientes para seus casos</p>
              </div>
              <div class="value-item" data-aos="fade-up" data-aos-delay="400">
                <div class="value-icon">💡</div>
                <h5>Inovação</h5>
                <p>Abordagens modernas e estratégias inovadoras</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-education" data-aos="fade-left">
          <h4>Formação Acadêmica</h4>
          <div class="education-timeline">
            <div 
              v-for="(edu, index) in education" 
              :key="index"
              class="timeline-item"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h5>{{ edu.degree }}</h5>
                <p class="institution">{{ edu.institution }}</p>
                <span class="year">{{ edu.year }}</span>
              </div>
            </div>
          </div>
          
          <div class="certifications">
            <h4>Certificações</h4>
            <ul>
              <li v-for="(cert, index) in certifications" :key="index">
                <span class="cert-icon">✓</span>
                {{ cert }}
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

<style scoped>
.about {
  padding: var(--section-padding);
  background: var(--color-background-alt);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-intro h3 {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.about-intro p {
  font-size: var(--font-size-lg);
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.about-values {
  margin-top: 3rem;
}

.about-values h4 {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.value-item {
  background: var(--color-secondary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  border: 1px solid var(--color-border);
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.value-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.value-item h5 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.value-item p {
  font-size: var(--font-size-base);
  color: var(--color-text);
  line-height: 1.5;
}

.about-education {
  background: var(--color-secondary);
  padding: 2.5rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
}

.about-education h4 {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.education-timeline {
  position: relative;
  margin-bottom: 3rem;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: 12px;
  top: 8px;
  width: 16px;
  height: 16px;
  background: var(--color-border);
  border-radius: 50%;
  border: 4px solid var(--color-secondary);
  box-shadow: 0 0 0 4px var(--color-border);
}

.timeline-content h5 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.institution {
  color: var(--color-text);
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-xs);
}

.year {
  background: var(--color-primary);
  color: var(--color-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-round);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.certifications h4 {
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
}

.certifications ul {
  list-style: none;
  padding: 0;
}

.certifications li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
}

.certifications li:last-child {
  border-bottom: none;
}

.cert-icon {
  color: var(--color-primary);
  font-weight: bold;
  font-size: var(--font-size-lg);
}

@media (max-width: 768px) {
  .about {
    padding: var(--spacing-lg) 0;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .about-intro h3 {
    font-size: var(--font-size-2xl);
  }

  .about-intro p {
    font-size: var(--font-size-base);
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .value-item {
    padding: var(--spacing-sm);
  }

  .value-icon {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-xs);
  }
  
  .about-education {
    padding: var(--spacing-sm);
  }

  .about-education h4 {
    font-size: var(--font-size-xl);
  }

  .timeline-content h5 {
    font-size: var(--font-size-base);
  }

  .about-values {
    margin-top: var(--spacing-lg);
  }

  .about-values h4 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-md);
  }

  .education-timeline {
    margin-bottom: var(--spacing-lg);
  }

  .timeline-item {
    padding-left: 2.5rem;
    margin-bottom: var(--spacing-md);
  }
}
</style>
