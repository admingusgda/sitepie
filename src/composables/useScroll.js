import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScroll() {
  const isScrolled = ref(false)
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  const scrollToElement = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return {
    isScrolled,
    scrollToElement
  }
}
