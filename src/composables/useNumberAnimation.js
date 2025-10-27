import { ref, onMounted } from 'vue'

export function useNumberAnimation() {
  const animatedNumbers = ref({})
  const hasAnimated = ref(false)
  
  const observeElements = (elementSelector, callback) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true
          callback()
        }
      })
    }, { threshold: 0.5 })
    
    const elements = document.querySelectorAll(elementSelector)
    elements.forEach(element => observer.observe(element))
  }
  
  const animateNumber = (index, target, suffix = '') => {
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
      animatedNumbers.value[index] = Math.floor(current) + suffix
    }, duration / steps)
  }
  
  const animateNumbers = (items) => {
    items.forEach((item, index) => {
      const targetNumber = item.number.replace(/[^\d]/g, '')
      const suffix = item.number.replace(/[\d]/g, '')
      
      if (targetNumber) {
        animateNumber(index, parseInt(targetNumber), suffix)
      } else {
        animatedNumbers.value[index] = item.number
      }
    })
  }
  
  return {
    animatedNumbers,
    hasAnimated,
    observeElements,
    animateNumbers
  }
}
