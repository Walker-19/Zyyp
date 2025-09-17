<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Liens de navigation dynamiques
const links = ref([
  { name: 'Accueil', path: '/' },
  { name: 'Roulez avec nous', path: '/drive' },
  { name: 'A propos', path: '/about' },
  { name: "Besoin d'aide", path: '/help' }
])

const Isfixed = ref(true)
let lastScroll = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  if (currentScroll > lastScroll) {
    Isfixed.value = true
  } else {
    Isfixed.value = false
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

// Mobile menu
const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header :class="{ fixed: Isfixed }">
    <nav>
      <div class="logo">Logo</div>

      <!-- Hamburger pour mobile -->
      <div class="hamburger" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Liens navigation -->
      <div class="links" :class="{ open: mobileMenuOpen }">
        <router-link 
          v-for="link in links" 
          :key="link.path" 
          :to="link.path"
          class="nav-link"
          @click="mobileMenuOpen = false"
        >
          {{ link.name }}
        </router-link>
      </div>

      <div class="cta">
          <router-link to="/account">
        <button class="btn-signup">
            <i class="mdi mdi-account"></i>
            Mon compte
        </button>
    </router-link>
        <button class="btn-download">
          <i class="mdi mdi-cellphone"></i>
          Télécharger l'application
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Navbar fixe */
header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffffcc;
  backdrop-filter: blur(15px);
  transition: all 0.5s;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
}

header {
  position: relative;
  width: 100%;
  height: 70px;
  background-color: #ffffff79;
  backdrop-filter: blur(10px);
  padding: 0 20px;
  border-bottom: 1px solid #eee;
}

/* Flex navbar */
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

/* Logo */
.logo {
  font-weight: bold;
  color: #000000;
  font-size: 20px;
}

/* Liens de navigation */
.links {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Mobile menu - hidden par défaut */
.links.open {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-link {
  text-decoration: none;
  color: #000000;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.3s, transform 0.3s;
  padding: 10px 20px;
}

.nav-link:hover {
  color: #FFD700;
  transform: scale(1.05);
}

/* Hamburger menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #000;
  border-radius: 2px;
}

/* CTA Buttons */
.cta {
  display: flex;
  align-items: center;
  gap: 10px;
}

button {
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #3C096C, #31263E);
  display: flex;
    align-items: center;
    gap: 8px;
}
button i {
 font-size: 20px;
    color: #fff;
}


/* Responsive */
@media (max-width: 768px) {
    header {
        background-color: #ffffff;
    }
  .links {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .cta {
    display: none;
  }
}
</style>
