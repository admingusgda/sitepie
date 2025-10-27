import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useSlider(items, autoSlideInterval = 5000) {
  const currentSlide = ref(0)
  const intervalId = ref(null)
  
  const nextSlide = () => {
    if (currentSlide.value < items.length - 1) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }
  
  const previousSlide = () => {
    if (currentSlide.value > 0) {
      currentSlide.value--
    } else {
      currentSlide.value = items.length - 1
    }
  }
  
  const goToSlide = (index) => {
    currentSlide.value = index
  }
  
  const startAutoSlide = () => {
    intervalId.value = setInterval(() => {
      nextSlide()
    }, autoSlideInterval)
  }
  
  const stopAutoSlide = () => {
    if (intervalId.value) {
      clearInterval(intervalId.value)
    }
  }
  
  onMounted(() => {
    startAutoSlide()
  })
  
  onBeforeUnmount(() => {
    stopAutoSlide()
  })
  
  return {
    currentSlide,
    nextSlide,
    previousSlide,
    goToSlide,
    startAutoSlide,
    stopAutoSlide
  }
}
