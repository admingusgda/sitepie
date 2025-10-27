import { ref } from 'vue'

export function useForm(initialForm = {}) {
  const form = ref({ ...initialForm })
  const isSubmitting = ref(false)
  
  const resetForm = () => {
    form.value = { ...initialForm }
    isSubmitting.value = false
  }
  
  const submitForm = async (submitFn) => {
    isSubmitting.value = true
    
    try {
      await submitFn(form.value)
    } finally {
      isSubmitting.value = false
    }
  }
  
  return {
    form,
    isSubmitting,
    resetForm,
    submitForm
  }
}
