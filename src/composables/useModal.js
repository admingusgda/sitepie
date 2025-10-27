import { ref } from 'vue'

export function useModal() {
  const isOpen = ref(false)
  const selectedItem = ref(null)
  
  const openModal = (item) => {
    selectedItem.value = item
    isOpen.value = true
    document.body.style.overflow = 'hidden'
  }
  
  const closeModal = () => {
    isOpen.value = false
    selectedItem.value = null
    document.body.style.overflow = 'auto'
  }
  
  return {
    isOpen,
    selectedItem,
    openModal,
    closeModal
  }
}
