<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const isOpen = ref(false)
const router = useRouter()
const userStore = useUserStore()

function toggleSidebar() {
  isOpen.value = !isOpen.value
}

function navigate(path) {
  router.push(path)
  isOpen.value = false
}

function logout() {
  userStore.clearUser()
  router.push('/account')
}
</script>

<template>
  <aside :class="['sidebar', { open: isOpen }]">
    <div class="sidebar-header">Dashboard</div>

    <nav class="sidebar-nav">
      <ul>
        <li @click="navigate('/')">
            <i class="mdi mdi-home"></i>
            Accueil</li>
        <li @click="navigate('/users')">
            <i class="mdi mdi-history"></i>
            Historiques</li>
      </ul>

      <div class="sidebar-action">
        <button @click="logout">Déconnexion</button>
      </div>
    </nav>
  </aside>

  <!-- Bouton hamburger visible seulement sur mobile -->
  <button class="hamburger" @click="toggleSidebar">☰</button>
</template>

<style scoped>
/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: -250px; /* cachée par défaut (mobile) */
  height: 100%;
  transition: left 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}
.sidebar.open {
  left: 0;
}

.sidebar-header {
  padding: 20px;
  font-weight: bold;
  font-size: 1.2em;
  border-bottom: 1px solid #ddd;
}
.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar-nav li {
  padding: 15px 20px;
  cursor: pointer;
  transition: background 0.2s;
}
.sidebar-nav li:hover {
  background-color: #f0f0f0;
}
.sidebar-action {
  padding: 20px;
  border-top: 1px solid #ddd;
}
.sidebar-action button {
  width: 100%;
  padding: 10px;
  background: linear-gradient(90deg, #7B2CBF, #3C096C);
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
}

/* Bouton hamburger (mobile seulement) */
.hamburger {
  position: fixed;
  top: 15px;
  left: 15px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

/* Desktop view */
@media (min-width: 768px) {
  .sidebar {
    left: 0; /* toujours visible */
  }
  .hamburger {
    display: none; /* caché sur desktop */
  }
}
</style>
