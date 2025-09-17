<script lang="ts" setup>

import { onMounted, onUnmounted, ref } from 'vue'

// Liens de navigation dynamiques

const links = ref([

  { name: 'Accueil', path: '/' },

  { name: 'Roulez avec nous', path: '/drive' },
  {name: 'Tarifs', path: '/tarif'},

  { name: 'A propos', path: '/about' },

  { name: "Besoin d'aide ?", path: '/help' }

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

      <!-- Bloc Desktop -->

      <div class="nav-desktop">

        <div class="links">

          <router-link 

            v-for="link in links" 

            :key="link.path" 

            :to="link.path"

            class="nav-link"

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

      </div>

      <!-- Bloc Mobile plein écran -->

      <div class="mobile-menu" :class="{ open: mobileMenuOpen }">

        <div class="close-btn" @click="mobileMenuOpen = false">✕</div>

        <div class="links">

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

        <div class="cta-mobile">

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

      </div>

    </nav>

  </header>

</template>

<style scoped>

/* Navbar fixe */

.fixed {

  position: fixed;

  top: 0;

  left: 0;

  background-color: #ffffff;

  backdrop-filter: blur(15px);

  transition: all 0.5s;
  z-index: 1000;
  border-bottom: 1px solid #ddd;

  z-index: 1000;

}

header {

  position: relative;
  z-index: 1000;
  width: 100%;

  height: 70px;

  background-color: #ffffff;

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

/* Bloc desktop */

.nav-desktop {

  display: flex;

  align-items: center;

  gap: 30px;

}

/* Liens navigation */

.links {

  display: flex;

  align-items: center;

  gap: 20px;

}

.nav-link {

  text-decoration: none;

  color: #000000;

  font-weight: 600;

  font-size: 18px;

  transition: color 0.3s, transform 0.3s;

  padding: 12px 20px;

}

.nav-link:hover {

  color: #FFD700;

  transform: scale(1.05);

}

/* CTA Buttons */

.cta, .cta-mobile {

  display: flex;

  align-items: center;

  gap: 10px;

}

button {

  border: none;

  padding: 10px 18px;

  border-radius: 6px;

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

/* Menu mobile plein écran */

.mobile-menu {

  display: none;

}

.mobile-menu.open {

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  position: fixed;

  top: 0;

  left: 0;

  height: 100vh;

  width: 100%;

  background: #fff;

  padding: 40px 20px;

  z-index: 2000;

  animation: slideIn 0.3s ease forwards;

}

@keyframes slideIn {

  from { transform: translateX(100%); }

  to { transform: translateX(0); }

}

/* Close button */

.close-btn {

  align-self: flex-end;

  font-size: 28px;

  font-weight: bold;

  cursor: pointer;

}

/* Liens dans mobile */

.mobile-menu .links {

  display: flex;

  flex-direction: column;

  gap: 20px;

}

.mobile-menu .nav-link {

  font-size: 20px;

  font-weight: bold;

}

/* CTA en bas */

.cta-mobile {

  flex-direction: column;

  gap: 15px;

  width: 100%;

}

.cta-mobile button {

  width: max-content;

}

/* Responsive */

@media (max-width: 768px) {

  .nav-desktop {

    display: none;

  }

  .hamburger {

    display: flex;

  }

}

</style>