<script setup>
import { ref, onMounted } from 'vue'

const showPopup = ref(false)

onMounted(() => {
  // Vérifie si l'utilisateur a déjà fermé le popup
  const cookieAccepted = localStorage.getItem('cookie-popup-closed')
  if (!cookieAccepted) {
    showPopup.value = true
  }
})

const closePopup = () => {
  localStorage.setItem('cookie-popup-closed', 'true')
  showPopup.value = false
}
</script>

<template>
  <div v-if="showPopup" class="cookie-popup">
    <p>
      Ce site utilise des cookies pour améliorer votre expérience.  
    </p>
    <button @click="closePopup">OK</button>
  </div>
</template>

<style scoped>
.cookie-popup {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #3C096C;
  color: #fff;
  padding: 15px 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  max-width: 500px;
  z-index: 1000;
}

.cookie-popup p {
  margin: 0;
  font-size: 14px;
}

.cookie-popup button {
  background: #7B2CBF;
  border: none;
  color: #fff;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cookie-popup button:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
</style>
