// stores/user.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // Objet user pour stocker toutes les infos
  const user = ref<{
    id: number | null,
    name: string,
    email: string,
    role: string
  }>({
    id: null,
    name: '',
    email: '',
    role: ''
  })

  // Fonction pour mettre à jour toutes les infos
  function setUser(data: {id?: number, name: string, email: string }) {
    user.value = { ...user.value, ...data }
  }

  // Fonction pour vider le store (logout)
  function clearUser() {
    user.value = {
      id: null,
      name: '',
      email: '',
      role: ''
    }
  }

  return { user, setUser, clearUser }
})
