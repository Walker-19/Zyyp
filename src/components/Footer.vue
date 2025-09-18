<script setup lang="ts">
import { ref } from 'vue'

// Exemple de sections dynamiques
const sections = ref([
  {
    title: 'Zypp',
    links: [
      { name: 'À propos', path: '/about' }
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Roulez avec nous', path: '/drive' },
      { name: 'Aide', path: '/help' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact', path: '/help' },
      { name: 'FAQ', path: '/help' },
      { name: 'Assistance', path: '/help' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { name: 'Confidentialité', path: '/' },
      { name: 'Conditions', path: '/' },
    ],
  },
])

// Onglets ouverts sur mobile
const openTab = ref<number | null>(null)

const toggleTab = (index: number) => {
  openTab.value = openTab.value === index ? null : index
}
</script>

<template>
  <footer class="footer">
    <div class="footer-grid">
      <!-- Section -->
      <div v-for="(section, index) in sections" :key="section.title" class="footer-section">
        <!-- Titre cliquable en mobile -->
        <h3 class="footer-title" @click="toggleTab(index)">
          {{ section.title }}
          <span class="arrow" v-if="openTab === index">▲</span>
          <span class="arrow" v-else>▼</span>
        </h3>

        <!-- Liens -->
        <ul :class="['footer-links', { open: openTab === index }]">
          <li v-for="link in section.links" :key="link.path">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Zypp. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
width: 100%;
  box-sizing: border-box;
  background: #913BC4;
  color: white;
  padding: 40px 20px 20px;
}

/* Layout desktop */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* Section */
.footer-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #FFD700;
}

/* Partie du bas */
.footer-bottom {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: #aaa;
}
.arrow {
    display: none;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .footer-grid {
    display: flex;
    flex-direction: column;
  }

  .footer-links {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }

  .footer-links.open {
    max-height: 500px; /* assez grand pour contenir les liens */
  }

  .arrow {
    display: inline;
    font-size: 12px;
    margin-left: 10px;
  }
}
</style>
