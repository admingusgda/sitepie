import { ref } from 'vue'

export function useCardRotation() {
  const rotatingCard = ref(null)
  const hoveredCard = ref(null)
  
  const rotateCard = (cardId) => {
    if (rotatingCard.value === cardId) {
      rotatingCard.value = null
    } else {
      rotatingCard.value = cardId
    }
  }
  
  const setHoveredCard = (cardId) => {
    hoveredCard.value = cardId
  }
  
  const clearHoveredCard = () => {
    hoveredCard.value = null
  }
  
  return {
    rotatingCard,
    hoveredCard,
    rotateCard,
    setHoveredCard,
    clearHoveredCard
  }
}
